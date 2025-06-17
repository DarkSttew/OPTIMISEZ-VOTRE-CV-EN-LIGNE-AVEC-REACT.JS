import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faSquareTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    // Fonction pour faire défiler la page vers le haut
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      }); 
    };
  
    // Fonction pour gérer l'événement de défilement
    const handleScroll = () => {
      const scrollHeight = window.pageYOffset;
      setIsVisible(scrollHeight > 300); // Ajuster la valeur 300 selon vos préférences
    };
  
    // Ajouter un écouteur d'événement pour le défilement
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <>
        {isVisible && (
          <button
            id='buttonTop'
            onClick={scrollToTop}
          >
            <FontAwesomeIcon icon={faCircleChevronUp}/>
          </button>
        )}
      </>
    );
  };

function Footer() {
    return(
      <footer className='pt-4'>
        <div className='container-fluid'>
          <div className='row m-2'>
            <div className='col-12 col-md-6 col-xl-3 my-2'>
                <h4>John Doe</h4>
                <address>
                  <p>40 Rue Laure Diebold <br/>
                  69009 Lyon, France</p>
                  <p>Téléphone : <a href='tel:0620304050'>06 20 30 40 50</a></p>
                </address>
              <div className='fs-1'>
                <a className='me-3' rel="nofollow" href='https://github.com/github-john-doe' target='blank'>
                  <FontAwesomeIcon icon={faGithub}/>
                </a>
                <a className='me-3' rel="nofollow" href='https://twitter.com/home' target='blank'>
                  <FontAwesomeIcon icon={faSquareTwitter}/>
                </a>
                <a rel="nofollow" href='https://www.linkedin.com/feed/' target='blank'>
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
            <div className='col-12 col-md-6 col-xl-3'>
              <h4>Liens utiles</h4>
              <ul className='footer__list'>
                <li><Link to="/"><FontAwesomeIcon className="pe-2 chevronRight" icon={faChevronRight}/>Accueil</Link></li>
                <li><Link to="/#about"><FontAwesomeIcon className="pe-2 chevronRight" icon={faChevronRight}/>A propos</Link></li>
                <li><Link to="/services"><FontAwesomeIcon className="pe-2 chevronRight" icon={faChevronRight}/>Services</Link></li>
                <li><Link to="/contact"><FontAwesomeIcon className="pe-2 chevronRight" icon={faChevronRight}/>Me contacter</Link></li>
                <li><Link to="/mentions-legales"><FontAwesomeIcon className="pe-2 chevronRight" icon={faChevronRight}/>Mention légales</Link></li>
              </ul>
            </div>
            <div className='col-12 col-md-6 col-xl-3'>
              <h4>Mes dernières réalisations</h4>
              <ul className='footer__list'>
                <li><Link to="/realisations"><FontAwesomeIcon className="pe-2 chevronRight" icon={faChevronRight}/>Fresh food</Link></li>
                <li><Link to="/realisations"><FontAwesomeIcon className="pe-2 chevronRight" icon={faChevronRight}/>Restaurant Akira</Link></li>
                <li><Link to="/realisations"><FontAwesomeIcon className="pe-2 chevronRight" icon={faChevronRight}/>Espace bien-être</Link></li>
              </ul>
            </div>
            <div className='col-12 col-md-6 col-xl-3'>
              <h4>Mes derniers articles</h4>
              <ul className='footer__list'>
                <li><Link to="/blog"><FontAwesomeIcon className="pe-2 chevronRight" icon={faChevronRight}/>Coder son site en HTML/CSS</Link></li>
                <li><Link to="/blog"><FontAwesomeIcon className="pe-2 chevronRight" icon={faChevronRight}/>Vendre ses produits sur le web</Link></li>
                <li><Link to="/blog"><FontAwesomeIcon className="pe-2 chevronRight" icon={faChevronRight}/>Se positionner sur Google</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <p className='bg-dark text-white text-center py-2'><FontAwesomeIcon icon={faCopyright} /> Designed by John Doe</p>
        <ScrollToTopButton/>
      </footer>
    )
  }

export default Footer;