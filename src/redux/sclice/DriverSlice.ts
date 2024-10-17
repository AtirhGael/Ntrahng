import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MarkerData } from '../../types/types';

interface DriverState {
  drivers: MarkerData[];
  selectedDriver: number | null;
}

const initialState: DriverState = {
  drivers: [],
  selectedDriver: null,
};

const driverSlice = createSlice({
  name: 'driver',
  initialState,
  reducers: {
    setSelectedDriver: (state, action: PayloadAction<number>) => {
      state.selectedDriver = action.payload;
    },
    setDrivers: (state, action: PayloadAction<MarkerData[]>) => {
      state.drivers = action.payload;
    },
    clearSelectedDriver: (state) => {
      state.selectedDriver = null;
    },
  },
});

export const { setSelectedDriver, setDrivers, clearSelectedDriver } = driverSlice.actions;
export default driverSlice.reducer;
