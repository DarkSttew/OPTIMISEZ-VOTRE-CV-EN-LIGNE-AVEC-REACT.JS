import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMobileScreenButton, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { Helmet } from "react-helmet";
import { useEffect } from "react";

export default function Legal () {
    useEffect(() => {
        document.title = "Mentions légales - John Doe";
    }, []);

    return (
        <>
            <Helmet>
                <meta name="robots" content="noindex" />
            </Helmet>
            <div className="container mt-3">
                <div className="titre text-center">
                    <h2 className="text-uppercase">mentions légales</h2>
                    <div className='border-bottom w-25 m-auto border-3' style={{"--bs-border-color": "#0d6efd"}}></div>
                </div>

                <div className="accordion my-3 rounded" id="accordionExample" style={{ "--bs-accordion-active-color": "#0d6efd" }}>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Editeur du site
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <h3>John Doe</h3>
                                <address>
                                    <p><FontAwesomeIcon icon={faLocationDot} /> 40 Rue Laure Diebold <br></br>69009 Lyon, France</p>
                                    <p><FontAwesomeIcon icon={faMobileScreenButton} /><a href='tel:0620304050' style={{ color: "#0d6efd"}}> 06 20 30 40 50</a></p>
                                    <p><FontAwesomeIcon icon={faEnvelope} /><a href='mailto:john.doe@gmail.com' style={{ color: "#0d6efd"}}> john.doe@gmail.com</a></p>
                                </address>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Hébergeur
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <h3>Always Data</h3>
                                <address>
                                    <p>91 rue du Faubourg Saint Honoré<br></br>
                                    75008 Paris, France</p>
                                    <p><FontAwesomeIcon icon={faGlobe} /><a href='www-alwaysdata.com' style={{ color: "#0d6efd"}}> www-alwaysdata.com</a></p>
                                </address>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Crédits
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <h3>Crédits</h3>
                                <p>Site développé par John Doe, étudiant du CEF.</p>
                                <p>Les images libres de droit sont issues du site <a href='https://pixabay.com/fr/' style={{ color: "#0d6efd"}}>Pixabay</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}