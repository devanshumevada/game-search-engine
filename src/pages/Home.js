import {useDispatch, useSelector} from 'react-redux';
import {load_games} from '../actions/gamesAction';
import {useEffect} from 'react';
import Game from '../components/Game';
import styled from 'styled-components';
import {motion} from 'framer-motion';

function Home() {
	const dispatch = useDispatch();
	useEffect(()=> {
		dispatch(load_games());
	},[dispatch]);

	const games = useSelector(state=>state.games);
	return (
		<GameList>
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

export default Home;
