import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

export const selectCourse = (index) => ({type: SELECT_COURSE, index: index});

export const boundSelectCourse = (index) => dispatch(selectCourse(index));

export const unSelectCourse = (index) => ({type: UNSELECT_COURSE, index: index});

export const boundUnSelectCourse = (index) => dispatch(unSelectCourse(index));

export const setCourses = (data) => {
    return {
      type: FETCH_COURSE_SUCCESS,
      data,
    };
  };
  
  export const fetchCourses = () => {
    return (dispatch) => {
      return fetch("./courses.json")
        .then((res) => res.json())
        .then((data) => dispatch(setCourses(data)))
        .catch((error) => {});
    };
  };
  
