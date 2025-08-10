// import { Poppins } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

export const metadata = {
  title: "NodesIO",
  description: "Smart waste management solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/nodesio.png" type="image/png" />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
