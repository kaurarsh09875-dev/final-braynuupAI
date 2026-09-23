import React, { useState } from 'react';
import './About.css';

const PROGRAMS = [
  { id: 'ai-ml', title: 'AI & Machine Learning', desc: 'Deep learning, NLP, CV — projects & placement.' },
  { id: 'fullstack', title: 'Full Stack Engineer with AI', desc: 'MERN stack + AI integrations.' },
  { id: 'devops', title: 'DevOps & MLOps', desc: 'CI/CD, Kubernetes, AI monitoring.' }
];

const PROJECTS = [
  'https://images.unsplash.com/photo-1504691342899-5f8a6f3f6d09?w=900&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526378725084-5d6f5b0f9f4f?w=900&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505682634904-d7c30e0e1b1f?w=900&q=80&auto=format&fit=crop'
];

function About() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  return (
    <div className="about-new">
      <div className="content-track">
        <section className="about-hero">
          <h1 className="about-title">BraynupAI — Learn, Build, Launch</h1>
          <p className="about-sub">World-class AI education, real projects, and career support — all in one place.</p>

          <div className="feature-cards">
            <div className="feature-card">
              <div className="feat-icon">🎓</div>
              <div className="feat-body">
                <h4>Industry-Ready Curriculum</h4>
                <p>Hands-on courses created by practitioners at top companies.</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feat-icon">💼</div>
              <div className="feat-body">
                <h4>Career Support</h4>
                <p>Resume, mock interviews, and placement assistance.</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feat-icon">🧩</div>
              <div className="feat-body">
                <h4>Project-First Learning</h4>
                <p>Build portfolio-ready projects during the program.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-body">
          <div className="about-grid">
            <div className="about-left">
              <h2>Our Mission</h2>
              <p>
                We empower learners worldwide with practical AI and software programs that are focused on skills employers actually hire for.
                Our courses combine theory, hands-on projects, and mentorship to ensure learners build real products and job-ready portfolios.
              </p>

              <h3>Programs & Pathways</h3>
              <div className="programs-grid">
                {PROGRAMS.map((p) => (
                  <div key={p.id} className="program-card">
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                    <button className="enroll-btn" onClick={() => window.location.href = `/courses`}>View Program</button>
                  </div>
                ))}
              </div>

              <h3>Impact & Outcomes</h3>
              <ul>
                <li>3500+ learners enrolled</li>
                <li>15+ industry projects per student on average</li>
                <li>70% job placement rate within 6 months for graduates</li>
              </ul>
            </div>

            <aside className="about-right">
              <div className="stats">
                <div className="stat-item">
                  <div className="stat-value">3500+</div>
                  <div className="stat-label">Learners</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">15+</div>
                  <div className="stat-label">Projects / Student</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">70%</div>
                  <div className="stat-label">Placement (6 months)</div>
                </div>
              </div>

              <div className="cta-box">
                <h4>Ready to get started?</h4>
                <p>Join a cohort or try a free module today.</p>
                <button className="enroll-btn" onClick={() => window.location.href = '/signup'}>Join Now</button>
              </div>
            </aside>
          </div>
        </section>

        <section className="projects-section">
          <h2>Student Projects</h2>
          <p>Examples of projects built by our learners during real capstones and bootcamps.</p>
          <div className="projects-grid">
            {PROJECTS.map((src, i) => (
              <div key={i} className="project-card">
                <img src={src} alt={`project-${i}`} />
                <div className="project-meta">
                  <h4>Project {i + 1}</h4>
                  <p>Brief description of the project and tech used.</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="team-section">
          <h2>Meet the Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <img src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200&q=80&auto=format&fit=crop" alt="Rahul" />
              <h4>Dr. Rahul Sharma</h4>
              <p>Founder & Lead AI Instructor</p>
            </div>
            <div className="team-card">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80&auto=format&fit=crop" alt="Priya" />
              <h4>Priya Rao</h4>
              <p>Head of Curriculum</p>
            </div>
            <div className="team-card">
              <img src="https://images.unsplash.com/photo-1545996124-1d3c3f0c7b68?w=200&q=80&auto=format&fit=crop" alt="Karan" />
              <h4>Karan Mehta</h4>
              <p>Engineering & Platform</p>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {[{
              q: 'Do you provide placement support?',
              a: 'Yes — resume reviews, mock interviews and employer introductions.'
            },{
              q: 'Are courses self-paced?',
              a: 'Most content is self-paced; cohorts have mentor-led sessions and deadlines.'
            },{
              q: 'Is there a refund policy?',
              a: 'We offer a 30-day money-back guarantee on most paid programs.'
            }].map((f, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`} onClick={() => toggleFaq(i)}>
                <div className="faq-q">{f.q}</div>
                {openFaq === i && <div className="faq-a">{f.a}</div>}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
