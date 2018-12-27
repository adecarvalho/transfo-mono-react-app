import React from 'react'
import Gauge from 'react-svg-gauge'

const CardMesure = props => {
	const { label, max, value, color } = props

	return (
		<div className="card z-depth-2">
			<div className="card-content">
				<div className="react-gauge">
					<Gauge
						max={max}
						value={value}
						width={350}
						//height={500}
						label={label}
						color={color}
					/>
				</div>
			</div>
		</div>
	)
}

export default CardMesure
