import React, { useState } from 'react';
import { Plane, Calendar, Users, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const TripPlanner = () => {
  const [formData, setFormData] = useState({
    destination: '',
    date: '',
    guests: '1',
    notes: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.destination) newErrors.destination = 'Please select a destination';
    if (!formData.date) newErrors.date = 'Please select a travel date';
    if (!formData.guests || formData.guests < 1) newErrors.guests = 'At least 1 guest';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-20 container text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-3xl shadow-xl max-w-2xl mx-auto"
        >
          <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Send className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Trip Plan Received!</h2>
          <p className="text-slate-600 mb-8">
            Thank you for sharing your travel plans for <strong>{formData.destination}</strong>. Our travel experts will review your request and get back to you within 24 hours.
          </p>
          <button onClick={() => setSubmitted(false)} className="btn btn-primary">Plan Another Trip</button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 container">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl font-bold mb-6">Smart Trip Planner</h2>
            <p className="text-slate-600 text-lg mb-8">
              Tell us about your dream trip and let our smart algorithm suggest the best itinerary, budget, and travel tips.
            </p>
            
            <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                        <MapPin className="text-primary" />
                    </div>
                    <div>
                        <h4 className="font-bold">Choose Any Destination</h4>
                        <p className="text-slate-500">Pick from our curated list of 500+ locations worldwide.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                        <Calendar className="text-primary" />
                    </div>
                    <div>
                        <h4 className="font-bold">Flexible Dates</h4>
                        <p className="text-slate-500">Plan around your schedule with our dynamic calendar.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                        <Users className="text-primary" />
                    </div>
                    <div>
                        <h4 className="font-bold">Group Customization</h4>
                        <p className="text-slate-500">Optimized for solo travelers, couples, or large groups.</p>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-1/2 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-100"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="form-group">
                <label className="block font-bold mb-2">Where do you want to go?</label>
                <div className="input-with-icon">
                    <MapPin className="icon" />
                    <input 
                        type="text" 
                        placeholder="e.g. Manali, Goa" 
                        className={errors.destination ? 'error' : ''}
                        value={formData.destination}
                        onChange={(e) => setFormData({...formData, destination: e.target.value})}
                    />
                </div>
                {errors.destination && <span className="error-text">{errors.destination}</span>}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-group">
                    <label className="block font-bold mb-2">Travel Date</label>
                    <div className="input-with-icon">
                        <Calendar className="icon" />
                        <input 
                            type="date" 
                            className={errors.date ? 'error' : ''}
                            value={formData.date}
                            onChange={(e) => setFormData({...formData, date: e.target.value})}
                        />
                    </div>
                    {errors.date && <span className="error-text">{errors.date}</span>}
                </div>
                <div className="form-group">
                    <label className="block font-bold mb-2">Travelers</label>
                    <div className="input-with-icon">
                        <Users className="icon" />
                        <input 
                            type="number" 
                            min="1" 
                            value={formData.guests}
                            onChange={(e) => setFormData({...formData, guests: e.target.value})}
                        />
                    </div>
                    {errors.guests && <span className="error-text">{errors.guests}</span>}
                </div>
              </div>

              <div className="form-group">
                <label className="block font-bold mb-2">Special Notes (Optional)</label>
                <textarea 
                    placeholder="Tell us about your preferences..." 
                    rows="4"
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-full py-4 text-lg">
                Generate My Itinerary
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .input-with-icon {
            position: relative;
            display: flex;
            align-items: center;
        }
        .input-with-icon .icon {
            position: absolute;
            left: 1rem;
            color: var(--text-muted);
            width: 1.25rem;
            height: 1.25rem;
        }
        input, textarea {
            width: 100%;
            padding: 0.875rem 1rem 0.875rem 3rem;
            border: 1.5px solid #e2e8f0;
            border-radius: var(--radius-md);
            font-size: 1rem;
            outline: none;
            transition: var(--transition);
        }
        textarea { padding-left: 1rem; }
        input:focus, textarea:focus {
            border-color: var(--primary);
            box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
        }
        input.error { border-color: #ef4444; }
        .error-text { color: #ef4444; font-size: 0.875rem; margin-top: 0.25rem; display: block; }
        .bg-green-100 { background-color: #dcfce7; }
        .text-green-500 { color: #22c55e; }
      `}</style>
    </div>
  );
};

export default TripPlanner;
