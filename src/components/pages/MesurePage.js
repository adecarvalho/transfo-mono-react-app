import React from "react"
import Reglages from "../reglages/Reglages"

class MesurePage extends React.Component {
  render() {
    return (
      <div className="fluid">
        <div className="row">
          <h3 className="center grey-text">Réglages et mesures</h3>
        </div>

        <Reglages />
      </div>
    )
  }
}

export default MesurePage
