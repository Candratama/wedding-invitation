import React from 'react';
import {Box, Image} from '@chakra-ui/react';
import {Fade} from 'react-awesome-reveal';
import SecondaryFont from "@/components/texts/SecondaryFont";
import PrimaryFont from "@/components/texts/PrimaryFont";
import TextFont from "@/components/texts/TextFont";

const LeftDesktop = () => {
    return (
        <Box position="sticky" top="0" height="100vh">
            <Image
                src="images/Image2.jpeg"
                alt="Sticky Image"
                objectPosition="bottom"
                height="100%"
                width="100%"
                zIndex="-1"
            />
            <Box
                position="absolute"
                top="0"
                left="0"
                height="100%"
                width="100%"
                background="rgba(0, 0, 0, 0.5)"
                zIndex="0"
            />

            <Box
                className="abs"
                position="absolute"
                top="20px"
                left="20px"
                right="20px"
                color="white"
                padding="10px"
                borderRadius="5px"
            >
                <Fade direction="up" duration={1000} triggerOnce>
                    <SecondaryFont className={"text-xl font-bold my-10"}>WEDDING INVITATION</SecondaryFont>
                </Fade>
                <Fade direction="up" duration={1000} triggerOnce>
                    <PrimaryFont className={"text-7xl font-thin"}>TIFFANY &</PrimaryFont>
                    <PrimaryFont className={"text-7xl font-thin"}>JARED </PrimaryFont>
                </Fade>
                <Fade direction="up" duration={1000} triggerOnce>
                    <TextFont fontStyle={"italic"} className={"text-lg mt-10"}>
                        Cinta bukanlah tentang menemukan orang yang sempurna, tetapi tentang melihat seseorang yang tak
                        sempurna dengan sempurna.</TextFont>
                    <TextFont className={"text-lg"}>- Sam Keen</TextFont>
                </Fade>
            </Box>
        </Box>
    );
};

export default LeftDesktop;