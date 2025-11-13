'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import Paywall from '../../components/Paywall'

type Mentor = {
  name: string
  slug: string
  title: string
  sport: string
  classYear?: string
  university: string
  universityLogo?: string
  image?: string
  bio: string
  highlights?: string[]
  formLink: string
}

interface MentorContentProps {
  mentor: Mentor
}

export default function MentorContent({ mentor }: MentorContentProps) {
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check subscription status from localStorage
    // In production, this would check against a database/auth system
    if (typeof window !== 'undefined') {
      const subscriptionStatus = localStorage.getItem('evolve_subscription')
      setIsSubscribed(subscriptionStatus === 'active')
      setIsLoading(false)
    }
  }, [])

  // Show paywall if not subscribed
  if (!isLoading && !isSubscribed) {
    return <Paywall contentType={`${mentor.name}'s bio`} />
  }

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-primary-600/10 via-primary-600/5 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#mentors"
            className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
          >
            ← Back to mentors
          </Link>

          <div className="mt-10 bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12 flex flex-col lg:flex-row items-start gap-8">
            <div className="flex flex-col items-center text-center lg:text-left lg:items-start gap-4 flex-shrink-0">
              <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                {mentor.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={mentor.image} alt={mentor.name} className="w-full h-full object-contain" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm font-medium">
                    Headshot coming soon
                  </div>
                )}
              </div>

              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{mentor.name}</h1>
                <p className="text-primary-600 font-semibold mt-1">{mentor.title}</p>
                <p className="text-gray-600 text-sm">
                  {mentor.sport} • {mentor.classYear ?? 'Collegiate Mentor'}
                </p>
              </div>

              <div className="w-full flex flex-col items-center text-center">
                {mentor.universityLogo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={mentor.universityLogo}
                    alt={mentor.university}
                    className="h-14 w-auto mb-3"
                  />
                ) : null}
                <p className="text-gray-700 font-semibold text-sm">
                  {mentor.university}
                </p>
              </div>

              <a
                href={mentor.formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all shadow-sm"
              >
                Match me with {mentor.name.split(' ')[0]}
              </a>
            </div>

            <div className="space-y-8 text-left">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Why connect with {mentor.name.split(' ')[0]}?</h2>
                <p className="text-gray-700 leading-relaxed">{mentor.bio}</p>
              </div>

              {mentor.highlights ? (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">What you can explore together</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    {mentor.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="bg-primary-50 border border-primary-100 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-primary-700 mb-3">How sessions work</h4>
                <ul className="list-disc pl-6 space-y-2 text-primary-900">
                  <li>60-minute video calls tailored to your role, goals, and timeline</li>
                  <li>Real talk on recruiting, campus life, and performance routines</li>
                  <li>Actionable next steps after each conversation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

