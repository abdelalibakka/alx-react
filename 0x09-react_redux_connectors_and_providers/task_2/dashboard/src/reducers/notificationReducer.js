import {
    FETCH_NOTIFICATIONS_SUCCESS,
    MARK_AS_READ,
    SET_TYPE_FILTER,
  } from '../actions/notificationActionTypes';
  import { Map, List } from 'immutable';
  import notificationsNormalizer from "../schema/notifications"
  
  const initialNotificationState = Map({
    notifications: List([]),
    filter: 'default',
  });
  
  const notificationReducer = (state = initialNotificationState, action) => {
    switch (action.type) {
      case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedData = notificationsNormalizer(action.data);
      return state.set('notifications', List(normalizedData));
  
      case MARK_AS_READ:
      return state.setIn(['notifications', action.index, 'isRead'], true);
  
      case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
  
      default:
        break;
    }
    return state;
  };
  
  export default notificationReducer;
