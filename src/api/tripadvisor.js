import axios from 'axios'

export const getPlacesByCity = async (type, city, source) => {
  try {
    const { data } = await axios.get(
      `http://192.168.1.145:8080/api/v2/${type}/city`,
      {
        params: {
          city: city
        }
      },
      { cancelToken: source.token }
    )

    // Data is returned once resolved
    return data
  } catch (error) {
    // Error Handling
    if (axios.isCancel(error)) {
      console.log('axios Call Cancelled!')
    } else {
      throw error
    }
  }
}

export const getCityByName = async (city, source) => {
  try {
    const { data } = await axios.get(
      `http://192.168.1.145:8080/api/v2/city`,
      {
        params: {
          name: city
        }
      },
      { cancelToken: source.token }
    )

    // Data is returned once resolved
    console.log(data)
    return data
  } catch (error) {
    // Error Handling
    if (axios.isCancel(error)) {
      console.log('axios Call Cancelled!')
    } else {
      throw error
    }
  }
}

// Get places by bounds receives the 'type', 'sw' object, 'ne'object and 'source' for effect cancellation as parameter for endpoint call
export const getPlacesByBounds = async (type, sw, ne, source) => {
  try {
    const {
      data: { data }
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng
        },
        headers: {
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
          'X-RapidAPI-Key': '936cb531bfmsh0a907999cf9cfb7p115648jsnc94a45ccd64f'
        }
      },
      { cancelToken: source.token }
    )

    // Data is returned once resolved
    return data
  } catch (error) {
    // Error Handling
    if (axios.isCancel(error)) {
      console.log('axios Call Cancelled!')
    } else {
      throw error
    }
  }
}

// Get Places by Latitude and longitude, receives 'type', 'lat', 'lng', some 'params' and source for effect cleanup and error handling as parameter to endpoint call
export const getPlacesByLatLng = async (type, lat, lng, params, source) => {
  try {
    const {
      data: { data }
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-by-latlng`,
      {
        params: {
          latitude: lat,
          longitude: lng,
          // latitude: '29.5647398',
          // longitude: '106.5478767',
          lang: 'zh_CN',
          ...params
        },
        headers: {
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
          // 'X-RapidAPI-Key': import.meta.env.VITE_TRAVEL_API_KEY,
          'X-RapidAPI-Key': '936cb531bfmsh0a907999cf9cfb7p115648jsnc94a45ccd64f'
        }
      },
      { cancelToken: source.token }
    )

    // Data is returned once resolved
    return data
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('axios Call Cancelled!')
    } else {
      throw error
    }
  }
}

export const getLatLngByIP = async () => {
  try {
    const response = await axios.get('https://restapi.amap.com/v3/ip', {
      params: {
        key: '0a2a27ba5e33705826293c630a22d445'
      }
    })

    // Data is returned once resolved
    if (response.data.status === '1') {
      let location = response.data
      console.log('定位信息:', location)
      const bounds = location.rectangle.split(';')
      const [lng1, lat1] = bounds[0].split(',').map(Number)
      const [lng2, lat2] = bounds[1].split(',').map(Number)

      const centerLng = (lng1 + lng2) / 2
      const centerLat = (lat1 + lat2) / 2

      return { lng: centerLng, lat: centerLat }
    } else {
      let error = response.data.info
      console.error('定位失败:', error)
    }
  } catch (error) {
    // Error Handling
    if (axios.isCancel(error)) {
      console.log('axios Call Cancelled!')
    } else {
      throw error
    }
  }
}
