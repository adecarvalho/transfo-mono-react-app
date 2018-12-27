import React from 'react'

const CardReglage = props => {
	const { min, max, step, titre, valeur, onChangeValeur } = props

	return (
		<div className="card z-depth-2">
			<div className="card-content">
				<span className="card-title center grey-text text-darken-2">
					{titre}
				</span>

				<div className="range-field">
					<input
						onChange={onChangeValeur}
						type="range"
						name="volume"
						min={min}
						max={max}
						value={valeur}
						step={step}
					/>
				</div>
			</div>
			<div class="card-action">
				<span className="teal-text">
					<i className="material-icons left">network_check</i>
					{`${valeur}`}
				</span>
			</div>
		</div>
	)
}

export default CardReglage
