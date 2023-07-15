import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface DataState {
  estateOrigin: string;
  estateDestination: string;
  countryOrigin: string;
  countryDestination: string;
  date: string;
  tickets: string;
}

const initialState: DataState = {
  estateOrigin: '',
  estateDestination: '',
  countryOrigin: '',
  countryDestination: '',
  date: '',
  tickets: '',
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setEstateOrigin: (state, action: PayloadAction<string>) => {
      state.estateOrigin = action.payload;
    },
    setEstateDestination: (state, action: PayloadAction<string>) => {
      state.estateDestination = action.payload;
    },
    setCountryOrigin: (state, action: PayloadAction<string>) => {
      state.countryOrigin = action.payload;
    },
    setCountryDestination: (state, action: PayloadAction<string>) => {
      state.countryDestination = action.payload;
    },
    setDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    setTickets: (state, action: PayloadAction<string>) => {
      state.tickets = action.payload;
    },
  },
});

export const {
  setEstateOrigin,
  setEstateDestination,
  setCountryOrigin,
  setCountryDestination,
  setDate,
  setTickets,
} = dataSlice.actions;

export default dataSlice.reducer;
