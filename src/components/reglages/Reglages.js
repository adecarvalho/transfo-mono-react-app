import React from 'react'
import CardReglage from './CardReglage'
import { connect } from 'react-redux'

import { setNewReglage } from '../../store/actions'
//
class Reglages extends React.Component {
	state = {
		u1eff: '0',
		module: '500',
		phase: '0'
	}
	//
	onChangeModule = e => {
		const module = e.target.value

		this.setState(
			{
				module: module
			},
			() => {
				this.props.onSetNewReglage(this.state)
			}
		)
	}
	onChangeTension = e => {
		const u1 = e.target.value

		this.setState(
			{
				u1eff: u1
			},
			() => {
				this.props.onSetNewReglage(this.state)
			}
		)
	}
	onChangePhase = e => {
		const phase = e.target.value

		this.setState(
			{
				phase: phase
			},
			() => {
				this.props.onSetNewReglage(this.state)
			}
		)
	}

	render() {
		return (
			<div className="fluid">
				<div className="row">
					{/* reglage tension u1 */}
					<div className="col s12 m4">
						<CardReglage
							valeur={this.state.u1eff}
							onChangeValeur={this.onChangeTension}
							min={0}
							max={220}
							step={5}
							titre={'Tension primaire en Veff'}
						/>
					</div>

					{/* reglage module charge */}
					<div className="col s12 m4">
						<CardReglage
							valeur={this.state.module}
							onChangeValeur={this.onChangeModule}
							min={20}
							max={500}
							step={2}
							titre={'Module de la charge'}
						/>
					</div>

					{/* reglage phase charge */}
					<div className="col s12 m4">
						<CardReglage
							valeur={this.state.phase}
							onChangeValeur={this.onChangePhase}
							min={-90}
							max={90}
							step={10}
							titre={'Phase de la charge'}
						/>
					</div>
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSetNewReglage: reglage => dispatch(setNewReglage(reglage))
	}
}

export default connect(
	null,
	mapDispatchToProps
)(Reglages)
