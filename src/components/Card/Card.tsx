import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  variant?: 'default' | 'outlined' | 'elevated';
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  title,
  variant = 'default',
  className = '',
  onClick
}) => {
  const baseStyles = 'rounded-lg p-4';
  const variantStyles = {
    default: 'bg-white shadow',
    outlined: 'border border-gray-200',
    elevated: 'bg-white shadow-lg'
  };

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
      data-testid="card"
      role={onClick ? 'button' : 'article'}
    >
      {title && (
        <h1 className="text-lg font-semibold mb-2" data-testid="card-title">
          {title}
        </h1>
      )}
      <div data-testid="card-content">
        {children}
      </div>
    </div>
  );
};