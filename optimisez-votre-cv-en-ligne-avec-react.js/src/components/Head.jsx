function Head() {
    return(
        <div className="container-fluid text-center bg-image d-flex flex-column justify-content-center" id="header">
            <h1 className="text-white">Bonjour, je suis John Doe</h1>
            <h2 className="text-white">Développeur web full stack</h2>
            <div>
                <a href="#about" className="btn btn-primary text-white text-decoration-none">En savoir plus</a>
            </div>
        </div>
    );
};

export default Head;