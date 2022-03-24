import React from "react";
import { BoxContainerHorizontal, BoxContainerVertical, BoxContent, BoxItemHorizontal, BoxSocialMedia, ContactParagraph, CopyRight, FooterLink, FooterSection, HorizontalLine, Icon, InputMoreInfo, ListItemVertical, SocialMedia, SubscribeButton, UnorderedList } from "../shared/common";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const Footer = () => {
    return (
        <React.Fragment>
            <FooterSection>
                <BoxContainerHorizontal>
                    <BoxItemHorizontal>
                        <h2>About US</h2>
                        <p>We are an online business company focused <br/>
                            on provide a good quality of product to <br/>
                            satisfy our customer need </p>
                        <h2>Contact US</h2>
                        <ContactParagraph>
                            <Icon className="fa fa-phone"></Icon>  +2659966681449                            
                        </ContactParagraph>
                        <ContactParagraph>
                            <Icon className="fa fa-envelope-open"></Icon>  ptrckbyamasu@gmail.com 
                        </ContactParagraph>
                    </BoxItemHorizontal>
                    <BoxItemHorizontal>
                        <h2>Informations</h2>
                        <UnorderedList p_l={true}>
                            <ListItemVertical><FooterLink>Order Products</FooterLink></ListItemVertical>
                            <ListItemVertical><FooterLink>Search</FooterLink></ListItemVertical>
                            <ListItemVertical><FooterLink>Testimonials</FooterLink></ListItemVertical>
                            <ListItemVertical><FooterLink>Blogs</FooterLink></ListItemVertical>
                            <ListItemVertical><FooterLink>Event</FooterLink></ListItemVertical>
                        </UnorderedList>
                    </BoxItemHorizontal>
                    <BoxItemHorizontal>
                        <h2>Helpful Links</h2>
                        <UnorderedList p_l={true}>
                            <ListItemVertical><FooterLink>Services</FooterLink></ListItemVertical>
                            <ListItemVertical><FooterLink>Customer Support</FooterLink></ListItemVertical>
                            <ListItemVertical><FooterLink>Shipping Rates</FooterLink></ListItemVertical>
                            <ListItemVertical><FooterLink>Your Account</FooterLink></ListItemVertical>
                            <ListItemVertical><FooterLink>Terms and Conditions</FooterLink></ListItemVertical>
                            <ListItemVertical><FooterLink>Privacy Policy</FooterLink></ListItemVertical>
                        </UnorderedList>
                    </BoxItemHorizontal>
                    <BoxItemHorizontal>
                        <h2>Subscribe More Info</h2>
                        <InputMoreInfo placeholder="someone@gmail.com"/><br/>
                        <SubscribeButton>Subscribe</SubscribeButton>

                    </BoxItemHorizontal>
                </BoxContainerHorizontal>                
                <HorizontalLine/> 
                <BoxContent>
                    <BoxSocialMedia grow={true}>
                        <SocialMedia bg={'#0e76a8'}><span className="fa fa-linkedin"></span></SocialMedia>
                        <SocialMedia bg={'#171515'}><span className="fa fa-github"></span></SocialMedia>
                        <SocialMedia cl={'#fbad50'}><span className="fa fa-instagram"></span></SocialMedia>
                        <SocialMedia bg={'#1DA1F2'}><span className="fa fa-twitter"></span></SocialMedia>
                    </BoxSocialMedia>
                    <BoxSocialMedia>
                       <CopyRight>2022 &copy; Copyright All the right are reserved </CopyRight>
                    </BoxSocialMedia>
                </BoxContent>
            </FooterSection>
            
        </React.Fragment>
    )
}


export default Footer;