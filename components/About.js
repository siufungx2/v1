import FungImg from "../assets/img/icon.JPG"

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 text-start">
                        <h1>Hello, I&apos;m Fung.</h1>
                        <h5>I&apos;m an active learner, enjoys challenge web developer passionate about new technology with my work.</h5>
                        <hr />
                    </div>
                    <div className="col-lg-3 col-md-12 py-2">
                        <img src={FungImg.src} className="img-thumbnail" alt="Fung" />
                    </div>
                    <div className="col-lg-9 text-start">                        
                        <p>I graduated from City University Hong Kong SCOPE Bachelor degree in Business Information Technology
                        I have experience develop website, social media campaign, from basic tracking data to content management system.
                        I strive to create web that not only functions efficiently, but also performance and extendable.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About