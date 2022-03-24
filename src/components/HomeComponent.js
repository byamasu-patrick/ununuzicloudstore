import React from "react";
import { BoxContainerHorizontal, BoxContent, BoxItem, BoxItemHorizontal, BoxSpaceAround, CategoriesInput, CategoryLabel, CenterHorizontalBoxItem, ClientImage, FooterLink, LeftHorizontalBoxItem, ListItemVertical, SearchBox, SearchButton, SearchInput, SectionBoxItem, Subtitle, UnorderedList } from "../shared/common";
import TopHome from "./home/TopHome";
import amazon from '../logos/amazon.png';
import google from '../logos/google.png';
import microsoft from '../logos/microsoft.png';
import mit from '../logos/mit.png';
import worldbank from '../logos/worldbank.png';
import unhcr from '../logos/unhcr.png';

const Home = () => {
    return (
       <React.Fragment>
           <TopHome></TopHome>
           <BoxContent height={'auto'}>
                <BoxItem>
                    <CenterHorizontalBoxItem><h2>OUR CLIENTS</h2></CenterHorizontalBoxItem><br/><br/>
                    <CenterHorizontalBoxItem>
                        <ClientImage src={worldbank} />
                        <ClientImage src={amazon} />
                        <ClientImage src={google} />
                        <ClientImage src={mit} />
                        <ClientImage src={microsoft} />
                        <ClientImage src={unhcr} />
                    </CenterHorizontalBoxItem><br/><br/><br/><br/>
                    <CenterHorizontalBoxItem>
                        <Subtitle textColor={true}>
                            We provide best service to our clients and we have created the best customer service to handle our request. Once you 
                            decide to buy our product we make sure that the product reach you safely and as fast as possible. Our services are on top with the best 
                            cloud infranstracture to store product by  making sure that wevery product is available at any time.
                        </Subtitle>
                    </CenterHorizontalBoxItem>
                </BoxItem>
           </BoxContent>
           <BoxContent height={'900px;'} style={{background:'#FBF8F1',}}>
                <LeftHorizontalBoxItem grow={1}>  
                   <BoxSpaceAround style={{borderRight: '1px solid #CCC', paddingTop: '20px;'}}>
                        <h2>Categories</h2>
                        <CategoriesInput type='checkbox' value='Food'/> <CategoryLabel>Food</CategoryLabel> <br/><br/>
                        <CategoriesInput type='checkbox' value='Food'/> <CategoryLabel>House Materials</CategoryLabel><br/><br/>
                        <CategoriesInput type='checkbox' value='Food'/> <CategoryLabel>Dresses</CategoryLabel><br/><br/>
                        <CategoriesInput type='checkbox' value='Food'/> <CategoryLabel>Health Drugs</CategoryLabel><br/><br/>
                        <CategoriesInput type='checkbox' value='Food'/> <CategoryLabel>Softwares</CategoryLabel><br/><br/>
                        <CategoriesInput type='checkbox' value='Food'/> <CategoryLabel>computer Hardware</CategoryLabel><br/><br/>
                        <CategoriesInput type='checkbox' value='Food'/> <CategoryLabel>Electronics</CategoryLabel><br/><br/>
                   </BoxSpaceAround>
                </LeftHorizontalBoxItem>
                <LeftHorizontalBoxItem grow={3}>
                    <SearchBox>
                        <SearchInput type='text' placeholder='Seacrh' />
                        <SearchButton>Seach</SearchButton>
                    </SearchBox>
                </LeftHorizontalBoxItem>
           </BoxContent>
           <BoxContent height={'800px'}>
                <SectionBoxItem>
                    
                </SectionBoxItem>
                <SectionBoxItem>
                    
                </SectionBoxItem>
           </BoxContent>
       </React.Fragment>
    );
};

export default Home;