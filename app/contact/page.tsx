'use client';

import { PageHeader } from '@/components/ui/page-header';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import { toast } from 'sonner';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, formType: 'contact' }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      toast.success(data.message || 'Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'An error occurred while sending your message.');
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Page Header */}
      <PageHeader
        title="GET IN TOUCH"
        subtitle="Ready to start your next project? Reach out to our team for consultations, partnerships, or inquiries."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact', href: '/contact' },
        ]}
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop"
      />

      {/* Contact Section */}
      <section className="relative py-20 overflow-hidden bg-off-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #0D1B2A 1px, transparent 0)`,
              backgroundSize: '48px 48px',
            }}
          />
        </div>

        <div className="container-jil relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left - Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              {/* Address */}
              <ScrollReveal animation="fadeUp">
                <div className="p-6 rounded-xl bg-white/40 backdrop-blur-xl border border-white/60">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-industrial-gold/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-industrial-gold" />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm tracking-[0.1em] uppercase text-deep-navy mb-2">
                        Office Address
                      </h3>
                      <p className="text-steel-blue text-sm leading-relaxed">
                        {siteConfig.location.address}<br />
                        {siteConfig.location.city}<br />
                        {siteConfig.location.state}, {siteConfig.location.country}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Phone */}
              <ScrollReveal animation="fadeUp" delay={0.1}>
                <div className="p-6 rounded-xl bg-white/40 backdrop-blur-xl border border-white/60">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-industrial-gold/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-industrial-gold" />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm tracking-[0.1em] uppercase text-deep-navy mb-2">
                        Phone Number
                      </h3>
                      <p className="text-steel-blue text-sm leading-relaxed">
                        {siteConfig.contact.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Email */}
              <ScrollReveal animation="fadeUp" delay={0.2}>
                <div className="p-6 rounded-xl bg-white/40 backdrop-blur-xl border border-white/60">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-industrial-gold/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-industrial-gold" />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm tracking-[0.1em] uppercase text-deep-navy mb-2">
                        Email Address
                      </h3>
                      <p className="text-steel-blue text-sm leading-relaxed">
                        {siteConfig.contact.email}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right - Contact Form */}
            <div className="lg:col-span-2">
              <ScrollReveal animation="fadeUp" delay={0.1}>
                <div className="p-8 rounded-xl bg-white/40 backdrop-blur-xl border border-white/60">
                  <div className="mb-8">
                    <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold mb-4">
                      <span className="w-8 h-px bg-industrial-gold" />
                      Send us a message
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-light text-deep-navy">
                      Start Your Project Today
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <Label htmlFor="name" className="block font-heading text-xs tracking-[0.1em] uppercase text-deep-navy mb-2">
                          Full Name *
                        </Label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="h-auto px-5 py-3 bg-white border-steel-blue/20 rounded-xl text-deep-navy placeholder:text-mid-gray focus-visible:border-industrial-gold focus-visible:ring-0 focus-visible:ring-offset-0"
                          placeholder="John Doe"
                          required
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <Label htmlFor="email" className="block font-heading text-xs tracking-[0.1em] uppercase text-deep-navy mb-2">
                          Email Address *
                        </Label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="h-auto px-5 py-3 bg-white border-steel-blue/20 rounded-xl text-deep-navy placeholder:text-mid-gray focus-visible:border-industrial-gold focus-visible:ring-0 focus-visible:ring-offset-0"
                          placeholder="john@example.com"
                          required
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <Label htmlFor="phone" className="block font-heading text-xs tracking-[0.1em] uppercase text-deep-navy mb-2">
                          Phone Number
                        </Label>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="h-auto px-5 py-3 bg-white border-steel-blue/20 rounded-xl text-deep-navy placeholder:text-mid-gray focus-visible:border-industrial-gold focus-visible:ring-0 focus-visible:ring-offset-0"
                          placeholder="+234 XXX XXX XXXX"
                        />
                      </div>

                      {/* Company */}
                      <div>
                        <Label htmlFor="company" className="block font-heading text-xs tracking-[0.1em] uppercase text-deep-navy mb-2">
                          Company Name
                        </Label>
                        <Input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="h-auto px-5 py-3 bg-white border-steel-blue/20 rounded-xl text-deep-navy placeholder:text-mid-gray focus-visible:border-industrial-gold focus-visible:ring-0 focus-visible:ring-offset-0"
                          placeholder="Company Name"
                        />
                      </div>
                    </div>

                    {/* Service Interest */}
                    <div>
                      <Label htmlFor="service" className="block font-heading text-xs tracking-[0.1em] uppercase text-deep-navy mb-2">
                        Service Interest *
                      </Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => setFormData({ ...formData, service: value })}
                        required
                      >
                        <SelectTrigger className="w-full h-auto px-5 py-3 bg-white border-steel-blue/20 rounded-xl text-deep-navy data-[placeholder]:text-mid-gray focus-visible:border-industrial-gold focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border border-steel-blue/20 rounded-xl shadow-lg">
                          <SelectItem value="mining" className="text-deep-navy focus:bg-industrial-gold/10 focus:text-deep-navy cursor-pointer">Mining & Exploration</SelectItem>
                          <SelectItem value="agriculture" className="text-deep-navy focus:bg-industrial-gold/10 focus:text-deep-navy cursor-pointer">Agriculture</SelectItem>
                          <SelectItem value="construction" className="text-deep-navy focus:bg-industrial-gold/10 focus:text-deep-navy cursor-pointer">Construction</SelectItem>
                          <SelectItem value="solar" className="text-deep-navy focus:bg-industrial-gold/10 focus:text-deep-navy cursor-pointer">Solar & Renewable Energy</SelectItem>
                          <SelectItem value="oil-gas" className="text-deep-navy focus:bg-industrial-gold/10 focus:text-deep-navy cursor-pointer">Oil & Gas Services</SelectItem>
                          <SelectItem value="other" className="text-deep-navy focus:bg-industrial-gold/10 focus:text-deep-navy cursor-pointer">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message" className="block font-heading text-xs tracking-[0.1em] uppercase text-deep-navy mb-2">
                        Your Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="px-5 py-3 bg-white border-steel-blue/20 rounded-xl text-deep-navy placeholder:text-mid-gray focus-visible:border-industrial-gold focus-visible:ring-0 focus-visible:ring-offset-0 resize-none"
                        placeholder="Tell us about your project..."
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-industrial-gold text-near-black font-heading text-xs tracking-[0.1em] uppercase rounded-xl btn-animated relative z-1 overflow-hidden after:bg-steel-blue hover:text-off-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      {!isSubmitting && <Send className="w-4 h-4" />}
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-[500px] overflow-hidden">
        <iframe
          src="https://maps.google.com/maps?q=3FM2%2BF2C%2C+Aminu+Yaro%2C+Kado%2C+Abuja+900108%2C+Federal+Capital+Territory&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
