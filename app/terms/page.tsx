const lastUpdated = 'January 20, 2026'

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/">
              <img src="/logo.png" alt="Evolve Academy" className="h-12" />
            </a>
            <a 
              href="/"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Back to Home
            </a>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using the Evolve Academy International website and services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Program Enrollment</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Enrollment in our programs (🌱 Evolve One™, 🤝 Evolve Squad™, 🚀 Evolve Pro™) is subject to availability and acceptance by Evolve Academy International.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>All program fees must be paid in full before program commencement</li>
              <li>Program schedules are subject to change with reasonable notice</li>
              <li>Participants must meet age and eligibility requirements for their chosen program</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cancellation and Refund Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cancellation requests must be submitted in writing:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>More than 14 days before program start: Full refund minus administrative fee</li>
              <li>7-14 days before program start: 50% refund</li>
              <li>Less than 7 days before program start: No refund</li>
              <li>Evolve Academy reserves the right to cancel programs due to insufficient enrollment</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Code of Conduct</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All participants are expected to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Treat all coaches, mentors, and fellow participants with respect</li>
              <li>Arrive on time and prepared for all sessions</li>
              <li>Follow safety guidelines and instructions</li>
              <li>Maintain a positive attitude and commitment to personal growth</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Liability and Safety</h2>
            <p className="text-gray-700 leading-relaxed">
              Participation in Evolve Academy programs involves physical activity. Participants engage at their own risk. Evolve Academy International, its staff, and mentors are not liable for injuries that may occur during program activities. All participants must have appropriate insurance coverage.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All content, materials, and methodologies used in Evolve Academy programs are proprietary to Evolve Academy International and may not be reproduced, distributed, or used for commercial purposes without written permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Privacy and Data Protection</h2>
            <p className="text-gray-700 leading-relaxed">
              We are committed to protecting your privacy. Please refer to our Privacy Policy for detailed information about how we collect, use, and protect your personal information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              Evolve Academy International reserves the right to modify these terms at any time. Updated terms will be posted on our website and participants will be notified of significant changes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              For questions about these terms and conditions, please contact us at info@evolveacademyinternational.com
            </p>
          </div>

          <div className="border-t pt-6">
            <p className="text-sm text-gray-500">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 