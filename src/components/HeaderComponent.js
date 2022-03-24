import React from 'react';
import { BoxContainerHorizontal, ListItemHorizontal, LogoImage, Navbar, NavbarBrand, NavbarItem, NavLink, NavLinkAuth, UnorderedList } from '../shared/common';
import logo from '../logo.png'

const Header = () => {

    const navlinkStyle={
        fontFamily: "Century Gothic",
        fontSize: 14,
    }
    return (
        <React.Fragment>
            <Navbar height="95px">
                <BoxContainerHorizontal height={ "100%" }>
                    <NavbarBrand>
                        <LogoImage height={ "100%" } width={ "70px" } src={ logo } />
                    </NavbarBrand>
                    <NavbarItem grow={true}>
                        <UnorderedList>
                            <ListItemHorizontal linkStyle={ navlinkStyle }><NavLink linkStyle={ navlinkStyle } className='active'>Home</NavLink></ListItemHorizontal>
                            <ListItemHorizontal linkStyle={ navlinkStyle }><NavLink href='/sell' linkStyle={ navlinkStyle }>Sell</NavLink></ListItemHorizontal>
                            <ListItemHorizontal linkStyle={ navlinkStyle }><NavLink href='/shipping' linkStyle={ navlinkStyle }>Shipping</NavLink></ListItemHorizontal>
                            <ListItemHorizontal linkStyle={ navlinkStyle }><NavLink href='/shipping' linkStyle={ navlinkStyle }>Services</NavLink></ListItemHorizontal>
                            <ListItemHorizontal linkStyle={ navlinkStyle }><NavLink href='/about-us' linkStyle={ navlinkStyle }>About Us</NavLink></ListItemHorizontal>
                            <ListItemHorizontal linkStyle={ navlinkStyle }><NavLink href='/contact-us' linkStyle={ navlinkStyle }>Contact Us</NavLink></ListItemHorizontal>
                        </UnorderedList>
                    </NavbarItem>
                    <NavbarItem>
                        <UnorderedList>
                            <ListItemHorizontal><NavLinkAuth href='/signin' auth={true}>Sign In</NavLinkAuth></ListItemHorizontal>
                            <ListItemHorizontal><NavLinkAuth href='/create-account' auth={true} signup={ true }>Create Account</NavLinkAuth></ListItemHorizontal>
                        </UnorderedList>
                    </NavbarItem>
                </BoxContainerHorizontal>
            </Navbar>
        </React.Fragment>
    );
}

export default Header;