import styled from "styled-components";
import CeoImg from "../../resources/images/aboutUs/Director/director.jpeg"
export const BodyDiv = styled.div`
    
`;

export const IntroBox = styled.div`
    
`;

export const IntroUpTitle = styled.h1`
    margin: 0;
    font-size: 70px;
    font-weight: 100;
    letter-spacing: 15px;
    text-align: center;
    line-height: 3;
`;

export const IntroDownTitle = styled.h1`
    margin: 0;
    font-size: 55px;
    font-weight: 700;
    letter-spacing: 15px;
    text-align: center;
    line-height: 1;
`;

export const IntroContentBox = styled.div`
    width:90%;
    margin: 0 auto;
    margin-top: 50px;
    border: 3px solid #A67951;
    box-sizing: border-box;
    padding: 50px;

    position: relative;
    & ::before{
        content:"";
        background-image: url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWlycGxhbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60");
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
    margin: 0;
    font-size: 70px;
    font-weight: 100;
    letter-spacing: 10px;
    text-align: center;
    line-height: 3;
`;

export const PartnerSlide = styled.div`
    width: 90%;
    height: 600px;
    margin: 0 auto;
    border: 3px solid #A67951;
    box-sizing: border-box;

`;

export const DirectorBox = styled.div`
    width:90%;
    margin: 0 auto;
    margin-bottom: 50px;
`;

export const DirectorTitle = styled.h1`
    margin: 0;
    font-size: 70px;
    font-weight: 100;
    letter-spacing: 10px;
    text-align: center;
    line-height: 3;
`;
export const DirectorContentBox = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const DirectorImg = styled.div`
    width: 45%;
    background-image: url(${CeoImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export const DirectorNameAndContentBox = styled.div`
    width: 45%;
`;

export const DirectorName = styled.h1`
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
    margin: 0;
    font-size: 18px;
    font-family: 'Times New Roman', Times, serif;
    font-weight: 500;
    line-height: 2;
`;