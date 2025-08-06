import React, { useEffect, useState, useRef } from 'react';
import { FaComments, FaDraftingCompass, FaTools, FaHome } from 'react-icons/fa';
import './ApproachTimeline.css';

const approachStages = [
  {
    id: 1,
    title: 'Consultation',
    icon: FaComments,
    details: [
      'We begin by listening—understanding your goals, needs, and vision',
      'In-depth client discussions',
      'Site analysis and feasibility studies',
      'Clarity-driven expectations'
    ]
  },
  {
    id: 2,
    title: 'Design Development',
    icon: FaDraftingCompass,
    details: [
      'Our architects and designers translate your ideas into creative solutions.',
      'Conceptual design and layout planning',
      '3D modeling and virtual walkthroughs',
      'Collaborative revisions for alignment'
    ]
  },
  {
    id: 3,
    title: 'Project Execution',
    icon: FaTools,
    details: [
      'Expert project managers bring plans to life—on time, on budget.',
      'Seamless coordination across teams',
      'Construction excellence with real-time updates',
      'Quality checks at every stage'
    ]
  },
  {
    id: 4,
    title: 'Completion & Handover',
    icon: FaHome,
    details: [
      'Final delivery is flawless—functional, safe, and ready to welcome life.',
      'Final inspections and approvals',
      'Post-construction support and maintenance',
      'Continued service for lasting trust'
    ]
  }
];

export default function ApproachTimeline() {
  const [activeStage, setActiveStage] = useState(0);
  const [visible, setVisible] = useState(false);
  const timelineRef = useRef();

  // Use Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.4 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  // Progress animation
  useEffect(() => {
    if (visible) {
      const interval = setInterval(() => {
        setActiveStage(prev => {
          if (prev < approachStages.length) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [visible]);

  return (
    <div className="progress-container row d-flex justify-content-center" ref={timelineRef}>
      {/* Background Line */}
      <div className="progress-line-background">
        
      </div>

      {/* Dynamic Fill Line */}
      <div
        className="progress-line-fill "
        style={{
          width: visible
            ? `${(activeStage - 1) * (100/ (approachStages.length - 1))}%`
            : '0%'
        }}
      ></div>

      {approachStages.map((stage, index) => {
        const Icon = stage.icon;
        return (
          <div className="progress-step-wrapper" key={stage.id}>
            <div className="progress-step completed">
              <div className={`stage-icon-wrapper ${index === activeStage - 1 ? 'active' : ''}`}>
                <Icon className="fs-1" color="#fff" />
              </div>
            </div>

            {index < activeStage && (
              <div className="stage-card">
                <h6 className="fs-5">{stage.title}</h6>
             
                <ul>
                    {stage.details.map((point, i) => (
                    <li className='mb-2 text-start' key={i}>{point}</li>
                  ))}
                </ul>
               
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
