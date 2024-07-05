import axios from 'axios';

export const getLatLngByIP = async () => {
  try {
    const response = await axios.get('https://restapi.amap.com/v3/ip', {
      params: {
        key: '0a2a27ba5e33705826293c630a22d445',
      },
    });

    // Data is returned once resolved
    console.log(response.data);
    const bounds = response.data.rectangle.split(';');
    const [lng1, lat1] = bounds[0].split(',').map(Number);
    const [lng2, lat2] = bounds[1].split(',').map(Number);

    const centerLng = (lng1 + lng2) / 2;
    const centerLat = (lat1 + lat2) / 2;

    return {
      city: response.data.city,
      lat: centerLat,
      lng: centerLng,
    };
  } catch (error) {
    // Error Handling
    if (axios.isCancel(error)) {
      console.log('axios Call Cancelled!');
    } else {
      throw error;
    }
  }
};
