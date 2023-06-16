import { Question } from './components/index.js'
import Option from './components/Option/Option.jsx'
import List from './List.jsx'

const App = () => {
	return (
		<>
			<List />
			{/* <div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Option option='A' voice='https://res.cloudinary.com/dspfsamgq/video/upload/v1584002889/piano/C.wav' />
				<Option option='B' voice='https://res.cloudinary.com/dspfsamgq/video/upload/v1584002888/piano/D.wav' />
			</div>
			<Question />
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Option option='C' voice='https://res.cloudinary.com/dspfsamgq/video/upload/v1584002889/piano/E.wav' />
				<Option option='D' voice='https://res.cloudinary.com/dspfsamgq/video/upload/v1584002890/piano/F.wav' />
			</div> */}
		</>
	)
}

export default App
