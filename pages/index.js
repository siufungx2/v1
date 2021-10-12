import { Intro, About, TimeLine, Skill } from '../components/'
import Skills from "../_data/skills.json"
import timeline from "../_data/timeline.json"

export default function Home( {Timelineitems, Languages, Frameworks, Tools} ) {
    return (
        <>
            <Intro />
            <About />
            <TimeLine Timelineitems={Timelineitems}/>
            <Skill Languages={Languages} Frameworks={Frameworks} Tools={Tools} />
        </>
    )
}

export const getStaticProps = async () => {

    return {
      props: {
        Timelineitems: timeline.TimeLine,
        Languages: Skills.Languages,
        Frameworks: Skills.Frameworks,
        Tools: Skills.Tools
      },
    };
  }