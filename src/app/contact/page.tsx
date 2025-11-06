'use client'

import { useState } from 'react'
import { FaEnvelope, FaLinkedin, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}`
    )
    
    // Open default email client
    window.location.href = `mailto:thebridge214@gmail.com?subject=${subject}&body=${body}`
    
    // Reset form after a brief delay
    setTimeout(() => {
      setSubmitMessage('Opening your email client...')
      setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => setSubmitMessage(''), 3000)
    }, 500)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Get In Touch</h1>
            <p className="text-xl text-primary-50">
              I'm always interested in connecting with professionals in the accounting field and exploring new opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="heading-3 mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <FaEnvelope className="text-primary-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Email</h3>
                      <a href="mailto:thebridge214@gmail.com" className="text-primary-600 hover:underline">
                        thebridge214@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <FaPhone className="text-primary-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Phone</h3>
                      <a href="tel:+19088738783" className="text-primary-600 hover:underline">
                        908-873-8783
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <FaMapMarkerAlt className="text-primary-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Location</h3>
                      <p className="text-gray-700">Fanwood, NJ</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-primary-50 border-2 border-primary-200">
                <h3 className="font-bold text-primary-800 mb-3">Connect on LinkedIn</h3>
                <p className="text-gray-700 mb-4">
                  Let's connect professionally on LinkedIn to stay in touch and explore opportunities.
                </p>
                <a 
                  href="https://www.linkedin.com/in/bridget-hernandez-/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full inline-flex items-center justify-center gap-2"
                >
                  <FaLinkedin /> View LinkedIn Profile
                </a>
              </div>

              <div className="card">
                <h3 className="font-bold text-gray-900 mb-3">Response Time</h3>
                <p className="text-gray-700">
                  I typically respond to messages within 24-48 hours. For urgent inquiries, please mention it in your message subject.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card">
                <h2 className="heading-3 mb-6">Send Me a Message</h2>
                
                {submitMessage && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    {submitMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="john.doe@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select a subject...</option>
                      <option value="job-opportunity">Job Opportunity</option>
                      <option value="networking">Networking</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="question">Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="Tell me about yourself and how I can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        <FaPaperPlane /> Send Message
                      </>
                    )}
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    * Required fields
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="bg-gray-100 section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-3 mb-6">Looking Forward to Connecting</h2>
          <p className="text-lg text-gray-700 mb-6">
            Whether you're a potential employer, fellow accounting professional, or simply interested in connecting, 
            I'd love to hear from you. I'm particularly interested in opportunities in public accounting with a focus 
            on audit and assurance services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="card">
              <h3 className="font-bold text-primary-600 mb-2">Career Opportunities</h3>
              <p className="text-gray-700 text-sm">
                Open to discussing entry-level positions in public accounting
              </p>
            </div>
            <div className="card">
              <h3 className="font-bold text-primary-600 mb-2">Professional Networking</h3>
              <p className="text-gray-700 text-sm">
                Always interested in expanding my professional network
              </p>
            </div>
            <div className="card">
              <h3 className="font-bold text-primary-600 mb-2">Informational Interviews</h3>
              <p className="text-gray-700 text-sm">
                Happy to learn from experienced professionals in the field
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

