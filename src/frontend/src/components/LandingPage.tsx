import React from 'react';
import { motion } from 'framer-motion';

interface LandingPageProps {
  onSelectMajor: (major: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onSelectMajor }) => {
  return (
    <div className="landing-page">
      <motion.div 
        className="landing-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Compass</h1>
        <p className="subtitle">Select your major to begin tracking your academic journey</p>
        
        <div className="major-cards">
          <motion.div 
            className="major-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelectMajor('Computer Science')}
          >
            <div className="major-icon">💻</div>
            <h2>Computer Science</h2>
            <p>Track your progress in the Computer Science major</p>
            <div className="major-card-footer">
              <span>21 Courses</span>
              <span className="arrow">→</span>
            </div>
          </motion.div>
          
          {/* More majors can be added here in the future */}
          <motion.div 
            className="major-card coming-soon"
            whileHover={{ scale: 1.02 }}
          >
            <div className="major-icon">✨</div>
            <h2>More Coming Soon</h2>
            <p>Additional majors will be added in future updates</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}; 