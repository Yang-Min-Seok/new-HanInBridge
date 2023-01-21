import styled from "styled-components";
import introImg from "../../resources/images/consulting/introBackground.jpg"
import pathImg from "../../resources/images/consulting/pathBackground.jpg"
export const BodyDiv = styled.div`
    
`;

export const Intro = styled.div`
    
`;

export const IntroUpTitle = styled.h1`
    margin: 0;
    margin-top: 50px;
    font-size: 60px;
    font-weight: 500;
    text-align: center;
    line-height: 2;
`;

export const IntroDownTitle = styled.h1`
    margin: 0;
    margin-bottom: 50px;
    font-size: 50px;
    font-weight: 900;
    text-align: center;
    line-height: 2;
`;

export const IntroContentBox = styled.div`
    width:90%;
    margin: 0 auto;
    padding: 50px;
    border: 3px solid #A67951;
    box-sizing: border-box;
    
    /* How to make background img tranparent */
    position: relative;

    &::before{
        content: "";
        background-image: url(${introImg});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        position: absolute;
        opacity: 0.3;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
    }
`;

export const IntroContent = styled.p`
    margin: 0;
    line-height: 2;
    font-family: 'Times New Roman', Times, serif;
    font-size: 35px;
    font-weight: 900;
    text-align: right;
`;

export const History = styled.div`
    
`;

export const HistoryTitle = styled.h1`
    margin: 0;
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 55px;
    text-align: center;
    line-height: 2;
`;

export const SlideBox = styled.div`
    width: 90%;
    height: 600px;
    margin: 0 auto;
    border: 3px solid #A67951;
    box-sizing: border-box;
`;

export const HistoryContentBox = styled.div`
    
    width: 90%;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 50px;
    border: 3px solid #A67951;
    box-sizing: border-box;
    padding:50px;

    /* How to make background img tranparent */
    position: relative;

    &::before{
        content: "";
        background-image: url(${pathImg});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        position: absolute;
        opacity: 0.3;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
    }
`;

export const HistoryContent = styled.p`
    margin: 0;
    line-height: 2;
    font-family: 'Times New Roman', Times, serif;
    font-size: 35px;
    font-weight: 900;
    text-align: right;
`;