import React from "react";
import { BoxContainerHorizontal, BoxItem, BoxItemHorizontal, HomeHeader, HomeHeading, InputTrial, Subtitle } from "../../shared/common";
import bg from '../../bg.jpg';

const TopHome = () => {
    return (
        <>
            <HomeHeader url={ bg }>
                <BoxContainerHorizontal bg_img={true} height={'100%'}> 
                    <BoxItem>
                        <HomeHeading>Your Search For Knowledge Base Software Ends Here</HomeHeading>
                        <Subtitle>Helpjuice’s easy-to-use and most powerful knowledge base software is designed from the ground up to help you scale your customer support, and, collaborate better with your team.</Subtitle>
                        <InputTrial type='submit' value='14 Days Trial'/>
                    </BoxItem> 
                </BoxContainerHorizontal>
            </HomeHeader>
        </>
    );
};

export default TopHome;