// import { Poppins } from 'next/font/google';
import "./globals.css";
import Sidebar from "./Sidebar.jsx/page";



export const metadata = {
  title: "MiDiT",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
