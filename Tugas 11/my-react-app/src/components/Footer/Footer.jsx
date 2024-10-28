import './Footer.css'
import AboutUs from "./AboutUs/AboutUs";
import Career from './Career/Career';
import Services from './Services/Services';
import Subscribe from './Subscribe/Subscribe';

export default function Footer() {
  return (
    <footer>
      <AboutUs/>
      <Career/>
      <Services/>
      <Subscribe/>
    </footer>
  )
}