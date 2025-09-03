"use client";

import Header from "./Components/page/Header";
import Body from "./Components/page/Body";
import Footer from "./Components/page/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-green-50">
      <Header />
      <main className="flex-grow">
        <Body />
      </main>
      <Footer />
    </div>
  );
}