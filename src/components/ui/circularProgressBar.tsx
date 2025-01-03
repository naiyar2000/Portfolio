import React from 'react';
import './CircularProgressBar.css';

interface CircularProgressBarProps {
  percentage: number; // Progress percentage (0-100)
  size?: number; // Size of the circular progress bar (default: 100px)
  strokeWidth?: number; // Width of the stroke (default: 10px)
  color?: string; // Progress bar color (default: '#3aafa9')
  labelClassName?: string; // Progress bar label size (default: '')
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  percentage,
  size = 100,
  strokeWidth = 10,
  color = '#3aafa9',
  labelClassName = "",
}) => {
  const radius = (size - strokeWidth) / 2; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const offset = circumference - (percentage / 100) * circumference; // Progress offset

  return (
    <div className="circular-progress-bar" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e0e0e0"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.5s ease' }}
        />
      </svg>
      <div className={`percentage-text ${labelClassName}`}>{percentage}%</div>
    </div>
  );
};

export default CircularProgressBar;
