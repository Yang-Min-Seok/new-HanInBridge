import styled from "styled-components";
import CeoImg from "../../resources/images/aboutUs/Director/director.jpeg"
import introImg from "../../resources/images/aboutUs/Intro/introBackground.jpg"
export const BodyDiv = styled.div`
    
`;

export const IntroBox = styled.div`
    
`;

export const IntroUpTitle = styled.h1`
    @media only screen and (max-width: 768px){
        font-size: 30px;
        line-height: 3;
        letter-spacing: 5px;
    }
    margin: 0;
    font-size: 70px;
    font-weight: 100;
    letter-spacing: 15px;
    text-align: center;
    line-height: 3;
`;

export const IntroDownTitle = styled.h1`
    @media only screen and (max-width: 768px){
        font-size: 30px;
        letter-spacing: 5px;
        font-weight: 700;
    }
    margin: 0;
    font-size: 55px;
    font-weight: 700;
    letter-spacing: 15px;
    text-align: center;
    line-height: 1;
`;

export const IntroContentBox = styled.div`
    @media only screen and (max-width: 768px){
        margin-top: 20px;
        padding:10px;
    }
    width:90%;
    margin: 0 auto;
    margin-top: 50px;
    border: 3px solid #A67951;
    box-sizing: border-box;
    padding: 50px;

    position: relative;
    & ::before{
        content:"";
        background-image: url(${introImg});
        position: absolute;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        top:0;
        bottom:0;
        left:0;
        right:0;
        opacity:0.3;
    }
`;

export const IntroContent = styled.p`
    @media only screen and (max-width: 768px){
        font-size: 10px;
        font-weight: 900;
    }
    margin: 0;
    font-size: 30px;
    line-height: 2.5;
    font-weight: 900;
    font-family: 'Times New Roman', Times, serif;
    text-align: right;
`;

export const PartnerBox = styled.div`
    
`;
export const PartnerTitle = styled.h1`
    @media only screen and (max-width: 768px){
        font-size:30px;
        line-height: 3;
        letter-spacing: 5px;
    }
    margin: 0;
    font-size: 70px;
    font-weight: 100;
    letter-spacing: 10px;
    text-align: center;
    line-height: 3;
`;

export const PartnerSlide = styled.div`
    @media only screen and (max-width: 768px){
        height:250px;
    }
    width: 90%;
    height: 700px;
    margin: 0 auto;
    border: 3px solid #A67951;
    box-sizing: border-box;
`;

export const DirectorBox = styled.div`
    @media only screen and (max-width: 768px){
        margin-bottom: 20px;
    }
    width:90%;
    margin: 0 auto;
    margin-bottom: 50px;
`;

export const DirectorTitle = styled.h1`
    @media only screen and (max-width: 768px){
        font-size: 30px;
        font-weight: 900;
        line-height: 3;
    }
    margin: 0;
    font-size: 70px;
    font-weight: 100;
    letter-spacing: 10px;
    text-align: center;
    line-height: 3;
`;
export const DirectorContentBox = styled.div`
    @media only screen and (max-width: 768px){
        display: block;
    }
    display: flex;
    justify-content: space-between;
`;

export const DirectorImg = styled.div`
    @media only screen and (max-width: 768px){
        height:400px;
        width: 100%;
        background-position-y: -100px;
    }
    width: 45%;
    background-image: url(${CeoImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export const DirectorNameAndContentBox = styled.div`
    @media only screen and (max-width: 768px){
        width: 100%;
    }
    width: 45%;
`;

export const DirectorName = styled.h1`
    @media only screen and (max-width: 768px){
        font-size: 30px;
    }
    margin: 0 auto;
    margin-bottom: 20px;
    text-align: center;
    font-size: 50px;
    font-weight: 100;
    line-height: 2;
    border-bottom: 3px solid #A67951;
    box-sizing: border-box;;
`;

export const DirectorContent = styled.p`
    @media only screen and (max-width: 768px){
        font-size: 13px;
    }
    margin: 0;
    font-size: 18px;
    font-family: 'Times New Roman', Times, serif;
    font-weight: 500;
    line-height: 2;
`;