import Navbar from "../components/navbar";
import College from "../components/college";
import AboutCollege from "../components/About";
import Departments from "../components/dept";
function AboutUs({venue}) {

  return (
    <>
      <Navbar />
      <College />
      <AboutCollege />
      <Departments venue={venue} />
    </>
  )
}
export default AboutUs