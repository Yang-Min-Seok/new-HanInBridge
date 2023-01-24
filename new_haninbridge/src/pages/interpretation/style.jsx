import styled from "styled-components";
import PJWImage from "../../resources/images/interpretation/interpreter/pjw.jpeg";
import YTHImage from "../../resources/images/interpretation/interpreter/yth.jpeg";
import introImg from "../../resources/images/interpretation/intro/introBackground.jpg";
import GIImg from "../../resources/images/interpretation/General_Interpretation/general_interpretation_2.jpeg";
import DIImg from "../../resources/images/interpretation/Document_Interpretation/document_interpretation_2.jpg"
import PIImg from "../../resources/images/interpretation/Phone_Interpretation/phone_urgent.jpg";
export const BodyDiv = styled.div`
    
`;

export const IntroBox = styled.div`
    
`;

export const IntroUpTitle = styled.h1`
    @media only screen and (max-width: 768px){
        font-size: 30px;
        letter-spacing: 5px;
    }
    margin: 0;
    font-size: 70px;
    font-weight: 100;
    letter-spacing: 15px;
    line-height: 3;
    text-align: center;
`;

export const IntroDownTitle = styled.h1`
    @media only screen and (max-width: 768px){
        font-size: 25px;
        letter-spacing: 2px;
    }
    margin: 0;
    font-size: 55px;
    font-weight: 100;
    letter-spacing: 15px;
    line-height: 1;
    text-align: center;
`;

export const IntroContentBox = styled.div`
    @media only screen and (max-width: 768px){
        margin-top: 30px;
        margin-bottom: 30px;
        padding:10px;
    }
    width: 90%;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 50px;
    border: 3px solid #A67951;
    box-sizing: border-box;
    padding: 50px;

    position: relative;
    & ::before {
        content:"";
        background-image: url(${introImg});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        opacity:0.2;
    }
`;

export const IntroContent = styled.p`
    @media only screen and (max-width: 768px){
        font-size: 15px;
    }
    margin: 0;
    font-size: 30px;
    line-height: 2.5;
    font-weight: 900;
    font-family: 'Times New Roman', Times, serif;
    text-align: right;
`;

export const InterpreterBox = styled.div`
    @media only screen and (max-width: 768px){
        margin-bottom: 0px;
    }
    margin-bottom: 50px;
`;

export const InterpreterUpTitle = styled.h1`
    @media only screen and (max-width: 768px){
        font-size: 30px;
    }
    margin: 0;
    font-size: 70px;
    font-weight: 500;
    line-height: 3;
    text-align: center;
`;

export const InterpreterDownTitle = styled.h1`
    @media only screen and (max-width: 768px){
        font-size: 15px;
    }
    margin: 0;
    font-size: 45px;
    font-weight: 900;
    line-height: 1;
    text-align: center;
`;

export const PJWBox = styled.div`
    @media only screen and (max-width: 768px){
        display:block;
        margin-top: 30px;
    }
    width: 90%;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
`;

export const PJWImg = styled.div`
    @media only screen and (max-width: 768px){
        height:350px;
        width:100%;
        margin: 0 auto;
        background-position-y: -150px;
    }
    width: 47%;
    background-image: url(${PJWImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

export const PJWContentBox = styled.div`
    @media only screen and (max-width: 768px){
        width:100%;
    }
    width: 47%;

    & a{
        text-decoration: none;
        color:#000;
    }
`;

export const PJWName = styled.h1`
    @media only screen and (max-width: 768px){
        font-size: 30px;
        font-weight: 100;
        line-height: 3;
    }
    margin: 0 auto;
    text-align: center;
    font-size: 50px;
    line-height: 4;
    border-bottom: 3px solid #A67951;
    box-sizing: border-box;
`;

export const PJWContent = styled.p`
    @media only screen and (max-width: 768px){
        font-size: 15px;
        padding: 50px 0 ;
    }
    margin: 0;
    padding: 100px 0 ;
    font-size: 25px;
    font-family: 'Times New Roman', Times, serif;
    font-weight: 900;
    line-height: 2;
    border-bottom: 3px solid #A67951;
    box-sizing: border-box;
`;

export const PJWResume = styled.p`
    @media only screen and (max-width: 768px){
        margin: 30px 0;
        font-size: 20px;
    }
    margin: 100px 0;
    font-size: 35px;
    text-align: center;
    transition: 0.5s;

    &:hover{
        color: #A67951;
        cursor: pointer;
    }
`;

export const YTHBox = styled.div`
    @media only screen and (max-width: 768px){
        display:block;
        margin-top: 0;
    }
    width: 90%;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
`;

export const YTHContentBox = styled.div`
    @media only screen and (max-width: 768px){
        width:100%;    
    }
    width: 47%;

    & a{
        text-decoration: none;
        color:#000;
    }
`;

export const YTHImgRes = styled.div`
    @media only screen and (max-width: 768px){
        display:block;
        height:350px;
        background-image: url(${YTHImage});
        background-repeat: no-repeat;
        background-position-y: -150px;
        background-size: cover;
    }
    display: none;
`

export const YTHName = styled.h1`
    @media only screen and (max-width: 768px){
        font-size: 30px;
        font-weight: 100;
        line-height: 3;
    }
    margin: 0 auto;
    text-align: center;
    font-size: 50px;
    line-height: 4;
    border-bottom: 3px solid #A67951;
    box-sizing: border-box;
`;

export const YTHContent = styled.p`
    @media only screen and (max-width: 768px){
        font-size: 15px;
        padding: 50px 0 ;
    }
    margin: 0;
    padding: 100px 0 ;
    font-size: 25px;
    font-family: 'Times New Roman', Times, serif;
    font-weight: 900;
    line-height: 2;
    border-bottom: 3px solid #A67951;
    box-sizing: border-box;
`;

export const YTHResume = styled.p`
    @media only screen and (max-width: 768px){
        margin: 30px 0;
        font-size: 20px;
    }
    margin: 100px 0;
    font-size: 35px;
    text-align: center;
    transition: 0.5s;

    &:hover{
        color: #A67951;
        cursor: pointer;
    }
`;

export const YTHImg = styled.div`
    @media only screen and (max-width: 768px){
        display: none;
    }
    width: 47%;
    background-image: url(${YTHImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

export const ServiceBox = styled.div`
    @media only screen and (max-width: 768px){
        width:90%;
        margin: 0 auto;
        margin-bottom: 30px;
    }
`;

export const GeneralTitle = styled.h1`
    @media only screen and (max-width: 768px){
        font-size: 30px;
        line-height: 3;
    }
    margin: 0;
    font-size: 70px;
    font-weight: 500;
    line-height: 3;
    text-align: center;
`;

export const GeneralSlideAndContentBox = styled.div`
    @media only screen and (max-width: 768px){
        display: block;
        margin-bottom: 0;
    }
    width: 90%;
    margin: 0 auto;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
`;

export const GeneralSlideBox = styled.div`
    @media only screen and (max-width: 768px){
        display: none;
    }
    height: 360px;
    width: 30%;
`;

export const GeneralContentBox = styled.div`
    @media only screen and (max-width: 768px){
        width:100%;
        padding:10px;

        position: relative;
        & :before{
            content: "";
            background-image: url(${GIImg});
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            opacity: 0.2;
            position: absolute;
        }
    }
    width: 65%;
    border: 3px solid #A67951;
    box-sizing: border-box;
    display:flex;
    flex-direction: column;
    justify-content: center;
`;

export const GeneralContent = styled.p`
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
    margin: 0 auto;
    font-size: 23px;
    line-height: 2.5;
    font-weight: 900;
    font-family: 'Times New Roman', Times, serif;
    text-align: right;
`;

export const DocumentTitle = styled.h1`
    @media only screen and (max-width: 768px){
        font-size: 30px;
        line-height: 3;
    }
    margin: 0;
    font-size: 70px;
    font-weight: 500;
    line-height: 3;
    text-align: center;
`;

export const DocumentSlideAndContentBox = styled.div`
    @media only screen and (max-width: 768px){
        display: block;
        margin-bottom: 0;
    }
    width: 90%;
    margin: 0 auto;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
`;

export const DocumentContentBox = styled.div`
    @media only screen and (max-width: 768px){
        width:100%;
        padding:10px;

        position: relative;
        & :before{
            content: "";
            background-image: url(${DIImg});
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            opacity: 0.2;
            position: absolute;
        }
    }
    width: 65%;
    border: 3px solid #A67951;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const DocumentContent = styled.p`
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
    margin: 0 auto;
    font-size: 23px;
    line-height: 2.5;
    font-weight: 900;
    font-family: 'Times New Roman', Times, serif;
    text-align: right;
`;

export const DocumentSlideBox = styled.div`
    @media only screen and (max-width: 768px){
        display: none;
    }
    height: 360px;
    width: 30%;
`;

export const PhoneTitle = styled.h1`
    @media only screen and (max-width: 768px){
        font-size: 30px;
        line-height: 3;
    }
    margin: 0;
    font-size: 70px;
    font-weight: 500;
    line-height: 3;
    text-align: center;
`;

export const PhoneSlideAndContentBox = styled.div`
    @media only screen and (max-width: 768px){
        display: block;
        margin-bottom: 0;
    }
    width: 90%;
    margin: 0 auto;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
`;

export const PhoneSlideBox = styled.div`
    @media only screen and (max-width: 768px){
        display: none;
    }
    height: 360px;
    width: 40%;
`;

export const PhoneContentBox = styled.div`
    @media only screen and (max-width: 768px){
        width:100%;
        padding:10px;

        position: relative;
        & :before{
            content: "";
            background-image: url(${PIImg});
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            opacity: 0.2;
            position: absolute;
        }
    }
    width: 55%;
    border: 3px solid #A67951;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const PhoneContent = styled.p`
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
    margin: 0 auto;
    font-size: 23px;
    line-height: 2.5;
    font-weight: 900;
    font-family: 'Times New Roman', Times, serif;
    text-align: right;
`;