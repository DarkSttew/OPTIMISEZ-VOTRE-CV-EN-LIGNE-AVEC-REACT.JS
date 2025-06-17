import "../css/home.css"
import { useEffect } from 'react'

import Head from "../components/Head"
import About from "../components/About"

export default function Home() {
    useEffect(() => {
        document.title = "Portfolio - John Doe"
    }, [])

    return(
        <div>
            <Head/>
            <About/>
        </div>
    )
}