import notificationReducer, {
    initialNotificationState,
  } from './notificationReducer';
import { fromJS, toJS } from 'immutable';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  SET_LOADING_STATE
} from '../actions/notificationActionTypes';
  
  describe('notificationReducer', function () {
    it('initial state', function () {
      const state = notificationReducer(undefined, {});
      expect(state.toJS()).toEqual(initialNotificationState.toJS());
    });
  
    it('FETCH_NOTIFICATIONS_SUCCESS', function () {
      const action = {
        type: FETCH_NOTIFICATIONS_SUCCESS,
        notifications: [
          {
            id: 1,
            isRead: false,
            type: 'default',
            value: 'New course available',
          },
          {
            id: 2,
            isRead: false,
            type: 'urgent',
            value: 'New resume available',
          },
          {
            id: 3,
            isRead: false,
            type: 'urgent',
            value: 'New data available',
          },
        ],
      };

  
      const expectedData = {
        filter: 'DEFAULT',
        notifications: [
          {
            id: 1,
            isRead: false,
            type: 'default',
            value: 'New course available',
          },
          {
            id: 2,
            isRead: false,
            type: 'urgent',
            value: 'New resume available',
          },
          {
            id: 3,
            isRead: false,
            type: 'urgent',
            value: 'New data available',
          },
        ],
      };
  
      const state = notificationReducer(undefined, action);
      expect(state.toJS()).toEqual(expectedData);
    });
  
    it('MARK_AS_READ', function () {
      const initialState = fromJS({
        filter: 'DEFAULT',
        notifications: [
          {
            id: 1,
            isRead: false,
            type: 'default',
            value: 'New course available',
          },
          {
            id: 2,
            isRead: true,
            type: 'urgent',
            value: 'New resume available',
          },
          {
            id: 3,
            isRead: false,
            type: 'urgent',
            value: 'New data available',
          },
        ],
      });
  
      const action = {
        type: MARK_AS_READ,
        index: 2,
      };
  
      const expectedData = {
        filter: 'DEFAULT',
        notifications: [
          {
            id: 1,
            isRead: false,
            type: 'default',
            value: 'New course available',
          },
          {
            id: 2,
            isRead: true,
            type: 'urgent',
            value: 'New resume available',
          },
          {
            id: 3,
            isRead: false,
            type: 'urgent',
            value: 'New data available',
          },
        ],
      };
  
      const state = notificationReducer(initialState, action);
      expect(state.toJS()).toEqual(expectedData);
    });
  
    it('SET_TYPE_FILTER', function () {
      const initialState = fromJS({
        filter: 'DEFAULT',
        notifications: [
          {
            id: 1,
            isRead: false,
            type: 'default',
            value: 'New course available',
          },
          {
            id: 2,
            isRead: false,
            type: 'urgent',
            value: 'New resume available',
          },
          {
            id: 3,
            isRead: false,
            type: 'urgent',
            value: 'New data available',
          },
        ],
      });
  
      const action = {
        type: SET_TYPE_FILTER,
        filter: 'URGENT',
      };
  
      const expectedData = {
        filter: 'URGENT',
        notifications: [
          {
            id: 1,
            isRead: false,
            type: 'default',
            value: 'New course available',
          },
          {
            id: 2,
            isRead: false,
            type: 'urgent',
            value: 'New resume available',
          },
          {
            id: 3,
            isRead: false,
            type: 'urgent',
            value: 'New data available',
          },
        ],
      };
  
      const state = notificationReducer(initialState, action);
      expect(state.toJS()).toEqual(expectedData);
    });
  });

  it("Tests that SET_LOADING_STATE returns the data with the right item updated", function () {
    const initialState = {
      filter: "DEFAULT",
      loading: false,
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      ],
    };

    initialState.notifications = notificationsNormalizer(
      initialState.notifications
    ).notifications;

    const action = {
      type: SET_LOADING_STATE,
      loading: true,
    };

    const data = [
      {
        id: 1,
        isRead: false,
        type: "default",
        value: "New course available",
      },
      {
        id: 2,
        type: "urgent",
        isRead: false,
        value: "New resume available",
      },
      {
        id: 3,
        type: "urgent",
        isRead: false,
        value: "New data available",
      },
    ];

    const normalizedData = notificationsNormalizer(data);

    const expectedData = {
      filter: "DEFAULT",
      loading: true,
      ...normalizedData,
    };

    const state = notificationReducer(fromJS(initialState), action);

    expect(state.toJS()).toEqual(expectedData);
  });
