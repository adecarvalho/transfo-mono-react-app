import React from 'react'

const CardReglage = props => {
	const { min, max, titre, valeur, onChangeValeur } = props

	return (
		<div className="card z-depth-2">
			<div className="card-content">
				<span className="card-title center grey-text text-darken-2">
					{titre}
				</span>

				<div>
					<input
						onChange={onChangeValeur}
						type="range"
						id="start"
						name="volume"
						min={min}
						max={max}
						value={valeur}
					/>
					<span className="grey-text ">{`Valeur=${valeur}`}</span>
				</div>
			</div>
		</div>
	)
}

export default CardReglage
