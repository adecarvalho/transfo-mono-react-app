import React from 'react'
import CardMesure from './CardMesure'
import { connect } from 'react-redux'

class Mesures extends React.Component {
	//
	render() {
		const { u2eff, i1eff, i2eff, p1, p2, rendement } = this.props.mesures
		return (
			<div className="fluid">
				<div className="row">
					<div className="col s12 m4">
						<CardMesure
							color={'#0097a7'}
							max={250}
							value={u2eff}
							label={'U2eff(V)'}
						/>
					</div>

					<div className="col  s12 m4">
						<CardMesure
							color={'#0097a7'}
							max={10}
							value={i1eff}
							label={'I1eff(A)'}
						/>
					</div>

					<div className="col s12 m4">
						<CardMesure
							color={'#0097a7'}
							max={10}
							value={i2eff}
							label={'I2eff(A)'}
						/>
					</div>

					<div className="col s12 m4">
						<CardMesure
							color={'#00838f'}
							max={2000}
							value={p1}
							label={'P1(W)'}
						/>
					</div>

					<div className="col s12 m4">
						<CardMesure
							color={'#00838f'}
							max={2000}
							value={p2}
							label={'P2(W)'}
						/>
					</div>

					<div className="col s12 m4">
						<CardMesure
							color={'#00838f'}
							max={100}
							value={rendement}
							label={'Rendement(%)'}
						/>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		mesures: state.mesures
	}
}

export default connect(mapStateToProps)(Mesures)
