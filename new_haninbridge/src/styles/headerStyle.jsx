import styled from "styled-components";
// How to import img from outside
import headerLogo from "../resources/images/common/logo.jpeg"
export const HeaderDiv = styled.div`
    
`;

export const HeaderLogo = styled.div`
    
    height: 150px;
    width: 300px;
    margin:0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
    // how to set background Img by using styled-components
    background-image: url(${headerLogo});
    background-repeat: no-repeat;
    background-size: contain;
`;

export const NavigationBar = styled.div`
    
    width: 100%;
    border-top: 3px solid #A67951;
    border-bottom: 3px solid #A67951;

    display: flex;
    justify-content: space-around;

    /* This means <Link> */
    a { 

        width:15%;
        display: block;

        text-align: center;
        text-decoration: none;
        font-size: 25px;
        color: #000;
        
        transition: 1s;
    }

    a:hover{
        background-color: #A67951;
        color: #fff;
        border-radius: 10px;
    }

`;

export const ToAboutUs = styled.p`
    
`;

export const ToInterpreation = styled.p`
    
`;

export const ToConsulting = styled.p`
    
`;