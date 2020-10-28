import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, Point } from '../../utils/types';
import { endStroke } from '../sharedActions';

const initialState: RootState['currentStroke'] = {
  points: [],
  color: '#000',
};

const slice = createSlice({
  name: 'currentSlice',
  initialState,
  reducers: {
    beginStroke: (state, action: PayloadAction<Point>) => {
      state.points = [action.payload];
    },
    updateStroke: (state, action: PayloadAction<Point>) => {
      state.points.push(action.payload);
    },
    setStrokeColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(endStroke, (state) => {
      state.points = [];
    });
  },
});

export default slice.reducer;

export const { setStrokeColor, updateStroke, beginStroke } = slice.actions;
