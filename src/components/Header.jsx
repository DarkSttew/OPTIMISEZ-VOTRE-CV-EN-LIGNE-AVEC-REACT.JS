import '../css/header.css'

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import logo from '../assets/img/logo.png'

function Header() {
    return(
      <header>
        <nav className="navbar navbar-expand-xl bg-dark text-uppercase">
          <div className="container">
            <NavLink to="/" className='navbar-brand text-light'>
              <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top me-1"></img>
              John Doe
            </NavLink>
            <button className="navbar-toggler border-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <FontAwesomeIcon icon={faBars} className='text-light'/>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-0">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link active-link text-uppercase"
                        : "nav-link text-uppercase"
                    }
                  >
                    Accueil
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/services"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link active-link text-uppercase"
                        : "nav-link text-uppercase"
                    }
                  >
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/realisations"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link active-link text-uppercase"
                        : "nav-link text-uppercase"
                    }
                  >
                    Réalisations
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link active-link text-uppercase"
                        : "nav-link text-uppercase"
                    }
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link active-link text-uppercase"
                        : "nav-link text-uppercase"
                    }
                  >
                    Me contacter
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
}

export default Header