'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SubscribePage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const router = useRouter()

  const handleSubscribe = () => {
    // Here you would integrate with your payment processor (Stripe, PayPal, etc.)
    // For now, we'll set the subscription in localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('evolve_subscription', 'active')
      setSubmitted(true)
      // Redirect to home after 2 seconds
      setTimeout(() => {
        router.push('/')
      }, 2000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-600/10 via-primary-600/5 to-white">
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors mb-8"
          >
            ← Back to home
          </Link>

          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 md:p-12">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Subscribe to Evolve Academy
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Unlock access to detailed mentor bios, exclusive content, and personalized mentorship matching.
              </p>
            </div>

            {!submitted ? (
              <div className="max-w-2xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {/* Subscription Tier 1 */}
                  <div className="border-2 border-gray-200 rounded-2xl p-8 hover:border-primary-600 transition-colors">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-primary-600">$29</span>
                      <span className="text-gray-600">/month</span>
                    </div>
                    <ul className="space-y-3 mb-6 text-gray-700">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Access to all mentor bios
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Priority mentor matching
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Monthly mentorship resources
                      </li>
                    </ul>
                    <button
                      onClick={handleSubscribe}
                      className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                    >
                      Subscribe Now
                    </button>
                  </div>

                  {/* Subscription Tier 2 */}
                  <div className="border-2 border-primary-600 rounded-2xl p-8 bg-primary-50 relative">
                    <div className="absolute top-0 right-0 bg-primary-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-2xl text-sm font-semibold">
                      Popular
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-primary-600">$49</span>
                      <span className="text-gray-600">/month</span>
                    </div>
                    <ul className="space-y-3 mb-6 text-gray-700">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Everything in Basic
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Direct mentor access
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Weekly mentorship sessions
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Exclusive content library
                      </li>
                    </ul>
                    <button
                      onClick={handleSubscribe}
                      className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                    >
                      Subscribe Now
                    </button>
                  </div>
                </div>

                <div className="max-w-md mx-auto">
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <p className="text-sm text-gray-500 text-center mb-6">
                    By subscribing, you agree to our Terms of Service and Privacy Policy
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center max-w-2xl mx-auto">
                <div className="mb-6">
                  <svg className="w-16 h-16 text-primary-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Subscription Activated!</h2>
                <p className="text-gray-600 mb-8">
                  You now have access to all mentor bios and exclusive content. Redirecting you to the home page...
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Return to Home
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

