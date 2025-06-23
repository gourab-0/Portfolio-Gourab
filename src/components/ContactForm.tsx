
import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await emailjs.send(
        'service_r7y25no', // service ID
        'template_1swguif', // template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Gourab Ghosh',
        },
        'b3Qvp_nEoXiaj6Xp5' // public key
      );

      console.log('Email sent successfully:', result);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('Failed to send email:', error);
      
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="perspective-1000">
      <form onSubmit={handleSubmit} className="card-3d bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <Input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="bg-gray-700/50 border-gray-600 text-white focus:border-blue-400 focus:ring-blue-400" 
              placeholder="Your Name" 
              required 
              disabled={isLoading}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <Input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="bg-gray-700/50 border-gray-600 text-white focus:border-blue-400 focus:ring-blue-400" 
              placeholder="your.email@example.com" 
              required 
              disabled={isLoading}
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
            Subject
          </label>
          <Input 
            type="text" 
            id="subject" 
            name="subject" 
            value={formData.subject} 
            onChange={handleChange} 
            className="bg-gray-700/50 border-gray-600 text-white focus:border-blue-400 focus:ring-blue-400" 
            placeholder="What's this about?" 
            required 
            disabled={isLoading}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message
          </label>
          <Textarea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            rows={5} 
            className="bg-gray-700/50 border-gray-600 text-white focus:border-blue-400 focus:ring-blue-400 resize-none" 
            placeholder="Tell me about your project..." 
            required 
            disabled={isLoading}
          />
        </div>

        <Button 
          type="submit" 
          size="lg" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          disabled={isLoading}
        >
          <Send className="h-5 w-5 mr-2" />
          {isLoading ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
