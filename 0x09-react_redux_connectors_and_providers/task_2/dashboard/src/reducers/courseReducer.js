import {
    FETCH_COURSE_SUCCESS,
    SELECT_COURSE,
    UNSELECT_COURSE,
  } from '../actions/courseActionTypes';
import coursesNormalizer from "../schema/courses";
import { Map } from 'immutable';


const initialState = Map({
  courses: [],
});
  
  const courseReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_COURSE_SUCCESS:
      const normalizedData = coursesNormalizer(action.data);
      return state.merge({ courses: normalizedData });
    
  
      case SELECT_COURSE:
      return state.setIn(['courses', action.index, 'isSelected'], true);

      case UNSELECT_COURSE:
      return state.setIn(['courses', action.index, 'isSelected'], false);
  
      default:
        break;
    }
    return state;
  };
  
  export default courseReducer;
  
