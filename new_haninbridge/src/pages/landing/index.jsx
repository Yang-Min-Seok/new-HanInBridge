import Wrapper from "../../styles/wrap";
import Img from "../../pages/landing/img"
import { FlexDiv, Ul } from "./style";
import { useState } from "react";
function Landing () {

    const [currImg, setCurrImg] = useState('default');
    function handleMouseEnter(currState) {
        
        setCurrImg(currState);
    }

    return (
            // Landing
            <Wrapper>
                <FlexDiv>
                    <Ul>
                        <li onMouseEnter={()=>handleMouseEnter('aboutus')}>
                           <p>About us</p>
                        </li>
                        <li onMouseEnter={()=>handleMouseEnter('interpretation')}>
                            <p>Interpretation</p>
                        </li>
                        <li onMouseEnter={()=>handleMouseEnter('consulting')}>
                            <p>Consulting</p>
                        </li>
                    </Ul>
                    <Img currImg={currImg}></Img>
                    
                </FlexDiv>
            </Wrapper>
    );
};

export default Landing;