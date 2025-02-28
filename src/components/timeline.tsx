import './styles/timeline.css';

export default function Timeline() {
    return (
        <div className="timelinecss" id="timeline">
            <h1>Important Dates</h1>
            <ul className='timelinecss-ul'>
                <li className='ulli'>
                    <div className="date">Paper Submission Opening Date</div>
                    <div className="title black">1<sup>st</sup> Sep. 2024</div>
                    {/* <div className="descr">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas itaque hic quibusdam fugiat est numquam harum, accusamus suscipit consequatur laboriosam!</div> */}
                </li>
                <li className='ulli ulli-2'>
                    <div className="date">Paper Submission Deadline</div>
                    <div className="title black">31<sup>st</sup> Dec. 2024</div>
                    {/* <div className="descr">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos adipisci nobis nostrum vero nihil veniam.</div> */}
                </li>
                <li className='ulli'>
                    <div className="date">Notification to Authors</div>
                    <div className="title black"><div className='due-date-text'>Rolling Reviews <br></br> Final Notification by</div>15<sup>th</sup> Feb. 2025</div>
                </li>
                <li className='ulli ulli-2'>
                    <div className="date">Registration Opens</div>
                    <div className="title">5<sup>th</sup> Mar. 2025</div>
                </li>
                <li className='ulli'>
                    <div className="date" id="crsd">Camera-Ready Submission Deadline</div>
                    <div className="title black">30<sup>th</sup> March 2025</div>
                </li>
            </ul>
            <div className='ist'> *All deadlines are in Indian Standard Time (IST)</div>
        </div>
    )
}