import { createContext, useEffect, useState } from "react";

export const NotificationContext = createContext({
  notification: {
    title: "",
    message: "",
    status: "",
  },
  showNotification: (title, message, status) => {},
  dismissNotification: () => {},
});

export const NotificationProvider = (props) => {
  const [notification, setNotification] = useState({
    title: "",
    message: "",
    status: "",
  });

  useEffect(() => {
    if (notification.status === "success" || notification.status === "error") {
      setTimeout(() => {
        dismissNotification();
      }, 3000);
    }

    // Clear the notification when it's dismissed
    return () => clearTimeout();
  }, [notification]);

  const showNotification = (title, message, status) => {
    setNotification({ title, message, status });
  };

  const dismissNotification = () => {
    setNotification({ title: "", message: "", status: "" });
  };

  return (
    <NotificationContext.Provider
      value={{
        notification,
        showNotification,
        dismissNotification,
      }}
    >
      {props.children}
    </NotificationContext.Provider>
  );
};
