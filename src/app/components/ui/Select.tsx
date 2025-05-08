// ./ui/Select.tsx
import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  children: React.ReactNode;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, children, ...rest }, ref) => (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <select
        ref={ref}
        {...rest}
        className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 text-black placeholder-gray-500 ${
          error ? 'border-red-500 focus:ring-red-300' : 'border-purple-600 focus:ring-purple-500'
        }`}
      >
        {children}
      </select>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  )
);

Select.displayName = 'Select';

export default Select;
