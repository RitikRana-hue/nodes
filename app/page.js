import AboutUs from "./Components/AboutUs/AboutUs";
import Navbar from "./Components/navbar/page";
import Footer from "./Components/footer/page";
import Hero from "./Components/Hero/Hero";
import Section3 from "./Components/section3/page";
import Card from "./Components/Card/page";
export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero></Hero>
      <Section3></Section3>
      <Card></Card>
      <AboutUs></AboutUs>
      <Footer/>
    </>
  )
}