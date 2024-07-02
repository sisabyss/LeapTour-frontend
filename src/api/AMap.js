import axios from 'axios';

export const getLatLngByIP = async () => {
  try {
    const {
      data: { data },
    } = await axios.get('https://restapi.amap.com/v3/ip?', {
      params: {
        key: '5a483e90f9ce265b1df601e9b8a4ea8c',
      },
    });

    // Data is returned once resolved
    console.log(await data);
    return data;
  } catch (error) {
    // Error Handling
    if (axios.isCancel(error)) {
      console.log('axios Call Cancelled!');
    } else {
      throw error;
    }
  }
};
