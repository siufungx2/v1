// import Image from "next/image"
// import FungImg from "../assets/img/icon.JPG"

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="row">
                    <div className="col-9 text-start">
                        <h1 className="">Hello, I&apos;m Fung.</h1>
                        <h3>I&apos;m an active learner, enjoys challenge web developer passionate about new technology with my work.</h3>
                        
                        <p>I recently graduated from City University Hong Kong SCOPE Bachelor degree in Business Information Technology
                        I have experience develop website, social media campaign, from basic tracking data to content management system.
                        I strive to create web that not only functions efficiently, but also performance and extandable.</p>
                    </div>
                    <div className="col-3">
                        <img src={require('../assets/img/icon.jpg')} className="img-thumbnail" alt="Fung" />
                        {/* <Image src={FungImg} className="img-thumbnail" alt="Fung" /> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About