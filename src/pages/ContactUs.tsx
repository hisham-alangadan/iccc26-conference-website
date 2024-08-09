import Navbar from "../components/navbar";
import ContactComponent from "../components/contactComponent";
import AddressMap from "../components/addressMap.tsx";
import Footer from "../components/Footer.tsx";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <ContactComponent />
      <AddressMap />
      <Footer />
    </>
  );
};

export default ContactUs;
