import { createMessage } from "@/lib/messages";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function NewMessagePage() {
  async function addMessage(formData) {
    "use server";

    const message = formData.get("message");
    createMessage(message);
    revalidatePath("/messages");
    redirect("/messages");
  }

  return (
    <>
      <h2>New Message</h2>
      <form action={addMessage}>
        <p className="form-control">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" rows={5} required />
        </p>
        <p className="form-actions">
          <button type="submit">Send</button>
        </p>
      </form>
    </>
  );
}
