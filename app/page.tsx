'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { 
  User, 
  Users, 
  Zap, 
  Target, 
  Trophy, 
  Brain, 
  Heart, 
  Star, 
  ChevronDown, 
  ChevronUp,
  Menu,
  X,
  GraduationCap
} from 'lucide-react'

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [professionalMentorsOpen, setProfessionalMentorsOpen] = useState(false)
  const [collegiateMentorsOpen, setCollegiateMentorsOpen] = useState(false)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const toggleProfessionalMentors = () => {
    setProfessionalMentorsOpen(!professionalMentorsOpen)
  }

  const toggleCollegiateMentors = () => {
    setCollegiateMentorsOpen(!collegiateMentorsOpen)
  }

  const openVideoModal = (videoSrc: string) => {
    setSelectedVideo(videoSrc)
    setVideoModalOpen(true)
  }

  const closeVideoModal = () => {
    setVideoModalOpen(false)
    setSelectedVideo(null)
  }


  // Video mapping for testimonials
  const videoMapping: { [key: string]: string } = {
    'Cristiano Oliveira': '/cristiano-optimised.mp4',
    'Logan Moniz': '/logan-optimised.mp4',
    'Julian Martinez': '/julian-optimised.mp4'
  }

  // Initialize Typeform embed
  const initializeTypeform = () => {
    if (typeof window !== 'undefined' && (window as any).createTypeformEmbed) {
      const quiz = document.getElementById('quizApp');
      if (quiz && !quiz.hasChildNodes()) {
        const createTypeformEmbed = (window as any).createTypeformEmbed;
        createTypeformEmbed(quiz, 'gM4z7p9k', {
          hiddenFields: { source: 'evolve-website' },
          onSubmit: (data: any) => {
            const answers = data.response.answers;
            // Auto-redirect to thank-you with match
            const name = answers.find((a: any) => a.field.ref === 'name')?.text || '';
            const level = answers.find((a: any) => a.field.ref === 'level')?.choice?.label || '';
            const position = answers.find((a: any) => a.field.ref === 'position')?.choice?.label || '';
            const mentorMatch: { [key: string]: string } = {
              'D1 Power 5': 'Noah Thompson',
              'D1 Mid-Major': 'Mia Rodriguez',
              'D2 Full Ride': 'Sofia Morales',
              'D3 Academic': 'Ethan Kim',
              'NAIA Money': 'Aisha Patel',
              'JUCO → D1': 'Jayden Carter',
              'Late Bloomer': 'Chloe Bennett',
              'Ivy/High Academic': 'Liam O\'Connor'
            };
            const matchedMentor = mentorMatch[level] || 'Mia Rodriguez';
            
            window.location.href = `https://evolveacademyinternational.com/thank-you?mentor=${matchedMentor}&name=${encodeURIComponent(name)}&package=core&discount=20`;
          }
        });
      }
    }
  };

  useEffect(() => {
    initializeTypeform();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <a href="/">
                <img 
                    src="/logo.png" 
                  alt="Evolve Academy" 
                    className="h-10 w-auto cursor-pointer"
                />
                </a>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#programs" className="text-gray-700 hover:text-primary-600 transition-colors">
                Programs
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-primary-600 transition-colors">
                How It Works
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-primary-600 transition-colors">
                Testimonials
              </a>
              <a href="#mentors" className="text-gray-700 hover:text-primary-600 transition-colors">
                Mentors
              </a>
              <a href="#faq" className="text-gray-700 hover:text-primary-600 transition-colors">
                FAQ
              </a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <a href="#register-interest">
              <button className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                  Get Started
              </button>
              </a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#programs" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                Programs
              </a>
              <a href="#how-it-works" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                How It Works
              </a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                Testimonials
              </a>
              <a href="#mentors" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                Mentors
              </a>
              <a href="#faq" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                FAQ
              </a>
              <div className="px-3 py-2">
                <a href="#register-interest">
                <button className="w-full bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                    Get Started
                </button>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        className="pt-32 pb-24 bg-white relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1500&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
            Where peak performance meets personal growth.
            </h1>
            <p className="text-xl text-white mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow">
              At Evolve Academy, we empower young athletes to reach their full potential — by building not just their game, but their mindset, confidence, and growth for the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#register-interest">
              <button className="bg-primary-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-primary-700 transition-colors">
                Start Your Journey
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Program Announcement */}
      <section className="py-12 bg-primary-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 shadow-xl">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
              {/* Mentor Image and Info */}
              <div className="flex items-center gap-4 flex-1">
                <div className="flex-shrink-0">
                  <img src="/alan-nixon.jpg" alt="Alan Nixon" className="w-24 h-24 rounded-full object-cover border-4 border-primary-100" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">New Program with Alan Nixon</h3>
                  <p className="text-primary-600 font-semibold mb-2">UEFA Pro Licensed & Global Coach Educator</p>
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">Starting Monday • 6-week program</span>
                  </div>
                  <p className="text-gray-700">
                    A personalized mentorship program with one of the world's most experienced coach educators. Learn from Alan's 25+ years of experience working in 47 countries, with a unique blend of elite playing career, coaching expertise, and academic excellence.
                  </p>
                </div>
              </div>
              {/* CTA Button */}
              <div className="flex-shrink-0 w-full lg:w-auto">
                <a href="#register-interest" className="inline-block w-full lg:w-auto text-center bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-lg">
                  Register Now
                </a>
                <p className="text-sm text-gray-500 mt-2 text-center lg:text-left">Spaces are limited</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Programs Designed For Your Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Whether you're building your foundation, growing with others, chasing elite performance, or preparing for college — 
              Evolve Academy has the right path for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Evolve One */}
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-200 card-hover">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-8">
                <User size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🌱 Evolve One™
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                <em>Your journey. Your mentor. Your growth.</em>
              </p>
              <p className="text-gray-700 mb-10 leading-relaxed">
                A personalized 1-to-1 mentorship program designed to build your foundation, 
                strengthen your mindset, and accelerate your development. With undivided attention 
                and a tailored plan, this is all about you.
              </p>
              <a href="#evolve-one-details">
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                Learn More
              </button>
              </a>
            </div>

            {/* Evolve Squad */}
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-200 card-hover">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-8">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🤝 Evolve Squad™
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                <em>Stronger together. Growing as one.</em>
              </p>
              <p className="text-gray-700 mb-10 leading-relaxed">
                A small-group experience that combines personal growth with the power of a supportive team. 
                Learn, challenge, and inspire each other while developing the skills and mindset you need to succeed — together.
              </p>
              <a href="#evolve-squad-details">
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                Learn More
              </button>
              </a>
            </div>

            {/* Evolve Pro */}
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-200 card-hover">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-8">
                <Zap size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🚀 Evolve Pro™
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                <em>Unlock your peak performance.</em>
              </p>
              <p className="text-gray-700 mb-10 leading-relaxed">
                For high-performing athletes ready to take the next step. This advanced program delivers 
                elite-level mentorship and training to help you refine your edge, master your mindset, 
                and perform at the highest level.
              </p>
              <a href="#evolve-pro-details">
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                Learn More
              </button>
              </a>
            </div>

            {/* EvolveAthlete */}
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-200 card-hover">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-8">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🎓 EvolveAthlete™
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                <em>Connect with collegiate athletes.</em>
              </p>
              <p className="text-gray-700 mb-10 leading-relaxed">
                A program designed for high school athletes to connect with current collegiate athletes. 
                Get real insights, guidance, and mentorship from student-athletes who've successfully 
                navigated the path you're on.
              </p>
              <a href="#evolve-athlete-details">
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                Learn More
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              4 Signs That Evolve Academy Is For You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Young athletes, aspiring professionals, and driven individuals across all levels are 
              elevating their performance with Evolve Academy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-10 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                You want to unlock your full potential
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Talent alone isn’t enough. Many athletes hit a plateau because they lack the mindset, habits, and tools to take their game to the next level. Evolve Academy helps you bridge that gap.
              </p>
            </div>

            <div className="bg-white rounded-xl p-10 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-6">
                <Brain size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                You struggle with confidence and consistency
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Even the most skilled players can feel overwhelmed by pressure or doubt. We teach you how to build inner confidence, bounce back from setbacks, and perform with consistency.
              </p>
            </div>

            <div className="bg-white rounded-xl p-10 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-6">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                You want to stand out as a leader
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Being a great teammate and leader isn’t just about skill — it’s about influence, attitude, and accountability. We help you develop the leadership qualities that coaches and teams value most.
              </p>
            </div>

            <div className="bg-white rounded-xl p-10 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-6">
                <Trophy size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                You’re serious about your future
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Whether aiming for college scholarships, professional opportunities, or simply becoming the best version of yourself, working with Evolve Academy gives you the guidance and discipline to pursue your goals with purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              How Evolve Academy Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join our academy and start working with world-class mentors and coaches today.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Apply</h3>
              <p className="text-gray-600 leading-relaxed">
                Submit your application and tell us about your goals, background, and what you're looking to achieve.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Baseline</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete a comprehensive assessment to understand your current level, strengths, and areas for growth.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect</h3>
              <p className="text-gray-600 leading-relaxed">
                Get matched with your dedicated mentor and program based on your goals and preferred learning style.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Develop</h3>
              <p className="text-gray-600 leading-relaxed">
                Begin your personalized development journey with regular sessions, training, and continuous support.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                5
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Evolve</h3>
              <p className="text-gray-600 leading-relaxed">
                Track your progress, celebrate achievements, and continue growing with ongoing support and community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              What Athletes Are Saying
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Video Testimonial 1 */}
            <div 
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105"
              onClick={() => openVideoModal(videoMapping['Cristiano Oliveira'])}
            >
              <div className="aspect-video bg-gray-200 rounded-lg mb-6 relative overflow-hidden group">
                <img 
                  src="/cristiano-thumbnail.png" 
                  alt="Cristiano Oliveira testimonial thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all duration-300">
                  <div className="w-16 h-16 bg-primary-600 bg-opacity-90 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-white text-sm font-medium drop-shadow-lg">Click to watch testimonial</p>
                </div>
              </div>
            <div className="text-center">
                <p className="font-semibold text-gray-900 mb-1">Cristiano Oliveira</p>
                <p className="text-gray-600 text-sm">New England Revolution</p>
              </div>
            </div>

            {/* Video Testimonial 2 */}
            <div 
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105"
              onClick={() => openVideoModal(videoMapping['Logan Moniz'])}
            >
              <div className="aspect-video bg-gray-200 rounded-lg mb-6 relative overflow-hidden group">
                <img 
                  src="/logan-thumbnail.png" 
                  alt="Logan Moniz testimonial thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all duration-300">
                  <div className="w-16 h-16 bg-primary-600 bg-opacity-90 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-white text-sm font-medium drop-shadow-lg">Click to watch testimonial</p>
                </div>
              </div>
            <div className="text-center">
                <p className="font-semibold text-gray-900 mb-1">Logan Moniz</p>
                <p className="text-gray-600 text-sm">Duke University Commit</p>
              </div>
            </div>

            {/* Video Testimonial 3 */}
            <div 
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105"
              onClick={() => openVideoModal(videoMapping['Julian Martinez'])}
            >
              <div className="aspect-video bg-gray-200 rounded-lg mb-6 relative overflow-hidden group">
                <img 
                  src="/julian-thumbnail.png" 
                  alt="Julian Martinez testimonial thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all duration-300">
                  <div className="w-16 h-16 bg-primary-600 bg-opacity-90 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-white text-sm font-medium drop-shadow-lg">Click to watch testimonial</p>
                </div>
              </div>
            <div className="text-center">
                <p className="font-semibold text-gray-900 mb-1">Julian Martinez</p>
                <p className="text-gray-600 text-sm">Boston Bolts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section id="mentors" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Mentors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our mentors are experienced professionals dedicated to helping young athletes grow on and off the field.
            </p>
          </div>

          {/* Professional Mentors Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Professional Mentors</h3>
                <button
                  onClick={toggleProfessionalMentors}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Toggle Professional Mentors"
                >
                  {professionalMentorsOpen ? <ChevronUp size={24} className="text-gray-600" /> : <ChevronDown size={24} className="text-gray-600" />}
                </button>
              </div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Experienced professionals with UEFA licenses, international coaching experience, and proven track records in developing elite athletes.
              </p>
            </div>
            {professionalMentorsOpen && (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Professional Mentor 1: Alan Nixon */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
                <div className="p-6 flex flex-col items-center text-center flex-1">
                  <img src="/alan-nixon.jpg" alt="Alan Nixon" className="w-32 h-32 rounded-full object-cover mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Alan Nixon</h3>
                  <p className="text-primary-600 font-medium text-sm mb-2">UEFA Pro Licensed & Global Coach Educator</p>
                  <p className="text-gray-700 text-sm mb-4 flex-1">
                    Former Irish League footballer turned Global Coach Educator. 25+ years working in 47 countries with elite playing career, coaching expertise, and academic excellence.
                  </p>
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLScyX3eVDqT0OnYoQSFufyGYhdG9Y5-3PdkP7BDJ8_k4yhV1aQ/viewform?usp=pp_url&entry.XXXXX=Alan%20Nixon" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full mt-auto"
                  >
                    <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                      Match me with this mentor
                    </button>
                  </a>
              </div>
            </div>

              {/* Professional Mentor 2: Kurtis Millan */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
                <div className="p-6 flex flex-col items-center text-center flex-1">
                  <img src="/kurtis-milan.jpg.png" alt="Kurtis Millan" className="w-32 h-32 rounded-full object-cover mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Kurtis Millan</h3>
                  <p className="text-primary-600 font-medium text-sm mb-2">UEFA A Licensed Coach</p>
                  <p className="text-gray-700 text-sm mb-4 flex-1">
                    Over a decade across elite youth academies in Sweden, USA, and UK. Currently Individual Development Coach at Hammarby IF. Specializes in player-centred development and performance analysis.
                  </p>
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLScyX3eVDqT0OnYoQSFufyGYhdG9Y5-3PdkP7BDJ8_k4yhV1aQ/viewform?usp=pp_url&entry.XXXXX=Kurtis%20Millan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full mt-auto"
                  >
                    <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                      Match me with this mentor
                    </button>
                  </a>
              </div>
              </div>

              {/* Professional Mentor 3: Colin Nixon */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
                <div className="p-6 flex flex-col items-center text-center flex-1">
                  <img src="/colin-nixon.jpg" alt="Colin Nixon" className="w-32 h-32 rounded-full object-cover mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Colin Nixon</h3>
                  <p className="text-primary-600 font-medium text-sm mb-2">Former Professional & UEFA A Licensed Coach</p>
                  <p className="text-gray-700 text-sm mb-4 flex-1">
                    Ex Irish Premier League player with nearly 800 appearances for Glentoran. 30+ years experience. Dedicated to helping young players fulfil their potential.
                  </p>
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLScyX3eVDqT0OnYoQSFufyGYhdG9Y5-3PdkP7BDJ8_k4yhV1aQ/viewform?usp=pp_url&entry.XXXXX=Colin%20Nixon" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full mt-auto"
                  >
                    <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                      Match me with this mentor
                    </button>
                  </a>
              </div>
            </div>

              {/* Professional Mentor 4: Mario Pruul */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
                <div className="p-6 flex flex-col items-center text-center flex-1">
                  <img src="/mario-pruul.jpg" alt="Mario Pruul" className="w-32 h-32 rounded-full object-cover mb-4" style={{objectPosition: '50% 15%'}} />
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Mario Pruul</h3>
                  <p className="text-primary-600 font-medium text-sm mb-2">Club Director & UEFA A Licensed Coach</p>
                  <p className="text-gray-700 text-sm mb-4 flex-1">
                    Over 20 years in soccer. Retired from playing at the highest level in Estonia. Club director and UEFA A Licensed coach completing UEFA Football Management course.
                  </p>
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLScyX3eVDqT0OnYoQSFufyGYhdG9Y5-3PdkP7BDJ8_k4yhV1aQ/viewform?usp=pp_url&entry.XXXXX=Mario%20Pruul" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full mt-auto"
                  >
                    <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                      Match me with this mentor
                    </button>
                  </a>
              </div>
              </div>

              {/* Professional Mentor 5: Justin Sheppard */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
                <div className="p-6 flex flex-col items-center text-center flex-1">
                  <img src="/justin-sheppard.jpg" alt="Justin Sheppard" className="w-32 h-32 rounded-full object-cover mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Justin Sheppard</h3>
                  <p className="text-primary-600 font-medium text-sm mb-2">UEFA A Licensed</p>
                  <p className="text-gray-700 text-sm mb-4 flex-1">
                    Founder and head coach of JS Soccer Skills. BSc in Sport and Exercise Science. Lead tutor for NIFL Scholarship Programme. Former Irish FA Primary Schools Coach.
                  </p>
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLScyX3eVDqT0OnYoQSFufyGYhdG9Y5-3PdkP7BDJ8_k4yhV1aQ/viewform?usp=pp_url&entry.XXXXX=Justin%20Sheppard" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full mt-auto"
                  >
                    <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                      Match me with this mentor
                    </button>
                  </a>
              </div>
            </div>

              {/* Professional Mentor 6: Christopher Ricardi */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
                <div className="p-6 flex flex-col items-center text-center flex-1">
                  <img src="/christopher-ricardi.jpg.png" alt="Christopher Ricardi" className="w-32 h-32 rounded-full object-cover mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Christopher Ricardi</h3>
                  <p className="text-primary-600 font-medium text-sm mb-2">Sport Mental Performance Consultant</p>
                  <p className="text-gray-700 text-sm mb-4 flex-1">
                    Works with high-level youth, Division I collegiate, and professional teams. Master's in Sport and Exercise Psychology. USSF C and UEFA B Licensed coach.
                  </p>
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLScyX3eVDqT0OnYoQSFufyGYhdG9Y5-3PdkP7BDJ8_k4yhV1aQ/viewform?usp=pp_url&entry.XXXXX=Christopher%20Ricardi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full mt-auto"
                  >
                    <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                      Match me with this mentor
                    </button>
                  </a>
          </div>
        </div>

              {/* Professional Mentor 7: Jonny Tuffey */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
                <div className="p-6 flex flex-col items-center text-center flex-1">
                  <img src="/johnny-tuffey.jpg.png" alt="Jonny Tuffey" className="w-32 h-32 rounded-full object-cover mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Jonny Tuffey</h3>
                  <p className="text-primary-600 font-medium text-sm mb-2">Professional Player & Academy Director</p>
                  <p className="text-gray-700 text-sm mb-4 flex-1">
                    20+ years professional playing career in England, Scotland, and Ireland. UEFA A Licensed coach. Goalkeeping coach for Northern Ireland Senior International Women's team.
                  </p>
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLScyX3eVDqT0OnYoQSFufyGYhdG9Y5-3PdkP7BDJ8_k4yhV1aQ/viewform?usp=pp_url&entry.XXXXX=Jonny%20Tuffey" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full mt-auto"
                  >
                    <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                      Match me with this mentor
                    </button>
                  </a>
                </div>
              </div>

              {/* Professional Mentor 8: Kevin Keegan */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
                <div className="p-6 flex flex-col items-center text-center flex-1">
                  <img src="/kevin-keegan.jpg.png" alt="Kevin Keegan" className="w-32 h-32 rounded-full object-cover mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Kevin Keegan</h3>
                  <p className="text-primary-600 font-medium text-sm mb-2">Former Professional Player</p>
                  <p className="text-gray-700 text-sm mb-4 flex-1">
                    Ex-Irish league player with 20+ years career. Experienced in mentorship with Irish Football Associations Ladies program. Current first team coach with AFC Craigavon.
                  </p>
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLScyX3eVDqT0OnYoQSFufyGYhdG9Y5-3PdkP7BDJ8_k4yhV1aQ/viewform?usp=pp_url&entry.XXXXX=Kevin%20Keegan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full mt-auto"
                  >
                    <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                      Match me with this mentor
                    </button>
                  </a>
                </div>
              </div>

              {/* Professional Mentor 9: Mark Austin */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
                <div className="p-6 flex flex-col items-center text-center flex-1">
                  <img src="/mark-austin.jpg.png" alt="Mark Austin" className="w-32 h-32 rounded-full object-cover mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Mark Austin</h3>
                  <p className="text-primary-600 font-medium text-sm mb-2">Experienced Coach & Performance Analyst</p>
                  <p className="text-gray-700 text-sm mb-4 flex-1">
                    20+ years coaching in UK and Ireland. Specializes in performance analysis and technical/tactical awareness. Co-Manager at Camlough Rovers. Background in Sports Science and Business.
                  </p>
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLScyX3eVDqT0OnYoQSFufyGYhdG9Y5-3PdkP7BDJ8_k4yhV1aQ/viewform?usp=pp_url&entry.XXXXX=Mark%20Austin" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full mt-auto"
                  >
                    <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                      Match me with this mentor
                    </button>
                  </a>
                </div>
              </div>

              {/* Professional Mentor 10: Piotr 'Papi' Paprocki */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
                <div className="p-6 flex flex-col items-center text-center flex-1">
                  <img src="/piotr-paprocki.jpg" alt="Piotr 'Papi' Paprocki" className="w-32 h-32 rounded-full object-cover mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Piotr 'Papi' Paprocki</h3>
                  <p className="text-primary-600 font-medium text-sm mb-2">Former Professional Basketball Player & Leadership Coach</p>
                  <p className="text-gray-700 text-sm mb-4 flex-1">
                    Former professional basketball player and U.S. scholarship athlete. 16+ years as team-building and performance coach. Works with national youth teams and professional teams across Europe and USA.
                  </p>
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLScyX3eVDqT0OnYoQSFufyGYhdG9Y5-3PdkP7BDJ8_k4yhV1aQ/viewform?usp=pp_url&entry.XXXXX=Piotr%20Paprocki" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full mt-auto"
                  >
                    <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                      Match me with this mentor
                    </button>
                  </a>
                </div>
              </div>
            </div>
            )}
          </div>

          {/* Collegiate Mentors Section */}
          <div>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Collegiate Mentors</h3>
                <button
                  onClick={toggleCollegiateMentors}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Toggle Collegiate Mentors"
                >
                  {collegiateMentorsOpen ? <ChevronUp size={24} className="text-gray-600" /> : <ChevronDown size={24} className="text-gray-600" />}
                </button>
              </div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Mentors who walked your exact path — and will show you exactly how they did it.
              </p>
            </div>
            {collegiateMentorsOpen && (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Collegiate Mentor 1: Ricky Rollo */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
                <div className="p-6 flex flex-col items-center text-center flex-1">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 flex-shrink-0">
                    <img src="/RickyEvolve.png" alt="Ricky Rollo" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Ricky Rollo</h3>
                  <p className="text-primary-600 font-medium text-sm mb-2">Current Student-Athlete</p>
                  <p className="text-gray-600 text-sm mb-2">Soccer</p>
                  <p className="text-gray-500 text-xs mb-4">Class of 2026</p>
                  <div className="mb-4">
                    <img src="/harvard.png" alt="Harvard" className="h-12 w-auto mx-auto mb-2" />
                    <p className="text-gray-700 font-semibold text-sm">Harvard University</p>
                  </div>
                  <p className="text-gray-700 text-sm mb-4 flex-1">
                    Physics and Mathematics major. Current student-athlete who successfully navigated the recruitment process.
                  </p>
                  <Link 
                    href="/mentor/ricky-rollo"
                    className="mt-auto inline-flex w-full items-center justify-center bg-primary-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                  >
                    Learn more about Ricky Rollo
                  </Link>
                </div>
              </div>

              {/* Collegiate Mentor 2: Amir Yahalom */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
                <div className="p-6 flex flex-col items-center text-center flex-1">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 flex-shrink-0">
                    <img src="/amir-yahalom.jpg" alt="Amir Yahalom" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Amir Yahalom</h3>
                  <p className="text-primary-600 font-medium text-sm mb-2">Current Student-Athlete</p>
                  <p className="text-gray-600 text-sm mb-2">Soccer</p>
                  <p className="text-gray-500 text-xs mb-4">Class of 2026</p>
                  <div className="mb-4">
                    <img src="/Columbialogo.jpg.png" alt="Columbia" className="h-12 w-auto mx-auto mb-2" />
                    <p className="text-gray-700 font-semibold text-sm">Columbia University</p>
                  </div>
                  <p className="text-gray-700 text-sm mb-4 flex-1">
                    Current student-athlete who successfully navigated the recruitment process and transitioned to Division I soccer.
                  </p>
                  <Link 
                    href="/mentor/amir-yahalom"
                    className="mt-auto inline-flex w-full items-center justify-center bg-primary-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                  >
                    Learn more about Amir Yahalom
                  </Link>
                </div>
              </div>

              {/* Collegiate Mentor 3: George Nouaime */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
                <div className="p-6 flex flex-col items-center text-center flex-1">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 flex-shrink-0">
                    <img src="/george-nouaime.jpg" alt="George Nouaime" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">George Nouaime</h3>
                  <p className="text-primary-600 font-medium text-sm mb-2">Current Student-Athlete</p>
                  <p className="text-gray-600 text-sm mb-2">Soccer</p>
                  <p className="text-gray-500 text-xs mb-4">Class of 2026</p>
                  <div className="mb-4">
                    <img src="/umassbostonlogo.jpg.png" alt="UMass" className="h-12 w-auto mx-auto mb-2" />
                    <p className="text-gray-700 font-semibold text-sm">UMass Lowell</p>
                  </div>
                  <p className="text-gray-700 text-sm mb-4 flex-1">
                    Current student-athlete who successfully navigated the recruitment process and transitioned to Division I soccer.
                  </p>
                  <Link 
                    href="/mentor/george-nouaime"
                    className="mt-auto inline-flex w-full items-center justify-center bg-primary-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                  >
                    Learn more about George Nouaime
                  </Link>
                </div>
              </div>

              {/* Collegiate Mentor 4: Nick Mesquita */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
                <div className="p-6 flex flex-col items-center text-center flex-1">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 flex-shrink-0 bg-gray-200 flex items-center justify-center">
                    <User size={48} className="text-gray-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Nick Mesquita</h3>
                  <p className="text-primary-600 font-medium text-sm mb-2">Current Student-Athlete</p>
                  <p className="text-gray-600 text-sm mb-2">Soccer</p>
                  <p className="text-gray-500 text-xs mb-4">Class of 2026</p>
                  <div className="mb-4">
                    <img src="/fordhamlogo.jpg.png" alt="Fordham" className="h-12 w-auto mx-auto mb-2" />
                    <p className="text-gray-700 font-semibold text-sm">Fordham University</p>
                  </div>
                  <p className="text-gray-700 text-sm mb-4 flex-1">
                    Current student-athlete who successfully navigated the recruitment process and transitioned to Division I soccer.
                  </p>
                  <Link 
                    href="/mentor/nick-mesquita"
                    className="mt-auto inline-flex w-full items-center justify-center bg-primary-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                  >
                    Learn more about Nick Mesquita
                  </Link>
                </div>
              </div>

              {/* Collegiate Mentor 5: Zach Miles */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
                <div className="p-6 flex flex-col items-center text-center flex-1">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 flex-shrink-0 bg-gray-200 flex items-center justify-center">
                    <User size={48} className="text-gray-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Zach Miles</h3>
                  <p className="text-primary-600 font-medium text-sm mb-2">Current Student-Athlete</p>
                  <p className="text-gray-600 text-sm mb-2">Soccer</p>
                  <p className="text-gray-500 text-xs mb-4">Class of 2026</p>
                  <div className="mb-4">
                    <img src="/villanovalogo.jpg.png" alt="Villanova" className="h-12 w-auto mx-auto mb-2" />
                    <p className="text-gray-700 font-semibold text-sm">Villanova University</p>
                  </div>
                  <p className="text-gray-700 text-sm mb-4 flex-1">
                    Current student-athlete who successfully navigated the recruitment process and transitioned to Division I soccer.
                  </p>
                  <Link 
                    href="/mentor/zach-miles"
                    className="mt-auto inline-flex w-full items-center justify-center bg-primary-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                  >
                    Learn more about Zach Miles
                  </Link>
                </div>
              </div>

              {/* Collegiate Mentor 6: Maxim Makar */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
                <div className="p-6 flex flex-col items-center text-center flex-1">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 flex-shrink-0">
                    <img src="/maxim-makar.jpg.png" alt="Maxim Makar" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Maxim Makar</h3>
                  <p className="text-primary-600 font-medium text-sm mb-2">Current Student-Athlete</p>
                  <p className="text-gray-600 text-sm mb-2">Soccer</p>
                  <p className="text-gray-500 text-xs mb-4">Class of 2026</p>
                  <div className="mb-4">
                    <img src="/umassbostonlogo.jpg.png" alt="UMass" className="h-12 w-auto mx-auto mb-2" />
                    <p className="text-gray-700 font-semibold text-sm">UMass Lowell</p>
                  </div>
                  <p className="text-gray-700 text-sm mb-4 flex-1">
                    Current student-athlete who successfully navigated the recruitment process and transitioned to Division I soccer.
                  </p>
                  <Link 
                    href="/mentor/maxim-makar"
                    className="mt-auto inline-flex w-full items-center justify-center bg-primary-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                  >
                    Learn more about Maxim Makar
                  </Link>
                </div>
              </div>

              {/* Collegiate Mentor 7: Placeholder - MIT */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
                <div className="p-6 flex flex-col items-center text-center flex-1">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 flex-shrink-0 bg-gray-200 flex items-center justify-center">
                    <User size={48} className="text-gray-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Placeholder Name</h3>
                  <p className="text-primary-600 font-medium text-sm mb-2">Current Student-Athlete</p>
                  <p className="text-gray-600 text-sm mb-2">Soccer</p>
                  <p className="text-gray-500 text-xs mb-4">Class of 2026</p>
                  <div className="mb-4">
                    <p className="text-gray-700 font-semibold text-sm">MIT</p>
                  </div>
                  <p className="text-gray-700 text-sm mb-4 flex-1">
                    Current student-athlete who successfully navigated the recruitment process and transitioned to Division III soccer.
                  </p>
                  <Link 
                    href="/mentor/mit-mentor"
                    className="mt-auto inline-flex w-full items-center justify-center bg-primary-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                  >
                    Learn more about Placeholder Name
                  </Link>
                </div>
              </div>

              {/* Collegiate Mentor 8: Placeholder - Duke */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
                <div className="p-6 flex flex-col items-center text-center flex-1">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 flex-shrink-0 bg-gray-200 flex items-center justify-center">
                    <User size={48} className="text-gray-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Placeholder Name</h3>
                  <p className="text-primary-600 font-medium text-sm mb-2">Current Student-Athlete</p>
                  <p className="text-gray-600 text-sm mb-2">Soccer</p>
                  <p className="text-gray-500 text-xs mb-4">Class of 2026</p>
                  <div className="mb-4">
                    <p className="text-gray-700 font-semibold text-sm">Duke University</p>
                  </div>
                  <p className="text-gray-700 text-sm mb-4 flex-1">
                    Current student-athlete who successfully navigated the recruitment process and transitioned to Division I soccer.
                  </p>
                  <Link 
                    href="/mentor/duke-mentor"
                    className="mt-auto inline-flex w-full items-center justify-center bg-primary-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                  >
                    Learn more about Placeholder Name
                  </Link>
                </div>
              </div>
            </div>
            )}
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Register Interest Section */}
      <section id="register-interest" className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Register Your Interest</h2>
            <p className="text-lg text-gray-600 mb-8">
              Fill out the form below to register your interest in our programs.
            </p>
          </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
          <p className="text-gray-700 text-lg mb-6">
            Ready to take the next step? Complete our short interest form and we’ll get in touch with next steps.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScyX3eVDqT0OnYoQSFufyGYhdG9Y5-3PdkP7BDJ8_k4yhV1aQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors"
          >
            Open Interest Form
          </a>
        </div>
        </div>
      </section>

      {/* Evolve One Details Section */}
      <section id="evolve-one-details" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-600 mb-6">🚀 Evolve One™</h2>
          <p className="text-gray-700 text-lg mb-4 font-semibold">Your journey. Your mentor. Your growth.</p>
          <p className="text-gray-700 text-lg mb-4">A personalized 1-to-1 mentorship program designed to build your foundation, strengthen your mindset, and accelerate your development. With undivided attention and a tailored plan, this is all about you.</p>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Who is the program for?</h3>
            <p className="text-gray-700 mb-2">An in-depth, individualized program for any young athletes between the ages of 14-18 who are serious about developing holistically in their chosen sport. Practice focuses primarily upon the physical, technical and tactical aspects – Evolve One™ is intentionally targeted at the psycho-emotional elements in an enriching experience where athletes engage in a deep and contextualised program with our Evolve mentor.</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">How long does the program last for?</h3>
            <p className="text-gray-700">8 weeks</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">How much is a program?</h3>
            <p className="text-gray-700">$950</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">About the delivery of the program</h3>
            <p className="text-gray-700 mb-2">Using a platform of transformative behavioural and attitudinal change, our mentor will lead the class of the athlete through the in-depth program involving the following steps:</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Workbook completion</li>
              <li>Initial feedback</li>
              <li>Positive parent-child engagement piece</li>
              <li>Mentor call</li>
              <li>Transformative challenge-orientated task</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Tailor-made Programs</h3>
            <p className="text-gray-700">There are 4 programs within the Evolve One™ program. These are tailor-made to the specific needs and pathway of youth athletes.</p>
          </div>
        </div>
      </section>

      {/* Evolve Squad Details Section */}
      <section id="evolve-squad-details" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-600 mb-6">🤝 Evolve Squad™</h2>
          <p className="text-gray-700 text-lg mb-4 font-semibold">Stronger together. Growing as one.</p>
          <p className="text-gray-700 text-lg mb-4">A small-group experience that combines personal growth with the power of a supportive team. Learn, challenge, and inspire each other while developing the skills and mindset you need to succeed — together.</p>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Who is the program for?</h3>
            <p className="text-gray-700 mb-2">All young athletes between the ages of 14-18 who are serious about developing holistically in their chosen sport. Practice focuses primarily upon the physical, technical and tactical aspects – Evolve Squad™ is targeted at the psycho-emotional elements in an enriching small group experience where athletes learn from one another and our Evolve mentor.</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">How long does the program last for?</h3>
            <p className="text-gray-700">5 classes of 1 hour</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">How much is a program?</h3>
            <p className="text-gray-700">$350</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">About the delivery of the program</h3>
            <p className="text-gray-700 mb-2">Using a platform of transformative behavioural and attitudinal change, our mentor will lead the class of young athletes through 5 weekly classes lasting around 1 hour. Each class is then followed by a challenge-orientated task.</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Tailor-made Programs</h3>
            <p className="text-gray-700">There are 4 Programs within the Evolve Squad™ program. These are tailor-made to the specific needs and pathway of youth athletes.</p>
          </div>
        </div>
      </section>

      {/* Evolve Pro Details Section */}
      <section id="evolve-pro-details" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-600 mb-6">🚀 Evolve Pro™</h2>
          <p className="text-gray-700 text-lg mb-4 font-semibold">For athletes ready to lead—on the field and in life.</p>
          <p className="text-gray-700 text-lg mb-4">Evolve Pro™ is designed for high-performing young athletes who want to level up their mindset and lead with intention. With strategic coaching and deep mentorship, athletes learn how to manage pressure, stay focused, and unlock their full potential—not just in their sport, but in every area of life.</p>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Who is the program for?</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Young male soccer athletes aged 16-21 who have:</li>
              <ul className="list-disc pl-8">
                <li>Represented their country at Youth National level</li>
                <li>Committed to a Div 1 or Ivy League school</li>
                <li>MLS contracted</li>
                <li>Experienced a trial with an elite European club</li>
              </ul>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Program Length</h3>
            <p className="text-gray-700">10 weeks</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Cost</h3>
            <p className="text-gray-700">$1250</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">How the Program Works</h3>
            <p className="text-gray-700 mb-2">Using a platform of transformative behavioural and attitudinal change, our mentor will lead the elite athlete through 10 weekly calls. Each call is then followed by a challenge-orientated task.</p>
            <p className="text-gray-700 mb-2">Topics will be chosen after the initial Assessment call so that our program is tailor-made to the specific needs and pathway of the athlete. Topics range from:</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Performance anxiety</li>
              <li>Routines and mindsets</li>
              <li>Communication and presenting yourself correctly in the world of elite soccer</li>
              <li>Strengthening strengths in a context of comparison</li>
              <li>Excelling within a team environment</li>
              <li>Dealing with the uncontrollable</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mentor</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>UEFA Pro License; MSc in Coaching; MSc in Mentoring; SportNI Elite Coach Developer</li>
              <li>Worked in 40 countries for 25 years – 17 National Associations and professional clubs in 23 countries</li>
              <li>Delivered through the IFA Elite boys' coach mentoring programme for 5 years</li>
              <li>Coach mentor for professional/national team coaches currently in 10 countries from Belgium to Zambia</li>
              <li>Currently delivering the Elite Academy Directors course at the Estonia FA 2022-2025 and educator on UEFA Pro License course</li>
              <li>Ex-youth National team and Irish Premier League player</li>
            </ul>
          </div>
        </div>
      </section>

      {/* EvolveAthlete Details Section */}
      <section id="evolve-athlete-details" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-600 mb-6">🎓 EvolveAthlete™</h2>
          <p className="text-gray-700 text-lg mb-4 font-semibold">Connect with collegiate athletes who've been where you are.</p>
          <p className="text-gray-700 text-lg mb-4">EvolveAthlete™ is a program designed for high school athletes to connect with current collegiate athletes. Get real insights, guidance, and mentorship from student-athletes who've successfully navigated the path you're on.</p>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Who is the program for?</h3>
            <p className="text-gray-700 mb-2">High school athletes aged 14-18 who are serious about playing at the collegiate level and want to learn from those who have already made the transition successfully.</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Time</h3>
            <p className="text-gray-700">Depends on package chosen</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Cost</h3>
            <p className="text-gray-700">Depends on package chosen</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">About the delivery of the program</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Using a platform focused on mentorship and lived experience, current collegiate athletes guide high school student-athletes through structured sessions lasting around 1 hour each. Each session blends real insights into the recruiting process and college life with interactive discussion.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              The program focuses on areas such as:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Recruitment & College Pathway</li>
              <li>Life as a College Athlete</li>
              <li>Performance & Preparation</li>
              <li>Character & Personal Growth</li>
              <li>Parent-Side Guidance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-16 text-center text-white" style={{background: '#0f172a'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5">
            Find Your Perfect College Mentor in 45 Seconds
          </h2>
          <p className="text-lg md:text-xl mb-10 opacity-90">
            Answer 6 quick questions → get matched + 20% off your package
          </p>
          
          <div id="quizApp" className="max-w-2xl mx-auto"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <img 
                  src="/Evolve-Academy-Logo-with-tree-transparent-white.png" 
                  alt="Evolve Academy" 
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Unlock your athletic potential without sacrificing your personal growth.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-6">Programs</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">🌱 Evolve One™</a></li>
                <li><a href="#" className="hover:text-white transition-colors">🤝 Evolve Squad™</a></li>
                <li><a href="#" className="hover:text-white transition-colors">🚀 Evolve Pro™</a></li>
                <li><a href="#" className="hover:text-white transition-colors">🎓 EvolveAthlete™</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-6">Company</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mentors</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-6">Resources</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Evolve Academy International. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      {videoModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeVideoModal}
        >
          <div 
            className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-all duration-200"
            >
              <X size={24} />
            </button>
            
            {/* Video container */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              {selectedVideo && (
                <video
                  className="absolute inset-0 w-full h-full object-contain"
                  controls
                  autoPlay
                  onError={(e) => {
                    console.error('Video failed to load:', e);
                  }}
                >
                  <source src={selectedVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Typeform Embed Script */}
      <Script
        src="https://cdn.jsdelivr.net/npm/@typeform/embed@2/build/dist/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          initializeTypeform();
        }}
      />
    </div>
  )
}

const faqs = [
  {
    question: "What age groups do you work with?",
    answer: "We work with young athletes aged 13-25, from high school through college and early professional levels. Our programs are designed to meet athletes at their current stage of development."
  },
  {
    question: "How is this different from regular sports coaching?",
    answer: "While traditional coaching focuses primarily on technical and tactical skills, Evolve Academy emphasizes holistic development including mental performance, leadership, life skills, and personal growth alongside athletic development."
  },
  {
    question: "What sports do you cover?",
    answer: "The sport we currently cover is soccer; we will be launching into other sports in the near future."
  },
  {
    question: "How long are the programs?",
    answer: "The program length depends on the program you choose. Programs are from 5 weeks to 10 weeks."
  },
  {
    question: "What happens in a typical session?",
    answer: "Sessions are 60-90 minutes and include a mix of mental performance training, goal setting, skill development planning, and personal growth discussions. Each session is tailored to your current needs and goals."
  },
  {
    question: "Do you offer scholarships or financial assistance?",
    answer: "Yes, we believe in making our programs accessible. We offer partial scholarships based on need and merit. Contact us to discuss your situation and available options."
  }
] 