
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import RetreatLogo from './RetreatLogo';

interface UserInfo {
  fullName: string;
  email: string;
  city: string;
}

interface IntroFormProps {
  onSubmit: (userInfo: UserInfo) => void;
}

const IntroForm: React.FC<IntroFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<UserInfo>({
    fullName: '',
    email: '',
    city: ''
  });
  const [errors, setErrors] = useState<Partial<UserInfo>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sample cities - in a real app, this would come from an API
  const popularCities = [
    'New York, NY', 'Los Angeles, CA', 'Chicago, IL', 'Houston, TX', 'Phoenix, AZ',
    'Philadelphia, PA', 'San Antonio, TX', 'San Diego, CA', 'Dallas, TX', 'San Jose, CA',
    'Austin, TX', 'Jacksonville, FL', 'Fort Worth, TX', 'Columbus, OH', 'Charlotte, NC',
    'San Francisco, CA', 'Indianapolis, IN', 'Seattle, WA', 'Denver, CO', 'Washington, DC',
    'Boston, MA', 'El Paso, TX', 'Nashville, TN', 'Detroit, MI', 'Oklahoma City, OK',
    'Portland, OR', 'Las Vegas, NV', 'Memphis, TN', 'Louisville, KY', 'Baltimore, MD',
    'Milwaukee, WI', 'Albuquerque, NM', 'Tucson, AZ', 'Fresno, CA', 'Mesa, AZ',
    'Sacramento, CA', 'Atlanta, GA', 'Kansas City, MO', 'Colorado Springs, CO', 'Miami, FL',
    'Raleigh, NC', 'Omaha, NE', 'Long Beach, CA', 'Virginia Beach, VA', 'Oakland, CA',
    'Minneapolis, MN', 'Tulsa, OK', 'Arlington, TX', 'Tampa, FL', 'New Orleans, LA'
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<UserInfo> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.city) {
      newErrors.city = 'Please select your city';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      onSubmit(formData);
      setIsSubmitting(false);
    }, 800);
  };

  const handleInputChange = (field: keyof UserInfo, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="min-h-screen retreat-gradient flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        {/* Logo */}
        <div className="text-center mb-8">
          <RetreatLogo size="lg" className="mx-auto mb-4" />
          <h1 className="text-3xl font-playfair font-semibold text-sage-800 mb-2">
            Find Your Perfect Retreat
          </h1>
          <p className="text-sage-600 text-sm">
            Let us help you discover the ideal retreat experience tailored just for you
          </p>
        </div>

        {/* Form Card */}
        <Card className="retreat-card-gradient border-sage-200 shadow-lg">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl font-playfair text-sage-800">
              Let's Get Started
            </CardTitle>
            <CardDescription className="text-sage-600">
              Tell us a bit about yourself to begin your journey
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-sage-700 font-medium">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className={`border-sage-300 focus:border-sage-500 focus:ring-sage-500 ${
                    errors.fullName ? 'border-red-300 focus:border-red-500' : ''
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">{errors.fullName}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sage-700 font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`border-sage-300 focus:border-sage-500 focus:ring-sage-500 ${
                    errors.email ? 'border-red-300 focus:border-red-500' : ''
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="city" className="text-sage-700 font-medium">
                  City
                </Label>
                <Select 
                  value={formData.city} 
                  onValueChange={(value) => handleInputChange('city', value)}
                >
                  <SelectTrigger className={`border-sage-300 focus:border-sage-500 focus:ring-sage-500 ${
                    errors.city ? 'border-red-300 focus:border-red-500' : ''
                  }`}>
                    <SelectValue placeholder="Select your city" />
                  </SelectTrigger>
                  <SelectContent className="max-h-60 bg-white text-black">
                    {popularCities.map((city) => (
                      <SelectItem key={city} value={city} className="text-black hover:bg-gray-100">
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.city && (
                  <p className="text-red-500 text-sm">{errors.city}</p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full bg-sage-600 hover:bg-sage-700 text-white font-medium py-3 mt-6 transition-all duration-300 transform hover:scale-105"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Starting Your Journey...</span>
                  </div>
                ) : (
                  'Begin My Retreat Journey 🧘‍♀️'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-6 text-sage-600 text-sm">
          <p>Your information is safe and secure with us 🔒</p>
        </div>
      </div>
    </div>
  );
};

export default IntroForm;
