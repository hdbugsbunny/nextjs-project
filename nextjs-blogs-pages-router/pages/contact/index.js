import ContactForm from "@/components/contact/contactForm";
import Head from "next/head";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Harshit's Blog | Contact</title>
        <meta
          name="description"
          content="Contact Harshit for any queries or inquiries!"
        />
      </Head>
      <ContactForm />
    </>
  );
}
