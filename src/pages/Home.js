import {useDispatch, useSelector} from 'react-redux';
import {load_games} from '../actions/gamesAction';
import {useEffect} from 'react';
import Game from '../components/Game';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import GameDetail from '../components/GameDetail';
import {useLocation} from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

function Home() {
	const dispatch = useDispatch();
	const location = useLocation();
	const pathid = location.pathname.split("/")[2];
	console.log(pathid);
	useEffect(()=> {
		dispatch(load_games());
	},[dispatch]);

	const games = useSelector(state=>state.games);
	const is_loading = useSelector(state=>state.detail.is_loading);
	console.log(is_loading)
	return (
		<>
		{is_loading ? 
			<LoadingSpinner />
			
		:
			
		<GameList>
				{pathid && <GameDetail />}
				<h2>Upcoming Games</h2>
				<Games>
					{games.upcoming.map(game => <Game key={game.id} game={game} />)}
				</Games>

				<h2>Popular Games</h2>
				<Games>
					{games.popular.map(game => <Game key={game.id} game={game} />)}
				</Games>

				<h2>New games</h2>
				<Games>
					{games.new_games.map(game => <Game key={game.id} game={game} />)}
				</Games>
		</GameList>

		}
		</>
	)
}

const GameList = styled(motion.div)`
	padding: 0rem 5rem;
	h2 {
		padding: 5rem 0rem;
	}
`;

const Games = styled(motion.div)`
	min-height: 80vh;
  	display: grid;
  	grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  	grid-column-gap: 3rem;
  	grid-row-gap: 5rem;
`;

const LoadingImage = styled.div`
	display:flex;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

export default Home;
