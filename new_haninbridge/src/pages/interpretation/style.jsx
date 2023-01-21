import styled from "styled-components";
import PJWImage from "../../resources/images/interpretation/interpreter/pjw.jpeg"
import YTHImage from "../../resources/images/interpretation/interpreter/yth.jpeg"
export const BodyDiv = styled.div`
    
`;

export const IntroBox = styled.div`
    
`;

export const IntroUpTitle = styled.h1`
    margin: 0;
    font-size: 70px;
    font-weight: 100;
    letter-spacing: 15px;
    line-height: 3;
    text-align: center;
`;

export const IntroDownTitle = styled.h1`
    margin: 0;
    font-size: 55px;
    font-weight: 100;
    letter-spacing: 15px;
    line-height: 1;
    text-align: center;
`;

export const IntroContentBox = styled.div`
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
        background-image: url("https://images.unsplash.com/photo-1451226428352-cf66bf8a0317?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8JUVCJUIyJTg4JUVDJTk3JUFEfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60");
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
    margin: 0;
    font-size: 30px;
    line-height: 2.5;
    font-weight: 900;
    font-family: 'Times New Roman', Times, serif;
    text-align: right;
`;

export const InterpreterBox = styled.div`
    margin-bottom: 50px;
`;

export const InterpreterUpTitle = styled.h1`
    margin: 0;
    font-size: 70px;
    font-weight: 500;
    line-height: 3;
    text-align: center;
`;

export const InterpreterDownTitle = styled.h1`
    margin: 0;
    font-size: 45px;
    font-weight: 900;
    line-height: 1;
    text-align: center;
`;

export const PJWBox = styled.div`
    width: 90%;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
`;

export const PJWImg = styled.div`
    width: 47%;
    background-image: url(${PJWImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

export const PJWContentBox = styled.div`
    width: 47%;
`;

export const PJWName = styled.h1`
    margin: 0 auto;
    text-align: center;
    font-size: 50px;
    line-height: 4;
    border-bottom: 3px solid #A67951;
    box-sizing: border-box;
`;

export const PJWContent = styled.p`
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
    width: 90%;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
`;

export const YTHContentBox = styled.div`
    width: 47%;
`;

export const YTHName = styled.h1`
    margin: 0 auto;
    text-align: center;
    font-size: 50px;
    line-height: 4;
    border-bottom: 3px solid #A67951;
    box-sizing: border-box;
`;

export const YTHContent = styled.p`
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
    width: 47%;
    background-image: url(${YTHImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

export const ServiceBox = styled.div`
    
`;

export const GeneralTitle = styled.h1`
    margin: 0;
    font-size: 70px;
    font-weight: 500;
    line-height: 3;
    text-align: center;
`;

export const GeneralSlideAndContentBox = styled.div`
    width: 90%;
    margin: 0 auto;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
`;

export const GeneralSlideBox = styled.div`
    height: 360px;
    width: 30%;
`;

export const GeneralContentBox = styled.div`
    width: 65%;
    border: 3px solid #A67951;
    box-sizing: border-box;
    display:flex;
    flex-direction: column;
    justify-content: center;
`;

export const GeneralContent = styled.p`
    margin: 0 auto;
    font-size: 23px;
    line-height: 2.5;
    font-weight: 900;
    font-family: 'Times New Roman', Times, serif;
    text-align: right;
`;

export const DocumentTitle = styled.h1`
    margin: 0;
    font-size: 70px;
    font-weight: 500;
    line-height: 3;
    text-align: center;
`;

export const DocumentSlideAndContentBox = styled.div`
    width: 90%;
    margin: 0 auto;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
`;

export const DocumentContentBox = styled.div`
    width: 65%;
    border: 3px solid #A67951;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const DocumentContent = styled.p`
    margin: 0 auto;
    font-size: 23px;
    line-height: 2.5;
    font-weight: 900;
    font-family: 'Times New Roman', Times, serif;
    text-align: right;
`;

export const DocumentSlideBox = styled.div`
    height: 360px;
    width: 30%;
`;

export const PhoneTitle = styled.h1`
    margin: 0;
    font-size: 70px;
    font-weight: 500;
    line-height: 3;
    text-align: center;
`;

export const PhoneSlideAndContentBox = styled.div`
    width: 90%;
    margin: 0 auto;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
`;

export const PhoneSlideBox = styled.div`
    height: 360px;
    width: 40%;
`;

export const PhoneContentBox = styled.div`
    width: 55%;
    border: 3px solid #A67951;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const PhoneContent = styled.p`
    margin: 0 auto;
    font-size: 23px;
    line-height: 2.5;
    font-weight: 900;
    font-family: 'Times New Roman', Times, serif;
    text-align: right;
`;