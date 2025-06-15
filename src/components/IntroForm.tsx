import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import RetreatLogo from './RetreatLogo';
import cities from 'cities-list';
import CitySelector from './CitySelector';

interface UserInfo {
  fullName: string;
  email: string;
  city: string;
}

interface IntroFormProps {
  onSubmit: (data: UserInfo) => void;
}

// Top 50 popular world cities for default dropdown
const popularCities = [
  'New York', 'London', 'Paris', 'Tokyo', 'Dubai', 'Singapore', 'Hong Kong', 'Sydney', 'Los Angeles', 'Toronto',
  'San Francisco', 'Chicago', 'Berlin', 'Barcelona', 'Madrid', 'Rome', 'Istanbul', 'Bangkok', 'Seoul', 'Shanghai',
  'Beijing', 'Moscow', 'Mumbai', 'Delhi', 'Mexico City', 'São Paulo', 'Buenos Aires', 'Cape Town', 'Cairo', 'Kuala Lumpur',
  'Jakarta', 'Melbourne', 'Vienna', 'Dublin', 'Prague', 'Budapest', 'Lisbon', 'Warsaw', 'Brussels', 'Zurich',
  'Stockholm', 'Copenhagen', 'Vancouver', 'Montreal', 'Miami', 'Boston', 'San Diego', 'Houston', 'Seattle', 'Auckland'
];

const allCities = Object.keys(cities).sort();

const IntroForm: React.FC<IntroFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    city: null, // will be an object { value, label }
  });
  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [filteredCities, setFilteredCities] = useState<string[]>(popularCities);
  const [searchValue, setSearchValue] = useState('');

  const handleCitySearch = (value: string) => {
    setSearchValue(value);
    if (value.length >= 2) {
      const filtered = allCities.filter(city => 
        city.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 100); // Limit to 100 results for performance
      setFilteredCities(filtered);
    } else {
      setFilteredCities(popularCities);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<typeof formData> = {};

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
      onSubmit({
        fullName: formData.fullName,
        email: formData.email,
        city: formData.city?.value || '',
      });
      setIsSubmitting(false);
    }, 800);
  };

  const handleInputChange = (field: keyof typeof formData, value: any) => {
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
          <RetreatLogo size="lg" className="mx-auto mb-4 scale-[1.0]" />
          <h1 className="text-3xl font-playfair font-semibold text-black mb-2">
            Retreat Planning tool
          </h1>
          <p className="text-black text-sm">
            Your Step-by-Step Guide to Hosting the Perfect Retreat
          </p>
        </div>

        {/* Form Card */}
        <Card className="bg-white/80 backdrop-blur-sm border-sage-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-playfair text-black">Let's Begin Your Journey</CardTitle>
            <CardDescription className="text-black/70">
              Tell us a bit about yourself to get started
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-black font-medium">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className={`border-sage-300 focus:border-sage-500 focus:ring-sage-500 text-black ${
                    errors.fullName ? 'border-red-300 focus:border-red-500' : ''
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">{errors.fullName}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-black font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`border-sage-300 focus:border-sage-500 focus:ring-sage-500 text-black ${
                    errors.email ? 'border-red-300 focus:border-red-500' : ''
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="city" className="text-black font-medium">
                  City
                </Label>
                <CitySelector
                  value={formData.city}
                  onChange={(option) => handleInputChange('city', option)}
                />
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
      </div>
    </div>
  );
};

export default IntroForm;
