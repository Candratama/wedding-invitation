import React, {useState} from 'react';
import {Box} from "@chakra-ui/react";
import {keyframes} from "@emotion/react";
import {Button} from "@/components/ui/button";
import {Fade} from "react-awesome-reveal";
import SecondaryFont from "@/components/texts/SecondaryFont";
import PrimaryFont from "@/components/texts/PrimaryFont";
import TextFont from "@/components/texts/TextFont";

const wipeUp = keyframes`
    from {
        top: 0;
    }
    to {
        top: -100%;
    }
`;

const moveUpDown = keyframes`
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-5px);
    }
`;

interface OverlayProps {
    handleButtonClick: () => void;
}

const Overlay: React.FC<OverlayProps> = ({handleButtonClick}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [animation, setAnimation] = useState<string | undefined>(undefined);

    const handleClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            setAnimation(`${wipeUp} 1s ease-out forwards`);
            setTimeout(() => {
                handleButtonClick();
            }, 1000); // Duration of the wipeUp animation
        }, 1000); // 3-second gap

    };

    return (
        <Box
            position="absolute"
            top="0"
            left="0"
            padding="200px"
            width="100%"
            height="100vh"
            backgroundColor="rgba(0, 0, 0, 0.8)"
            backgroundImage="linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)),url('/images/Image1.jpeg')"
            objectPosition="bottom"
            backgroundSize="cover"
            backgroundPosition="center"
            display="flex"
            justifyContent="center"
            alignItems="center"
            animation={animation}
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
                    <PrimaryFont className={"text-4xl mt-[30vh]"}>TIFANNY & JARED</PrimaryFont>
                </Fade>
                <Fade direction="up" duration={1000} triggerOnce>
                    <TextFont className={"text-3xl"}
                              fontStyle="italic">#TImetoshaRE
                    </TextFont>
                </Fade>
                <Fade direction="up" duration={1000} triggerOnce>
                    <Button
                        className="mt-[30vh]"
                        border="2px solid white"
                        borderRadius={'6px'}
                        onClick={handleClick}
                        loading={isLoading}
                        loadingText="Loading..."
                        css={{animation: `${moveUpDown} 3s infinite`}}
                    >
                        Open Invitation
                    </Button>
                </Fade>
            </Box>

        </Box>
    );
};

export default Overlay;