import { useRef, useState } from 'react'
import styles from './styles.module.css'
import { Check, Line } from '../../img/index.js'
import Bars from '../Bars/Bars.jsx'

const Option = ({ option, voice }) => {
	const [isCheck, setIsCheck] = useState(false)
	const [isLine, setIsLine] = useState(false)

	const playAudio = async () => {
		setIsLine(true)
		window.navigator.vibrate(100)
		const audio = new Audio(voice)
		await audio.play()
		audio.addEventListener('ended', () => setIsLine(false))
	}

	const db = () => {
		setIsCheck(true)
	}

	return (
		<div
			onDoubleClick={db}
			onClick={isCheck ? undefined : playAudio}
			className={`${styles.option} ${isCheck && styles.optionCurrent}`}
			style={isCheck ? { borderColor: '#05CD56' } : isLine ? { borderColor: '#07FFFF' } : { borderColor: '#FFFFFF' }}
		>
			{isCheck ? <img src={Check} /> : isLine ? <Bars /> : <h3>ВАРИАНТ {option}</h3>}
		</div>
	)
}

export default Option
