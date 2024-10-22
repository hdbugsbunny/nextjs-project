import { NotificationContext } from "@/store/notificationContext";
import { useContext } from "react";
import Notification from "../ui/notification";
import MainHeader from "./mainHeader";

export default function Layout(props) {
  const { children } = props;
  const notificationCtx = useContext(NotificationContext);
  const { title, message, status } = notificationCtx.notification;

  return (
    <>
      <MainHeader />
      <main>{children}</main>
      {title && message && status && (
        <Notification title={title} message={message} status={status} />
      )}
    </>
  );
}
