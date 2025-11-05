'use client'

import React, { useState } from 'react'
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
  const [expandedMentor, setExpandedMentor] = useState<number | null>(null)
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [mentorsSectionOpen, setMentorsSectionOpen] = useState(true)
  const [professionalMentorsOpen, setProfessionalMentorsOpen] = useState(false)
  const [collegiateMentorsOpen, setCollegiateMentorsOpen] = useState(false)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const toggleMentor = (index: number) => {
    setExpandedMentor(expandedMentor === index ? null : index)
  }

  const openVideoModal = (videoSrc: string) => {
    setSelectedVideo(videoSrc)
    setVideoModalOpen(true)
  }

  const closeVideoModal = () => {
    setVideoModalOpen(false)
    setSelectedVideo(null)
  }

  const toggleMentorsSection = () => {
    setMentorsSectionOpen(!mentorsSectionOpen)
  }

  const toggleProfessionalMentors = () => {
    setProfessionalMentorsOpen(!professionalMentorsOpen)
  }

  const toggleCollegiateMentors = () => {
    setCollegiateMentorsOpen(!collegiateMentorsOpen)
  }

  // Video mapping for testimonials
  const videoMapping: { [key: string]: string } = {
    'Cristiano Oliveira': '/cristiano-optimised.mp4',
    'Logan Moniz': '/logan-optimised.mp4',
    'Julian Martinez': '/julian-optimised.mp4'
  }

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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mr-4">
                Meet Our Mentors
            </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our mentors are experienced professionals dedicated to helping young athletes grow on and off the field.
            </p>
          </div>

          {/* Mentor Dropdown */}
          {mentorsSectionOpen && (
            <div className="max-w-4xl mx-auto">
              {/* Professional Mentors Section */}
              <div className="mb-16">
                <div className="flex items-center justify-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mr-4">Professional Mentors</h3>
                  <button
                    onClick={toggleProfessionalMentors}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    {professionalMentorsOpen ? <ChevronUp size={20} className="text-gray-600" /> : <ChevronDown size={20} className="text-gray-600" />}
                  </button>
              </div>
                <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
                  Experienced professionals with UEFA licenses, international coaching experience, and proven track records in developing elite athletes.
                </p>
                {professionalMentorsOpen && (
                  <div className="space-y-4">
                    {/* Mentor 1: Alan Nixon */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                      <div 
                        className="p-6 cursor-pointer transition-all duration-300 hover:bg-gray-50 flex items-center justify-between"
                        onClick={() => toggleMentor(1)}
                      >
                        <div className="flex items-center space-x-4">
                          <img src="/alan-nixon.jpg" alt="Alan Nixon" className="w-16 h-16 rounded-full object-cover" />
                          <div className="text-left">
                            <h3 className="text-xl font-bold text-gray-900">Alan Nixon</h3>
                            <p className="text-primary-600 font-medium">UEFA Pro Licensed & Global Coach Educator</p>
              </div>
                        </div>
                        <div className="flex items-center">
                          {expandedMentor === 1 ? <ChevronUp size={24} className="text-gray-500" /> : <ChevronDown size={24} className="text-gray-500" />}
                        </div>
                      </div>
                      {expandedMentor === 1 && (
                        <div className="px-6 pb-6 border-t border-gray-100">
                          <p className="text-gray-700 leading-relaxed pt-4">
                            Alan is a former Irish League footballer turned High School teacher, who stepped away from teaching to become a Global Coach Educator. A UEFA Pro Licensed coach, with two Masters degrees in coaching and then mentoring, Alan has now worked frequently in 47 countries over a 25 year period. His unique blend of an elite playing career, with a pre-eminent coach education career blended with excellent academic progress spanning 42 countries allows him a unique perspective on player development.
                          </p>
                        </div>
                      )}
            </div>

                    {/* Mentor 2: Kurtis Millan */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                      <div 
                        className="p-6 cursor-pointer transition-all duration-300 hover:bg-gray-50 flex items-center justify-between"
                        onClick={() => toggleMentor(2)}
                      >
                        <div className="flex items-center space-x-4">
                          <img src="/kurtis-milan.jpg.png" alt="Kurtis Millan" className="w-16 h-16 rounded-full object-cover" />
                          <div className="text-left">
                            <h3 className="text-xl font-bold text-gray-900">Kurtis Millan</h3>
                            <p className="text-primary-600 font-medium">UEFA A Licensed Coach</p>
              </div>
                        </div>
                        <div className="flex items-center">
                          {expandedMentor === 2 ? <ChevronUp size={24} className="text-gray-500" /> : <ChevronDown size={24} className="text-gray-500" />}
                        </div>
                      </div>
                      {expandedMentor === 2 && (
                        <div className="px-6 pb-6 border-t border-gray-100">
                          <p className="text-gray-700 leading-relaxed pt-4">
                            Kurtis has over a decade of work across elite youth academies and club leadership roles in Sweden, the USA, and the UK. An experienced UEFA A Licensed coach with a background in Sport & Exercise Science, Kurtis has also served as a Technical Director and General Manager, leading coach education. Currently working as an Individual Development Coach with U19 players at Hammarby IF (Allsvenskan), he specializes in player-centred development, performance analysis, and preparing players for the demands of senior football.
                          </p>
              </div>
                      )}
            </div>

                    {/* Mentor 3: Colin Nixon */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                      <div 
                        className="p-6 cursor-pointer transition-all duration-300 hover:bg-gray-50 flex items-center justify-between"
                        onClick={() => toggleMentor(3)}
                      >
                        <div className="flex items-center space-x-4">
                          <img src="/colin-nixon.jpg" alt="Colin Nixon" className="w-16 h-16 rounded-full object-cover" />
                          <div className="text-left">
                            <h3 className="text-xl font-bold text-gray-900">Colin Nixon</h3>
                            <p className="text-primary-600 font-medium">Former Professional & UEFA A Licensed Coach</p>
              </div>
                        </div>
                        <div className="flex items-center">
                          {expandedMentor === 3 ? <ChevronUp size={24} className="text-gray-500" /> : <ChevronDown size={24} className="text-gray-500" />}
                        </div>
                      </div>
                      {expandedMentor === 3 && (
                        <div className="px-6 pb-6 border-t border-gray-100">
                          <p className="text-gray-700 leading-relaxed pt-4">
                            Colin is an ex Irish Premier League player, making just under 800 appearances for Glentoran. He currently holds a UEFA A Coaching License and has managed in both the Irish Premier League and Championship, giving over 30 years' experience at the top end of the game in Northern Ireland. He has also been in charge of various youth academies. His key motivation is to see young players fulfil their potential and become the best version of themselves both on and off the field.
                          </p>
              </div>
                      )}
            </div>

                    {/* Mentor 4: Mario Pruul */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                      <div 
                        className="p-6 cursor-pointer transition-all duration-300 hover:bg-gray-50 flex items-center justify-between"
                        onClick={() => toggleMentor(4)}
                      >
                        <div className="flex items-center space-x-4">
                          <img src="/mario-pruul.jpg" alt="Mario Pruul" className="w-16 h-16 rounded-full object-cover" style={{objectPosition: '50% 15%'}} />
                          <div className="text-left">
                            <h3 className="text-xl font-bold text-gray-900">Mario Pruul</h3>
                            <p className="text-primary-600 font-medium">Club Director & UEFA A Licensed Coach</p>
          </div>
        </div>
                        <div className="flex items-center">
                          {expandedMentor === 4 ? <ChevronUp size={24} className="text-gray-500" /> : <ChevronDown size={24} className="text-gray-500" />}
                        </div>
                      </div>
                      {expandedMentor === 4 && (
                        <div className="px-6 pb-6 border-t border-gray-100">
                          <p className="text-gray-700 leading-relaxed pt-4">
                            Mario has been involved in soccer for over 20 years. Having retired from playing at the highest level in Estonia, Mario has served as a club director. Mario is a UEFA A Licensed coach and is currently completing the UEFA Football Management course.
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Mentor 5: Justin Sheppard */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                      <div 
                        className="p-6 cursor-pointer transition-all duration-300 hover:bg-gray-50 flex items-center justify-between"
                        onClick={() => toggleMentor(5)}
                      >
                        <div className="flex items-center space-x-4">
                          <img src="/justin-sheppard.jpg" alt="Justin Sheppard" className="w-16 h-16 rounded-full object-cover" />
                          <div className="text-left">
                            <h3 className="text-xl font-bold text-gray-900">Justin Sheppard</h3>
                            <p className="text-primary-600 font-medium">UEFA A Licensed</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          {expandedMentor === 5 ? <ChevronUp size={24} className="text-gray-500" /> : <ChevronDown size={24} className="text-gray-500" />}
                        </div>
                      </div>
                      {expandedMentor === 5 && (
                        <div className="px-6 pb-6 border-t border-gray-100">
                          <p className="text-gray-700 leading-relaxed pt-4">
                            In addition to holding a UEFA A Coaching License Justin has a BSc in Sport and Exercises obtained from the University of Ulster. Justin is the founder and head coach of JS Soccer Skills which specializes in delivering high quality coaching sessions to youth footballers of all abilities. Justin is also the lead tutor for the Football Management Company delivering the NIFL Scholarship Programme at the National Football Stadium to talented 16-18 year old footballers and is a former Irish FA Primary Schools Coach and Club NI Coach which involved coaching some of the most talented young players in Northern Ireland.
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Mentor 6: Christopher Ricardi */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                      <div 
                        className="p-6 cursor-pointer transition-all duration-300 hover:bg-gray-50 flex items-center justify-between"
                        onClick={() => toggleMentor(6)}
                      >
                        <div className="flex items-center space-x-4">
                          <img src="/christopher-ricardi.jpg.png" alt="Christopher Ricardi" className="w-16 h-16 rounded-full object-cover" />
                          <div className="text-left">
                            <h3 className="text-xl font-bold text-gray-900">Christopher Ricardi</h3>
                            <p className="text-primary-600 font-medium">Sport Mental Performance Consultant</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          {expandedMentor === 6 ? <ChevronUp size={24} className="text-gray-500" /> : <ChevronDown size={24} className="text-gray-500" />}
                        </div>
                      </div>
                      {expandedMentor === 6 && (
                        <div className="px-6 pb-6 border-t border-gray-100">
                          <p className="text-gray-700 leading-relaxed pt-4">
                            Chris is an experienced Sport Mental Performance Consultant working with high level youth, Division I collegiate, and professional teams and athletes. He is also a former soccer coach, with experience coaching at youth, and Division I collegiate levels. He has a Master's in Sport and Exercise Psychology, USSF C Coaching License, and UEFA B Coaching License.
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Mentor 7: Jonny Tuffey */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                      <div 
                        className="p-6 cursor-pointer transition-all duration-300 hover:bg-gray-50 flex items-center justify-between"
                        onClick={() => toggleMentor(7)}
                      >
                        <div className="flex items-center space-x-4">
                          <img src="/johnny-tuffey.jpg.png" alt="Jonny Tuffey" className="w-16 h-16 rounded-full object-cover" />
                          <div className="text-left">
                            <h3 className="text-xl font-bold text-gray-900">Jonny Tuffey</h3>
                            <p className="text-primary-600 font-medium">Professional Player and Crusaders Academy Director</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          {expandedMentor === 7 ? <ChevronUp size={24} className="text-gray-500" /> : <ChevronDown size={24} className="text-gray-500" />}
                        </div>
                      </div>
                      {expandedMentor === 7 && (
                        <div className="px-6 pb-6 border-t border-gray-100">
                          <p className="text-gray-700 leading-relaxed pt-4">
                            Jonny's professional playing career has spanned over 20 years, having played in England and Scotland, as well as continuing to play in the Irish Premiership with Crusaders FC. Jonny has gained valuable playing experience at various international underage teams as well as at the senior international level. Jonny is a UEFA A Licensed coach and is currently managing Crusaders Strikers' first team in the Northern Irish Women's Premier League. Jonny's coaching experience also includes serving as the Goalkeeping coach for the Northern Ireland Senior International Women's team and as the Goalkeeping coach for the Northern Ireland boys' NPP.
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Mentor 8: Kevin Keegan */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                      <div 
                        className="p-6 cursor-pointer transition-all duration-300 hover:bg-gray-50 flex items-center justify-between"
                        onClick={() => toggleMentor(8)}
                      >
                        <div className="flex items-center space-x-4">
                          <img src="/kevin-keegan.jpg.png" alt="Kevin Keegan" className="w-16 h-16 rounded-full object-cover" />
                          <div className="text-left">
                            <h3 className="text-xl font-bold text-gray-900">Kevin Keegan</h3>
                            <p className="text-primary-600 font-medium">Former Professional Player</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          {expandedMentor === 8 ? <ChevronUp size={24} className="text-gray-500" /> : <ChevronDown size={24} className="text-gray-500" />}
                        </div>
                      </div>
                      {expandedMentor === 8 && (
                        <div className="px-6 pb-6 border-t border-gray-100">
                          <p className="text-gray-700 leading-relaxed pt-4">
                            Kevin brings a wealth of knowledge and experience as an athlete, mentor and coach. Kevin is an ex-Irish league player with a career lasting over 20 years. He has experience in Mentorship having worked for the Irish Football Associations Ladies program for a number of years and is the current first team coach with AFC Craigavon.
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Mentor 9: Mark Austin */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                      <div 
                        className="p-6 cursor-pointer transition-all duration-300 hover:bg-gray-50 flex items-center justify-between"
                        onClick={() => toggleMentor(9)}
                      >
                        <div className="flex items-center space-x-4">
                          <img src="/mark-austin.jpg.png" alt="Mark Austin" className="w-16 h-16 rounded-full object-cover" />
                          <div className="text-left">
                            <h3 className="text-xl font-bold text-gray-900">Mark Austin</h3>
                            <p className="text-primary-600 font-medium">Experienced Coach & Performance Analyst</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          {expandedMentor === 9 ? <ChevronUp size={24} className="text-gray-500" /> : <ChevronDown size={24} className="text-gray-500" />}
                        </div>
                      </div>
                      {expandedMentor === 9 && (
                        <div className="px-6 pb-6 border-t border-gray-100">
                          <p className="text-gray-700 leading-relaxed pt-4">
                            Mark is an experienced coach with over 20 years of coaching within the UK and Ireland, he has worked at Grassroots clubs and Academy clubs. He is currently working within the women's game in Northern Ireland, working with Camlough Rovers as co-Manager. He specializes in performance analysis and technical and tactical awareness. With a background in Sports Science and Business, Mark has run and owned businesses, which has given him a deep rooted experience of man management, ability to motivate and player/staff development which he uses in his coaching style. His coaching philosophy is based on empathy, compassion and a desire to inspire all players he comes into contact with.
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Mentor 10: Piotr 'Papi' Paprocki */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                      <div 
                        className="p-6 cursor-pointer transition-all duration-300 hover:bg-gray-50 flex items-center justify-between"
                        onClick={() => toggleMentor(10)}
                      >
                        <div className="flex items-center space-x-4">
                          <img src="/piotr-paprocki.jpg" alt="Piotr 'Papi' Paprocki" className="w-16 h-16 rounded-full object-cover" />
                          <div className="text-left">
                            <h3 className="text-xl font-bold text-gray-900">Piotr 'Papi' Paprocki</h3>
                            <p className="text-primary-600 font-medium">Former Professional Basketball Player & Leadership Coach</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          {expandedMentor === 10 ? <ChevronUp size={24} className="text-gray-500" /> : <ChevronDown size={24} className="text-gray-500" />}
                        </div>
                      </div>
                      {expandedMentor === 10 && (
                        <div className="px-6 pb-6 border-t border-gray-100">
                          <p className="text-gray-700 leading-relaxed pt-4">
                            Piotr is a former professional basketball player and U.S. scholarship athlete with over 16 years of experience as a team-building and performance coach. He has worked with national youth teams and professional basketball and football teams across Poland, Belgium, and the United States. Currently, he co-leads an organization in Poland dedicated to helping men in the professional world become more effective leaders through the principles of servant leadership.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Collegiate Mentors Section */}
              <div>
                <div className="flex items-center justify-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mr-4">Collegiate Mentors</h3>
                  <button
                    onClick={toggleCollegiateMentors}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    {collegiateMentorsOpen ? <ChevronUp size={20} className="text-gray-600" /> : <ChevronDown size={20} className="text-gray-600" />}
                  </button>
                </div>
                <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
                  Current and recent collegiate athletes who've successfully navigated the path from high school to college athletics.
                </p>
                {collegiateMentorsOpen && (
                  <div className="space-y-4">
                    {/* Ricky Rollo */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                      <div className="p-6 cursor-pointer transition-all duration-300 hover:bg-gray-50 flex items-center justify-between">
                        <div className="flex items-center space-x-4 flex-1">
                          <img src="/RickyEvolve.png" alt="Ricky Rollo" className="w-16 h-16 rounded-full object-contain" />
                          <div className="text-left flex-1">
                            <h3 className="text-xl font-bold text-gray-900">Ricky Rollo</h3>
                            <p className="text-primary-600 font-medium">Current Student-Athlete</p>
                            <p className="text-gray-500 text-sm">Soccer • 2026 • Physics and Mathematics</p>
                          </div>
                          <div className="flex items-center space-x-4">
                            <img src="/harvard.png" alt="Harvard Logo" className="h-20 w-auto" />
                            <ChevronDown size={24} className="text-gray-500" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Placeholder for additional collegiate mentors */}
                    <div className="bg-gray-50 rounded-xl shadow-sm border-2 border-dashed border-gray-300 p-8 text-center">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-4">
                        <GraduationCap size={32} />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-700 mb-2">More Collegiate Athletes Coming Soon</h4>
                      <p className="text-gray-500">
                        We're actively recruiting current collegiate athletes from top programs to mentor high school students.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
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
          
          {/* Google Form Embed */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLScyX3eVDqT0OnYoQSFufyGYhdG9Y5-3PdkP7BDJ8_k4yhV1aQ/viewform?embedded=true" 
              width="100%" 
              height={1450} 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              className="rounded-lg"
              title="Register Your Interest Form"
            >
              Loading…
            </iframe>
          </div>
          
          {/* Fallback for iframe issues */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 mb-4">
              Having trouble viewing the form?
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScyX3eVDqT0OnYoQSFufyGYhdG9Y5-3PdkP7BDJ8_k4yhV1aQ/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
            >
              Open Form in New Tab
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