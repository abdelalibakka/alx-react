export const filterTypeSelected = (state) => {
  return state.get("filter");
};
export const getNotifications = (state) => {
  return state.notifications;
};
export const getUnreadNotifications = (state) => {
  const notifications = state.notifications.messages;

  if (notifications) {
    const filtered = notifications
      .valueSeq()
      .filter((value) => value.isRead === false);

    return filtered;
  }

  return notifications;
};
