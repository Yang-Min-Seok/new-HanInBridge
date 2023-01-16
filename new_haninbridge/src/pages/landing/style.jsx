import styled from "styled-components";

export const FlexDiv = styled.div`
    display: flex;
`;

export const Ul = styled.ul`
    
    width:20%;
    padding-left: 0;
    padding-top: 50px;
    padding-bottom: 50px;
    margin:0;
    
    li {
        width:100%;
        margin:0 auto;
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        height:130px;
        border: 3px solid #A67951;
        border-radius: 15px;
        box-sizing: border-box;
    }

    li:hover {
        box-shadow: 9px 2px 32px rgba(0,0,0,0.3);
    }

    & li:nth-child(1) {
        margin-bottom: 20px;
        background-image: url("https://images.unsplash.com/photo-1602306834394-6c8b7ea0ed9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFib3V0JTIwdXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    & li:nth-child(2) {
        margin-bottom: 20px;
        background-image: url("https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    & li:nth-child(3) {
        background-image: url("https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29uc3VsdGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    li p {
        margin: 0 auto;
        display: inline-block;
        width: 70%;
        line-height: 3;
        background-color: rgba(166, 121, 81, 0.7);
        color: #fff;
        border-radius: 15px;
        font-family: serif;
        font-size: 20px;
        transition: all 0.7s;
    }
    
    li p:hover {
        background-color: #000;
        cursor: pointer;
    }

    li p link {
        text-decoration: none;
    }
`;

// How to plant background img and make it only opacified
export const ImgContainorDefault = styled.div`
    
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    width:70%;
    position: relative;
    
    &::before{
        content:"";
        background-image: url("https://images.unsplash.com/photo-1555852441-ca0d327da1e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGluZG9uZXNpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        opacity: 0.75;
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        border-radius: 15px;
    }
`;

export const Title1 = styled.h1`
    
    margin: 0;
    text-align: center;
    margin-bottom: 30px;
    transform: translateX(-260px);
    color: #A67951;
    font-family: serif;
    font-size:70px;
`;

export const Title2 = styled.h1`
    
    margin: 0;
    text-align: center;
    transform: translateX(30px);
    color: #A67951;
    font-family: serif;
    font-size:70px;
`;

export const ImgContainorAboutus = styled.div`
    
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    width:70%;
    position:relative;

    &::before{
        content:"";
        background-image: url("https://images.unsplash.com/photo-1602306834394-6c8b7ea0ed9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFib3V0JTIwdXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        opacity: 0.6;
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        border-radius: 15px;
    }
`;

export const ImgContainorInterpretation = styled.div`
    
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    width:70%;
    position:relative;
    
    &::before{
        content:"";
        background-image: url("https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        opacity: 0.6;
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        border-radius: 15px;
    }
`;

export const ImgContainorConsulting = styled.div`
    
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    width:70%;
    position:relative;
    
    &::before{
        content:"";
        background-image: url("https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29uc3VsdGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        opacity: 0.6;
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        border-radius: 15px;
    }
`;

export const ShortSummary = styled.h1`
    
    margin: 0;
    margin-right: 80px;
    text-align: right;
    color: #000;
    font-family: serif;
    font-size: 50px;
    /* This stops to be opacitied */
    z-index: 1;
    line-height:1.5;
`;