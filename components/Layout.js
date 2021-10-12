import Meta from './Meta'
import Nav from './Nav'
import Footer from './Footer'

import { useState ,useEffect } from 'react'

const Layout = ( {children} ) => {
    const [y, sety] = useState(0)
    const handleScrollShowNav = () => {
        sety(scrollY)
    }
    useEffect( () => {
        const bodyEl = document.querySelector('body')
        bodyEl.dataset.bsSpy = 'scroll'
        bodyEl.dataset.bsTarget = '#navbar'
        bodyEl.dataset.bsOffset = '0'

        window.addEventListener('scroll', handleScrollShowNav)
        return () => {
            window.removeEventListener('scroll', handleScrollShowNav)
        }
    })

    return (
        <>
            <Meta />
            <Nav scroll={y}/>
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout