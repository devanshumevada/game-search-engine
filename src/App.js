import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {load_games} from './actions/gamesAction';
function App() {
	const dispatch = useDispatch();
	useEffect(()=> {
		dispatch(load_games());
	},[]);
	return (
		<div>
			<h1>hey</h1>
		</div>
	)
}

export default App
