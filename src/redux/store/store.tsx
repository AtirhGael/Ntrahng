import { configureStore } from '@reduxjs/toolkit'
import  LocationSlice  from '../sclice/UseLocationSclice'
import  locationReducer  from '../sclice/locationSlice'
import  driverReducer  from '../sclice/DriverSlice'

export const store = configureStore({
  reducer: {
    locationState:LocationSlice,
    location: locationReducer,
    driver: driverReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch