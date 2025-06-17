import { useEffect } from "react"

import RealisationsCard from "../components/RealisationCard.jsx"

export default function Realisations () {
    useEffect(() => {
        document.title = "Mes réalisations - John Doe"
    }, [])

    return (
        <div>
            <div className="container-fluid banner"></div>
            <div className="container text-center">
                <h2 className="text-uppercase">Portfolio</h2>
                <p>Voici quelques-unes de mes réalisations</p>
                <div className='border-bottom w-25 m-auto border-3' style={{"--bs-border-color": "#0d6efd"}}></div>

                <div className="my-3">
                    <RealisationsCard/>
                </div>
            </div>
        </div>
    )
}