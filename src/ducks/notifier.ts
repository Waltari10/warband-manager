import { OptionsObject, SnackbarKey } from 'notistack';

export const ENQUEUE_SNACKBAR = 'ENQUEUE_SNACKBAR';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
export const REMOVE_SNACKBAR = 'REMOVE_SNACKBAR';

interface Notification {
  options: OptionsObject;
  key?: number | string;
  message: string | React.ReactNode;
  dismissed?: boolean;
}

export const enqueueSnackbar = (notification: Notification) => {
  const key = notification.options && notification.options.key;

  return {
    type: ENQUEUE_SNACKBAR,
    notification: {
      ...notification,
      key: key || new Date().getTime() + Math.random(),
    },
  };
};

export const closeSnackbar = (key: SnackbarKey) => ({
  type: CLOSE_SNACKBAR,
  dismissAll: !key, // dismiss all if no key has been defined
  key,
});

export const removeSnackbar = (key: SnackbarKey) => ({
  type: REMOVE_SNACKBAR,
  key,
});

export interface NotifierState {
  notifications: Notification[];
}

const defaultState: NotifierState = {
  notifications: [],
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
  case ENQUEUE_SNACKBAR:
    return {
      ...state,
      notifications: [
        ...state.notifications,
        {
          key: action.key,
          ...action.notification,
        },
      ],
    };

  case CLOSE_SNACKBAR:
    return {
      ...state,
      notifications: state.notifications.map(notification =>
        action.dismissAll || notification.key === action.key
          ? { ...notification, dismissed: true }
          : { ...notification },
      ),
    };

  case REMOVE_SNACKBAR:
    return {
      ...state,
      notifications: state.notifications.filter(
        notification => notification.key !== action.key,
      ),
    };

  default:
    return state;
  }
};
