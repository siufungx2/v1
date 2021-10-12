// import { BsLinkedin } from "@react-icons/all-files/bs/BsLinkedin";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiFillMail } from "@react-icons/all-files/ai/AiFillMail";

import InfoData from "../_data/info.json"

const Footer = () => {
    return (
        <footer className="page-footer font-small cyan darken-3">
        
          <div className="container">        
            <div className="row justify-content-center p-5">        
              <div className="col-auto text-center p-2">
                <a href={InfoData.linkedin} target="_blank" className="footer-icon" rel="noopener noreferrer">
                    <AiFillLinkedin size="32" />
                </a>
              </div>
              <div className="col-auto text-center p-2">
                  <a href={InfoData.github} target="_blank" className="footer-icon" rel="noopener noreferrer">
                    <AiFillGithub size="32" />
                  </a>
              </div>
              <div className="col-auto text-center p-2">
                  <a href={"mailto:" + InfoData.email} className="footer-icon">
                    <AiFillMail size="32" />
                  </a>
              </div>
            </div>
        
          </div>
        
          <div className="footer-copyright text-center py-3">© 2020 Copyright:
            <a href="http://www.fungcheung.com/"> Fung Cheung</a>
          </div>
        
        </footer>
    )
}

export default Footer