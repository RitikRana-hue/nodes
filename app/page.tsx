"use client";

import Header from "app/components/layout/Header";
import Body from "app/components/page/Body";
import Footer from "app/components/layout/Footer";
import SoraChatbot from "app/components/SoraChatbot";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-green-50">
      <Header />
      <main className="flex-grow">
        <Body />
      </main>
      <Footer />

      {/* Sora AI Chatbot */}
      <SoraChatbot environment="landing" />
    </div>
  );
}
