import Image from 'next/image'
import Link from 'next/link'
import { FaChartLine, FaBalanceScale, FaLightbulb, FaLinkedin } from 'react-icons/fa'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Bridget Hernandez
              </h1>
              <p className="text-2xl md:text-3xl text-primary-100">
                Accounting & Political Science Student
              </p>
              <p className="text-lg md:text-xl text-primary-50 leading-relaxed">
                University of Arizona | 4.0 GPA | Dedicated to pursuing excellence in accounting and audit 
                with a focus on integrity, precision, and continuous professional growth.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                  Get In Touch
                </Link>
                <Link href="/resume" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors duration-200">
                  View Resume
                </Link>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl mt-8">
                <Image
                  src="/profile.jpg"
                  alt="Bridget Hernandez"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 text-center mb-12">About Me</h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Hello! My name is Bridget Hernandez, and I am a high-achieving student at the University of Arizona 
              pursuing dual degrees in Accounting (B.S.B.A.) and Political Science (B.A.), with an expected graduation 
              in May 2027. I maintain a perfect 4.0 GPA and have been recognized with multiple honors including 
              Dean's List With Distinction, the Wildcat Tuition Award, Innovative Circle Scholarship, and the 
              Eller Multicultural Scholar designation.
            </p>
            
            <p>
              Currently, I serve as Finance Specialist for Alpha Delta Pi Sorority, where I audit over $900,000 in 
              financial transactions for 400+ members, develop financial reports, and implement process improvements 
              that have increased payment compliance by 5%. This hands-on experience has strengthened my understanding 
              of internal controls, financial reporting, and the importance of accuracy and transparency in accounting.
            </p>
            
            <p>
              Beyond accounting, I am actively involved in campus leadership as an SBS Ambassador Event Coordinator, 
              where I manage logistics for events with 100-500 attendees, and I bring five years of experience as a 
              Lead Lifeguard and Swim Instructor, where I supervised teams and ensured compliance with safety protocols. 
              I am passionate about leveraging my analytical skills, attention to detail, and leadership abilities to 
              pursue a career in public accounting with a focus on audit and assurance services.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-gray-100 section-container">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-2 text-center mb-12">Core Values & Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <FaBalanceScale className="text-primary-600 text-3xl" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">
                Committed to maintaining the highest ethical standards in all professional endeavors, 
                ensuring accuracy and transparency in financial reporting.
              </p>
            </div>

            <div className="card text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <FaChartLine className="text-primary-600 text-3xl" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">
                Dedicated to delivering exceptional work through attention to detail, continuous learning, 
                and pursuit of best practices in accounting and audit.
              </p>
            </div>

            <div className="card text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <FaLightbulb className="text-primary-600 text-3xl" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Growth</h3>
              <p className="text-gray-600">
                Embracing challenges as opportunities for development, constantly seeking to expand 
                knowledge and skills in the evolving field of accounting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Goals Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 text-center mb-12">Professional Goals</h2>
          
          <div className="space-y-6 text-lg text-gray-700">
            <div className="card">
              <h3 className="text-xl font-bold text-primary-600 mb-3">Short-Term Goals</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Continue excelling academically while gaining practical accounting experience</li>
                <li>Secure an internship at a Big 4 or regional public accounting firm</li>
                <li>Expand technical proficiency in accounting software and data analytics tools</li>
                <li>Build a strong professional network through accounting associations and events</li>
                <li>Prepare for and pass the CPA examination upon meeting eligibility requirements</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-primary-600 mb-3">Long-Term Vision</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Launch a career in public accounting with a focus on audit and assurance services</li>
                <li>Obtain CPA licensure and advance to senior positions within the profession</li>
                <li>Become a trusted advisor to clients on complex financial and compliance matters</li>
                <li>Leverage my dual-degree background to work with organizations at the intersection of business and policy</li>
                <li>Give back to the profession through mentorship and community involvement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-xl mb-8 text-primary-50">
            I'm always interested in connecting with professionals in the accounting field 
            and exploring new opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Contact Me
            </Link>
            <a 
              href="https://www.linkedin.com/in/bridget-hernandez-/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors duration-200 gap-2"
            >
              <FaLinkedin className="text-white" /> <span className="text-white">LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

