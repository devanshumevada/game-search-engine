import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useDispatch} from 'react-redux';
import load_detail from '../actions/detailAction';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import {get_smaller_image} from '../util';
function Game(props) {
	const history = useHistory();
	if (history.location.pathname === '/') {
		document.body.style.overflow = 'auto';
	} else {
		document.body.style.overflow = 'hidden';
	}
	const dispatch = useDispatch();
	const handle_details_load = () => {
		document.body.style.overflow = 'hidden';
		dispatch(load_detail(props.game.id));
	}
        return (
                <StyledGame onClick={handle_details_load}>
		<Link to={`/game/${props.game.id}`}>
			<h3>{props.game.name}</h3>
			<p>{props.game.released}</p>  
			<img src={get_smaller_image(props.game.background_image, 640)} alt={`Cover of ${props.game.name}`} />  
		</Link>
                </StyledGame>
        )
}

const StyledGame = styled(motion.div)`
	min-height: 30vh;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
	text-align: center;
	border-radius: 1rem;
	cursor: pointer;
	overflow: hidden;
	img {
		width: 100%;
		height: 40vh;
		object-fit: cover;
	}
`;

export default Game;
