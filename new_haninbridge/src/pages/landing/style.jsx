import styled from "styled-components";

export const FlexDiv = styled.div`
  display: flex;
`;

export const Ul = styled.ul`
    
    /* Ul */
    width:20%;
    padding-left: 0;
    padding-top: 50px;
    padding-bottom: 50px;
    margin:0;
    border-right: 3px solid #A67951;
    box-sizing: border-box;
    
    li {
        width:60%;
        margin:0 auto;
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        height:100px;
        border: 3px solid #A67951;
        border-radius: 15px;
        box-sizing: border-box;
        font-size:20px;
    }
    & li:nth-child(1) {
        margin-bottom: 20px;
    }
    & li:nth-child(2) {
        margin-bottom: 20px;
    }

`;