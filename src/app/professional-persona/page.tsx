export default function ProfessionalPersona() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Professional Persona Evolution</h1>
            <p className="text-xl text-primary-50">
              Understanding my professional reputation and identity as I pursue excellence in accounting and audit
            </p>
          </div>
        </div>
      </section>

      {/* Introduction/Frame Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="card">
            <h2 className="heading-3 mb-6 text-primary-600">The Importance of Professional Reputation</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                As I prepare to enter the accounting and audit profession, I recognize that understanding and 
                cultivating my professional reputation is critical to achieving my career goals. In a field built 
                on trust, integrity, and precision, how others perceive me is just as important as my technical 
                competencies.
              </p>
              <p>
                Throughout my academic journey, I have devoted considerable reflection to understanding the 
                relationship between my personal identity and my professional reputation. This analysis has revealed 
                key insights about my communication style, core values, and developmental areas—each of which shapes 
                how I am perceived by colleagues, professors, and future employers.
              </p>
              <p>
                This professional persona evolution represents not only where I am today but also forecasts where 
                I am headed. By intentionally aligning my identity with my desired reputation, I can ensure that I 
                present myself authentically while building the professional image necessary for success in 
                accounting and audit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Developmental Foundations */}
      <section className="bg-gray-100 section-container">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-2 text-center mb-12">Three Developmental Foundations</h2>

          {/* Foundation 1: Communication Style */}
          <div className="card mb-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="heading-3 text-primary-600 mb-4">Communication Style</h3>
                
                <div className="mb-6">
                  <h4 className="text-xl font-bold mb-3">My Identity</h4>
                  <p className="text-gray-700 leading-relaxed">
                    I view myself as a thoughtful and deliberate communicator. I prefer to listen carefully before 
                    speaking, ensuring that I fully understand a situation before contributing. I value clarity and 
                    precision in my communication, especially when discussing complex financial concepts.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-bold mb-3">Others' Perception</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Based on feedback from peers and professors, others perceive me as professional and articulate. 
                    However, some have noted that I can be reserved in group settings, particularly when I'm still 
                    processing information. While this is seen as thoughtful, I've learned that in fast-paced 
                    professional environments, I need to balance reflection with timely contribution.
                  </p>
                </div>

                <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded">
                  <h4 className="font-bold text-primary-800 mb-2">Evidence & Anecdote</h4>
                  <p className="text-gray-700 italic leading-relaxed">
                    "This one time during a group project in my auditing class, our team was struggling to reconcile 
                    a complex financial statement discrepancy. While others were quickly suggesting solutions, I took 
                    time to carefully review all the documentation. When I finally spoke up, I was able to identify 
                    the root cause—a subtle classification error that others had missed. This experience reinforced 
                    that my deliberate approach adds value, but also taught me the importance of communicating my 
                    thought process along the way so others understand I'm actively engaged."
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="text-xl font-bold mb-3">Alignment Strategy</h4>
                  <p className="text-gray-700 leading-relaxed">
                    To align my identity with my desired reputation, I'm working on being more vocal about my thinking 
                    process, even when I haven't reached a final conclusion. This demonstrates engagement while 
                    maintaining my thoughtful approach. In professional settings, I aim to balance careful analysis 
                    with timely communication, ensuring I contribute meaningfully without sacrificing accuracy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Foundation 2: Core Values */}
          <div className="card mb-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div className="flex-1">
                <h3 className="heading-3 text-primary-600 mb-4">Core Values</h3>
                
                <div className="mb-6">
                  <h4 className="text-xl font-bold mb-3">Key Adjectives</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['Meticulous', 'Ethical', 'Dependable', 'Analytical', 'Growth-Oriented'].map((value) => (
                      <span key={value} className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full font-medium">
                        {value}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-bold mb-3">My Identity</h4>
                  <p className="text-gray-700 leading-relaxed">
                    These five adjectives represent the core of who I am professionally. I believe that attention to 
                    detail, ethical conduct, and reliability are non-negotiable in accounting. My analytical mindset 
                    drives me to dig deeper into financial data, and my commitment to growth ensures I never become 
                    complacent.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-bold mb-3">Others' Perception</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Feedback from peers and instructors confirms that I am seen as reliable and detail-oriented. 
                    However, I've learned that my strong focus on getting things "perfect" can sometimes be perceived 
                    as inflexibility or slowness. While high standards are essential in accounting, I recognize the 
                    need to balance perfection with efficiency in professional practice.
                  </p>
                </div>

                <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded">
                  <h4 className="font-bold text-primary-800 mb-2">Evidence & Anecdote</h4>
                  <p className="text-gray-700 italic leading-relaxed">
                    "This one time during our intermediate accounting course, I was assigned to prepare a comprehensive 
                    financial analysis. I spent hours ensuring every calculation was precise and every reference was 
                    properly documented. When I submitted the assignment, my professor commended me for thoroughness 
                    but also noted that in a real audit environment, I would need to prioritize tasks based on 
                    materiality. This feedback was eye-opening—it showed me that being meticulous doesn't mean treating 
                    every detail equally, but rather applying professional judgment about where precision matters most."
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="text-xl font-bold mb-3">Alignment Strategy</h4>
                  <p className="text-gray-700 leading-relaxed">
                    I'm working on developing my professional judgment to know when perfectionism serves the work and 
                    when it hinders progress. By learning to assess materiality and risk, I can maintain my high 
                    standards while working more efficiently—a balance that will be crucial in my audit career.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Foundation 3: Adaptability and Collaboration */}
          <div className="card mb-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div className="flex-1">
                <h3 className="heading-3 text-primary-600 mb-4">Adaptability & Collaboration</h3>
                
                <div className="mb-6">
                  <h4 className="text-xl font-bold mb-3">Discovery</h4>
                  <p className="text-gray-700 leading-relaxed">
                    One of the most important lessons I've learned this semester is the critical role of adaptability 
                    and collaboration in professional success. In the classroom, I often preferred working independently, 
                    believing I could produce better results on my own. However, I've come to realize that the 
                    accounting profession—especially audit—relies heavily on teamwork and the ability to adapt to 
                    different working styles and client needs.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-bold mb-3">My Identity</h4>
                  <p className="text-gray-700 leading-relaxed">
                    I now see myself as someone who values independent excellence but recognizes the power of 
                    collaborative success. I appreciate diverse perspectives and understand that the best outcomes 
                    often emerge from team efforts where different strengths complement each other.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-bold mb-3">Others' Perception</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Initially, some peers viewed me as someone who preferred to work alone. However, as I've become 
                    more intentional about collaboration, feedback has shifted. Teammates now describe me as someone 
                    who brings structure and reliability to group projects while being open to others' ideas and 
                    approaches.
                  </p>
                </div>

                <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded">
                  <h4 className="font-bold text-primary-800 mb-2">Evidence & Anecdote</h4>
                  <p className="text-gray-700 italic leading-relaxed">
                    "This one time in my accounting systems class, our team had to implement an integrated financial 
                    reporting system. Each member had different technical skills and preferred different approaches. 
                    Initially, I found this frustrating because I wanted to follow what I believed was the 'right' 
                    method. However, when I opened myself to listening to my teammates' suggestions, we discovered a 
                    hybrid approach that combined the best elements of our different ideas. The final project was 
                    superior to anything I could have created alone, and I learned that collaboration isn't about 
                    compromising quality—it's about achieving better results through diverse expertise."
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="text-xl font-bold mb-3">Alignment Strategy</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Moving forward, I'm committed to actively seeking collaborative opportunities and viewing them as 
                    chances to grow rather than obstacles to efficiency. In audit teams, I will leverage my strengths 
                    in organization and attention to detail while remaining flexible and open to different approaches. 
                    This adaptability will be essential as I work with diverse clients and team members throughout my 
                    career.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="card bg-primary-50 border-2 border-primary-200">
            <h2 className="heading-3 text-primary-800 mb-6">Key Takeaways & Path Forward</h2>
            
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-xl font-bold text-primary-700 mb-3">Key Takeaways</h3>
                <ul className="space-y-2 list-disc list-inside pl-4">
                  <li>My thoughtful communication style is a strength, but I must balance reflection with timely contribution</li>
                  <li>High standards and attention to detail are essential, but professional judgment determines where to apply them</li>
                  <li>Collaboration and adaptability are not compromises—they are multipliers of individual excellence</li>
                  <li>Aligning my identity with my desired reputation requires intentional action and continuous self-reflection</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary-700 mb-3">Strategy to Achieve My Best Professional Image</h3>
                <ul className="space-y-2 list-disc list-inside pl-4">
                  <li>Actively communicate my thought process during collaborative work to demonstrate engagement</li>
                  <li>Develop professional judgment skills to balance perfectionism with efficiency</li>
                  <li>Seek diverse team experiences to strengthen collaboration and adaptability</li>
                  <li>Maintain high ethical standards and meticulous work while being flexible in approach</li>
                  <li>Regularly seek feedback from peers, supervisors, and mentors to ensure my reputation aligns with my goals</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary-700 mb-3">Next Steps</h3>
                <ol className="space-y-2 list-decimal list-inside pl-4">
                  <li>Continue building technical accounting and audit skills through coursework and practical experience</li>
                  <li>Seek internship opportunities in public accounting to apply classroom learning in professional settings</li>
                  <li>Join professional organizations (such as state CPA societies) to expand my network and learn from experienced professionals</li>
                  <li>Prepare for the CPA examination and pursue licensure as a cornerstone of professional credibility</li>
                  <li>Document and reflect on professional experiences to continuously refine my persona and ensure reputation alignment</li>
                  <li>Cultivate relationships with mentors who can provide guidance and honest feedback on my professional development</li>
                </ol>
              </div>

              <div className="mt-8 p-6 bg-white rounded-lg border-2 border-primary-300">
                <p className="text-lg font-medium text-primary-800">
                  By understanding the interplay between my identity and reputation, I am better equipped to navigate 
                  the accounting profession with authenticity and intention. This professional persona evolution is not 
                  a destination but a continuous journey—one that I embrace with commitment to excellence, integrity, 
                  and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

