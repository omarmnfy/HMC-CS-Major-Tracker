import React from 'react';

interface Course {
  id: string;
  name: string;
  credits?: number;
}

interface Requirement {
  id: string;
  name: string;
  courses: Course[];
  type: 'all' | 'one_of' | 'n_of';
  n?: number;
}

interface RoadmapProps {
  requirements: Requirement[];
  completedCourses: string[];
  onCourseToggle: (courseId: string) => void;
}

export const Roadmap: React.FC<RoadmapProps> = ({
  requirements,
  completedCourses,
  onCourseToggle,
}) => {
  return (
    <div className="requirements-section">
      {requirements.map((requirement) => (
        <div key={requirement.id} className="requirement-card">
          <div className="requirement-header">
            <h3 className="requirement-title">{requirement.name}</h3>
            <div className="requirement-progress">
              {requirement.type === 'n_of' ? (
                `${completedCourses.filter(id => 
                  requirement.courses.some(course => course.id === id)
                ).length}/${requirement.n} Courses`
              ) : (
                `${Math.round(
                  (completedCourses.filter(id =>
                    requirement.courses.some(course => course.id === id)
                  ).length / requirement.courses.length) * 100
                )}% Complete`
              )}
            </div>
          </div>
          <ul className="course-list">
            {requirement.courses.map((course, index) => (
              <React.Fragment key={course.id}>
                {index > 0 && requirement.type === 'one_of' && (
                  <li className="divider or">OR</li>
                )}
                {index > 0 && requirement.type === 'n_of' && (
                  <li className="divider and">AND</li>
                )}
                <li className="course-item">
                  <input
                    type="checkbox"
                    className="course-checkbox"
                    checked={completedCourses.includes(course.id)}
                    onChange={() => onCourseToggle(course.id)}
                  />
                  <span className="course-name">{course.name}</span>
                  <span className={`course-status ${completedCourses.includes(course.id) ? 'complete' : 'incomplete'}`}>
                    {completedCourses.includes(course.id) ? 'Complete' : 'Incomplete'}
                  </span>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};