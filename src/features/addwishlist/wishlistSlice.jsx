import { createSlice } from '@reduxjs/toolkit'
export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    liked:false
  },
  reducers: {
    addWishlist: (state) => {
      state.liked = !state.liked
      console.log(state.liked);
    },
 
  },
})

export const { addWishlist } = wishlistSlice.actions

export default wishlistSlice.reducer