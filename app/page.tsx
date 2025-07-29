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
  X
} from 'lucide-react'

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedMentor, setExpandedMentor] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const toggleMentor = (index: number) => {
    setExpandedMentor(expandedMentor === index ? null : index)
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

      {/* Programs Section */}
      <section id="programs" className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Programs Designed For Your Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Whether you're building your foundation, growing with others, or chasing elite performance — 
              Evolve Academy has the right path for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
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
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="aspect-video bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Video Testimonial</p>
                </div>
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-900 mb-1">Cristiano Oliveria</p>
                <p className="text-gray-600 text-sm">New England Revolution</p>
              </div>
            </div>

            {/* Video Testimonial 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="aspect-video bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Video Testimonial</p>
                </div>
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-900 mb-1">Logan Moniz</p>
                <p className="text-gray-600 text-sm">Boston Bolts</p>
              </div>
            </div>

            {/* Video Testimonial 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="aspect-video bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Video Testimonial</p>
                </div>
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-900 mb-1">Lorenzo Grimaldi</p>
                <p className="text-gray-600 text-sm">Newton North High</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section id="mentors" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Meet Our Mentors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our mentors are experienced professionals dedicated to helping young athletes grow on and off the field.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Mentor 1: Alan Nixon */}
              <div 
                className="bg-white rounded-xl p-10 shadow-sm border border-gray-200 text-center cursor-pointer transition-all duration-300 hover:shadow-lg"
                onClick={() => toggleMentor(1)}
              >
                <img src="/alan-nixon.jpg" alt="Alan Nixon" className="w-32 h-32 rounded-full mx-auto mb-6 object-cover" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Alan Nixon</h3>
                <p className="text-primary-600 font-medium mb-4">UEFA Pro License & Global Coach Educator</p>
                <p className="text-gray-700 leading-relaxed">
                  {expandedMentor === 1 
                    ? "Alan is a former Irish League footballer turned High School teacher, who stepped away from teaching to become a Global Coach Educator. A UEFA Pro Licensed coach, with two Masters degrees in coaching and then mentoring, Alan has now worked frequently in 47 countries over a 25 year period. His unique blend of an elite playing career, with a pre-eminent coach education career blended with excellent academic progress spanning 42 countries allows him a unique perspective on player development."
                    : "Alan is a former Irish League footballer turned High School teacher, who stepped away from teaching to become a Global Coach Educator..."
                  }
                </p>
                {expandedMentor !== 1 && (
                  <p className="text-primary-600 text-sm mt-2">Click to read more</p>
                )}
              </div>
              {/* Mentor 2: Kurtis Millan */}
              <div 
                className="bg-white rounded-xl p-10 shadow-sm border border-gray-200 text-center cursor-pointer transition-all duration-300 hover:shadow-lg"
                onClick={() => toggleMentor(2)}
              >
                <img src="/kurtis-milan.jpg.png" alt="Kurtis Millan" className="w-32 h-32 rounded-full mx-auto mb-6 object-cover" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kurtis Millan</h3>
                <p className="text-primary-600 font-medium mb-4">UEFA A License Coach</p>
                <p className="text-gray-700 leading-relaxed">
                  {expandedMentor === 2 
                    ? "Kurtis has over a decade of work across elite youth academies and club leadership roles in Sweden, the USA, and the UK. An experienced UEFA A licensed coach with a background in Sport & Exercise Science, Kurtis has also served as a Technical Director and General Manager, leading coach education. Currently working as an Individual Development Coach with U19 players at Hammarby IF (Allsvenskan), he specialises in player-centred development, performance analysis, and preparing players for the demands of senior football."
                    : "Kurtis has over a decade of work across elite youth academies and club leadership roles in Sweden, the USA, and the UK..."
                  }
                </p>
                {expandedMentor !== 2 && (
                  <p className="text-primary-600 text-sm mt-2">Click to read more</p>
                )}
              </div>
              {/* Mentor 3: Colin Nixon */}
              <div 
                className="bg-white rounded-xl p-10 shadow-sm border border-gray-200 text-center cursor-pointer transition-all duration-300 hover:shadow-lg"
                onClick={() => toggleMentor(3)}
              >
                <img src="/colin-nixon.jpg" alt="Colin Nixon" className="w-32 h-32 rounded-full mx-auto mb-6 object-cover" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Colin Nixon</h3>
                <p className="text-primary-600 font-medium mb-4">Former Professional & UEFA A License Coach</p>
                <p className="text-gray-700 leading-relaxed">
                  {expandedMentor === 3 
                    ? "Colin is an ex Irish Premier League player, making just under 800 appearances for Glentoran. He currently holds a UEFA A Coaching licence and has managed in both the Irish Premier League and Championship, giving over 30 years' experience at the top end of the game in Northern Ireland. He has also been in charge of various youth academies. His key motivation is to see young players fulfil their potential and become the best version of themselves both on and off the field."
                    : "Colin is an ex Irish Premier League player, making just under 800 appearances for Glentoran..."
                  }
                </p>
                {expandedMentor !== 3 && (
                  <p className="text-primary-600 text-sm mt-2">Click to read more</p>
                )}
              </div>
              {/* Mentor 4: Mario Pruul */}
              <div 
                className="bg-white rounded-xl p-10 shadow-sm border border-gray-200 text-center cursor-pointer transition-all duration-300 hover:shadow-lg"
                onClick={() => toggleMentor(4)}
              >
                <img src="/mario-pruul.jpg" alt="Mario Pruul" className="w-32 h-32 rounded-full mx-auto mb-6 object-cover" style={{objectPosition: '50% 15%'}} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mario Pruul</h3>
                <p className="text-primary-600 font-medium mb-4">Club Director & UEFA A License Coach</p>
                <p className="text-gray-700 leading-relaxed">
                  {expandedMentor === 4 
                    ? "Mario has been involved in soccer for over 20 years. Having retired from playing at the highest level in Estonia, Mario has served as a club director. Mario is a UEFA A licensed coach and is currently completing the UEFA Football Management course."
                    : "Mario has been involved in soccer for over 20 years. Having retired from playing at the highest level in Estonia..."
                  }
                </p>
                {expandedMentor !== 4 && (
                  <p className="text-primary-600 text-sm mt-2">Click to read more</p>
                )}
              </div>
              {/* Mentor 5: Justin Sheppard */}
              <div 
                className="bg-white rounded-xl p-10 shadow-sm border border-gray-200 text-center cursor-pointer transition-all duration-300 hover:shadow-lg"
                onClick={() => toggleMentor(5)}
              >
                <img src="/justin-sheppard.jpg" alt="Justin Sheppard" className="w-32 h-32 rounded-full mx-auto mb-6 object-cover" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Justin Sheppard</h3>
                <p className="text-primary-600 font-medium mb-4">UEFA A License</p>
                <p className="text-gray-700 leading-relaxed">
                  {expandedMentor === 5 
                    ? "In addition to holding a UEFA A Coaching Licence Justin has a BSc in Sport and Exercises obtained from the University of Ulster. Justin is the founder and head coach of JS Soccer Skills which specialises in delivering high quality coaching sessions to youth footballers of all abilities. Justin is also the lead tutor for the Football Management Company delivering the NIFL Scholarship Programme at the National Football Stadium to talented 16-18 year old footballers and is a former Irish FA Primary Schools Coach and Club NI Coach which involved coaching some of the most talented young players in Northern Ireland."
                    : "In addition to holding a UEFA A Coaching Licence Justin has a BSc in Sport and Exercises obtained from the University of Ulster..."
                  }
                </p>
                {expandedMentor !== 5 && (
                  <p className="text-primary-600 text-sm mt-2">Click to read more</p>
                )}
              </div>
              {/* Mentor 6: Christopher Ricardi */}
              <div 
                className="bg-white rounded-xl p-10 shadow-sm border border-gray-200 text-center cursor-pointer transition-all duration-300 hover:shadow-lg"
                onClick={() => toggleMentor(6)}
              >
                <img src="/christopher-ricardi.jpg.png" alt="Christopher Ricardi" className="w-32 h-32 rounded-full mx-auto mb-6 object-cover" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Christopher Ricardi</h3>
                <p className="text-primary-600 font-medium mb-4">Sport Mental Performance Consultant</p>
                <p className="text-gray-700 leading-relaxed">
                  {expandedMentor === 6 
                    ? "Chris is an experienced Sport Mental Performance Consultant working with high level youth, Division I collegiate, and professional teams and athletes. He is also a former soccer coach, with experience coaching at youth, and Division I collegiate levels. He has a Master's in Sport and Exercise Psychology, USSF C Coaching License, and UEFA B Coaching License."
                    : "Chris is an experienced Sport Mental Performance Consultant working with high level youth, Division I collegiate, and professional teams..."
                  }
                </p>
                {expandedMentor !== 6 && (
                  <p className="text-primary-600 text-sm mt-2">Click to read more</p>
                )}
              </div>
              {/* Mentor 7: Placeholder */}
              <div 
                className="bg-white rounded-xl p-10 shadow-sm border border-gray-200 text-center cursor-pointer transition-all duration-300 hover:shadow-lg"
                onClick={() => toggleMentor(7)}
              >
                <img src="/johnny-tuffey.jpg.png" alt="Johnny Tuffey" className="w-32 h-32 rounded-full mx-auto mb-6 object-cover" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Johnny Tuffey</h3>
                <p className="text-primary-600 font-medium mb-4">Professional Player and Crusaders Academy Director</p>
                <p className="text-gray-700 leading-relaxed">
                  {expandedMentor === 7 
                    ? "Johnny specializes in performance coaching and has helped hundreds of young athletes reach their goals through personalized training plans."
                    : "Johnny specializes in performance coaching and has helped hundreds of young athletes..."
                  }
                </p>
                {expandedMentor !== 7 && (
                  <p className="text-primary-600 text-sm mt-2">Click to read more</p>
                )}
              </div>
              {/* Mentor 8: Placeholder */}
              <div 
                className="bg-white rounded-xl p-10 shadow-sm border border-gray-200 text-center cursor-pointer transition-all duration-300 hover:shadow-lg"
                onClick={() => toggleMentor(8)}
              >
                <img src="https://randomuser.me/api/portraits/men/16.jpg" alt="Mentor 8" className="w-32 h-32 rounded-full mx-auto mb-6 object-cover" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kevin Keegan</h3>
                <p className="text-primary-600 font-medium mb-4">Youth Development Specialist</p>
                <p className="text-gray-700 leading-relaxed">
                  {expandedMentor === 8 
                    ? "Kevin is passionate about youth development and has a background in both coaching and education, making him a valuable mentor for young athletes."
                    : "Kevin is passionate about youth development and has a background in both coaching and education..."
                  }
                </p>
                {expandedMentor !== 8 && (
                  <p className="text-primary-600 text-sm mt-2">Click to read more</p>
                )}
              </div>
              {/* Mentor 9: Placeholder */}
              <div 
                className="bg-white rounded-xl p-10 shadow-sm border border-gray-200 text-center cursor-pointer transition-all duration-300 hover:shadow-lg"
                onClick={() => toggleMentor(9)}
              >
                <img src="https://randomuser.me/api/portraits/men/17.jpg" alt="Mentor 9" className="w-32 h-32 rounded-full mx-auto mb-6 object-cover" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mark Austin</h3>
                <p className="text-primary-600 font-medium mb-4">Mental Skills Coach</p>
                <p className="text-gray-700 leading-relaxed">
                  {expandedMentor === 9 
                    ? "Mark helps athletes develop mental toughness and focus, drawing on his experience as a sports psychologist and former collegiate athlete."
                    : "Mark helps athletes develop mental toughness and focus, drawing on his experience as a sports psychologist..."
                  }
                </p>
                {expandedMentor !== 9 && (
                  <p className="text-primary-600 text-sm mt-2">Click to read more</p>
                )}
              </div>
            </div>
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
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Register Your Interest</h2>
            <p className="text-lg text-gray-600">
              To register your interest, please email us at
              <br />
              <a href="mailto:info@evolveacademyinternational.com" className="text-primary-600 underline font-medium">
                info@evolveacademyinternational.com
              </a>
            </p>
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
            <h3 className="text-xl font-bold text-gray-900 mb-2">What is the cost of each unit of the program?</h3>
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
          <h2 className="text-2xl md:text-3xl font-bold text-primary-600 mb-6">Evolve Squad™</h2>
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
            <h3 className="text-xl font-bold text-gray-900 mb-2">What is the cost of each unit of the program?</h3>
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
          <h2 className="text-2xl md:text-3xl font-bold text-primary-600 mb-6">Evolve Pro™: In-Depth</h2>
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
            <p className="text-gray-700 mb-2">Using a platform of transformative behavioural and attitudinal change, our mentor will lead the elite athlete through 9 weekly calls lasting around 30 minutes. Each call is then followed by a challenge-orientated task.</p>
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
              <li>UEFA Pro Licence; MSc in Coaching; MSc in Mentoring; SportNI Elite Coach Developer</li>
              <li>Worked in 40 countries for 25 years – 17 National Associations and professional clubs in 23 countries</li>
              <li>Delivered through the IFA Elite boys' coach mentoring programme for 5 years</li>
              <li>Coach mentor for professional/national team coaches currently in 10 countries from Belgium to Zambia</li>
              <li>Currently delivering the Elite Academy Directors course at the Estonia FA 2022-2025 and educator on UEFA Pro Licence course</li>
              <li>Ex-youth National team and Irish Premier League player</li>
            </ul>
          </div>
        </div>
      </section>
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