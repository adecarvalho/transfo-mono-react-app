import React from 'react'
import Gauge from 'react-svg-gauge'
import PropTypes from 'prop-types'

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
						height={350}
						label={label}
						color={color}
					/>
				</div>
			</div>
		</div>
	)
}

CardMesure.propTypes = {
	label: PropTypes.string.isRequired,
	max: PropTypes.number.isRequired,
	value: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired
}

export default CardMesure
