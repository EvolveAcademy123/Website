'use client'

import Link from 'next/link'
import { Lock } from 'lucide-react'

interface PaywallProps {
  contentType?: string
}

export default function Paywall({ contentType = 'this content' }: PaywallProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-600/10 via-primary-600/5 to-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 md:p-12 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="w-10 h-10 text-primary-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              This Content Requires a Subscription
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Unlock access to detailed mentor bios, exclusive content, and personalized mentorship matching by subscribing to Evolve Academy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10 max-w-3xl mx-auto">
            {/* Basic Plan */}
            <div className="border-2 border-gray-200 rounded-2xl p-6 hover:border-primary-600 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Basic</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-primary-600">$29</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-2 mb-6 text-sm text-gray-700 text-left">
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
                  Monthly resources
                </li>
              </ul>
              <Link
                href="/subscribe"
                className="block w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center"
              >
                Subscribe Now
              </Link>
            </div>

            {/* Premium Plan */}
            <div className="border-2 border-primary-600 rounded-2xl p-6 bg-primary-50 relative">
              <div className="absolute top-0 right-0 bg-primary-600 text-white px-3 py-1 rounded-bl-lg rounded-tr-2xl text-xs font-semibold">
                Popular
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Premium</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-primary-600">$49</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-2 mb-6 text-sm text-gray-700 text-left">
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
                  Weekly sessions
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Exclusive content
                </li>
              </ul>
              <Link
                href="/subscribe"
                className="block w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center"
              >
                Subscribe Now
              </Link>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <Link
              href="/#mentors"
              className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              ← Back to mentors
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

