import "./styles/presentation.css"

const PresentationComponent = () => {
    return (
    <div className="presentation-container">
        <h1> </h1>
        <h1 className="navy">Presentation Guidelines</h1>
        <ul>
            <li>Each parallel session will include multiple presentations</li>
            <li>Presenters will have 13 minutes for their presentation (10 minutes for presentation, 3 minutes for discussion)</li>
            <li>Each presentation may use a maximum of 15 slides including the introduction, references, and end slide</li>
            <li>Please prepare your presentation in PowerPoint or Beamer in the template provided</li>
            <li>Bring an extra copy of your presentation to the event (on a USB stick or by sending it to your email)</li>
        </ul>
    </div>
    );
};

export default PresentationComponent;