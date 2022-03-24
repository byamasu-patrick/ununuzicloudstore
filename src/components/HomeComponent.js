import React from "react";
import { BoxContainerHorizontal, BoxContent, BoxItemHorizontal, SectionBoxItem } from "../shared/common";
import TopHome from "./home/TopHome";

const Home = () => {
    return (
       <React.Fragment>
           <TopHome></TopHome>
           <BoxContent height={'300px'}>
                <BoxItem>
                    
                </BoxItem>
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