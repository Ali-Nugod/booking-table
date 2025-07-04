
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <Hero />
      <Menu />
      <BookingForm />
      <Footer />
    </div>
  );
}

export default App;
