import { AppThunk } from '../../store';
import { Project } from '../../utils/types';
import { getProjectListSuccess, getProjectsListFailed } from './slice';
import { fetchProjectsList } from './api';

export const getProjectsList = (): AppThunk => async (dispatch) => {
  try {
    const projectsList: Project[] = await fetchProjectsList();
    dispatch(getProjectListSuccess(projectsList));
  } catch (err) {
    dispatch(getProjectsListFailed(err.toString()));
  }
};
