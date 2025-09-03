"use client";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default function Page() {
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