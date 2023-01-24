import styled from "styled-components";
/* How to deal with Img in using styled-components 1*/
import footerLogo from "../resources/images/logos/footer_logo.png"

export const FooterDiv = styled.div`
    @media only screen and (max-width: 768px){
        padding-top: 20px;    
    }
    background-color: #5a5a5a;
    padding-top: 40px;
    padding-bottom: 40px;
    border-top: 4px solid #A67951;
    border-bottom: 4px solid #A67951;
    box-sizing: border-box;
`;

export const FooterLogo = styled.div`
    @media only screen and (max-width: 768px){
        height:35px;
        text-align: center;
    }
    width: 80%;
    height: 60px;
    margin: 0 auto;
    margin-bottom: 15px;
    /* How to deal with Img in using styled-components 2*/
    background-image: url(${footerLogo});
    background-position: left;
    background-repeat: no-repeat;
    background-size: contain;
`;

export const InfoDiv = styled.div`
    @media only screen and (max-width: 768px){
        display:block;
    }
    width:80%;
    margin: 0 auto;
    display:flex;
    justify-content: space-between;
`;

export const AddressAndCopyright = styled.div`
    
    /* address */
    p {
        @media only screen and (max-width: 768px){
            font-size: 10px;
        }
        color: #fff;
        font-family: sans-serif;
        font-size: 18px;
    }

    /* copy right */
    & :nth-child(3) {
        font-family: 'Times New Roman', Times, serif;
        @media only screen and (max-width: 768px){
            display: none;
        }
    }
`;

export const ContactAndRegisteredNumber = styled.div`
    
    /* contact & registered num */
    p {
        @media only screen and (max-width: 768px){
            font-size: 10px;
        }
        color: #fff;
        font-family: sans-serif;
        font-size: 18px;
    }
`;