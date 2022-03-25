import React from "react";
import { BoxContainerHorizontal, BoxContent, BoxItem, BoxItemHorizontal, BoxSpaceAround, CategoriesInput, CategoryLabel, CenterHorizontalBoxItem, Checkmark, ClientImage, FooterLink, ImageCircle, LeftHorizontalBoxItem, ListItemVertical, ProductBox, ProductButton, ProductDescription, ProductDetails, ProductImage, ProductItem, ProductTitle, RightHorizontalBoxItem, SearchBox, SearchButton, SearchInput, SectionBoxItem, SubscribeButton, Subtitle, UnorderedList } from "../shared/common";
import TopHome from "./home/TopHome";
import amazon from '../logos/amazon.png';
import google from '../logos/google.png';
import microsoft from '../logos/microsoft.png';
import mit from '../logos/mit.png';
import worldbank from '../logos/worldbank.png';
import unhcr from '../logos/unhcr.png';
import shipment from '../products/shipment.jpg';

const Home = () => {
    const items = [ {
        product_image: 'product1.png',
        product_name: 'School and Office Bags',
        product_description: 'In some cases you might want to change which tag or component a styled component renders. This is common when building a navigation bar for example, where there are a mix of anchor links and buttons but they should be styled identically.' ,
    },
    {
        product_image: 'product2.png',
        product_name: 'School and Office Bags',
        product_description: 'In some cases you might want to change which tag or component a styled component renders. This is common when building a navigation bar for example, where there are a mix of anchor links and buttons but they should be styled identically.' ,
    },
    {
        product_image: 'product3.jpeg',
        product_name: 'School and Office Bags',
        product_description: 'In some cases you might want to change which tag or component a styled component renders. This is common when building a navigation bar for example, where there are a mix of anchor links and buttons but they should be styled identically.' ,
    },
    {
        product_image: 'product4.jpg',
        product_name: 'School and Office Bags',
        product_description: 'In some cases you might want to change which tag or component a styled component renders. This is common when building a navigation bar for example, where there are a mix of anchor links and buttons but they should be styled identically.' ,
    },
    {
        product_image: 'product5.png',
        product_name: 'School and Office Bags',
        product_description: 'In some cases you might want to change which tag or component a styled component renders. This is common when building a navigation bar for example, where there are a mix of anchor links and buttons but they should be styled identically.' ,
    },
    {
        product_image: 'product6.png',
        product_name: 'School and Office Bags',
        product_description: 'In some cases you might want to change which tag or component a styled component renders. This is common when building a navigation bar for example, where there are a mix of anchor links and buttons but they should be styled identically.' ,
    }];
    const Product = () => {
        return items.map(item => (
            <ProductItem height={"380px"} id={item.id}>
                <ProductImage src={ require(`../products/${ item.product_image }`)}/>
                <ProductTitle>{ item.product_name }</ProductTitle>
                <ProductDescription>{ item.product_description.substr(0, 90) }...</ProductDescription>
                <ProductDetails type="button">Details</ProductDetails>
                <ProductButton type="button">Buy this product</ProductButton>
            </ProductItem>
        ));
    }
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
                    <CenterHorizontalBoxItem style={{marginBottom: '100px', marginTop: '80px'}}>
                        <Subtitle textColor={true}>
                            We provide best service to our clients and we have created the best customer service to handle our request. Once you 
                            decide to buy our product we make sure that the product reach you safely and as fast as possible. Our services are on top with the best 
                            cloud infranstracture to store product by  making sure that wevery product is available at any time.
                        </Subtitle>
                    </CenterHorizontalBoxItem>
                </BoxItem>
           </BoxContent>
           <BoxContent height={'auto'} style={{background:'#FBF8F1',padding: '20px'}}>
                <LeftHorizontalBoxItem grow={1} style={{ width: "540px", }}>  
                   <BoxSpaceAround style={{borderRight: '1px solid #CCC', paddingTop: '20px'}}>
                        <h2>Categories</h2>
                        <CategoriesInput type='checkbox' className="category" value='Food'/><span className="check-category"></span>  <CategoryLabel>Food</CategoryLabel> <br/><br/>
                        <CategoriesInput type='checkbox' value='Food'/><span className="check-category"></span>  <CategoryLabel>House Materials</CategoryLabel><br/><br/>
                        <CategoriesInput type='checkbox' value='Food'/><span className="check-category"></span>  <CategoryLabel>Dresses</CategoryLabel><br/><br/>
                        <CategoriesInput type='checkbox' value='Food'/><span className="check-category"></span>  <CategoryLabel>Health Drugs</CategoryLabel><br/><br/>
                        <CategoriesInput type='checkbox' value='Food'/><span className="check-category"></span>  <CategoryLabel>Softwares</CategoryLabel><br/><br/>
                        <CategoriesInput type='checkbox' value='Food'/><span className="check-category"></span>  <CategoryLabel>Computer Hardware</CategoryLabel><br/><br/>
                        <CategoriesInput type='checkbox' value='Food'/><span className="check-category"></span>  <CategoryLabel>Electronics</CategoryLabel><br/><br/>
                   </BoxSpaceAround>
                </LeftHorizontalBoxItem>
                <LeftHorizontalBoxItem grow={3}>
                    <SearchBox>
                        <SearchInput type='text' placeholder='Seacrh' />
                        <SearchButton>Seach</SearchButton>
                    </SearchBox>
                    <ProductBox>
                        <Product />
                    </ProductBox>
                    <RightHorizontalBoxItem>
                        <SubscribeButton>Load More Items</SubscribeButton>
                    </RightHorizontalBoxItem>
                </LeftHorizontalBoxItem>                
           </BoxContent>
           <BoxContent height={'800px'} className='m-t-4'>               
                <SectionBoxItem className="grow-1" style={{ justifyContent: 'center' }}>
                    <img src={require('../products/house.jpg')} className='right-self-alignment m-t-6' width="90%" height="60%" />
                </SectionBoxItem>
                <SectionBoxItem className="grow-1" style={{ justifyContent: 'center'}}>
                    <ProductItem className="box" height="500px" width="70%">
                        <h1 style={{ width: '80%', alignSelf: 'center'}} className='m-t-4'>Scale Customer Support Via A Self-Service Knowledge Base.</h1>
                        <Subtitle style={{color: '#000', textAlign: 'left', letterSpacing: '1.5px', width: '80%', fontSize: '18px'}}>
                        Over 60% of US consumers prefer an automated self-service, such as a website or mobile app, for simple customer service tasks. Your customers are always on the go, they want to use your knowledge base, more than they want to contact support – the numbers speak for themselves, you just need to make that knowledge base awesome (again).</Subtitle>
                    </ProductItem>
                </SectionBoxItem>
           </BoxContent>
           <BoxContent height={'700px'} bg_img={{ imagUrl: shipment ,  bg_size: '100% 100%', }}>
                <SectionBoxItem className='grow-1 center-self-alignment' style={{ justifyContent: 'center'}}>
                    <ProductItem height="500px" width="60%">
                        <h1 style={{ alignSelf: 'center'}}>MULTI-SHIPMENT SUPPORT</h1>
                        <Subtitle style={{color: '#000', textAlign: 'left', letterSpacing: '1.5px', width: '70%', fontSize: '18px'}}>With the Helpjuice Analytics, we tell you not only what people are searching for and not finding (every single tool does this), but rather who those people are, what you should be writing in your knowledge base, which articles need improvement and so much more.</Subtitle>
                        <Subtitle style={{color: '#000', textAlign: 'left', letterSpacing: '1.5px', width: '70%', fontSize: '18px'}}>With the Helpjuice Analytics, we tell you not only what people are searching for and not finding (every single tool does this), but rather who those people are, what you should be writing in your knowledge base, which articles need improvement and so much more.</Subtitle>
                    </ProductItem>
                </SectionBoxItem>
                <SectionBoxItem className="grow-6">
                    
                </SectionBoxItem>
           </BoxContent>
           <BoxContent height={'600px'}>
                <SectionBoxItem className="grow-1 center-items">
                    <h1>OUR TEAM</h1>
                    <CenterHorizontalBoxItem>
                        <BoxContainerHorizontal className="v-align">
                            <ImageCircle src={require('../products/profile pic.jpg')}/>
                            <h4 className="m-auto">BYAMASU Patrick Paul</h4>
                            <p className="m-auto">Senior Software Engineer</p>
                        </BoxContainerHorizontal>
                        <BoxContainerHorizontal className="v-align">
                            <ImageCircle src={require('../products/product2.png')}/>
                            <h4 className="m-auto">JOSPIN Amissi</h4>
                            <p className="m-auto">S.E. and Co-founder</p>
                        </BoxContainerHorizontal>
                        <BoxContainerHorizontal className="v-align">
                            <ImageCircle src={require('../products/house.jpg')}/>
                            <h4 className="m-auto">HASSAN Ramadhan</h4>
                            <p className="m-auto">Data Scientist</p>
                        </BoxContainerHorizontal>
                        <BoxContainerHorizontal className="v-align">
                            <ImageCircle src={require('../products/product3.jpeg')}/>
                            <h4 className="m-auto">LUNDENGE Theophile</h4>
                            <p className="m-auto">Computer Engineer</p>
                        </BoxContainerHorizontal>
                    </CenterHorizontalBoxItem>
                </SectionBoxItem>
           </BoxContent>
           
       </React.Fragment>
    );
};

export default Home;