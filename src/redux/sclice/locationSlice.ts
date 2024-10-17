import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LocationState {
  userLatitude: number | null;
  userLongitude: number | null;
  userAddress: string | null;
  destinationLatitude: number | null;
  destinationLongitude: number | null;
  destinationAddress: string | null;
}

const initialState: LocationState = {
  userLatitude: null,
  userLongitude: null,
  userAddress: null,
  destinationLatitude: null,
  destinationLongitude: null,
  destinationAddress: null,
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setUserLocation: (state, action: PayloadAction<{ latitude: number; longitude: number; address: string }>) => {
      state.userLatitude = action.payload.latitude;
      state.userLongitude = action.payload.longitude;
      state.userAddress = action.payload.address;

      // Clear selected driver if needed
    //   if (state.selectedDriver) {
    //     state.selectedDriver = null; // Assume you handle driver state in the same slice or dispatch an action
    //   }
    },
    setDestinationLocation: (state, action: PayloadAction<{ latitude: number; longitude: number; address: string }>) => {
      state.destinationLatitude = action.payload.latitude;
      state.destinationLongitude = action.payload.longitude;
      state.destinationAddress = action.payload.address;

    //   // Clear selected driver if needed
    //   if (state.selectedDriver) {
    //     state.selectedDriver = null; // Assume you handle driver state in the same slice or dispatch an action
    //   }
    },
  },
});

export const { setUserLocation, setDestinationLocation } = locationSlice.actions;
export default locationSlice.reducer;
