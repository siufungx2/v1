import TimeLineElement from './TimeLineElement'
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const TimeLine = ({ Timelineitems }) => {
    return (
        <section id="timeline">
            <div className="container-fuild px-5">
                <VerticalTimeline animate={false}>
                    {Timelineitems.map( (timelineitem, index) => (
                    <TimeLineElement data={timelineitem} key={index} />
                    ))}
                </VerticalTimeline>
            </div>
        </section>
    )
}

TimeLine.defaultProps = {
    Timelineitems: [
    {
        title: "Higher Diploma in Network in Mobile Computing",
        company: "Chinese University of Hong Kong School of Continuing and Professional Studies",
        date: "2009 - 2011",
        technology: [],
        type: "education"
    },
    ]
}
export default TimeLine