import styled from "styled-components";

export const NavbarContainer = styled.div`
width: 100%;
height: 80px;
position: sticky;
top: 0;
z-index: 99;
background-color: black;
color: white;
`;

export const NavbarWrapper = styled.div`
margin: auto;
width: 100%;
max-width: 1300px;
height: 100%;
align-items: center;
display: flex;
flex-wrap: wrap;
justify-content: space-between;

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

export const MenuItem = styled.li`
height: 100%
padding: 0.5rem 1.5rem;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.6rem;
font-family: 'Berkshire Swash';
font-weight: 400;

&:hover{

    backgorund-color: #343257;
    border-bottom: 0.1rem solid #ebc08b;
    transition: 0.4s ease-in;
}

@media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
    
}
`;


export const IconLogoMobile = styled.div`
display:none

@media screen and (max-width: 960px)
display: flex;
color: #01A9DB;
font-size:2rem;
`;
