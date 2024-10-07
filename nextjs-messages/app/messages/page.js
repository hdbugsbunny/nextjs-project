import Messages from "@/components/messages";
import { getAllMessages } from "@/lib/messages";
// import { unstable_noStore } from "next/cache";

// export const revalidate = 5;
// export const dynamic = "force-dynamic";

export default function MessagesPage() {
  //   unstable_noStore();
  //   const response = await fetch("http://localhost:8080/messages", {
  //     next: { tags: ["msg"] },
  //   });
  //   const messages = await response.json();
  const messages = getAllMessages();
  if (!messages || messages.length === 0) {
    return <p>No Messages Found!</p>;
  }

  return <Messages messages={messages} />;
}
