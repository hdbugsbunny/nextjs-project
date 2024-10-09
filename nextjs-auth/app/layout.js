import "./global.css";

export const metadata = {
  title: "Next.js Authentication",
  description: "Learn How to Implement Authentication Using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
