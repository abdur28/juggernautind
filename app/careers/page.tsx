'use client';

import Image from 'next/image';
import { PageHeader } from '@/components/ui/page-header';
import { GoldDot } from '@/components/ui/gold-dot';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { Briefcase, Upload, ArrowRight } from 'lucide-react';
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

export default function CareersPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    gender: '',
    education: '',
    position: '',
    recentRole: '',
    message: '',
    cv: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        cv: e.target.files[0],
      });
    }
  };


  return (
    <>
      {/* Page Header */}
      <PageHeader
        title="BUILD YOUR FUTURE WITH US"
        subtitle="Join Nigeria's leading industrial services company and be part of our mission to drive sustainable growth across key sectors."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Careers', href: '/careers' },
        ]}
        backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2074&auto=format&fit=crop"
      />

      {/* Careers Mission Section - Content Left, Image Right */}
      <section className="relative py-14 overflow-hidden bg-white">
        <div className="container-jil relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Left - Content */}
            <div className="space-y-8 order-2 lg:order-1">
              {/* Header */}
              <ScrollReveal animation="fadeUp">
                <div className="space-y-4">
                  <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold">
                    <span className="w-8 h-px bg-industrial-gold" />
                    Careers
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-deep-navy leading-[2.5rem]">
                    BE PART OF
                    <span className="block text-xl md:text-2xl lg:text-3xl text-steel-blue tracking-[0.15em]">
                      OUR MISSION
                    </span>
                  </h2>
                </div>
              </ScrollReveal>

              {/* Description */}
              <ScrollReveal animation="fadeUp" delay={0.1}>
                <p className="text-steel-blue leading-relaxed">
                  Join Nigeria&apos;s leading industrial services company and be part of our mission to drive sustainable growth across key sectors. From mining and agriculture to renewable energy and construction, our diverse portfolio offers unique career paths for ambitious professionals.
                </p>
              </ScrollReveal>

              {/* Divider */}
              <div className="h-px bg-steel-blue/20" />

              {/* Key Points */}
              <ScrollReveal animation="fadeUp" delay={0.3}>
                <div className="space-y-3">
                  {[
                    'Competitive compensation packages',
                    'Professional development opportunities',
                    'Collaborative team environment',
                    'Industry-leading projects',
                  ].map((point, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm text-steel-blue">
                      <GoldDot size="sm" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* CTA */}
              <ScrollReveal animation="fadeUp" delay={0.4}>
                <a
                  href="#apply"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-industrial-gold text-near-black font-heading text-xs tracking-[0.1em] uppercase rounded-xl btn-animated relative z-1 overflow-hidden after:bg-steel-blue hover:text-off-white transition-colors"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </a>
              </ScrollReveal>
            </div>

            {/* Right - Sticky Image */}
            <ScrollReveal animation="fadeUp" className="order-1 lg:order-2">
              <div className="sticky top-24">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/team-group.jpg"
                    alt="Team collaboration at Juggernaut Industries"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/40 via-transparent to-transparent" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Join Us Section - Image Left, Content Right */}
      <section className="relative py-14 overflow-hidden bg-off-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #0D1B2A 1px, transparent 0)`,
              backgroundSize: '48px 48px',
            }}
          />
        </div>

        <div className="container-jil relative z-10">
          {/* Two Column Layout - Image Left, Content Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Left - Sticky Image */}
            <ScrollReveal animation="fadeUp" className="order-2 lg:order-1">
              <div className="sticky top-24">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/story.jpg"
                    alt="Team working together at Juggernaut Industries"
                    fill
                    className="object-cover"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/40 via-transparent to-transparent" />
                </div>
              </div>
            </ScrollReveal>

            {/* Right - Content */}
            <div className="space-y-8 order-1 lg:order-2">
              {/* Section Header */}
              <ScrollReveal animation="fadeUp">
                <div className="space-y-4">
                  <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold">
                    <span className="w-8 h-px bg-industrial-gold" />
                    Why Join Us
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-deep-navy leading-[2.5rem]">
                    GROW YOUR CAREER
                    <span className="block text-xl md:text-2xl lg:text-3xl text-steel-blue tracking-[0.15em] mt-1">
                      WITH US
                    </span>
                  </h2>
                </div>
              </ScrollReveal>

              {/* Description */}
              <ScrollReveal animation="fadeUp" delay={0.1}>
                <p className="text-steel-blue leading-relaxed">
                  At Juggernaut Industries, we believe our people are our greatest asset. We&apos;re committed to creating an environment where talent thrives, innovation flourishes, and careers are built to last.
                </p>
              </ScrollReveal>

              {/* Benefits List */}
              <ScrollReveal animation="fadeUp" delay={0.2}>
                <div className="space-y-6">
                  {[
                    {
                      title: 'Career Development',
                      description: 'Structured training programs and mentorship opportunities to help you reach your full potential.',
                    },
                    {
                      title: 'Competitive Benefits',
                      description: 'Industry-leading compensation, health insurance, and performance bonuses.',
                    },
                    {
                      title: 'Work-Life Balance',
                      description: 'Flexible working arrangements and leave policies that support your wellbeing.',
                    },
                    {
                      title: 'Innovation Culture',
                      description: 'Work with cutting-edge technology and contribute to groundbreaking projects.',
                    },
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <GoldDot size="lg" className="mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-heading text-sm tracking-[0.1em] uppercase text-deep-navy mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-sm text-steel-blue leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Divider */}
              <div className="h-px bg-steel-blue/20" />

              {/* Diversity Statement */}
              <ScrollReveal animation="fadeUp" delay={0.4}>
                <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-xl p-6">
                  <h4 className="font-heading text-xs tracking-[0.15em] uppercase text-industrial-gold mb-3">
                    Diversity & Inclusion
                  </h4>
                  <p className="text-sm text-steel-blue leading-relaxed">
                    We are an equal opportunity employer committed to building a diverse and inclusive workplace. We celebrate differences and believe that varied perspectives drive innovation and success.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section - Image Left, Form Right */}
      <section id="apply" className="relative py-14 overflow-hidden bg-white">
        <div className="container-jil relative z-10">
          {/* Section Header */}
          <div className="mb-12 md:mb-16">
            <ScrollReveal animation="fadeUp">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold">
                  <span className="w-8 h-px bg-industrial-gold" />
                  Application Form
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-deep-navy leading-[2.5rem]">
                  SUBMIT YOUR APPLICATION
                </h2>
              </div>
            </ScrollReveal>
          </div>

          {/* Two Column Layout - Image Left, Form Right */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
            {/* Left - Image (2 columns) */}
            <ScrollReveal animation="fadeUp" className="lg:col-span-2">
              <div className="sticky top-24">
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2069&auto=format&fit=crop"
                    alt="Professional team meeting"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/60 via-transparent to-transparent" />

                </div>
              </div>
            </ScrollReveal>

            {/* Right - Form (3 columns) */}
            <ScrollReveal animation="fadeUp" delay={0.1} className="lg:col-span-3">
              <div className="p-8 md:p-10 rounded-xl bg-white/40 backdrop-blur-xl border border-white/60">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="block font-heading text-xs tracking-[0.1em] uppercase text-deep-navy mb-2">
                        First Name *
                      </Label>
                      <Input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="h-auto px-5 py-3 bg-white border-steel-blue/20 rounded-xl text-deep-navy placeholder:text-mid-gray focus-visible:border-industrial-gold focus-visible:ring-0 focus-visible:ring-offset-0"
                        placeholder="John"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="lastName" className="block font-heading text-xs tracking-[0.1em] uppercase text-deep-navy mb-2">
                        Last Name *
                      </Label>
                      <Input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="h-auto px-5 py-3 bg-white border-steel-blue/20 rounded-xl text-deep-navy placeholder:text-mid-gray focus-visible:border-industrial-gold focus-visible:ring-0 focus-visible:ring-offset-0"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                    <div>
                      <Label htmlFor="phone" className="block font-heading text-xs tracking-[0.1em] uppercase text-deep-navy mb-2">
                        Phone Number *
                      </Label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="h-auto px-5 py-3 bg-white border-steel-blue/20 rounded-xl text-deep-navy placeholder:text-mid-gray focus-visible:border-industrial-gold focus-visible:ring-0 focus-visible:ring-offset-0"
                        placeholder="+234 XXX XXX XXXX"
                        required
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <Label htmlFor="address" className="block font-heading text-xs tracking-[0.1em] uppercase text-deep-navy mb-2">
                      Street Address *
                    </Label>
                    <Input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="h-auto px-5 py-3 bg-white border-steel-blue/20 rounded-xl text-deep-navy placeholder:text-mid-gray focus-visible:border-industrial-gold focus-visible:ring-0 focus-visible:ring-offset-0"
                      placeholder="Your full address"
                      required
                    />
                  </div>

                  {/* Gender & Education */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="gender" className="block font-heading text-xs tracking-[0.1em] uppercase text-deep-navy mb-2">
                        Gender *
                      </Label>
                      <Select
                        value={formData.gender}
                        onValueChange={(value) => setFormData({ ...formData, gender: value })}
                        required
                      >
                        <SelectTrigger className="w-full h-auto px-5 py-3 bg-white border-steel-blue/20 rounded-xl text-deep-navy data-[placeholder]:text-mid-gray focus-visible:border-industrial-gold focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border border-steel-blue/20 rounded-xl shadow-lg">
                          <SelectItem value="male" className="text-deep-navy focus:bg-industrial-gold/10 focus:text-deep-navy cursor-pointer">Male</SelectItem>
                          <SelectItem value="female" className="text-deep-navy focus:bg-industrial-gold/10 focus:text-deep-navy cursor-pointer">Female</SelectItem>
                          <SelectItem value="other" className="text-deep-navy focus:bg-industrial-gold/10 focus:text-deep-navy cursor-pointer">Prefer not to say</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="education" className="block font-heading text-xs tracking-[0.1em] uppercase text-deep-navy mb-2">
                        Educational Qualification *
                      </Label>
                      <Select
                        value={formData.education}
                        onValueChange={(value) => setFormData({ ...formData, education: value })}
                        required
                      >
                        <SelectTrigger className="w-full h-auto px-5 py-3 bg-white border-steel-blue/20 rounded-xl text-deep-navy data-[placeholder]:text-mid-gray focus-visible:border-industrial-gold focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none">
                          <SelectValue placeholder="Select qualification" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border border-steel-blue/20 rounded-xl shadow-lg">
                          <SelectItem value="high-school" className="text-deep-navy focus:bg-industrial-gold/10 focus:text-deep-navy cursor-pointer">High School</SelectItem>
                          <SelectItem value="diploma" className="text-deep-navy focus:bg-industrial-gold/10 focus:text-deep-navy cursor-pointer">Diploma</SelectItem>
                          <SelectItem value="bachelors" className="text-deep-navy focus:bg-industrial-gold/10 focus:text-deep-navy cursor-pointer">Bachelor&apos;s Degree</SelectItem>
                          <SelectItem value="masters" className="text-deep-navy focus:bg-industrial-gold/10 focus:text-deep-navy cursor-pointer">Master&apos;s Degree</SelectItem>
                          <SelectItem value="phd" className="text-deep-navy focus:bg-industrial-gold/10 focus:text-deep-navy cursor-pointer">PhD/Doctorate</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Position & Recent Role */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="position" className="block font-heading text-xs tracking-[0.1em] uppercase text-deep-navy mb-2">
                        Position Applied For *
                      </Label>
                      <Select
                        value={formData.position}
                        onValueChange={(value) => setFormData({ ...formData, position: value })}
                        required
                      >
                        <SelectTrigger className="w-full h-auto px-5 py-3 bg-white border-steel-blue/20 rounded-xl text-deep-navy data-[placeholder]:text-mid-gray focus-visible:border-industrial-gold focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none">
                          <SelectValue placeholder="Select position" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border border-steel-blue/20 rounded-xl shadow-lg">
                          <SelectItem value="mining-engineer" className="text-deep-navy focus:bg-industrial-gold/10 focus:text-deep-navy cursor-pointer">Mining Engineer</SelectItem>
                          <SelectItem value="agricultural-specialist" className="text-deep-navy focus:bg-industrial-gold/10 focus:text-deep-navy cursor-pointer">Agricultural Specialist</SelectItem>
                          <SelectItem value="project-manager" className="text-deep-navy focus:bg-industrial-gold/10 focus:text-deep-navy cursor-pointer">Project Manager</SelectItem>
                          <SelectItem value="solar-technician" className="text-deep-navy focus:bg-industrial-gold/10 focus:text-deep-navy cursor-pointer">Solar Energy Technician</SelectItem>
                          <SelectItem value="other" className="text-deep-navy focus:bg-industrial-gold/10 focus:text-deep-navy cursor-pointer">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="recentRole" className="block font-heading text-xs tracking-[0.1em] uppercase text-deep-navy mb-2">
                        Recent Job Role *
                      </Label>
                      <Input
                        type="text"
                        id="recentRole"
                        name="recentRole"
                        value={formData.recentRole}
                        onChange={handleChange}
                        className="h-auto px-5 py-3 bg-white border-steel-blue/20 rounded-xl text-deep-navy placeholder:text-mid-gray focus-visible:border-industrial-gold focus-visible:ring-0 focus-visible:ring-offset-0"
                        placeholder="e.g. Senior Engineer"
                        required
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="block font-heading text-xs tracking-[0.1em] uppercase text-deep-navy mb-2">
                      Cover Letter / Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="px-5 py-3 bg-white border-steel-blue/20 rounded-xl text-deep-navy placeholder:text-mid-gray focus-visible:border-industrial-gold focus-visible:ring-0 focus-visible:ring-offset-0 resize-none"
                      placeholder="Tell us why you'd be a great fit for this position..."
                      required
                    />
                  </div>

                  {/* CV Upload */}
                  <div>
                    <Label htmlFor="cv" className="block font-heading text-xs tracking-[0.1em] uppercase text-deep-navy mb-2">
                      Upload CV/Resume *
                    </Label>
                    <div className="relative">
                      <input
                        type="file"
                        id="cv"
                        name="cv"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        required
                      />
                      <label
                        htmlFor="cv"
                        className="flex items-center justify-center gap-3 px-5 py-4 bg-white border-2 border-dashed border-steel-blue/20 rounded-xl text-deep-navy hover:border-industrial-gold/50 transition-colors cursor-pointer"
                      >
                        <Upload className="w-5 h-5 text-industrial-gold" />
                        <span className="text-sm">
                          {formData.cv ? formData.cv.name : 'Click to upload (PDF, DOC, DOCX)'}
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-industrial-gold text-near-black font-heading text-xs tracking-[0.1em] uppercase rounded-xl btn-animated relative z-1 overflow-hidden after:bg-steel-blue hover:text-off-white transition-colors"
                  >
                    Submit Application
                    <Briefcase className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
