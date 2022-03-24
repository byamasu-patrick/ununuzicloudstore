import styled from 'styled-components';
import * as palette from './variables';

export const BoxContainerVertical = styled.div`
    width: 100%;
    display: flex;
    height: ${ props => props.height };
    flex-direction: column;
    align-items: center;
`;

export const BoxContainerHorizontal = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    height: ${ props => props.height };
    ${ props => props.bg_img ? ` 
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0.80), rgba(255, 255, 255, 0.3));
        ` : '' 
    }

`;
export const BoxItemHorizontal = styled.div`
    display: flex;
    ${ props => props.grow ? "flex-grow: 1;" : "" } 
    flex-direction: column;
`;

export const Navbar = styled.nav`
    width: 100%;
    background: ${ palette.main_color };
    height: ${ props => props.height };
`;
export const NavbarBrand = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px !important;
`;
export const LogoImage = styled.img`
    margin: 10px;
    width: ${ props => props.width };
    height: ${ props => props.height };
`;
export const NavbarItem = styled.div`
    display: flex;
    align-items: center;  
    ${ props => props.grow ? "flex-grow: 1;" : "" } 
`;
export const UnorderedList = styled.ul`
    list-style-type: none;
    ${ props => props.p_l ? "padding-left: 0px;" : ""}
`;
export const ListItemHorizontal = styled.li`
    display: inline;
    font-size: ${ props => props.fontSize };
    font-family: ${ props => props.fontFamily };
    box-sizing: border-box;
    margin: 10px;
`;
export const NavLink = styled.a`
    color: ${ palette.text_light_color };
    text-decoration: none;
    padding-bottom: 14px;
    font-weight: 500;
    font-size: ${ props => props.fontSize };
    font-family: ${ props => props.fontFamily };

    &:hover{
        color: ${ palette.primary_color };
        ${ props => props.auth ? '' : `border-bottom: 2px solid${ palette.primary_color };` };
    }
    &.active{
        color: ${ palette.primary_color };
        border-bottom: 2px solid ${ palette.primary_color };
    }
`;

export const NavLinkAuth = styled(NavLink)`
    background: ${ props => props.signup ? palette.primary_color :  palette.tertiary_color };
    color: ${ props => props.signup ? palette.text_light_color : palette.main_color };
    border-radius: 3px;
    padding: 12px;
    font-weight: 400;

    &:hover{
        color: ${  props => props.signup ? palette.main_color : palette.text_light_color };
        background: ${ props => props.signup ? palette.text_light_color :  palette.tertiary_color };
        cursor: pointer;
    }
`;

/* 
    Footer Styling

*/
export const FooterSection = styled.footer`
    width: 100%;
    height: auto;
    padding-bottom: 20px;
    background: ${ palette.tertiary_color };
`;

export const ListItemVertical = styled(ListItemHorizontal)`
    display: block;
`;
export const FooterLink = styled(NavLink)`
    color: ${ palette.main_color };
    font-weight: 200;
    padding-bottom: 4px;

    &:hover{
        cursor: pointer;
        border-bottom: 1.5px solid ${ palette.primary_color };
    }
`;
export const HorizontalLine = styled.hr`
    background: ${ palette.main_color };
    height: 0.4px;
    margin: 10px 4%;
`;
export const BoxContent = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    ${ props => props.height ? `height: ${ props.height }` : ''}
    
`;
export const BoxSocialMedia = styled(BoxContainerHorizontal)`
    
    ${ props => props.grow ? `
        align-content: center;
        justify-content: flex-end;
        flex-grow: 1;
    ` : '' };
`;
export const SocialMedia = styled.li`
    background: ${ palette.main_color };
    margin: 5px;
    color: ${ palette.text_light_color };
    ${ props => props.cl ? 'font-weight: 900;' : ""}
    list-style-type: none;
    text-align: center;
    border-radius: 22px;
    font-size: 18px;
    padding: 10px 14px;

    &:hover{
        background: ${ props => props.cl ? palette.text_light_color : props.bg };
        color: ${ props => props.cl ? props.cl : palette.text_light_color };
    }
`;

export const InputMoreInfo = styled.input`
    width: 100%;
    height: 28px;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    padding: 6px;
    margin-top: 12px;
    font-family: Century Gothic;
    transition: all 400ms ease-in-out;

    &:hover{
        border-bottom: 1px solid ${ palette.main_color };

    }
    &:not(:last-of-type){
        border-bottom: 1.5px solid ${ palette.main_color };
    }
    &::placeholder{
        color: ${ palette.tertiary_color }
    }
    &:focus{
        border: none;
        border-bottom: 1px solid ${ palette.main_color };
        outline: none;
        color: ${ palette.main_color };
    }
`;
export const SubscribeButton = styled.button`
    width: 40%;
    height: 40px;
    font-size: 14px;
    background: ${ palette.main_color };
    color: ${ palette.text_light_color };
    border: none;
    font-family: Century Gothic;
    border-radius: 7px;

    &:hover{
        color: ${ palette.main_color };
        background: ${ palette.text_light_color };
        cursor: pointer;
    }
`;

export const ContactParagraph = styled.p`
    font-size: 16px;
    font-weight: 400;
    width: 250px;
    font-familyt: Century Gothic;
    letter-spacing: 1px;
    cursor: pointer;
    padding-bottom: 8px;
    margin: 2px;

    &:hover{
        color: ${ palette.primary_color };
    }
`;

export const Icon = styled.span`
    color: ${ palette.primary_color };
    font-size: 20px;
`;

/*
    Home Styling

*/

export const HomeHeader = styled.div`
    width: 100%;
    height: 540px;
    background-image: url('${ props => props.url }');
    background-size: 100% 100%;
`;

export const HomeHeading = styled.h1`
    max-width: 880px;
    font-weight: 900;
    font-size: 3.4em;
    text-align: center;
    margin: 0 auto 20px;
    color: ${ palette.text_light_color };
`;

export const BoxItem = styled.div`
    display: flex;
    align-item: center;
    justify-content: center;
    flex-direction: column;
`;

export const Subtitle = styled.p`
    font-size: 1.4rem;
    color: #626262;
    margin: 0 auto 42px;
    text-align: center;
    max-width: 860px;
    color: ${ palette.text_light_color };
    line-height: 1.4;
    box-sizing: border-box;
`;

export const InputTrial = styled.input`
    max-width: 400px;
    width: 100%;
    outline: none;
    background: ${ palette.primary_color };
    color: ${ palette.text_light_color };
    font-size: 1.4rem;
    margin: 0 auto;
    cursor: pointer;
    font-weight: bold;
    border: none;
    border-radius: 100px;
    height: 60px;

    &:hover{
        background: ${ palette.main_color };
    }
`;
export const CopyRight = styled.p`
    font-size: 14px;
    font-family: century gothic;
    color: ${ palette.text_light_color };
    text-align: right;
`;

/* Main Section */

export const SectionBoxItem = styled.div`
    display: flex;
    flex-direction: column;
    ${ props => props.grow ? 'flex-grow: 1;' : '' }
`;