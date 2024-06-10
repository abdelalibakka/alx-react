import { createSelector } from 'reselect';
import notificationReducer from '../reducers/notificationReducer';

const getNotificationState = (state) => state.get('notifications');

// Selector to get the filter type
export const filterTypeSelected = createSelector(
  [getNotificationState],
  (notificationState) => notificationState.get('filter')
);

// Selector to get all notifications
export const getNotifications = createSelector(
  [getNotificationState],
  (notificationState) => notificationState.get('notifications')
);

// Selector to get unread notifications
export const getUnreadNotifications = createSelector(
  [getNotificationState],
  (notificationState) =>
    notificationState.get('notifications').filter((notification) => !notification.get('isRead'))
);
