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
    return response.data;
  } catch (error) {
    // Error Handling
    if (axios.isCancel(error)) {
      console.log('axios Call Cancelled!');
    } else {
      throw error;
    }
  }
};
