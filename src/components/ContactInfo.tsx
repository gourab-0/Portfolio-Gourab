
import { Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
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
          <div className="bg-green-600/20 p-3 rounded-lg group-hover:bg-green-600/30 transition-colors duration-300">
            <Phone className="h-6 w-6 text-green-400" />
          </div>
          <div>
            <div className="text-sm text-gray-400">Phone</div>
            <div className="text-white font-medium">+91 9730245315</div>
          </div>
        </div>

        <div className="flex items-center space-x-4 group">
          <div className="bg-purple-600/20 p-3 rounded-lg group-hover:bg-purple-600/30 transition-colors duration-300">
            <MapPin className="h-6 w-6 text-purple-400" />
          </div>
          <div>
            <div className="text-sm text-gray-400">Location</div>
            <div className="text-white font-medium">Mumbai, India</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
