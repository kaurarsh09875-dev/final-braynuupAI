import React from 'react';
import './Courses.css';

const COURSES = [
  {
    id: 'ai-ml-bootcamp',
    title: 'Complete AI & Machine Learning Bootcamp',
    short: 'Deep learning, NLP, CV — projects & career support',
    level: 'Intermediate',
    duration: '45 hours',
    price: '₹19,999'
  },
  {
    id: 'fullstack-ai',
    title: 'Full Stack Engineer with AI',
    short: 'MERN + AI integrations, production-ready apps',
    level: 'Beginner → Advanced',
    duration: '60 hours',
    price: '₹14,999'
  },
  {
    id: 'devops-ai',
    title: 'DevOps with AI-driven Monitoring',
    short: 'CI/CD, Kubernetes, infra as code and AI ops',
    level: 'Advanced',
    duration: '30 hours',
    price: '₹12,499'
  },
  {
    id: 'product-ai',
    title: 'Product Management with AI',
    short: 'Product strategy, analytics and AI tooling',
    level: 'All Levels',
    duration: '20 hours',
    price: '₹9,999'
  }
];

function Courses() {
  return (
    <div className="courses-page">
      <section className="page-hero">
        <div className="container">
          <h1>Our Courses</h1>
          <p>Explore World-Class AI Programs designed for real jobs.</p>
        </div>
      </section>

      <section className="courses-listing">
        <div className="container">
          {COURSES.map((c) => (
            <div key={c.id} className="course-item">
              <h2>{c.title}</h2>
              <p>{c.short}</p>
              <div style={{display: 'flex', gap: 12, marginTop: 12, alignItems: 'center'}}>
                <span style={{fontSize: '0.95rem', color: 'var(--text-gray)'}}>{c.level} • {c.duration}</span>
                <strong style={{marginLeft: 'auto'}}>{c.price}</strong>
              </div>
              <div style={{marginTop: 18}}>
                <button className="enroll-btn" onClick={() => window.location.href = `/courses/${c.id}`}>
                  View Course
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Courses;
