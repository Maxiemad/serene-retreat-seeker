
import React from 'react';

interface SurveyProgressProps {
  currentStep: number;
  totalSteps: number;
}

const SurveyProgress: React.FC<SurveyProgressProps> = ({ currentStep, totalSteps }) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-sage-700">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-sm text-sage-600">
          {Math.round(progressPercentage)}% Complete
        </span>
      </div>
      <div className="w-full bg-sage-200 rounded-full h-2 overflow-hidden">
        <div 
          className="bg-sage-500 h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default SurveyProgress;
