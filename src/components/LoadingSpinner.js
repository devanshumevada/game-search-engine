import styled from 'styled-components';
import loading from '../img/loading.gif';
function LoadingSpinner() {
        return (
                <div>
                        <img style={style}  src={loading} alt="loading gif"/>
                </div>
        )
}

const style = {
                width: "50px", 
                height: "50px", 
                position: "absolute", 
                top:"50%", 
                left:"50%", 
                marginLeft:"-25px", 
                marginTop:"-25px"
 }



export default LoadingSpinner;
