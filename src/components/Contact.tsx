
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss your next project or just say hello
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold text-white mb-6">Let's Talk</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities and exciting projects. 
                Whether you're a company looking to hire, or you're a fellow developer who wants 
                to collaborate, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="bg-blue-600/20 p-3 rounded-lg group-hover:bg-blue-600/30 transition-colors duration-300">
                  <Mail className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="text-white font-medium">alex.johnson@email.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="bg-green-600/20 p-3 rounded-lg group-hover:bg-green-600/30 transition-colors duration-300">
                  <Phone className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Phone</div>
                  <div className="text-white font-medium">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="bg-purple-600/20 p-3 rounded-lg group-hover:bg-purple-600/30 transition-colors duration-300">
                  <MapPin className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Location</div>
                  <div className="text-white font-medium">San Francisco, CA</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-8">
              <a
                href="#"
                className="bg-gray-800/50 p-3 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <Github className="h-6 w-6 text-gray-400 hover:text-blue-400 transition-colors duration-300" />
              </a>
              <a
                href="#"
                className="bg-gray-800/50 p-3 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <Linkedin className="h-6 w-6 text-gray-400 hover:text-blue-400 transition-colors duration-300" />
              </a>
              <a
                href="#"
                className="bg-gray-800/50 p-3 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <Twitter className="h-6 w-6 text-gray-400 hover:text-blue-400 transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="perspective-1000">
            <form
              onSubmit={handleSubmit}
              className="card-3d bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 space-y-6"
            >
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
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
