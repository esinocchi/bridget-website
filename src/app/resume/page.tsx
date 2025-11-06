import { FaDownload, FaLinkedin } from 'react-icons/fa'

export default function Resume() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Resume</h1>
            <p className="text-xl text-primary-50 mb-8">
              Comprehensive overview of my education, experience, and qualifications
            </p>
            <a 
              href="/resume.pdf" 
              download="Bridget_Hernandez_Resume.pdf"
              className="btn-primary bg-white text-primary-600 hover:bg-gray-100 inline-flex items-center gap-2"
            >
              <FaDownload /> Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* Resume Content */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-xl rounded-lg p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-8 pb-6 border-b-2 border-gray-200">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Bridget Hernandez</h2>
              <p className="text-xl text-primary-600 mb-4">Accounting & Political Science Student</p>
              <div className="flex flex-wrap justify-center gap-4 text-gray-600 text-sm md:text-base">
                <span>Fanwood, NJ</span>
                <span>•</span>
                <span>thebridge214@gmail.com</span>
                <span>•</span>
                <span>908-873-8783</span>
                <span>•</span>
                <a href="https://www.linkedin.com/in/bridget-hernandez-/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline inline-flex items-center gap-1">
                  <FaLinkedin /> LinkedIn
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary-600 mb-4 pb-2 border-b border-primary-200">
                Professional Summary
              </h3>
              <p className="text-gray-700 leading-relaxed">
                High-achieving accounting student with a 4.0 GPA pursuing dual degrees in Accounting and Political Science 
                at the University of Arizona. Demonstrated expertise in financial management through hands-on experience 
                auditing $900,000+ in transactions and developing financial reports. Proven leadership in coordinating 
                large-scale events and managing teams. Strong analytical and problem-solving skills with proficiency in 
                financial reporting, compliance tracking, and data management. Committed to excellence, integrity, and 
                continuous professional development in public accounting.
              </p>
            </div>

            {/* Education */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary-600 mb-4 pb-2 border-b border-primary-200">
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div className="mb-2 md:mb-0">
                      <h4 className="text-lg font-bold">University of Arizona</h4>
                      <p className="text-gray-600">Bachelor of Science in Business Administration</p>
                      <p className="text-gray-600">Bachelor of Arts in Political Science</p>
                      <p className="text-gray-700 font-medium mt-1">Majors: Accounting & Political Science</p>
                    </div>
                    <div className="text-left md:text-right text-gray-600">
                      <p>Tucson, AZ</p>
                      <p>Expected Graduation: May 2027</p>
                      <p className="font-bold text-lg text-primary-600">GPA: 4.0</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <h5 className="font-semibold text-gray-900 mb-2">Relevant Coursework:</h5>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Principles of Federal Taxation</li>
                      <li>Intermediate Financial Accounting</li>
                      <li>Introduction to Managerial Accounting</li>
                      <li>Analytical Methods for Business</li>
                      <li>Statistical Inference in Management</li>
                    </ul>
                  </div>
                  <div className="mt-3">
                    <h5 className="font-semibold text-gray-900 mb-2">Honors & Awards:</h5>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Dean's List With Distinction</li>
                      <li>Wildcat Tuition Award Recipient</li>
                      <li>Innovative Circle Scholarship</li>
                      <li>Eller Multicultural Scholar</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary-600 mb-4 pb-2 border-b border-primary-200">
                Skills & Activities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Technical Skills</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Microsoft Office (Excel, PowerPoint, Word) - Proficient</li>
                    <li>Tableau - Proficient</li>
                    <li>Budgeting & Financial Reporting</li>
                    <li>Data Management</li>
                    <li>Compliance Tracking</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Soft Skills</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Leadership</li>
                    <li>Analytical Thinking</li>
                    <li>Team Collaboration</li>
                    <li>Communication</li>
                    <li>Problem Solving</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-bold text-gray-900 mb-3">Activities & Involvement</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Student Alumni Ambassadors</li>
                  <li>Ronald McDonald House of Charities - Volunteer</li>
                  <li>Accounting Student Association - Member</li>
                  <li>Girl Scouts</li>
                </ul>
              </div>
            </div>

            {/* Experience */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary-600 mb-4 pb-2 border-b border-primary-200">
                Professional & Leadership Experience
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h4 className="text-lg font-bold">Alpha Delta Pi Sorority</h4>
                      <p className="text-gray-600 italic">Finance Specialist, Accounts Receivable</p>
                    </div>
                    <p className="text-gray-600">Tucson, AZ | December 2024 – Present</p>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Audit monthly financial transactions for a chapter of 400+ members, ensuring compliance with internal controls and accuracy across $900,000 in dues</li>
                    <li>Develop financial reports to track payments, enhancing transparency and efficiency in operations</li>
                    <li>Implement incentive programs that improved timely payments by 5%, demonstrating ability to identify and reduce operational risks</li>
                    <li>Collaborated with members to resolve financial concerns, providing support while ensuring chapter financial guidelines were followed</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h4 className="text-lg font-bold">Social and Behavioral Sciences</h4>
                      <p className="text-gray-600 italic">SBS Ambassador Event Coordinator</p>
                    </div>
                    <p className="text-gray-600">Tucson, AZ | August 2024 – Present</p>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Coordinate over 10 events per semester, managing logistics for 100-500 attendees</li>
                    <li>Streamline communication for 30+ members, improving collaboration and operational efficiency</li>
                    <li>Oversee event marketing and data tracking, supporting recruitment and program evaluation</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h4 className="text-lg font-bold">Clark Recreation</h4>
                      <p className="text-gray-600 italic">Lead Lifeguard & Swim Instructor</p>
                    </div>
                    <p className="text-gray-600">Clark, NJ | June 2020 – August 2025</p>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Supervised a team of 8+ lifeguards, ensuring adherence to safety protocols and zero major incidents</li>
                    <li>Trained 15+ new staff in operational procedures, promoting compliance and consistent performance</li>
                    <li>Adapted swim instructions for over 60 students, identifying risks and ensuring a safe environment</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-3 mb-6">Ready to Connect?</h2>
          <p className="text-lg text-gray-700 mb-8">
            I'm actively seeking opportunities in public accounting with a focus on audit and assurance services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="btn-primary">
              Contact Me
            </a>
            <a 
              href="https://www.linkedin.com/in/bridget-hernandez" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <FaLinkedin /> View LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}


