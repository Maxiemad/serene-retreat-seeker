import { Question } from '@/components/SurveyQuestion';

export const surveyQuestions: Question[][] = [
  // Screen 1: Retreat Type & Location Preference
  [
    {
      id: 'retreat-type',
      title: 'What type of retreat experience are you seeking?',
      type: 'radio',
      required: true,
      options: [
        'Wellness & Spa Retreat',
        'Adventure & Outdoor Retreat',
        'Spiritual & Meditation Retreat',
        'Yoga & Mindfulness Retreat',
        'Digital Detox Retreat',
        'Creative & Arts Retreat'
      ]
    },
    {
      id: 'location-preference',
      title: 'What type of environment calls to you?',
      type: 'radio',
      required: true,
      options: [
        'Peaceful Beach & Ocean Views',
        'Majestic Mountains & Fresh Air',
        'Serene Forest & Nature Trails',
        'Tranquil Desert & Open Skies',
        'Lakeside & Waterfront',
        'Countryside & Rolling Hills'
      ]
    }
  ],
  
  // Screen 2: Budget & Travel Dates
  [
    {
      id: 'budget-range',
      title: 'What is your preferred budget range for the retreat?',
      type: 'radio',
      required: true,
      options: [
        'Under $500 (Budget-friendly)',
        '$500 - $1,000 (Moderate)',
        '$1,000 - $2,500 (Premium)',
        '$2,500 - $5,000 (Luxury)',
        'Above $5,000 (Ultra-luxury)',
        'I\'m flexible with budget'
      ]
    },
    {
      id: 'travel-timeframe',
      title: 'When are you looking to go on your retreat?',
      type: 'radio',
      required: true,
      options: [
        'Within the next month',
        'In the next 2-3 months',
        'In the next 6 months',
        'Within the next year',
        'I\'m flexible with timing',
        'Planning for a specific date (please specify below)'
      ]
    }
  ],
  
  // Screen 3: Group Size & Accommodation
  [
    {
      id: 'group-size',
      title: 'How many people will be joining you on this retreat?',
      type: 'radio',
      required: true,
      options: [
        'Just me (Solo retreat)',
        'Me and 1 other person (Couple/Friend)',
        'Small group (3-5 people)',
        'Medium group (6-10 people)',
        'Large group (11+ people)',
        'I\'m open to joining an existing group'
      ]
    },
    {
      id: 'accommodation-style',
      title: 'What accommodation style do you prefer?',
      type: 'radio',
      required: true,
      options: [
        'Private room with ensuite bathroom',
        'Private room with shared bathroom',
        'Shared room (comfortable with roommates)',
        'Glamping or unique accommodations',
        'Basic/simple accommodations (focus on experience)',
        'Luxury accommodations with premium amenities'
      ]
    }
  ],
  
  // Screen 4: Activities & Guidance Level
  [
    {
      id: 'preferred-activities',
      title: 'Which activities interest you most? (Select all that apply)',
      type: 'checkbox',
      required: true,
      options: [
        'Yoga and stretching sessions',
        'Meditation and mindfulness practices',
        'Hiking and nature walks',
        'Spa treatments and massages',
        'Creative workshops (art, writing, music)',
        'Cooking and nutrition classes',
        'Adventure sports and outdoor activities',
        'Personal development and life coaching',
        'Cultural experiences and local immersion',
        'Digital detox and technology-free time'
      ]
    },
    {
      id: 'guidance-level',
      title: 'How much structure and guidance do you prefer?',
      type: 'radio',
      required: true,
      options: [
        'Highly structured with full daily schedules',
        'Moderately structured with some free time',
        'Flexible schedule with optional activities',
        'Minimal structure - mostly free time',
        'Self-guided with resources available',
        'Mix of structured and free time'
      ]
    }
  ],
  
  // Screen 5: Dietary & Accessibility Needs
  [
    {
      id: 'dietary-needs',
      title: 'Do you have any dietary preferences or restrictions?',
      type: 'checkbox',
      required: true,
      options: [
        'Vegetarian',
        'Vegan',
        'Gluten-free',
        'Dairy-free',
        'Nut allergies',
        'Organic/locally sourced preferred',
        'No restrictions - I eat everything',
        'Other specific dietary needs'
      ]
    },
    {
      id: 'accessibility-needs',
      title: 'Do you have any accessibility requirements or health considerations?',
      type: 'textarea',
      required: true,
      placeholder: 'Please describe any mobility needs, health conditions, or accommodations that would help us find the perfect retreat for you...'
    }
  ],
  
  // Screen 6: Experience Level & Special Requests
  [
    {
      id: 'retreat-experience',
      title: 'What is your experience level with retreats?',
      type: 'radio',
      required: true,
      options: [
        'This is my first retreat experience',
        'I\'ve been on 1-2 retreats before',
        'I\'ve been on several retreats (3-5)',
        'I\'m a retreat veteran (6+ retreats)',
        'I regularly attend retreats',
        'I\'ve led or organized retreats myself'
      ]
    },
    {
      id: 'special-requests',
      title: 'Is there anything else you\'d like us to know or any special requests?',
      type: 'textarea',
      required: true,
      placeholder: 'Share any additional preferences, special occasions, specific goals, or anything else that would help us create the perfect retreat experience for you...'
    }
  ]
];
