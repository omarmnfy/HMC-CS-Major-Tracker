import React from 'react';
import { CircularProgress } from '@mui/material';

interface SidebarProps {
  progress: number;
  completedCount: number;
  totalCount: number;
  onReset: () => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  progress,
  completedCount,
  totalCount,
  onReset,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="sidebar">
      <div className="progress-section">
        <div className="progress-circle">
          <CircularProgress
            variant="determinate"
            value={progress}
            size={140}
            thickness={5}
            sx={{
              color: '#818cf8',
              background: 'rgba(45, 55, 72, 0.3)',
              borderRadius: '50%',
              padding: '3px',
              '& .MuiCircularProgress-circle': {
                strokeLinecap: 'round',
                transition: 'all 0.3s ease',
              },
            }}
          />
          <div className="progress-text">
            <span className="percentage">{Math.round(progress)}%</span>
          </div>
        </div>

        <div className="progress-stats">
          <div className="stat">
            <span className="value">{completedCount}/{totalCount}</span>
            <span className="label">Courses</span>
          </div>
        </div>
      </div>

      <div className="categories-section">
        <h2>Categories</h2>
        <div className="category-list">
          <button
            className={`category-btn ${selectedCategory === 'All' ? 'active' : ''}`}
            onClick={() => onCategoryChange('All')}
          >
            All Requirements
          </button>
          <button
            className={`category-btn ${selectedCategory === 'Core' ? 'active' : ''}`}
            onClick={() => onCategoryChange('Core')}
          >
            Core Requirements
          </button>
          <button
            className={`category-btn ${selectedCategory === 'Mathematics' ? 'active' : ''}`}
            onClick={() => onCategoryChange('Mathematics')}
          >
            Mathematics
          </button>
          <button
            className={`category-btn ${selectedCategory === 'Electives' ? 'active' : ''}`}
            onClick={() => onCategoryChange('Electives')}
          >
            Electives
          </button>
          <button
            className={`category-btn ${selectedCategory === 'Senior Project' ? 'active' : ''}`}
            onClick={() => onCategoryChange('Senior Project')}
          >
            Senior Project
          </button>
        </div>
      </div>

      <button className="reset-button" onClick={onReset}>
        Reset Progress
      </button>
    </div>
  );
}; 