
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import SurveyProgress from './SurveyProgress';

export interface Question {
  id: string;
  title: string;
  type: 'radio' | 'checkbox' | 'text' | 'textarea' | 'range';
  options?: string[];
  placeholder?: string;
  required?: boolean;
}

interface SurveyQuestionProps {
  questions: Question[];
  currentStep: number;
  totalSteps: number;
  answers: Record<string, any>;
  onAnswerChange: (questionId: string, answer: any) => void;
  onNext: () => void;
  isLastStep?: boolean;
}

const SurveyQuestion: React.FC<SurveyQuestionProps> = ({
  questions,
  currentStep,
  totalSteps,
  answers,
  onAnswerChange,
  onNext,
  isLastStep = false
}) => {
  const canProceed = questions.every(q => 
    !q.required || (answers[q.id] && answers[q.id] !== '')
  );

  const renderQuestion = (question: Question) => {
    switch (question.type) {
      case 'radio':
        return (
          <RadioGroup
            value={answers[question.id] || ''}
            onValueChange={(value) => onAnswerChange(question.id, value)}
            className="space-y-3"
          >
            {question.options?.map((option) => (
              <div key={option} className="flex items-center space-x-3">
                <RadioGroupItem 
                  value={option} 
                  id={`${question.id}-${option}`}
                  className="border-sage-400 text-sage-600"
                />
                <Label 
                  htmlFor={`${question.id}-${option}`}
                  className="text-sage-700 cursor-pointer flex-1"
                >
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        );

      case 'checkbox':
        const currentAnswers = answers[question.id] || [];
        return (
          <div className="space-y-3">
            {question.options?.map((option) => (
              <div key={option} className="flex items-center space-x-3">
                <Checkbox
                  id={`${question.id}-${option}`}
                  checked={currentAnswers.includes(option)}
                  onCheckedChange={(checked) => {
                    const newAnswers = checked
                      ? [...currentAnswers, option]
                      : currentAnswers.filter((a: string) => a !== option);
                    onAnswerChange(question.id, newAnswers);
                  }}
                  className="border-sage-400"
                />
                <Label 
                  htmlFor={`${question.id}-${option}`}
                  className="text-sage-700 cursor-pointer flex-1"
                >
                  {option}
                </Label>
              </div>
            ))}
          </div>
        );

      case 'text':
        return (
          <Input
            type="text"
            placeholder={question.placeholder}
            value={answers[question.id] || ''}
            onChange={(e) => onAnswerChange(question.id, e.target.value)}
            className="border-sage-300 focus:border-sage-500 focus:ring-sage-500"
          />
        );

      case 'textarea':
        return (
          <Textarea
            placeholder={question.placeholder}
            value={answers[question.id] || ''}
            onChange={(e) => onAnswerChange(question.id, e.target.value)}
            className="border-sage-300 focus:border-sage-500 focus:ring-sage-500 min-h-[100px]"
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen retreat-gradient flex items-center justify-center p-4">
      <div className="w-full max-w-2xl animate-fade-in">
        <SurveyProgress currentStep={currentStep} totalSteps={totalSteps} />
        
        <Card className="retreat-card-gradient border-sage-200 shadow-lg">
          <CardContent className="p-8 md:p-10">
            <div className="space-y-8">
              {questions.map((question, index) => (
                <div key={question.id} className="space-y-4">
                  <h3 className="text-xl font-playfair font-medium text-sage-800">
                    {index + 1}. {question.title}
                    {question.required && <span className="text-red-500 ml-1">*</span>}
                  </h3>
                  {renderQuestion(question)}
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Button 
                onClick={onNext}
                disabled={!canProceed}
                className="bg-sage-600 hover:bg-sage-700 disabled:bg-sage-300 text-white font-medium px-8 py-3 transition-all duration-300 transform hover:scale-105 disabled:transform-none"
              >
                {isLastStep ? 'Complete Survey ✨' : 'Next →'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SurveyQuestion;
