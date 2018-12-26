import React from 'react'
import CardReglage from './CardReglage'
//
class Reglages extends React.Component {
	state = {
		tension: 0,
		module: 5,
		phase: 0
	}
	//
	onChangeModule = e => {
		const module = e.target.value
		//console.log('module', module)
		this.setState({
			module: module
		})
	}
	onChangeTension = e => {
		const u1 = e.target.value
		//console.log('tension', u1)
		this.setState({
			tension: u1
		})
	}
	onChangePhase = e => {
		const phase = e.target.value
		//console.log('phase', phase)
		this.setState({
			phase: phase
		})
	}

	render() {
		return (
			<div className="row">
				{/* reglage tension u1 */}
				<div className="col s4">
					<CardReglage
						valeur={this.state.tension}
						onChangeValeur={this.onChangeTension}
						min={0}
						max={220}
						titre={'Tension primaire en Veff'}
					/>
				</div>

				{/* reglage module charge */}
				<div className="col s4">
					<CardReglage
						valeur={this.state.module}
						onChangeValeur={this.onChangeModule}
						min={5}
						max={500}
						titre={'Module de la charge'}
					/>
				</div>

				{/* reglage phase charge */}
				<div className="col s4">
					<CardReglage
						valeur={this.state.phase}
						onChangeValeur={this.onChangePhase}
						min={-90}
						max={90}
						titre={'Phase de la charge'}
					/>
				</div>
			</div>
		)
	}
}

export default Reglages
