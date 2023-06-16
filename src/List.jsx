import { useRef, useState } from 'react'
import { Question } from './components/index.js'
import Option from './components/Option/Option.jsx'
import { tracks } from './data/tracks'

const List = () => {
	// states
	const [trackIndex, setTrackIndex] = useState(0)
	const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex])
	const [timeProgress, setTimeProgress] = useState(0)
	const [duration, setDuration] = useState(0)
	const [isPlaying, setIsPlaying] = useState('')

	// reference
	const audioRef = useRef()
	const progressBarRef = useRef()

	const handleNext = () => {
		if (trackIndex >= tracks.length - 1) {
			setTrackIndex(0)
			setCurrentTrack(tracks[0])
		} else {
			setTrackIndex(prev => prev + 1)
			setCurrentTrack(tracks[trackIndex + 1])
		}
	}

	return (
		<>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Option
					option='a'
					isPlaying={isPlaying}
					setIsPlaying={setIsPlaying}
					audioRef={audioRef}
					voice={currentTrack.a}
					currentTrack={currentTrack}
					// voice='https://res.cloudinary.com/dspfsamgq/video/upload/v1584002889/piano/C.wav'
				/>
				<Option
					option='b'
					isPlaying={isPlaying}
					setIsPlaying={setIsPlaying}
					audioRef={audioRef}
					voice={currentTrack.b}
					currentTrack={currentTrack}
					// voice='https://res.cloudinary.com/dspfsamgq/video/upload/v1584002888/piano/D.wav'
				/>
			</div>
			<Question
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				currentTrack={currentTrack}
				audioRef={audioRef}
				handleNext={handleNext}
				setDuration={setDuration}
				progressBarRef={progressBarRef}
			/>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Option
					option='c'
					isPlaying={isPlaying}
					setIsPlaying={setIsPlaying}
					audioRef={audioRef}
					voice={currentTrack.c}
					currentTrack={currentTrack}
					// voice='https://res.cloudinary.com/dspfsamgq/video/upload/v1584002889/piano/E.wav'
				/>
				<Option
					option='d'
					isPlaying={isPlaying}
					setIsPlaying={setIsPlaying}
					audioRef={audioRef}
					voice={currentTrack.d}
					currentTrack={currentTrack}
					// voice='https://res.cloudinary.com/dspfsamgq/video/upload/v1584002890/piano/F.wav'
				/>
			</div>
		</>
	)
}

export default List
