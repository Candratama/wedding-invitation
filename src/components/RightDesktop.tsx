import React, {useEffect} from 'react';
import {Box} from '@chakra-ui/react';
import WelcomeSection from "@/components/WelcomeSection";
import OpeningSection from "@/components/OpeningSection";


const RightDesktop = ({}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box>
            <WelcomeSection/>
            <OpeningSection/>
        </Box>
    );
};

export default RightDesktop;