import {
    FETCH_NOTIFICATIONS_SUCCESS,
    MARK_AS_READ,
    SET_TYPE_FILTER,
    SET_LOADING_STATE,
  } from '../actions/notificationActionTypes';
  import { Map, List } from 'immutable';
  import notificationsNormalizer from "../schema/notifications"
  
  const initialNotificationState = Map({
    notifications: {},
    filter: 'default',
    loading: false,
  });
  
  const notificationReducer = (state = initialNotificationState, action) => {
    switch (action.type) {
      case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedData = notificationsNormalizer(action.data);
      Object.keys(normalizedData.notifications).map((key) => {
        normalizedData.notifications[key].isRead = false;
      });

      return state.mergeDeep(normalizedData);

  
      case MARK_AS_READ:
       return state.setIn(['notifications', action.index, 'isRead'], true);
  
      case SET_TYPE_FILTER:
       return state.set('filter', action.filter);

      case SET_LOADING_STATE:
        return state.set("loading", action.loading);

      default:
        break;
    }
    return state;
  };
  
  export default notificationReducer;
