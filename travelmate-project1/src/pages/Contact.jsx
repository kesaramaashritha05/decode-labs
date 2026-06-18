import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [btnText, setBtnText] = useState('Send Message');
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setBtnText('Sending...');
    
    setTimeout(() => {
      setIsSending(false);
      setBtnText('Message Sent!');
      e.target.reset();
      setTimeout(() => setBtnText('Send Message'), 3000);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-20 container">
      <div className="section-title">
        <h2>Get In Touch</h2>
        <p>Have questions? We're here to help you plan your next journey.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-8">
          <div className="contact-info-card">
            <div className="icon-box"><Phone /></div>
            <div>
              <h4 className="font-bold">Call Us</h4>
              <p className="text-slate-500">+1 (234) 567 890</p>
            </div>
          </div>
          <div className="contact-info-card">
            <div className="icon-box"><Mail /></div>
            <div>
              <h4 className="font-bold">Email Us</h4>
              <p className="text-slate-500">support@travelmate.com</p>
            </div>
          </div>
          <div className="contact-info-card">
            <div className="icon-box"><MapPin /></div>
            <div>
              <h4 className="font-bold">Our Office</h4>
              <p className="text-slate-500">123 Travel Lane, Explorer City</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="contact-form bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="form-group">
                <label className="block mb-2 font-semibold">Full Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label className="block mb-2 font-semibold">Email Address</label>
                <input type="email" placeholder="john@example.com" required />
              </div>
            </div>
            <div className="form-group mb-6">
              <label className="block mb-2 font-semibold">Subject</label>
              <input type="text" placeholder="How can we help?" required />
            </div>
            <div className="form-group mb-8">
              <label className="block mb-2 font-semibold">Message</label>
              <textarea rows="6" placeholder="Your message here..." required></textarea>
            </div>
            <button 
              type="submit" 
              disabled={isSending}
              className={`btn btn-primary w-full py-4 text-lg flex items-center justify-center gap-3 ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {btnText}
              <Send className="w-5 h-5" />
            </button>
          </motion.form>
        </div>
      </div>

      <style jsx>{`
        .contact-info-card {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          background: white;
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
        }
        .icon-box {
          width: 50px;
          height: 50px;
          background: var(--primary);
          color: white;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .contact-form input, .contact-form textarea {
          width: 100%;
          padding: 1rem;
          border: 1.5px solid #e2e8f0;
          border-radius: var(--radius-md);
          outline: none;
          transition: var(--transition);
        }
        .contact-form input:focus, .contact-form textarea:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
        }
      `}</style>
    </div>
  );
};

export default Contact;
