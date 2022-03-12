import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { MdWork } from "@react-icons/all-files/md/MdWork";
import { BsBook } from "@react-icons/all-files/bs/BsBook";

const TimeLineElement = ({ data }) => {
    const technologies = data.technology

    return (
        <VerticalTimelineElement
        date={data.date}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={data.type === "job" ? <MdWork /> :<BsBook />}
        >
            <h3 className="vertical-timeline-element-title">{data.title}</h3>
            <h2 className="vertical-timeline-element-subtitle">{data.company}</h2>
            {technologies.map( (technology, index) => (
                <p className="badge badge-pill bg-success m-1" key={index}>{technology}</p>
            ))}
            <hr className="d-block d-sm-block d-md-none" />
        </VerticalTimelineElement>
    )
}

export default TimeLineElement

