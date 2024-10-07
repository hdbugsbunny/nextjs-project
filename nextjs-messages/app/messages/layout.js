import { getAllMessages } from "@/lib/messages";

export default async function MessagesLayout({ children }) {
  //   const response = await fetch("http://localhost:8080/messages");
  //   const messages = await response.json();
  const messages = await getAllMessages();
  const totalMessages = messages.length;

  return (
    <>
      <h1>Important Messages!</h1>
      <p>{totalMessages} Messages Found</p>
      <hr />
      {children}
    </>
  );
}
