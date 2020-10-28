import {
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';
import { RootState } from './utils/types';
import currentStroke from './modules/currentStroke/slice';
import historyIndex from './modules/historyIndex/slice';
import strokes from './modules/strokes/slice';
import { modalVisible } from './modules/modals/slice';
import { projectsList } from './modules/projectsList/slice';
import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
  reducer: {
    historyIndex,
    strokes,
    currentStroke,
    modalVisible,
    projectsList,
  },
  middleware,
});

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
