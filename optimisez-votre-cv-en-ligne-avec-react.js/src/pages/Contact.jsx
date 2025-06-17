import "../css/Contact.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import PropTypes from "prop-types"

function TitreSection({titre}) {
    return (
        <div className="border-bottom border-3" style={{"--bs-border-color": "#0d6efd"}}>
            <h3>{titre}</h3>
        </div>
    )
}

TitreSection.propTypes = {
    titre: PropTypes.string.isRequired
};

export default function Contact() {
  const [form, setForm] = useState({ nom: "", email: "", tel: "", sujet: "", message: "" });
  const [error, setError] = useState("");

  useEffect(() => {
      document.title = "Me contacter - John Doe"
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (Object.values(form).some(v => !v.trim())) {
      setError("Tous les champs sont obligatoires.");
      return;
    }
    setError("");
    // Envoyer le formulaire ou afficher un message de succès
  };

  return (
    <div className="containerBg py-5">
      <div className="container contact p-4 rounded">
        <h2 className="text-center mb-2 mt-2">ME CONTACTER</h2>
        <p className="text-center mb-4">
          Pour me contacter en vue d&apos;un entretien ou d&apos;une future collaboration, merci de remplir le formulaire de contact.
        </p>
        <div className="row">
          {/* Formulaire à gauche */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <div className="border-bottom border-3 mb-3" style={{"--bs-border-color": "#0d6efd"}}>
              <h4>Formulaire de contact</h4>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                className="form-control mb-2"
                name="nom"
                placeholder="Votre nom"
                value={form.nom}
                onChange={handleChange}
                required
              />
              <input
                className="form-control mb-2"
                name="email"
                placeholder="Votre adresse email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <input
                className="form-control mb-2"
                name="tel"
                placeholder="Votre numéro de téléphone"
                value={form.tel}
                onChange={handleChange}
                required
              />
              <input
                className="form-control mb-2"
                name="sujet"
                placeholder="Sujet"
                value={form.sujet}
                onChange={handleChange}
                required
              />
              <textarea
                className="form-control mb-2"
                name="message"
                placeholder="Votre message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
              />
              {error && <div className="alert alert-danger">{error}</div>}
              <button type="submit" className="btn btn-primary mt-2">Envoyer</button>
            </form>
          </div>
          {/* Coordonnées + Map à droite */}
          <div className="col-12 col-md-6">
            <div className="border-bottom border-3 mb-3" style={{"--bs-border-color": "#0d6efd"}}>
              <h4>Mes coordonnées</h4>
            </div>
            <p className="mb-2">
              <FontAwesomeIcon icon={faLocationDot} /> 40 Rue Laure Diebold, 69009 Lyon, France<br />
              <FontAwesomeIcon icon={faMobileScreenButton} /> 06 20 30 40 50
            </p>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=40+Rue+Laure+Diebold,+69009+Lyon,+France&output=embed"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="mt-2"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}