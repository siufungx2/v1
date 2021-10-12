import { MdDeveloperMode } from "@react-icons/all-files/md/MdDeveloperMode";
import { BsTools } from "@react-icons/all-files/bs/BsTools";

const Skill = ( {Languages, Frameworks, Tools}) => {
    return (
        <section id="skill">
            <div className="container px-5">
                <div className="row justify-content-left pt-3">
                    <div className="col-auto">
                        <h2 className="sub-header"><MdDeveloperMode />Languages</h2>
                        <div className="dropdown-divider"></div>
                        {Languages.map( (language, index) => (
                            <div className="col-lg-auto col-md-3 col-sm-4 rounded-skill text-nowrap px-1" key={index}>
                                {language}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="row justify-content-left pt-3">
                    <div className="col-auto">
                        <h2 className="sub-header"><MdDeveloperMode />Framework</h2>
                        <div className="dropdown-divider"></div>
                        {Frameworks.map( (framework, index) => (
                            <div className="col-lg-auto col-md-3 col-sm-4 rounded-skill text-nowrap px-1" key={index}>
                                {framework}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="row justify-content-left pt-3">
                    <div className="col-auto">
                        <h2 className="sub-header"><BsTools />Tools</h2>
                        <div className="dropdown-divider"></div>
                            {Tools.map( (tool, index) => (
                                <div className="col-lg-auto col-md-auto col-sm-auto rounded-skill text-nowrap px-1" key={index}>
                                {tool}
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    )
}


Skill.defaultProps = {
    Languages: [],
    Frameworks: [],
    Tools: []
}

export default Skill