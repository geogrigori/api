import styled from "styled-components"
import { media } from "../../assets/styles/media"

export const NavbarContainer = styled.header`
    position:absolute ;
    display:flex;
    align-items:center;
    justify-content:space-between;
    background-color:#282828;
    height:80px;
    width:100% ;

    ${media('mobile')}{
        position:relative ;
    }

    img {
        margin-left: 50px;
        outline:none;
    }

    nav{
        display:flex;
        justify-content:space-between;
        margin-right: 50px;
        width: 500px;
    }

    nav a {
        cursor: pointer;
        text-decoration:none ;
        font-size:16px;
        font-weight:bold ;
        color: #ffff;
    }
`