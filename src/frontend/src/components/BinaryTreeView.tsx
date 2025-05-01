import React from 'react';
import './BinaryTreeView.css';

interface Course {
  id: string;
  name: string;
  credits?: number;
}

interface Requirement {
  id: string;
  name: string;
  type: 'all' | 'one_of' | 'n_of';
  courses: Course[];
  n?: number;
}

interface BinaryTreeViewProps {
  requirements: Requirement[];
  completedCourses: string[];
  onCourseToggle: (courseId: string) => void;
}

export const BinaryTreeView: React.FC<BinaryTreeViewProps> = ({
  requirements,
  completedCourses,
  onCourseToggle,
}) => {
  return (
    <div className="pipeline-container">
      <div className="main-pipe" />
      <div className="courses-container">
        {requirements.map((req, reqIndex) => (
          <div key={req.id} className="requirement-section">
            <h3 className="requirement-title">{req.name}</h3>
            <div className="courses-list">
              {req.courses.map((course, courseIndex) => {
                const isCompleted = completedCourses.includes(course.id);
                return (
                  <div key={course.id} className="course-with-pipe">
                    <div className={`branch-pipe ${isCompleted ? 'flowing' : ''}`}>
                      <div className="end-cap-top" />
                    </div>
                    <div className="course-item">
                      <div className="course-content">
                        <input
                          type="checkbox"
                          className="course-checkbox"
                          checked={isCompleted}
                          onChange={() => onCourseToggle(course.id)}
                        />
                        <span className="course-name">{course.name}</span>
                        <span className={`course-status ${isCompleted ? 'complete' : 'incomplete'}`}>
                          {isCompleted ? 'Complete' : 'Incomplete'}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 