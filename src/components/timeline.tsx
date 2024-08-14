import './styles/timeline.css';

export default function Timeline() {
    return (
        <div className="timelinecss">
            <h1>Important Dates</h1>
            <ul className='timelinecss-ul'>
                <li className='ulli'>
                    <div className="date">Paper Submission Opening Date</div>
                    <div className="title">1<sup>st</sup> Sep. 2024</div>
                    {/* <div className="descr">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas itaque hic quibusdam fugiat est numquam harum, accusamus suscipit consequatur laboriosam!</div> */}
                </li>
                <li className='ulli ulli-2'>
                    <div className="date">Paper Submission Due Date</div>
                    <div className="title">30<sup>th</sup> Nov. 2024</div>
                    {/* <div className="descr">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos adipisci nobis nostrum vero nihil veniam.</div> */}
                </li>
                <li className='ulli'>
                    <div className="date">Notification of Acceptance</div>
                    <div className="title">15<sup>th</sup> Jan. 2025</div>
                </li>
                <li className='ulli ulli-2'>
                    <div className="date">Registration Starts</div>
                    <div className="title">15<sup>th</sup> Jan. 2025</div>
                </li>
                <li className='ulli'>
                    <div className="date">Final Camera-ready Paper</div>
                    <div className="title">30<sup>th</sup> March 2025</div>
                </li>
            </ul>
        </div>
    )
}