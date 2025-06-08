import axios from 'axios';

const GOOGLE_PLACES_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
const GOOGLE_PLACES_API_URL = 'https://maps.googleapis.com/maps/api/place';

interface City {
  name: string;
  country: string;
  formattedAddress: string;
}

export const searchCities = async (query: string): Promise<City[]> => {
  try {
    const response = await axios.get(`${GOOGLE_PLACES_API_URL}/autocomplete/json`, {
      params: {
        input: query,
        types: '(cities)',
        key: GOOGLE_PLACES_API_KEY,
        language: 'en'
      }
    });

    const cities: City[] = await Promise.all(
      response.data.predictions.map(async (prediction: any) => {
        // Get place details to get country information
        const detailsResponse = await axios.get(`${GOOGLE_PLACES_API_URL}/details/json`, {
          params: {
            place_id: prediction.place_id,
            fields: 'address_components',
            key: GOOGLE_PLACES_API_KEY
          }
        });

        const addressComponents = detailsResponse.data.result.address_components;
        const country = addressComponents.find(
          (component: any) => component.types.includes('country')
        )?.long_name || '';

        return {
          name: prediction.structured_formatting.main_text,
          country: country,
          formattedAddress: prediction.description
        };
      })
    );

    return cities;
  } catch (error) {
    console.error('Error fetching cities:', error);
    return [];
  }
}; 