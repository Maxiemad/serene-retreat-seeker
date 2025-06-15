
import React, { useState } from 'react';
import IntroForm from '@/components/IntroForm';
import EmpathyMessage from '@/components/EmpathyMessage';
import SurveyQuestion from '@/components/SurveyQuestion';
import FinalMessage from '@/components/FinalMessage';
import WellnessTrails from '@/components/WellnessTrails';
import { surveyQuestions } from '@/data/surveyQuestions';

interface UserInfo {
  fullName: string;
  email: string;
  city: string;
}

type AppState = 'intro' | 'empathy' | 'survey' | 'complete';

const Index = () => {
  const [appState, setAppState] = useState<AppState>('intro');
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [currentSurveyStep, setCurrentSurveyStep] = useState(0);
  const [surveyAnswers, setSurveyAnswers] = useState<Record<string, any>>({});

  const handleIntroSubmit = (info: UserInfo) => {
    setUserInfo(info);
    setAppState('empathy');
  };

  const handleEmpathyContinue = () => {
    setAppState('survey');
  };

  const handleSurveyAnswerChange = (questionId: string, answer: any) => {
    setSurveyAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleSurveyNext = () => {
    if (currentSurveyStep < surveyQuestions.length - 1) {
      setCurrentSurveyStep(prev => prev + 1);
    } else {
      // Survey complete - log all data
      console.log('Retreat Planning Survey Complete!', {
        userInfo,
        surveyAnswers,
        timestamp: new Date().toISOString()
      });
      setAppState('complete');
    }
  };

  const handleSurveyPrev = () => {
    if (currentSurveyStep > 0) {
      setCurrentSurveyStep(prev => prev - 1);
    }
  };

  const handleGoHome = () => {
    // Reset all state to start over
    setAppState('intro');
    setUserInfo(null);
    setCurrentSurveyStep(0);
    setSurveyAnswers({});
  };

  return (
    <div className="relative">
      <WellnessTrails />
      <div className="relative z-10">
        {(() => {
          switch (appState) {
            case 'intro':
              return <IntroForm onSubmit={handleIntroSubmit} />;
            
            case 'empathy':
              return <EmpathyMessage onContinue={handleEmpathyContinue} />;
            
            case 'survey':
              return (
                <SurveyQuestion
                  questions={surveyQuestions[currentSurveyStep]}
                  currentStep={currentSurveyStep + 1}
                  totalSteps={surveyQuestions.length}
                  answers={surveyAnswers}
                  onAnswerChange={handleSurveyAnswerChange}
                  onNext={handleSurveyNext}
                  onPrev={handleSurveyPrev}
                  isLastStep={currentSurveyStep === surveyQuestions.length - 1}
                  isFirstStep={currentSurveyStep === 0}
                />
              );
            
            case 'complete':
              return <FinalMessage onGoHome={handleGoHome} />;
            
            default:
              return <IntroForm onSubmit={handleIntroSubmit} />;
          }
        })()}
      </div>
    </div>
  );
};

export default Index;
