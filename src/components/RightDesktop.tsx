import React, {useEffect} from 'react';
import {Box} from '@chakra-ui/react';
import WelcomeSection from "@/components/WelcomeSection";
import OpeningSection from "@/components/OpeningSection";

interface RightDesktopProps {
    isOverlayVisible: boolean;
}

const RightDesktop: React.FC<RightDesktopProps> = () => {
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