import { useState } from "react"

const Nav = ( {scroll} ) => {
    const [isMobileMenuOpen, setMobilMenu] = useState(false)
    const MobileMenuHandleClick = () => {
        setMobilMenu(!isMobileMenuOpen)
        const bodyEl = document.querySelector('body')
        bodyEl.classList.toggle('nav-open');

        const sectionsEl = document.querySelectorAll('section')
        for(const section of sectionsEl)
        {
            section.classList.toggle('invisible')
            // Lock scroll when mobile menu pop
            disableScrolling(isMobileMenuOpen)
        }

    }

    const disableScrolling = ( bool_Scroll ) => {
        if( !bool_Scroll ){
            document.body.style.overflow = "hidden"
        }else{
            document.body.style.overflow = ""
        }
    }

    return (
        <>
        <nav id="navbar" className={ (scroll > 10 ? 'visible' : 'invisible') + " d-none d-xl-block"} >
            <a className="nav-link" href="#intro">Intro</a>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#timeline">Timeline</a>
            <a className="nav-link" href="#skill">Skill</a>
        </nav>

        {/* Mobile menu */}
        <div className="p-3 position-fixed d-xl-none">
            <div className={ (isMobileMenuOpen ? 'change' : '' )+ ' container'} onClick={MobileMenuHandleClick}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>

            <div className="fixed-top main-menu" onClick={MobileMenuHandleClick}>
                <div className="flex-center p-5">
                    <ul className="nav flex-column">
                        <li className="nav-item delay-1">
                            <a className="nav-link" href="#intro">Intro</a>
                        </li>
                        <li className="nav-item delay-2">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item delay-3">
                            <a className="nav-link" href="#timeline">Timeline</a>
                        </li>
                        <li className="nav-item delay-4">
                            <a className="nav-link" href="#skill">Skill</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Nav