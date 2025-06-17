import { useState } from "react"

import freshFood from "../assets/img/portfolio/fresh-food.jpg"
import restaurantAkira from "../assets/img/portfolio/restaurant-japonais.jpg"
import espaceBienEtre from "../assets/img/portfolio/espace-bien-etre.jpg"



function RealisationsCard () {
    const [modalData, setModalData] = useState({});
    const [modalImage, setModalImage] = useState();

    const [realisations] = useState([
        {
            id: 1,
            name: "Fresh food",
            desc: "Réalisation d'un site avec commande en ligne.",
            tech: "PHP et MySQL",
            img : {
                src: freshFood,
                alt: "Panier de fruits"
            }
        },
        {
            id: 2,
            name: "Restaurant Akira",
            desc: "Réalisation d'un site vitrine.",
            tech: "WordPress",
            img : {
                src: restaurantAkira,
                alt: "Menu sushis"
            }
        },
        {
            id: 3,
            name: "Espace bien-être",
            desc: "Réalisation d'un site vitrine pour un patricien de bien-être.",
            tech: "HTML/CSS",
            img : {
                src: espaceBienEtre,
                alt: "Espace bien-être"
            }
        }
    ])

    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 text-center rounded">
            {realisations.map(projet =>
                <div className="col" key={projet.id}>
                    <div className="card h-100">
                        <img src={projet.img.src} className="card-img-top" alt={projet.img.alt}></img>
                    <div className="card-body">
                        <h5 className="card-title">{projet.name}</h5>
                        <p className="card-text">{projet.desc}</p>
                        <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target={`#modal-${projet.id}`}
                        onClick={()=> {setModalData(projet); setModalImage(<img src={projet.img.src} alt={projet.img.alt} style={{width: "100%"}} />)}}>Voir</button>
                    </div>
                    <div className="card-footer">
                        <small className="text-body-secondary">Site réalisé avec {projet.tech}</small>
                    </div>
                    </div>
                    <div id={`modal-${projet.id}`} className="modal" tabIndex="-1">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{modalData.name}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {modalImage}
                                <p>{modalData.desc}</p>
                                <p>Le site a été réalisé à l&#39;aide de {modalData.tech}.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default RealisationsCard