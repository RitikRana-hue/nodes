"use client";

import Header from "../Components/page/Header";
import Body from "../Components/page/Body";
import Footer from "../Components/page/Footer";

export default function PageDemo() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Body />
      </main>
      <Footer />
    </div>
  );
}