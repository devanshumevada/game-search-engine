import {get_popular_games_api_url} from './api';
function App() {
	return (
		<div>
			<h1 onClick={()=>console.log(get_popular_games_api_url())}>hey</h1>
		</div>
	)
}

export default App
