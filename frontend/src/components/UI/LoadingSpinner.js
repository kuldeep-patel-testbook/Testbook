import React from 'react';

const LoadingSpinner = ({ size = 'medium', color = '#007bff', text = '' }) => {
  const sizeStyles = {
    small: { width: '16px', height: '16px', borderWidth: '2px' },
    medium: { width: '24px', height: '24px', borderWidth: '3px' },
    large: { width: '40px', height: '40px', borderWidth: '4px' }
  };

  const spinnerStyle = {
    display: 'inline-block',
    borderRadius: '50%',
    border: `${sizeStyles[size].borderWidth} solid #f3f3f3`,
    borderTop: `${sizeStyles[size].borderWidth} solid ${color}`,
    animation: 'spin 1s linear infinite',
    ...sizeStyles[size]
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={spinnerStyle}></div>
      {text && <div style={{ marginTop: '8px', color: '#666', fontSize: '14px' }}>{text}</div>}
    </div>
  );
};

export default LoadingSpinner;