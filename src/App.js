import Home from './pages/Home';
import GlobalStyling from './components/GlobalStyles';
import {Route} from 'react-router-dom';
function App() {
	return (
		<div className="App">
			<GlobalStyling />
			<Route path={["/game/:id","/"]}>
				<Home />
			</Route>
		</div>
	)
}

export default App
