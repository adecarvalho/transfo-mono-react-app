import React from 'react'

import { connect } from 'react-redux'
import { setModeleKapp } from '../../store/actions'

class ModelePage extends React.Component {
	state = {
		rapport_m: '',
		resistance_rp: '',
		inductance_lp: '',
		resistance_rs: '',
		reactance_xs: '',
		error: ''
	}

	onChangeHandler = e => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	isValidValue = val => {
		let txt = ''

		if (isNaN(val)) {
			txt = 'Nombre non valide'
			return txt
		}
		//
		if (val <= 0) {
			txt = 'Nombre négatif ou nul'
			return txt
		}

		return txt
	}

	onClickHandler = e => {
		//rapport m
		let txt = this.isValidValue(this.state.rapport_m)
		if (txt) {
			this.setState({
				error: 'Rapport m: ' + txt
			})
			return false
		} else {
			this.setState({
				error: ''
			})
		}
		//resistance Rp
		txt = this.isValidValue(this.state.resistance_rp)
		if (txt) {
			this.setState({
				error: 'Résistance Rp: ' + txt
			})
			return false
		} else {
			this.setState({
				error: ''
			})
		}
		//inductance Lp
		txt = this.isValidValue(this.state.inductance_lp)
		if (txt) {
			this.setState({
				error: 'Inductance Lp: ' + txt
			})
			return false
		} else {
			this.setState({
				error: ''
			})
		}
		//resistance Rs
		txt = this.isValidValue(this.state.resistance_rs)
		if (txt) {
			this.setState({
				error: 'Résistance Rs: ' + txt
			})
			return false
		} else {
			this.setState({
				error: ''
			})
		}
		//reactance Xs
		txt = this.isValidValue(this.state.reactance_xs)
		if (txt) {
			this.setState({
				error: 'Réactance Xs: ' + txt
			})
			return false
		} else {
			this.setState({
				error: ''
			})
		}
		//
		this.props.onsetModeleKapp(this.state)
		this.setState({
			error: ''
		})
		this.props.history.push('/mesure')
	}

	//
	render() {
		return (
			<div className="container">
				<div className="row ">
					<h3 className="center grey-text">Saisie du modèle de Kapp</h3>
				</div>

				<div className="row">
					<div className="col s12 m9 offset-m2">
						<div className="card z-depth-3">
							<div className="card-content white-text">
								<form>
									{/* input m */}
									<div className="row">
										<div className="input-field col s12">
											<input
												onChange={this.onChangeHandler}
												value={this.state.rapport_m}
												id="rapport_m"
												type="text"
												required
												className="validate"
											/>
											<label htmlFor="rapport_m">Rapport m</label>
										</div>
									</div>
									{/* primaire */}
									<div className="row">
										{/* valeur Rp*/}
										<div className="input-field col s6">
											<input
												onChange={this.onChangeHandler}
												value={this.state.resistance_rp}
												id="resistance_rp"
												type="text"
												required
												className="validate"
											/>
											<label htmlFor="resistance_rp">Résistance Rp</label>
										</div>
										{/*inductance Lp*/}
										<div className="input-field col s6">
											<input
												onChange={this.onChangeHandler}
												value={this.state.inductance_lp}
												id="inductance_lp"
												type="text"
												required
												className="validate"
											/>
											<label htmlFor="inductance_lp">Inductance Lp</label>
										</div>
									</div>

									{/*secondaire */}
									<div className="row">
										{/* valeur Rs*/}
										<div className="input-field col s6">
											<input
												onChange={this.onChangeHandler}
												value={this.state.resistance_rs}
												id="resistance_rs"
												type="text"
												required
												className="validate"
											/>
											<label htmlFor="resistance_rs">Résistance Rs</label>
										</div>
										{/*reactance Xs Lp*/}
										<div className="input-field col s6">
											<input
												onChange={this.onChangeHandler}
												value={this.state.reactance_xs}
												id="reactance_xs"
												type="text"
												required
												className="validate"
											/>
											<label htmlFor="reactance_xs">Réactance Xs</label>
										</div>
									</div>
									{/*btn*/}
									<div className="row">
										<div className="col s3">
											<a
												onClick={this.onClickHandler}
												className="waves-effect waves-light btn  teal darken-1"
											>
												Enregister
											</a>
										</div>
										<div className="col s8">
											<span className="red-text">{this.state.error} </span>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {}
}

const mapDispatchToProps = dispatch => {
	return {
		onsetModeleKapp: kapp => dispatch(setModeleKapp(kapp))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ModelePage)
