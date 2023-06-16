import { useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'
import { Check, Line } from '../../img/index.js'
import Bars from '../Bars/Bars.jsx'

const Option = ({ option, voice,currentTrack, audioRef, isPlaying, setIsPlaying }) => {
	const [isCheck, setIsCheck] = useState(false)
	// const [isLine, setIsLine] = useState(false)
	const opRef = useRef()

	const playAudio = async () => {
		setIsPlaying(option)
		window.navigator.vibrate(100)
		opRef.current.play()
		// const audio = new Audio(voice)
		// await audio.play()
		// audio.addEventListener('ended', () => {
		// 	if (isPlaying === option) {
		// 		setIsPlaying('')
		// 	}
		// })

		audioRef.current.pause()
		audioRef.current.currentTime = 0
	}
	useEffect(() => {
		if (isPlaying !== option) {
			// setIsPlaying('')
			opRef.current.pause()
			opRef.current.currentTime = 0
		}
	}, [isPlaying])

	const db = () => {
		setIsCheck(true)
	}

	const handleEnd = () => {
		if (isPlaying === option) {
			setIsPlaying('')
		}
	}
	return (
		<div
			onDoubleClick={db}
			onClick={isCheck ? undefined : playAudio}
			className={`${styles.option} ${isCheck && styles.optionCurrent}`}
			style={isCheck ? { borderColor: '#05CD56' } : isPlaying === option ? { borderColor: '#07FFFF' } : { borderColor: '#FFFFFF' }}
		>
			<audio src={currentTrack[option]} ref={opRef} onEnded={handleEnd} />

			{isCheck ? <img src={Check} /> : isPlaying === option ? <Bars /> : <h3>ВАРИАНТ {option}</h3>}
		</div>
	)
}

export default Option
