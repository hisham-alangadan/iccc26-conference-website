import Navbar from "../components/navbar";
import College from "../components/college";
import AboutCollege from "../components/About";
import Departments from "../components/dept";
import Footer from "../components/Footer";

function AboutUs({venue}:any) {

  return (
    <>
      <Navbar />
      <College />
      <AboutCollege />
      <Departments venue={venue} />
      <Footer />
    </>
  )
}
export default AboutUs