import { FaFileAlt, FaChartBar, FaCalculator, FaUsers, FaAward, FaBook } from 'react-icons/fa'

export default function Portfolio() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Portfolio & Work Samples</h1>
            <p className="text-xl text-primary-50">
              A showcase of my academic projects, skills, and professional development in accounting
            </p>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-2 text-center mb-12">Technical Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card">
              <div className="flex items-center gap-3 mb-3">
                <FaCalculator className="text-primary-600 text-2xl" />
                <h3 className="text-xl font-bold">Software & Tools</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Microsoft Excel - Proficient</li>
                <li>• Microsoft PowerPoint - Proficient</li>
                <li>• Microsoft Word - Proficient</li>
                <li>• Tableau - Proficient</li>
              </ul>
            </div>

            <div className="card">
              <div className="flex items-center gap-3 mb-3">
                <FaChartBar className="text-primary-600 text-2xl" />
                <h3 className="text-xl font-bold">Accounting Skills</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Financial Reporting</li>
                <li>• Budgeting</li>
                <li>• Data Management</li>
                <li>• Compliance Tracking</li>
              </ul>
            </div>

            <div className="card">
              <div className="flex items-center gap-3 mb-3">
                <FaFileAlt className="text-primary-600 text-2xl" />
                <h3 className="text-xl font-bold">Soft Skills</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Leadership</li>
                <li>• Analytical Thinking</li>
                <li>• Team Collaboration</li>
                <li>• Communication</li>
                <li>• Problem Solving</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Projects */}
      <section className="bg-gray-100 section-container">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-2 text-center mb-12">Academic Projects & Coursework</h2>
          
          <div className="space-y-6">
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <FaFileAlt className="text-primary-600 text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Financial Auditing & Accounts Receivable Management</h3>
                  <p className="text-gray-600 mb-3">Alpha Delta Pi Sorority - Finance Specialist</p>
                  <p className="text-gray-700 leading-relaxed">
                    Managing financial operations for 400+ members with over $900,000 in annual dues. Audit monthly 
                    transactions to ensure compliance with internal controls and accuracy. Developed comprehensive 
                    financial reports to enhance transparency and operational efficiency. Implemented incentive 
                    programs that improved payment compliance by 5%, demonstrating ability to identify and reduce 
                    operational risks.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Auditing</span>
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Financial Reporting</span>
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Internal Controls</span>
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Process Improvement</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <FaUsers className="text-primary-600 text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Large-Scale Event Coordination & Data Management</h3>
                  <p className="text-gray-600 mb-3">SBS Ambassador Event Coordinator</p>
                  <p className="text-gray-700 leading-relaxed">
                    Coordinate over 10 events per semester, managing complex logistics for 100-500 attendees. 
                    Streamline communication for 30+ team members, improving collaboration and operational efficiency. 
                    Oversee event marketing and implement data tracking systems to support recruitment metrics and 
                    program evaluation. Developed strong project management and analytical skills in fast-paced environment.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Project Management</span>
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Data Tracking</span>
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Team Leadership</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <FaAward className="text-primary-600 text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Team Leadership & Training</h3>
                  <p className="text-gray-600 mb-3">Clark Recreation - Lead Lifeguard & Swim Instructor</p>
                  <p className="text-gray-700 leading-relaxed">
                    Supervised a team of 8+ lifeguards over five years, ensuring 100% adherence to safety protocols 
                    with zero major incidents. Trained 15+ new staff members in operational procedures, promoting 
                    compliance and consistent performance. Adapted swim instruction for over 60 students with varying 
                    skill levels, demonstrating ability to assess risk and ensure safe environments. Developed strong 
                    leadership, communication, and problem-solving skills.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Leadership</span>
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Training & Development</span>
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Compliance</span>
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Risk Management</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relevant Coursework */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-2 text-center mb-12">Relevant Coursework</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-xl font-bold text-primary-600 mb-4">Accounting Courses</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Principles of Federal Taxation</li>
                <li>• Intermediate Financial Accounting</li>
                <li>• Introduction to Managerial Accounting</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-primary-600 mb-4">Business Analytics</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Analytical Methods for Business</li>
                <li>• Statistical Inference in Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Development */}
      <section className="bg-gray-100 section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 text-center mb-12">Professional Development</h2>
          
          <div className="space-y-6">
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <FaAward className="text-primary-600 text-3xl" />
                <h3 className="text-xl font-bold">Academic Honors & Scholarships</h3>
              </div>
              <ul className="text-gray-700 leading-relaxed space-y-2 list-disc list-inside">
                <li>Dean's List With Distinction</li>
                <li>Wildcat Tuition Award Recipient</li>
                <li>Innovative Circle Scholarship</li>
                <li>Eller Multicultural Scholar</li>
              </ul>
            </div>

            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <FaBook className="text-primary-600 text-3xl" />
                <h3 className="text-xl font-bold">Professional Involvement</h3>
              </div>
              <ul className="text-gray-700 leading-relaxed space-y-2 list-disc list-inside">
                <li>Student Alumni Ambassadors - Active Member</li>
                <li>Accounting Student Association - Member</li>
                <li>Ronald McDonald House of Charities - Volunteer</li>
                <li>Girl Scouts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card bg-primary-50 border-2 border-primary-200">
            <h2 className="heading-3 text-primary-800 mb-4">Interested in Learning More?</h2>
            <p className="text-lg text-gray-700 mb-6">
              I'm happy to provide additional details about my projects, coursework, or technical skills.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn-primary">
                Get In Touch
              </a>
              <a href="/resume" className="btn-secondary">
                View Full Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

