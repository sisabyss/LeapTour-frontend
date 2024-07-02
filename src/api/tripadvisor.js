import axios from 'axios';

// Get places by bounds receives the 'type', 'sw' object, 'ne'object and 'source' for effect cancellation as parameter for endpoint call
export const getPlacesByBounds = async (type, sw, ne, source) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
          'X-RapidAPI-Key': 'd283acd8ebmsh86e67a15d2cd3dfp1ec54ajsn3ba92b3cff73',
        },
      },
      { cancelToken: source.token }
    );

    // Data is returned once resolved
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

// Get Places by Latitude and longitude, receives 'type', 'lat', 'lng', some 'params' and source for effect cleanup and error handling as parameter to endpoint call
export const getPlacesByLatLng = async (type, lat, lng, params, source) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-by-latlng`,
      {
        params: {
          // latitude: lat,
          // longitude: lng,
          latitude: '29.5647398',
          longitude: '106.5478767',
          lang: 'zh_CN',
          ...params,
        },
        headers: {
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
          // 'X-RapidAPI-Key': import.meta.env.VITE_TRAVEL_API_KEY,
          'X-RapidAPI-Key': 'd283acd8ebmsh86e67a15d2cd3dfp1ec54ajsn3ba92b3cff73',
        },
      },
      { cancelToken: source.token }
    );

    // Data is returned once resolved
    return data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('axios Call Cancelled!');
    } else {
      throw error;
    }
  }
};
