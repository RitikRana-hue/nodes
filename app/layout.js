// import { Poppins } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

export const metadata = {
  title: "NodesIO",
  description: "Smart waste management solution",
  icons: {
    icon: '/images/nodesio.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
