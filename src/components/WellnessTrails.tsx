
import React from 'react';

const WellnessTrails = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Right side trail */}
      <div className="absolute right-0 top-0 h-full w-1">
        <div className="animate-trail-vertical h-4 w-1 bg-gradient-to-b from-sage-300 to-transparent rounded-full opacity-60"></div>
        <div className="animate-trail-vertical-delayed h-4 w-1 bg-gradient-to-b from-sage-400 to-transparent rounded-full opacity-40 mt-8"></div>
        <div className="animate-trail-vertical-slow h-4 w-1 bg-gradient-to-b from-sage-200 to-transparent rounded-full opacity-80 mt-16"></div>
      </div>

      {/* Left side trail */}
      <div className="absolute left-0 top-0 h-full w-1">
        <div className="animate-trail-vertical-reverse h-4 w-1 bg-gradient-to-b from-earth-300 to-transparent rounded-full opacity-60"></div>
        <div className="animate-trail-vertical-reverse-delayed h-4 w-1 bg-gradient-to-b from-earth-400 to-transparent rounded-full opacity-40 mt-12"></div>
        <div className="animate-trail-vertical-reverse-slow h-4 w-1 bg-gradient-to-b from-earth-200 to-transparent rounded-full opacity-80 mt-6"></div>
      </div>

      {/* Bottom trail */}
      <div className="absolute bottom-0 left-0 w-full h-1">
        <div className="animate-trail-horizontal w-4 h-1 bg-gradient-to-r from-sage-300 to-transparent rounded-full opacity-60"></div>
        <div className="animate-trail-horizontal-delayed w-4 h-1 bg-gradient-to-r from-sage-400 to-transparent rounded-full opacity-40 ml-8 -mt-1"></div>
        <div className="animate-trail-horizontal-slow w-4 h-1 bg-gradient-to-r from-sage-200 to-transparent rounded-full opacity-80 ml-16 -mt-1"></div>
      </div>

      {/* Animated Stick Figure Stickers */}
      
      {/* Right side stick figures moving down */}
      <div className="absolute right-2 top-0 animate-stickman-down opacity-70">
        <div className="text-2xl transform rotate-12">🚶‍♂️</div>
      </div>
      <div className="absolute right-4 top-0 animate-stickman-down-delayed opacity-60">
        <div className="text-xl transform -rotate-6">🏃‍♀️</div>
      </div>
      <div className="absolute right-6 top-0 animate-stickman-down-slow opacity-80">
        <div className="text-lg transform rotate-3">🤸‍♂️</div>
      </div>

      {/* Left side stick figures moving up */}
      <div className="absolute left-2 bottom-0 animate-stickman-up opacity-70">
        <div className="text-2xl transform -rotate-12">🧘‍♀️</div>
      </div>
      <div className="absolute left-4 bottom-0 animate-stickman-up-delayed opacity-60">
        <div className="text-xl transform rotate-8">🤾‍♂️</div>
      </div>
      <div className="absolute left-6 bottom-0 animate-stickman-up-slow opacity-80">
        <div className="text-lg transform -rotate-5">🏋️‍♀️</div>
      </div>

      {/* Bottom stick figures moving right */}
      <div className="absolute bottom-2 left-0 animate-stickman-right opacity-70">
        <div className="text-2xl transform rotate-6">🤹‍♂️</div>
      </div>
      <div className="absolute bottom-4 left-0 animate-stickman-right-delayed opacity-60">
        <div className="text-xl transform -rotate-4">⛹️‍♀️</div>
      </div>
      <div className="absolute bottom-6 left-0 animate-stickman-right-slow opacity-80">
        <div className="text-lg transform rotate-2">🏌️‍♂️</div>
      </div>

      {/* Floating wellness symbols */}
      <div className="absolute top-1/4 right-8 animate-float opacity-20">
        <div className="text-sage-400 text-2xl">🧘‍♀️</div>
      </div>
      <div className="absolute top-3/4 left-8 animate-float opacity-20" style={{ animationDelay: '2s' }}>
        <div className="text-earth-400 text-2xl">🌿</div>
      </div>
      <div className="absolute bottom-1/4 right-1/4 animate-breathe opacity-20" style={{ animationDelay: '1s' }}>
        <div className="text-sage-300 text-xl">✨</div>
      </div>
      <div className="absolute top-1/2 left-1/4 animate-breathe opacity-20" style={{ animationDelay: '3s' }}>
        <div className="text-earth-300 text-xl">🕉️</div>
      </div>
    </div>
  );
};

export default WellnessTrails;
