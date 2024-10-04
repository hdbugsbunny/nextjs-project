import Header from "@/components/header";
import "./globals.css";

export const metadata = {
  title: "NextJS Blogs",
  description: "Browse And Share Your Amazing Blogs!",
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
