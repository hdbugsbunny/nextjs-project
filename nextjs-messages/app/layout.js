import Header from "@/components/header";
import "./globals.css";

export const metadata = {
  title: "NextJS Messages",
  description: "Learn How Next.js Caching Works!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
