import React from 'react';

type CardProps = {
  title: string;
  color: 'primary' | 'secondary' | 'accent';
  features: {
    icon: string;
    label: string;
  }[];
  action?: React.ReactNode;
};

const colorMap = {
  primary: {
    header: 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white',
    icon: 'text-pink-500',
  },
  secondary: {
    header: 'bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white',
    icon: 'text-indigo-500',
  },
  accent: {
    header: 'bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 text-white',
    icon: 'text-teal-500',
  },
};


export default function Card({ title, color, features, action }: CardProps) {
  const colors = colorMap[color];

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <div className={`${colors.header} text-white p-6 text-center`}>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <div className="p-6">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className={`${colors.icon} mr-3 transition-transform duration-300 group-hover:scale-110`}>
                <i className={`fas fa-${feature.icon}`}></i>
              </span>
              <span className='text-gray-600'>{feature.label}</span>
            </li>
          ))}
        </ul>
        {action && <div className="text-center">{action}</div>}
      </div>
    </div>
  );
}