import Wrapper from "../../styles/wrap";
import Img from "../../pages/landing/img"
import { FlexDiv, Ul } from "./style";
import { useState } from "react";
import { Link } from "react-router-dom";
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
                        <li onMouseEnter={()=>handleMouseEnter('aboutus')}
                        onMouseLeave={()=>handleMouseEnter('default')}>
                           <Link to="/aboutus"><p>About us</p></Link>
                        </li>
                        <li onMouseEnter={()=>handleMouseEnter('interpretation')}
                        onMouseLeave={()=>handleMouseEnter('default')}>
                            <Link to="/interpretation"><p>Interpretation</p></Link>
                        </li>
                        <li onMouseEnter={()=>handleMouseEnter('consulting')}
                        onMouseLeave={()=>handleMouseEnter('default')}>
                            <Link to="/consulting"><p>Consulting</p></Link>
                        </li>
                    </Ul>
                    <Img currImg={currImg}></Img>
                    
                </FlexDiv>
            </Wrapper>
    );
};

export default Landing;