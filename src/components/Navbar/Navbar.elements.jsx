import styled from "styled-components";

export const NavbarContainer = styled.div`
width: 100%;
background-color: black;
color: white;
`;

export const NavbarWrapper = styled.div`
margin: auto;
max-width: 1300px;
height: 100%;
align-items: center;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
font-family: 'Berkshire Swash';
font-size: 1.5rem;
`;

export const IconLogo = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: flex-start;
align-items: center;
font-family: 'Berkshire Swash';
font-size: 2.0rem;
color: #01A9DB;
`;

export const Menu = styled.ul`
height: 100%;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 960px) {
    width: 100%;
    height: 90vh;
    position:absolute;
    top: 80px;
    left: ${({click}) => click ? 0 : "-100"};
    flex-direction: colum;
    transition: 0.5s all ease-in;
    background-color: #01A9DB;
}
`;


export const IconLogoMobile = styled.div`
display:none

@media screen and (max-width: 960px)
display: flex;
color: #01A9DB;
font-size:2rem;
`;
