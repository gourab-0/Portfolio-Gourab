
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{
    id: '1',
    content: "Hi! I'm Gourab Ghosh. The chat feature is currently disabled for security reasons. Please use the contact form below to get in touch!",
    role: 'assistant',
    timestamp: new Date()
  }]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    toast({
      title: "Feature Temporarily Disabled",
      description: "Chat functionality is currently disabled for security reasons. Please use the contact form to reach out!",
      variant: "destructive"
    });

    setInputMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && <Button onClick={() => setIsOpen(true)} className="h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
            <MessageCircle className="h-6 w-6" />
          </Button>}
      </div>

      {/* Chat Window */}
      {isOpen && <div className="fixed bottom-6 right-6 z-50 w-80 h-96 bg-gray-900 border border-gray-700 rounded-lg shadow-xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-yellow-400" />
              <span className="text-white font-medium">Chat Disabled</span>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map(message => <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[70%] p-3 rounded-lg ${message.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-100'}`}>
                  <div className="flex items-start space-x-2">
                    {message.role === 'assistant' && <Bot className="h-4 w-4 mt-0.5 text-blue-400 flex-shrink-0" />}
                    {message.role === 'user' && <User className="h-4 w-4 mt-0.5 text-white flex-shrink-0" />}
                    <span className="text-sm">{message.content}</span>
                  </div>
                </div>
              </div>)}
            <div ref={messagesEndRef} />
          </div>

          {/* Input - Disabled */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex space-x-2">
              <Input 
                value={inputMessage} 
                onChange={e => setInputMessage(e.target.value)} 
                onKeyPress={handleKeyPress} 
                placeholder="Chat disabled - use contact form..." 
                className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-400" 
                disabled={true}
              />
              <Button onClick={sendMessage} disabled={true} className="bg-gray-600 cursor-not-allowed">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-yellow-400 mt-2 flex items-center">
              <AlertTriangle className="h-3 w-3 mr-1" />
              Use the contact form for secure communication
            </p>
          </div>
        </div>}
    </>;
};

export default ChatBot;
