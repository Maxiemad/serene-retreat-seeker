
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import RetreatLogo from './RetreatLogo';

interface EmpathyMessageProps {
  onContinue: () => void;
}

const EmpathyMessage: React.FC<EmpathyMessageProps> = ({ onContinue }) => {
  return (
    <div className="min-h-screen retreat-gradient flex items-center justify-center p-4">
      <div className="w-full max-w-2xl animate-fade-in">
        <Card className="retreat-card-gradient border-sage-200 shadow-lg text-center">
          <CardContent className="p-8 md:p-12">
            <div className="mb-6">
              <RetreatLogo size="lg" className="mx-auto mb-6" />
              
              <div className="text-6xl mb-6 animate-float">
                💛
              </div>
              
              <h2 className="text-2xl md:text-3xl font-playfair font-semibold text-sage-800 mb-4">
                Thank you for using our Retreat Planning Tool
              </h2>
              
              <p className="text-lg text-sage-700 leading-relaxed mb-8 max-w-lg mx-auto">
                We deeply value your interest in finding your perfect retreat. 
                Your journey to wellness and self-discovery is important to us.
              </p>
              
              <div className="flex flex-col items-center space-y-4 mb-8">
                <div className="flex items-center space-x-2 text-sage-600">
                  <span className="text-xl">🌿</span>
                  <span className="text-sm">Taking a moment to breathe...</span>
                </div>
                <div className="w-24 h-1 bg-sage-200 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-sage-500 animate-pulse"></div>
                </div>
              </div>

              <Button 
                onClick={onContinue}
                className="bg-sage-600 hover:bg-sage-700 text-white font-medium px-8 py-3 transition-all duration-300 transform hover:scale-105"
              >
                Continue to Survey ✨
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EmpathyMessage;
