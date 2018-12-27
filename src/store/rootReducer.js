import { SET_MODELE_KAPP, SET_NEW_REGLAGE } from './types'

const initState = {
	modeleKapp: {
		rapport_m: '1',
		resistance_rp: '900',
		inductance_lp: '1',
		resistance_rs: '0.5',
		reactance_xs: '0.5'
	},
	reglages: { u1eff: '0', module: '10', phase: '0' },
	mesures: {
		i1eff: '0',
		i2eff: '0',
		u2eff: '0',
		p2: '0',
		p1: '0',
		rendement: '0'
	}
}

const process = (kapp, reglage) => {
	if (kapp && reglage) {
		const res = {}

		const u1 = Number(reglage.u1eff)
		const module = Number(reglage.module)
		const phase = Number((reglage.phase * Math.PI) / 180)

		const m = Number(kapp.rapport_m)
		const rp = Number(kapp.resistance_rp)
		const lp = Number(kapp.inductance_lp)
		const rs = Number(kapp.resistance_rs)
		const xs = Number(kapp.reactance_xs)

		const reel = rs + module * Math.cos(phase)
		const img = xs + module * Math.sin(phase)
		const div = Math.sqrt(reel * reel + img * img)

		const i2 = (m * u1) / div || 0
		const u2 = module * i2 || 0
		const p2 = u2 * i2 * Math.cos(phase) || 0

		const pertes = rs * i2 * i2 + (u1 * u1) / rp || 0
		const p1 = p2 + pertes || 0

		const rendement = (100 * p2) / p1 || 0

		const q2 = u2 * i2 * Math.sin(phase)
		const q1 = q2 + (u1 * u1) / (314 * lp) + xs * i2 * i2
		const s1 = Math.sqrt(p1 * p1 + q1 * q1)
		const i1 = s1 / u1 || 0

		//
		res.i1eff = i1.toFixed(2)
		res.i2eff = i2.toFixed(2)
		res.u2eff = u2.toFixed(0)
		res.p1 = p1.toFixed(0)
		res.p2 = p2.toFixed(0)
		res.rendement = rendement.toFixed(0)

		return res
		//console.log(res)
	}
}

const rootReducer = (state = initState, action) => {
	switch (action.type) {
		//
		case SET_MODELE_KAPP: {
			const res = process(action.payload, state.reglages)

			return {
				...state,
				modeleKapp: { ...action.payload },
				mesures: { ...res }
			}
		}
		//
		case SET_NEW_REGLAGE: {
			const res = process(state.modeleKapp, action.payload)
			//
			return {
				...state,
				reglages: { ...action.payload },
				mesures: { ...res }
			}
		}
		//
		default:
			return state
	}
}

export default rootReducer
