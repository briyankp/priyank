
import React from 'react';

interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
  onStepClick: (stepIndex: number) => void;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({ steps, currentStep, onStepClick }) => {
  return (
    <div className="flex flex-col space-y-4">
      {steps.map((step, index) => (
        <button
          key={index}
          onClick={() => onStepClick(index)}
          className="flex items-center text-left transition-colors"
        >
          <div
            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4
              ${index === currentStep
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 text-gray-600 hover:bg-indigo-100'
              }`}
          >
            {index + 1}
          </div>
          <span
            className={`font-semibold 
              ${index === currentStep ? 'text-indigo-700' : 'text-gray-700'}`}
          >
            {step}
          </span>
        </button>
      ))}
    </div>
  );
};
