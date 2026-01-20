const lastUpdated = 'January 20, 2026'

export default function Privacy() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect information you provide directly to us, such as when you:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Register for our programs</li>
              <li>Fill out contact forms or request information</li>
              <li>Subscribe to our newsletter</li>
              <li>Communicate with us via email or phone</li>
              <li>Participate in surveys or feedback forms</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Types of Personal Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The personal information we may collect includes:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Name and contact information (email, phone, address)</li>
              <li>Age and date of birth</li>
              <li>Athletic background and experience</li>
              <li>Emergency contact information</li>
              <li>Payment and billing information</li>
              <li>Photos and videos (with consent) for program documentation</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Provide and deliver our programs and services</li>
              <li>Process payments and manage your account</li>
              <li>Communicate with you about programs, updates, and announcements</li>
              <li>Improve our programs and develop new offerings</li>
              <li>Ensure safety and security during program activities</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties except:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>With your explicit consent</li>
              <li>To service providers who assist in our operations (payment processors, email services)</li>
              <li>When required by law or to protect our rights and safety</li>
              <li>In the event of a business transfer or merger</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. Program records may be kept for up to 7 years for administrative and legal purposes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Access and review your personal information</li>
              <li>Request corrections to inaccurate information</li>
              <li>Request deletion of your personal information (subject to legal requirements)</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your personal information</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies and Website Analytics</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may use cookies and similar technologies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Many of our participants are under 18. We obtain parental consent before collecting personal information from minors and take additional precautions to protect children's privacy and safety.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "last updated" date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this privacy policy or our data practices, please contact us at:
              <br />
              Email: privacy@evolveacademyinternational.com
              <br />
              Or use the contact information provided on our main website.
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