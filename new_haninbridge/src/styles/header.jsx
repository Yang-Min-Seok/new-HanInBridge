import { HeaderDiv, HeaderLogo, NavigationBar, ToAboutUs, ToInterpreation, ToConsulting } from "./headerStyle";
import {Link} from "react-router-dom";
function Header() {
    return (
        <HeaderDiv>
            
            <Link to="/">
                <HeaderLogo></HeaderLogo>
            </Link>

            <NavigationBar>

                <Link to="/aboutus">
                    <ToAboutUs>
                        About us
                    </ToAboutUs>
                </Link>

                <Link to="/interpretation">
                    <ToInterpreation>
                        Interpreation
                    </ToInterpreation>
                </Link>

                <Link to="/consulting">
                    <ToConsulting>
                        Consulting
                    </ToConsulting>
                </Link>
            </NavigationBar>
        </HeaderDiv>
    )
}

export default Header