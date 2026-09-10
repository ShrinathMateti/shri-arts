import "./globals.css";

export const metadata = {
  title: "Shri Arts - Handcrafted Murtis",
  description:
    "Shri Arts brings you Ganesh, Hanuman, Krishna, Shiva and Durga murtis in marble, brass, panchdhatu and fibre — handcrafted by artisans in Jaipur.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Mukta:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
