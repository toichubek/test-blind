import { useEffect, useRef, useState } from 'react'
import useDoubleClick from 'use-double-click'

import styles from './styles.module.css'
import Bars from '../Bars/Bars.jsx'

const Question = ({ currentTrack, audioRef, handleNext, setDuration, progressBarRef }) => {
	const [isLine, setIsLine] = useState(false)
	const [isPlaying, setIsPlaying] = useState(false)
	const questionClickRef = useRef()

	useEffect(() => {
		if (isPlaying === true) {
			audioRef.current.play()
		} else {
			audioRef.current.pause()
		}
	}, [isPlaying, audioRef])

	const playAudio = async () => {
		setIsLine(true)
		setIsPlaying(true)
		window.navigator.vibrate(100)
		audioRef.current.play()
		// const audioInstance = new Audio('/audio/question_1.mp4')
		// setAudio(audioInstance)
		// await audioInstance.play()
		// audioInstance.addEventListener('ended', () => setIsLine(false))
		// audioInstance.removeEventListener('ended', () => {})
	}
	const stopAudio = async () => {
		audioRef.current.pause()
		audioRef.current.currentTime = 0
		// await audio.stop()
		setIsLine(false)
		setIsPlaying(false)
	}
	const pauseAudio = async () => {
		audioRef.current.pause()
		// await audio.stop()
		setIsLine(false)
		setIsPlaying(false)
	}
	const onLoadedMetadata = () => {
		const seconds = audioRef.current.duration
		setDuration(seconds)
		// progressBarRef.current.max = seconds
	}
	useDoubleClick({
		/** A callback function for single click events */

		onSingleClick: e => {
			console.log(e, 'single click')
			if (isLine) {
				pauseAudio()
			} else {
				playAudio()
			}
		},

		/** A callback function for double click events */

		onDoubleClick: e => {
			console.log(e, 'double click')
			if (isLine) {
				stopAudio()
			} else {
				playAudio()
			}
		},

		/** (Required) Dom node to watch for double clicks */

		ref: questionClickRef,

		/**
	
		 * The amount of time (in milliseconds) to wait 
	
		 * before differentiating a single from a double click
	
		 */

		latency: 250
	})

	return (
		<div ref={questionClickRef} className={styles.question} style={isLine ? { borderColor: '#07FFFF' } : { borderColor: '#FFFFFF' }}>
			<audio src={currentTrack.src} ref={audioRef} onLoadedMetadata={onLoadedMetadata} onEnded={handleNext} />
			{isLine ? <Bars /> : <h1>ВОПРОС 1 </h1>}
		</div>
	)
}

export default Question
