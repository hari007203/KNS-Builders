import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';
import { ClientEnquiry } from '../types';

interface ContactSectionProps {
  onNewEnquirySubmitted: (enquiry: ClientEnquiry) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNewEnquirySubmitted }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Residential Turnkey Construction',
    builtUpArea: '',
    budget: '',
    details: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your 10-digit phone number.';
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number.';
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.details.trim()) {
      errs.details = 'Please describe your project location and requirements.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Create authentic enquiry record
    const newEnquiry: ClientEnquiry = {
      id: `ENQ-${Date.now().toString().slice(-4)}`,
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim() || 'Not specified',
      service: formData.service,
      builtUpArea: formData.builtUpArea ? Number(formData.builtUpArea) : undefined,
      budget: formData.budget || 'To be discussed',
      details: formData.details.trim(),
      timestamp: new Date().toLocaleString(),
      status: 'New'
    };

    // Save to local storage
    try {
      const stored = localStorage.getItem('kns_enquiries');
      const enquiriesList: ClientEnquiry[] = stored ? JSON.parse(stored) : [];
      enquiriesList.unshift(newEnquiry);
      localStorage.setItem('kns_enquiries', JSON.stringify(enquiriesList));
    } catch (err) {
      console.error('Storage error:', err);
    }

    onNewEnquirySubmitted(newEnquiry);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'Residential Turnkey Construction',
        builtUpArea: '',
        budget: '',
        details: ''
      });
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello Kiran Sir, I am contacting you through the KNS Construction & Real Estate website to discuss a project.`;
    window.open(`https://wa.me/${BRAND_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-28 bg-[#12161E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-navy text-xs font-mono uppercase tracking-widest text-gold mb-3">
            Direct Builder Consultation
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-ivory font-light leading-tight">
            Connect with KNS. <br />
            <span className="gold-gradient-text italic font-normal">Let’s Discuss Your Dream Project.</span>
          </h2>
          <p className="text-silver text-sm sm:text-base mt-4 font-light">
            Speak directly with Kiran Gajbhare for site visits in Kondapur, Pocharam villa plots, architectural blueprints, or turnkey construction estimates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details & Direct Actions (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Phone Cards */}
            <div className="p-6 rounded-xl bg-charcoal border border-gold/20 space-y-4 shadow-xl">
              <span className="text-xs uppercase tracking-widest text-gold font-mono block">
                Direct Telephone Lines:
              </span>
              <div className="space-y-3">
                <a
                  href={`tel:${BRAND_INFO.primaryPhone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-between p-3.5 rounded-lg bg-navy hover:bg-gold hover:text-navy transition-all duration-300 border border-gold/20 group"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-gold group-hover:text-navy transition-colors" />
                    <div>
                      <span className="font-mono text-sm font-bold block">{BRAND_INFO.primaryPhone}</span>
                      <span className="text-[10px] text-silver group-hover:text-navy/80 block uppercase">Primary Business Line</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold uppercase">Call Now</span>
                </a>

                <a
                  href={`tel:${BRAND_INFO.secondaryPhone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-between p-3.5 rounded-lg bg-navy hover:bg-gold hover:text-navy transition-all duration-300 border border-gold/20 group"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-gold group-hover:text-navy transition-colors" />
                    <div>
                      <span className="font-mono text-sm font-bold block">{BRAND_INFO.secondaryPhone}</span>
                      <span className="text-[10px] text-silver group-hover:text-navy/80 block uppercase">Alternate Helpline</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold uppercase">Call Now</span>
                </a>
              </div>
            </div>

            {/* Email & WhatsApp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="p-5 rounded-xl bg-charcoal border border-gold/20 hover:border-gold/60 transition-colors space-y-2 block"
              >
                <div className="w-9 h-9 rounded-lg bg-navy border border-gold/30 flex items-center justify-center text-gold">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-[10px] uppercase tracking-wider text-silver block font-mono">Email Address</span>
                <span className="text-xs text-ivory font-medium break-all">{BRAND_INFO.email}</span>
              </a>

              <button
                onClick={handleWhatsAppDirect}
                className="p-5 rounded-xl bg-charcoal border border-emerald-500/30 hover:border-emerald-500 transition-colors space-y-2 text-left cursor-pointer"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <span className="text-[10px] uppercase tracking-wider text-emerald-400 block font-mono">WhatsApp Chat</span>
                <span className="text-xs text-ivory font-medium">Quick WhatsApp Query</span>
              </button>
            </div>

            {/* Office Address */}
            <div className="p-6 rounded-xl bg-charcoal border border-gold/20 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-widest text-gold font-mono block">Registered Office</span>
                  <p className="text-sm text-ivory font-medium leading-relaxed">
                    {BRAND_INFO.officeAddress}
                  </p>
                  <span className="text-xs text-silver block">
                    Landmark: {BRAND_INFO.landmark}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-silver pt-1">
                    <Clock className="w-3.5 h-3.5 text-gold" />
                    <span>{BRAND_INFO.operatingHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed of Kondapur Hyderabad */}
            <div className="rounded-xl overflow-hidden border border-gold/25 h-48 bg-navy-900 shadow-md">
              <iframe
                title="KNS Construction Location Kondapur Hyderabad"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15224.96541539247!2d78.3582496!3d17.472111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e87857beab%3A0x8c79215c0e6f30a9!2sRaghavendra%20Colony%2C%20Kondapur%2C%20Hyderabad%2C%20Telangana%20500084!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Detailed Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-10 rounded-2xl border border-gold/30 shadow-2xl relative">
            <h3 className="font-serif text-2xl sm:text-3xl text-ivory mb-2">
              Send a Detailed Project Enquiry
            </h3>
            <p className="text-silver text-xs sm:text-sm font-light mb-8">
              Fill in your specifications below. We will analyze your requirements and get back within 24 hours.
            </p>

            {submitSuccess && (
              <div className="mb-6 p-4 rounded-lg bg-emerald-950/80 border border-emerald-500/50 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-emerald-300 block">Enquiry Successfully Recorded!</span>
                  <span className="text-emerald-200/90 block mt-0.5">
                    Your details have been saved to the KNS client registry. Kiran Gajbhare and our civil engineering desk will review your inquiry shortly.
                  </span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-silver block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rameshwar Rao"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full bg-navy-800 border ${
                      errors.name ? 'border-red-500' : 'border-gold/30'
                    } text-ivory text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:border-gold transition-colors`}
                  />
                  {errors.name && <span className="text-[11px] text-red-400 block">{errors.name}</span>}
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-silver block">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98490 12345"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full bg-navy-800 border ${
                      errors.phone ? 'border-red-500' : 'border-gold/30'
                    } text-ivory text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:border-gold transition-colors`}
                  />
                  {errors.phone && <span className="text-[11px] text-red-400 block">{errors.phone}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-silver block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. rameshwar@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full bg-navy-800 border ${
                      errors.email ? 'border-red-500' : 'border-gold/30'
                    } text-ivory text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:border-gold transition-colors`}
                  />
                  {errors.email && <span className="text-[11px] text-red-400 block">{errors.email}</span>}
                </div>

                {/* Interested Service */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-silver block">
                    Interested Service / Project *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-navy-800 border border-gold/30 text-ivory text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="Residential Turnkey Construction">Residential Turnkey Construction</option>
                    <option value="KNS Villa Plotted Community (Pocharam)">KNS Villa Plotted Community (Pocharam)</option>
                    <option value="Raghavendra Residency 3BHK (Kondapur)">Raghavendra Residency 3BHK (Kondapur)</option>
                    <option value="Commercial Construction">Commercial Construction</option>
                    <option value="Architectural Planning & 3D Design">Architectural Planning & 3D Design</option>
                    <option value="Interior Design & Execution">Interior Design & Execution</option>
                    <option value="Real Estate Advisory">Real Estate Advisory</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Built-up area */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-silver block">
                    Approx Built-Up Area (Sq.Ft)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 2400"
                    value={formData.builtUpArea}
                    onChange={(e) => setFormData({ ...formData, builtUpArea: e.target.value })}
                    className="w-full bg-navy-800 border border-gold/30 text-ivory text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                {/* Budget range */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-silver block">
                    Estimated Budget Range
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. ₹60L - ₹80L"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-navy-800 border border-gold/30 text-ivory text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>

              {/* Project details */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-silver block">
                  Project Location & Specific Requirements *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your plot location, number of floors, timeline, or specific queries..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className={`w-full bg-navy-800 border ${
                    errors.details ? 'border-red-500' : 'border-gold/30'
                  } text-ivory text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:border-gold transition-colors`}
                />
                {errors.details && <span className="text-[11px] text-red-400 block">{errors.details}</span>}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gold hover:bg-gold-500 disabled:opacity-50 text-navy font-semibold text-xs uppercase tracking-widest rounded-lg transition-all duration-300 shadow-xl shadow-gold/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Recording Enquiry...' : 'Submit Project Enquiry'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
