import { defineStore } from 'pinia'
import { getLatLngByIP } from '@/api/amap'
import { getPlacesByCity } from '@/api/tripadvisor'
import enums from '@/utils/enums'
import resource from '@/assets/data/resource'
import axios from 'axios'

export const useBaseStore = defineStore('base', {
  state: () => {
    return {
      bodyHeight: document.body.clientHeight,
      bodyWidth: document.body.clientWidth,
      maskDialog: false,
      maskDialogMode: 'dark',
      version: '17.1.0',
      excludeNames: [],
      email: null,
      avatar: null,
      judgeValue: 20,
      homeRefresh: 60,
      loading: false,
      routeData: null,
      users: [],
      isLoading: false,
      coordinates: {},
      restaurants: [],
      hotels: [],
      attractions: [],
      userinfo: {
        nickname: '',
        desc: '',
        user_age: '',
        signature: '',
        unique_id: '',
        province: '',
        city: '',
        gender: '',
        school: {
          name: '',
          department: null,
          joinTime: null,
          education: null,
          displayType: enums.DISPLAY_TYPE.ALL
        },
        avatar_168x168: {
          url_list: []
        },
        avatar_300x300: {
          url_list: []
        },
        cover_url: [
          {
            url_list: []
          }
        ],
        white_cover_url: [
          {
            url_list: []
          }
        ]
      },
      friends: resource.users,
      sidebarOpen: false,
      isTiktok: false,
      token: null,
      isSignIn: false
    }
  },
  getters: {
    selectFriends() {
      return this.friends.all.filter((v) => v.select)
    },
    getRestaurants() {
      return this.restaurants
    },
    getHotels() {
      return this.hotels
    },
    getAttractions() {
      return this.attractions
    }
  },
  actions: {
    async init() {
      const store = useBaseStore()
      await getLatLngByIP().then((coordinates) => {
        this.coordinates = coordinates
      })

      const source = axios.CancelToken.source()

      // Loading state is set to true while data is being fetched from endpoint
      store.isLoading = true

      // Calling on the getPlacesByLatLng endpoint passing in the 'attraction' as place type, coordinates (longitude and latitude), a limit parameter and source for error handling
      getPlacesByCity('foods', this.coordinates.city, source).then((data) => {
        this.restaurants = data
      })
      getPlacesByCity('hotels', this.coordinates.city, source).then((data) => {
        this.hotels = data
      })
      getPlacesByCity('sights', this.coordinates.city, source).then((data) => {
        this.attractions = data
      })

      // Setting loading state back to false to stop loading
      store.isLoading = false
    },
    setUserinfo(val) {
      this.userinfo = val
    },
    setMaskDialog(val) {
      this.maskDialog = val.state
      if (val.mode) {
        this.maskDialogMode = val.mode
      }
    },
    updateExcludeNames(val) {
      if (val.type === 'add') {
        if (!this.excludeNames.find((v) => v === val.value)) {
          this.excludeNames.push(val.value)
        }
      } else {
        const resIndex = this.excludeNames.findIndex((v) => v === val.value)
        if (resIndex !== -1) {
          this.excludeNames.splice(resIndex, 1)
        }
      }
      // console.log('store.excludeNames', store.excludeNames,val)
    }
  }
})
