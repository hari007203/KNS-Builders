import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageSquare, Clock, CheckCircle2 } from 'lucide-react';
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
    <section id="contact" className="py-24 sm:py-32 bg-[#0C1017] relative overflow-hidden border-t border-gold/10">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#C6A46A_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.035] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[10px] sm:text-xs text-gold tracking-[0.25em] uppercase font-medium">
              INDEX 10 // DIRECT CONSULTATION DESK
            </span>
            <div className="h-px bg-gold/20 w-12 sm:w-20" />
            <span className="text-[10px] font-mono text-silver/60 tracking-wider">FOUNDER OVERSIGHT</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline">
            <div className="lg:col-span-7">
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ivory font-light leading-[1.15] tracking-tight">
                Connect with KNS. <br />
                <span className="gold-gradient-text italic font-normal">Let’s Discuss Your Dream Project.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-silver text-sm sm:text-base font-light leading-relaxed border-l border-gold/25 pl-4 sm:pl-6">
                Speak directly with Kiran Gajbhare for on-site visits in Kondapur, Pocharam villa plots, architectural blueprints, or turnkey construction estimates.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Contact Details & Direct Actions (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Phone Lines */}
            <div className="p-6 bg-[#121720] border border-gold/25 space-y-4 shadow-2xl">
              <span className="text-[10px] uppercase tracking-widest text-gold font-mono block">
                DIRECT TELEPHONE LINES:
              </span>
              <div className="space-y-3">
                <a
                  href={`tel:${BRAND_INFO.primaryPhone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-between p-3.5 bg-[#0E131A] hover:bg-gold hover:text-navy transition-colors border border-white/5 group touch-manipulation min-h-[48px]"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-gold group-hover:text-navy transition-colors shrink-0" />
                    <div>
                      <span className="font-mono text-sm sm:text-base font-bold block">{BRAND_INFO.primaryPhone}</span>
                      <span className="text-[10px] text-silver group-hover:text-navy/80 block uppercase font-mono">Principal Line</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono uppercase font-semibold">Call Now</span>
                </a>

                <a
                  href={`tel:${BRAND_INFO.secondaryPhone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-between p-3.5 bg-[#0E131A] hover:bg-gold hover:text-navy transition-colors border border-white/5 group touch-manipulation min-h-[48px]"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-gold group-hover:text-navy transition-colors shrink-0" />
                    <div>
                      <span className="font-mono text-sm sm:text-base font-bold block">{BRAND_INFO.secondaryPhone}</span>
                      <span className="text-[10px] text-silver group-hover:text-navy/80 block uppercase font-mono">Secondary Helpline</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono uppercase font-semibold">Call Now</span>
                </a>
              </div>
            </div>

            {/* Email & WhatsApp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="p-5 bg-[#121720] border border-white/5 hover:border-gold/40 transition-colors space-y-2 block touch-manipulation min-h-[48px]"
              >
                <div className="w-8 h-8 bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-silver/60 block font-mono">Email Inquiries</span>
                <span className="text-xs text-ivory font-mono break-all">{BRAND_INFO.email}</span>
              </a>

              <button
                onClick={handleWhatsAppDirect}
                className="p-5 bg-[#121720] border border-emerald-500/30 hover:border-emerald-500 transition-colors space-y-2 text-left cursor-pointer touch-manipulation min-h-[48px]"
              >
                <div className="w-8 h-8 bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-emerald-400 block font-mono">Direct WhatsApp</span>
                <span className="text-xs text-ivory font-mono">Instant Query</span>
              </button>
            </div>

            {/* Office Address */}
            <div className="p-6 bg-[#121720] border border-gold/25 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-gold font-mono block">
                    REGISTERED OFFICE & PRACTICE
                  </span>
                  <p className="text-xs sm:text-sm text-ivory font-medium leading-relaxed">
                    {BRAND_INFO.officeAddress}
                  </p>
                  <span className="text-xs text-silver block">
                    Landmark: {BRAND_INFO.landmark}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-silver/80 pt-1 font-mono">
                    <Clock className="w-3.5 h-3.5 text-gold" />
                    <span>{BRAND_INFO.operatingHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="border border-gold/25 h-48 bg-black">
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
          </motion.div>

          {/* Detailed Project Dossier Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-[#121720] p-6 sm:p-10 border border-gold/30 shadow-2xl relative"
          >
            <div className="border-b border-gold/15 pb-4 mb-6">
              <span className="font-mono text-[10px] uppercase tracking-widest text-gold block mb-1">
                PROJECT TRANSMITTAL SHEET
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-ivory">
                Send a Detailed Project Enquiry
              </h3>
              <p className="text-silver text-xs sm:text-sm font-light mt-1">
                Share your structural scope below. Kiran Gajbhare and our civil engineering desk will evaluate your requirements.
              </p>
            </div>

            {submitSuccess && (
              <div className="mb-6 p-4 bg-emerald-950/80 border border-emerald-500/50 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-emerald-300 block font-mono">Enquiry Successfully Recorded</span>
                  <span className="text-emerald-200/90 block mt-0.5 font-light">
                    Your transmittal has been recorded in the KNS registry. Kiran Gajbhare will follow up directly.
                  </span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-silver/80 block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rameshwar Rao"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full bg-[#0E131A] border ${
                      errors.name ? 'border-red-500' : 'border-gold/25'
                    } text-ivory text-sm px-4 py-3 focus:outline-none focus:border-gold transition-colors min-h-[44px]`}
                  />
                  {errors.name && <span className="text-[11px] text-red-400 block">{errors.name}</span>}
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-silver/80 block">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98490 12345"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full bg-[#0E131A] border ${
                      errors.phone ? 'border-red-500' : 'border-gold/25'
                    } text-ivory text-sm px-4 py-3 focus:outline-none focus:border-gold transition-colors min-h-[44px]`}
                  />
                  {errors.phone && <span className="text-[11px] text-red-400 block">{errors.phone}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-silver/80 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. rameshwar@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full bg-[#0E131A] border ${
                      errors.email ? 'border-red-500' : 'border-gold/25'
                    } text-ivory text-sm px-4 py-3 focus:outline-none focus:border-gold transition-colors min-h-[44px]`}
                  />
                  {errors.email && <span className="text-[11px] text-red-400 block">{errors.email}</span>}
                </div>

                {/* Interested Service */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-silver/80 block">
                    Target Project / Service *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#0E131A] border border-gold/25 text-ivory text-sm px-4 py-3 focus:outline-none focus:border-gold transition-colors min-h-[44px]"
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Built-up area */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-silver/80 block">
                    Approx Built-Up Area (Sq.Ft)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 2400"
                    value={formData.builtUpArea}
                    onChange={(e) => setFormData({ ...formData, builtUpArea: e.target.value })}
                    className="w-full bg-[#0E131A] border border-gold/25 text-ivory text-sm px-4 py-3 focus:outline-none focus:border-gold transition-colors min-h-[44px]"
                  />
                </div>

                {/* Budget range */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-silver/80 block">
                    Estimated Budget Allocation
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. ₹60L - ₹80L"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#0E131A] border border-gold/25 text-ivory text-sm px-4 py-3 focus:outline-none focus:border-gold transition-colors min-h-[44px]"
                  />
                </div>
              </div>

              {/* Project details */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase tracking-widest text-silver/80 block">
                  Project Location & Specific Requirements *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Plot location, number of floors, soil condition, or bespoke design brief..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className={`w-full bg-[#0E131A] border ${
                    errors.details ? 'border-red-500' : 'border-gold/25'
                  } text-ivory text-sm px-4 py-3 focus:outline-none focus:border-gold transition-colors`}
                />
                {errors.details && <span className="text-[11px] text-red-400 block">{errors.details}</span>}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-gold hover:bg-gold-300 disabled:opacity-50 text-navy font-semibold text-xs font-mono uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer touch-manipulation min-h-[48px]"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Recording Transmittal...' : 'Submit Transmittal Sheet'}</span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
