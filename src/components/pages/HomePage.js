import React from "react"
import img_kapp from "../../images/kapp.svg"
import { Link } from "react-router-dom"

class HomePage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row  s12 m8">
          <h2 className="center grey-text">
            Simulation du Transformateur Monophasé
          </h2>
        </div>

        <div className="row">
          <div className="col s12 m7 offset-m3">
            <div className="card z-depth-3">
              <div className="card-image">
                <img src={img_kapp} alt="kapp_image" />
                <span className="card-title grey-text">Modèle de Kapp</span>
                <Link
                  to="/modele"
                  className="btn-floating halfway-fab waves-effect waves-light amber darken-4"
                >
                  <i className="material-icons">edit</i>
                </Link>
              </div>
              <div className="card-content">
                <p>
                  Application Web pour la simulation d'un transformateur
                  monophasé, dans l'hypothèse de Kapp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage
