import axios from 'axios';

export const getPlacesData = async () => {
  try {
    await axios.get(
      `https://hotels-com-provider.p.rapidapi.com/v2/hotels/details`,
      {
        params: { domain: 'AE', locale: 'en_GB', hotel_id: '1105156' },
        headers: {
          'X-RapidAPI-Key':
            '9ae521b72dmsh372cbb3ef6bb160p17e9adjsne77a941ed6e4',
          'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com',
        },
      },
    );
  } catch (error) {
    return null;
  }
};
