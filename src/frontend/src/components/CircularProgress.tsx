import React from 'react';

interface CircularProgressProps {
  progress: number;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({ progress }) => {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="circular-progress">
      <svg width="150" height="150" viewBox="0 0 150 150">
        <circle
          className="circular-progress-background"
          cx="75"
          cy="75"
          r={radius}
          fill="none"
          stroke="var(--progress-bg)"
          strokeWidth="10"
        />
        <circle
          className="circular-progress-bar"
          cx="75"
          cy="75"
          r={radius}
          fill="none"
          stroke="var(--accent-color)"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform="rotate(-90 75 75)"
        />
        <text
          x="75"
          y="75"
          textAnchor="middle"
          dominantBaseline="middle"
          className="circular-progress-text"
        >
          {Math.round(progress)}%
        </text>
      </svg>
    </div>
  );
};