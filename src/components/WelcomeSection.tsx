import React, {useEffect, useState} from 'react';
import {Box} from '@chakra-ui/react';
import {keyframes} from '@emotion/react';
import {Fade} from "react-awesome-reveal";
import SecondaryFont from "@/components/texts/SecondaryFont";
import PrimaryFont from "@/components/texts/PrimaryFont";
import TextFont from "@/components/texts/TextFont";
import {Button} from "@/components/ui/button";
import {FaArrowDown} from "react-icons/fa";

const zoomEffect = keyframes`
    from {
        transform: scale(1);
    }
    to {
        transform: scale(1.05);
    }
`;

const images = [
    '/images/Image9.jpeg',
    '/images/Image2.jpeg',
    '/images/Image3.jpeg',
    '/images/Image4.jpeg',
    '/images/Image5.jpeg',
    '/images/Image6.jpeg',
    '/images/Image7.jpeg',
    '/images/Image8.jpeg',
    '/images/Image1.jpeg',
];


const WelcomeSection: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const handleScrollToBeginning = () => {
        const openingSection = document.getElementById('opening_section');
        if (openingSection) {
            openingSection.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <Box position="relative" width="100%" height="100vh" overflow="hidden">
            <Box className="slide">
                {images.map((image, index) => (
                    <Box
                        key={index}
                        className={`css-${index}`}
                        backgroundImage={`linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url(${image})`}
                        backgroundSize="cover"
                        backgroundPosition="center"
                        height="100%"
                        width="100%"
                        top="0"
                        left="0"
                        position="absolute"
                        transition="opacity 1s ease-in-out"
                        animation={`${zoomEffect} 3s infinite alternate`}
                        style={{
                            opacity: index === currentImageIndex ? 1 : 0,
                        }}
                    ></Box>
                ))}
            </Box>
            <Box
                position="absolute"
                top="0"
                left="0"
                padding="200px"
                width="100%"
                height="100vh"
                backgroundColor="rgba(0, 0, 0, 0.4)"
                objectPosition="bottom"
                backgroundSize="cover"
                backgroundPosition="center"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Box
                    position="absolute"
                    top="100px"
                    textAlign="center"
                    color="white"
                    padding="10px"
                    borderRadius="5px"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    alignItems="center"
                    height="300px" // Adjust the height as needed
                >
                    <Fade direction="up" duration={1000} triggerOnce>
                        <SecondaryFont className={"text-xl font-bold"}>WEDDING INVITATION</SecondaryFont>
                    </Fade>
                    <Fade direction="up" duration={1000} triggerOnce>
                        <PrimaryFont className={"text-4xl mt-[30vh]"}>TIFFANY & JARED</PrimaryFont>
                    </Fade>
                    <Fade direction="up" duration={1000} triggerOnce>
                        <TextFont className={"text-3xl"}
                                  fontStyle="italic">#TImetoshaRE
                        </TextFont>
                    </Fade>
                    <Fade direction="up" duration={1000} triggerOnce>

                    </Fade>
                </Box>
                <Box
                    position="absolute"
                    bottom="20px"
                    right="20px"
                >
                    <Button
                        className="mt-[30vh]"
                        onClick={handleScrollToBeginning}
                    >
                        <SecondaryFont>Scroll Down</SecondaryFont>
                        <FaArrowDown style={{marginLeft: '4px'}}/>
                    </Button>
                </Box>

            </Box>
        </Box>
    );
};

export default WelcomeSection;