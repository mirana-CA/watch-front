import { configureStore } from '@reduxjs/toolkit'
import wishlistReducer from '../addwishlist/wishlistSlice'
export default configureStore({
  reducer: {
    wishlist:wishlistReducer
  },
})