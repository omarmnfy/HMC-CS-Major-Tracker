import React from 'react';
import { Requirement } from '../types';

interface DashboardProps {
  requirements: Requirement[];
  completedCourses: string[];
  onCourseToggle: (courseId: string) => void;
  selectedCategory: string;
}

export const Dashboard: React.FC<DashboardProps> = ({
  requirements,
  completedCourses,
  onCourseToggle,
  selectedCategory,
}) => {
  const filteredRequirements = selectedCategory === 'All'
    ? requirements
    : requirements.filter(req => req.category === selectedCategory);

  return (
    <div className="dashboard">
      {filteredRequirements.map((requirement) => {
        const completedCount = requirement.courses.filter(course => 
          completedCourses.includes(course.id)
        ).length;
        const progress = (completedCount / requirement.courses.length) * 100;

        return (
          <div key={requirement.name} className="requirement-section">
            <div className="requirement-header">
              <h2>{requirement.name}</h2>
              <div className="requirement-progress">
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="courses-grid">
              {requirement.courses.map((course) => {
                const isCompleted = completedCourses.includes(course.id);
                return (
                  <div
                    key={course.id}
                    className={`course-card ${isCompleted ? 'completed' : ''}`}
                    onClick={() => onCourseToggle(course.id)}
                  >
                    <div className="course-header">
                      <div className="completion-indicator">
                        <div className="check-circle" />
                      </div>
                      <div className="course-info">
                        <h3>{course.name}</h3>
                        <span className="course-id">{course.id}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}; 