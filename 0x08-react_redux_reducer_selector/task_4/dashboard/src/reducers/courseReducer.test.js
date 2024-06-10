import courseReducer from './courseReducer';
import { fromJS, toJS } from 'immutable';
import coursesNormalizer from '../schema/courses';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';

describe('courseReducer', function () {
  it('initial state', function () {
    const state = courseReducer(undefined, {});
    expect(state.toJS()).toEqual({ courses: [] });
  });

  it('FETCH_COURSE_SUCCESS', function () {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      courses: [
        {
          id: 1,
          name: 'ES6',
          isSelected: false,
          credit: 60,
        },
        {
          id: 2,
          name: 'Webpack',
          isSelected: false,
          credit: 20,
        },
        {
          id: 3,
          name: 'React',
          isSelected: false,
          credit: 40,
        },
      ],
    };

    const expectedData = {
      courses: [
        {
          id: 1,
          name: 'ES6',
          isSelected: false,
          credit: 60,
        },
        {
          id: 2,
          name: 'Webpack',
          isSelected: false,
          credit: 20,
        },
        {
          id: 3,
          name: 'React',
          isSelected: false,
          credit: 40,
        },
      ],
    };

    const state = courseReducer(undefined, action);
    expect(state.toJS()).toEqual(expectedData);
  });

  it('SELECT_COURSE', function () {
    const initialState = fromJS({
      courses: [
        {
          id: 1,
          name: 'ES6',
          isSelected: false,
          credit: 60,
        },
        {
          id: 2,
          name: 'Webpack',
          isSelected: false,
          credit: 20,
        },
        {
          id: 3,
          name: 'React',
          isSelected: false,
          credit: 40,
        },
      ],
    });

    const action = {
      type: SELECT_COURSE,
      index: 2,
    };

    const expectedData = {
      courses: [
        {
          id: 1,
          name: 'ES6',
          isSelected: false,
          credit: 60,
        },
        {
          id: 2,
          name: 'Webpack',
          isSelected: true,
          credit: 20,
        },
        {
          id: 3,
          name: 'React',
          isSelected: false,
          credit: 40,
        },
      ],
    };

    const state = courseReducer(initialState, action);
    expect(state.toJS()).toEqual(expectedData);
  });

  it('UNSELECT_COURSE', function () {
    const initialState = fromJS({
      courses: [
        {
          id: 1,
          name: 'ES6',
          isSelected: false,
          credit: 60,
        },
        {
          id: 2,
          name: 'Webpack',
          isSelected: false,
          credit: 20,
        },
        {
          id: 3,
          name: 'React',
          isSelected: false,
          credit: 40,
        },
      ],
    });

    const action = {
      type: UNSELECT_COURSE,
      index: 2,
    };

    const expectedData = {
      courses: [
        {
          id: 1,
          name: 'ES6',
          isSelected: false,
          credit: 60,
        },
        {
          id: 2,
          name: 'Webpack',
          isSelected: false,
          credit: 20,
        },
        {
          id: 3,
          name: 'React',
          isSelected: false,
          credit: 40,
        },
      ],
    };

    const state = courseReducer(initialState, action);
    expect(state.toJS()).toEqual(expectedData);
  });
});
