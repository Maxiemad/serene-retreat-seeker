import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import RetreatLogo from './RetreatLogo';

interface FinalMessageProps {
  onGoHome: () => void;
}

const FinalMessage: React.FC<FinalMessageProps> = ({ onGoHome }) => {
  return (
    <div className="min-h-screen retreat-gradient flex items-center justify-center p-4">
      <div className="w-full max-w-3xl animate-fade-in">
        <Card className="retreat-card-gradient border-sage-200 shadow-lg text-center">
          <CardContent className="p-8 md:p-12">
            <div className="mb-6">
              <RetreatLogo size="xl" className="mx-auto mb-8 scale-[1.0]" />
              
              <div className="text-6xl mb-6 animate-float">
                🌿
              </div>
              
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-black mb-6">
                Thank you for sharing your thoughts!
              </h2>
              
              <div className="space-y-4 text-lg text-black leading-relaxed max-w-2xl mx-auto mb-8">
                <p>
                  We're truly grateful you took the time to let us understand your retreat needs.
                </p>
                <p>
                  We'll reach out to you soon with a thoughtfully curated plan tailored just for you.
                </p>
                <p className="font-medium text-black">
                  Take care and breathe easy. 🧘‍♂️✨
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex items-center space-x-2 text-black">
                  <span className="text-2xl">📧</span>
                  <span className="text-sm">Check your email in 24-48 hours</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={onGoHome}
                  className="bg-sage-600 hover:bg-sage-700 text-white font-medium px-6 py-3 transition-all duration-300 transform hover:scale-105"
                >
                  🏠 Go Back to Homepage
                </Button>
                <Button 
                  variant="outline"
                  className="border-sage-400 text-black hover:bg-sage-50 font-medium px-6 py-3 transition-all duration-300"
                  onClick={() => window.open('mailto:hello@gotoretreats.com?subject=Feedback on Retreat Planning Tool', '_blank')}
                >
                  💭 Share Feedback
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FinalMessage;
