import React from 'react'
import CardMesure from './CardMesure'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { RadialGauge } from 'react-canvas-gauges'

class Mesures extends React.Component {
	//
	static propTypes = {
		mesures: PropTypes.shape({
			u2eff: PropTypes.string.isRequired,
			i1eff: PropTypes.string.isRequired,
			i2eff: PropTypes.string.isRequired,
			p1: PropTypes.string.isRequired,
			p2: PropTypes.string.isRequired,
			rendement: PropTypes.string.isRequired
		}).isRequired
	}
	//
	render() {
		const { u2eff, i1eff, i2eff, p1, p2, rendement } = this.props.mesures
		return (
			<div className="fluid">
				<div className="row">
					<div className="col s12 m4">
						<RadialGauge
							units="V"
							width={350}
							height={300}
							title="U2eff"
							value={u2eff}
							minValue={0}
							maxValue={300}
							majorTicks={['0', '50', '100', '150', '200', '250', '300']}
							minorTicks={10}
							highlights={[{ from: 0, to: 300, color: 'rgba(200,200,200,.3)' }]}
						/>
					</div>

					<div className="col  s12 m4">
						<RadialGauge
							units="A"
							width={350}
							height={300}
							title="I1eff"
							value={i1eff}
							minValue={0}
							maxValue={10}
							majorTicks={['0', '2', '4', '6', '8', '10']}
							highlights={[{ from: 0, to: 10, color: 'rgba(200,200,200,.3)' }]}
						/>
					</div>

					<div className="col s12 m4">
						<RadialGauge
							units="A"
							width={350}
							height={300}
							title="I2eff"
							value={i2eff}
							minValue={0}
							maxValue={10}
							majorTicks={['0', '2', '4', '6', '8', '10']}
							highlights={[{ from: 0, to: 10, color: 'rgba(200,200,200,.3)' }]}
						/>
					</div>

					<div className="col s12 m4">
						<RadialGauge
							units="W"
							width={350}
							height={300}
							title="P1"
							value={p1}
							minValue={0}
							maxValue={2000}
							majorTicks={[
								'0',
								'200',
								'400',
								'600',
								'800',
								'1000',
								'1200',
								'1400',
								'1600',
								'1800',
								'2000'
							]}
							highlights={[
								{ from: 0, to: 2000, color: 'rgba(200,200,200,.3)' }
							]}
						/>
					</div>

					<div className="col s12 m4">
						<RadialGauge
							units="W"
							width={350}
							height={300}
							title="P2"
							value={p2}
							minValue={0}
							maxValue={2000}
							majorTicks={[
								'0',
								'200',
								'400',
								'600',
								'800',
								'1000',
								'1200',
								'1400',
								'1600',
								'1800',
								'2000'
							]}
							highlights={[
								{ from: 0, to: 2000, color: 'rgba(200,200,200,.3)' }
							]}
						/>
					</div>

					<div className="col s12 m4">
						<RadialGauge
							units="%"
							width={350}
							height={300}
							title="Rendement"
							value={rendement}
							minValue={0}
							maxValue={100}
							majorTicks={['0', '20', '40', '60', '80', '100']}
							highlights={[{ from: 0, to: 100, color: 'rgba(200,200,200,.3)' }]}
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
