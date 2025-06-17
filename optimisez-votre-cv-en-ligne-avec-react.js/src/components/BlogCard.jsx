import { useState } from "react"

import coder from "../assets/img/blog/coder.jpg"
import croissance from "../assets/img/blog/croissance.jpg"
import google from "../assets/img/blog/google.jpg"
import screens from "../assets/img/blog/screens.jpg"
import seo from "../assets/img/blog/seo.jpg"
import technos from "../assets/img/blog/technos.png"

function BlogCard () {
    const [modalData, setModalData] = useState({});
    const [modalImage, setModalImage] = useState();

    const [articles] = useState([
        {
            id: 1,
            name: "Coder son site en HTML/CSS",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis ex ac lorem ornare, pellentesque.",
            date: "22 août 2022",
            img : {
                src: coder,
                alt: "Coder son site en HTML/CSS"
            }
        },
        {
            id: 2,
            name: "Vendre ses produits sur le web",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis ex ac lorem ornare, pellentesque.",
            date: "20 août 2022",
            img : {
                src: croissance,
                alt: "Vendre ses produits sur le web"
            }
        },
        {
            id: 3,
            name: "Se positionner sur Google",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis ex ac lorem ornare, pellentesque.",
            date: "1 août 2022",
            img : {
                src: google,
                alt: "Se positionner sur Google"
            }
        },
        {
            id: 4,
            name: "Coder en responsive design",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis ex ac lorem ornare, pellentesque.",
            date: "31 juillet 2022",
            img : {
                src: screens,
                alt: "Coder en responsive design"
            }
        },
        {
            id: 5,
            name: "Technique de référencement",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis ex ac lorem ornare, pellentesque.",
            date: "30 juillet 2022",
            img : {
                src: seo,
                alt: "Technique de référencement"
            }
        },
        {
            id: 6,
            name: "Apprendre à coder",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis ex ac lorem ornare, pellentesque.",
            date: "12 juillet 2022",
            img : {
                src: technos,
                alt: "Apprendre à coder"
            }
        }
    ])

    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 rounded">
            {articles.map((article) =>
                <div className="col my-2" key={article.id}>
                    <div className="card h-100">
                        <img src={article.img.src} className="card-img-top" alt={article.img.alt}></img>
                    <div className="card-body">
                        <h5 className="card-title">{article.name}</h5>
                        <p className="card-text">{article.desc}</p>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                        onClick={()=> {setModalData(article); setModalImage(<img src={article.img.src} alt={article.img.alt} style={{width: "100%"}}></img>)}}>Lire la suite</button>
                    </div>
                    <div className="card-footer">
                        <small className="text-body-secondary">Publié le {article.date}</small>
                    </div>
                    </div>

                    <div id="exampleModal" className="modal" tabIndex="-1">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{modalData.name}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {modalImage}
                                <p>{modalData.desc}</p>
                                <p>L&apos;article a été écrit le {modalData.date}.</p>
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

export default BlogCard