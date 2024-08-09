import "./styles/addressMap.css";

const AddressMap = () => {
    return (
        <div className="embed-map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.5203552509515!2d76.9037657759435!3d8.545856596362682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bec79541c519%3A0x98324eb5aafb3778!2sCollege%20of%20Engineering%20Trivandrum%20(CET)!5e0!3m2!1sen!2sin!4v1723171334162!5m2!1sen!2sin"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen={true}
                aria-hidden="false"
                tabIndex={0}
                className="iframe-map"
            />
        </div>
    );
};
export default AddressMap;