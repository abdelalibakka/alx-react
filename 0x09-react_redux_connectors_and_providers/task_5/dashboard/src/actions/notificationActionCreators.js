import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, SET_LOADING_STATE } from "./notificationActionTypes";

export const markAsRead = (index) => ({type: MARK_AS_READ, index});

export const boundmarkAsRead = (index) => dispatch(markAsRead(index));

export const setNotificationFilter = (filter) => ({type: SET_TYPE_FILTER, filter});

export const boundsetNotificationFilter = (filter) => dispatch(setNotificationFilter(filter));

export const setLoadingState = (loading) => ({type: SET_LOADING_STATE, loading});

export const setNotifications = (data) => ({type: FETCH_NOTIFICATIONS_SUCCESS, data})

export const fetchNotifications = () => {
    return (dispatch) => {
      dispatch(setLoadingState(true));
      return fetch("./notifications.json")
        .then((res) => res.json())
        .then((data) => dispatch(setNotifications(data)))
        .catch((error) => {})
        .finally(() => dispatch(setLoadingState(false)));
    };
  };
