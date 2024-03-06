import { Map, List } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('Selectors', () => {
  // Mock data for testing
  const mockState = Map({
    notifications: Map({
      filter: 'DEFAULT',
      notifications: List([
        Map({ id: 1, isRead: false, type: 'default', value: 'New course available' }),
        Map({ id: 2, isRead: false, type: 'urgent', value: 'New resume available' }),
        Map({ id: 3, isRead: true, type: 'urgent', value: 'New data available' }),
      ]),
    }),
  });

  it('filterTypeSelected selector', () => {
    const result = filterTypeSelected(mockState);
    expect(result).toBe('DEFAULT');
  });

  it('getNotifications selector', () => {
    const result = getNotifications(mockState);
    const expected = List([
      Map({ id: 1, isRead: false, type: 'default', value: 'New course available' }),
      Map({ id: 2, isRead: false, type: 'urgent', value: 'New resume available' }),
      Map({ id: 3, isRead: true, type: 'urgent', value: 'New data available' }),
    ]);
    expect(result).toEqual(expected);
  });

  it('getUnreadNotifications selector', () => {
    const result = getUnreadNotifications(mockState);
    const expected = List([
      Map({ id: 1, isRead: false, type: 'default', value: 'New course available' }),
      Map({ id: 2, isRead: false, type: 'urgent', value: 'New resume available' }),
    ]);
    expect(result).toEqual(expected);
  });
});
