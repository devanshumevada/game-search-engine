import styled from 'styled-components';
import {motion} from 'framer-motion';

function Game(props) {
        return (
                <StyledGame>
			<h3>{props.game.name}</h3>
			<p>{props.game.released}</p>  
			<img src={props.game.background_image} alt={`Cover Image of ${props.game.name}`} />  
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
