import { createSlice } from "@reduxjs/toolkit";
import { locationProps } from "../../types/types";

const initialState:locationProps = {
    latitude:0,
    longitude:0,
    address:[],
    destinationLatitude:null,
    destinationLongitude:null
}

export const LocationSlice = createSlice({
    name:'location slice',
    initialState,
    reducers:{
        updateLatitude:(state, action) =>{
            state.latitude = action.payload
        },
        updateLongitude:(state, action) =>{
            state.longitude = action.payload
        },
        updateAddress:(state, action) =>{
            state.address = action.payload
        }
    }
})

export const { updateLatitude, updateLongitude,updateAddress } = LocationSlice.actions
export default LocationSlice.reducer