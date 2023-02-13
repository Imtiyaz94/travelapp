import axios from 'axios';

export const getPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/restaurants/list`,
      {
        params: {
          location_id: '293919',
          restaurant_tagcategory: '10591',
          restaurant_tagcategory_standalone: '10591',
          currency: 'INR',
          lunit: 'km',
          limit: '50',
          open_now: 'false',
          lang: 'en_US',
        },
        headers: {
          'X-RapidAPI-Key':
            'b949cc7f5bmsh31ae672e08329a8p195115jsn6a73be1f5692',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        },
      },
    );
    return data;
  } catch (error) {
    return console.log('limit exceeded for today');
  }
};
