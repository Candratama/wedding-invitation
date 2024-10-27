import {useState} from 'react';
import {Box, Button, Image} from '@chakra-ui/react';
import {Fade} from 'react-awesome-reveal';
import FsLightbox from 'fslightbox-react';
import SecondaryFont from "@/components/texts/SecondaryFont";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import PrimaryFont from "@/components/texts/PrimaryFont";
import TextFont from "@/components/texts/TextFont";

const images = [
    '/images/Image1.jpeg',
    '/images/Image2.jpeg',
    '/images/Image3.jpeg',
    '/images/Image4.jpeg',
    '/images/Image5.jpeg',
    '/images/Image6.jpeg',
    '/images/Image7.jpeg',
    '/images/Image8.jpeg',
    '/images/Image9.jpeg'
];

const OpeningSection = () => {
    const [currentSlide, setCurrentSlide] = useState(7);
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1,
    });

    const handleNext = () => {
        setCurrentSlide((prev) => prev - 1);
        if (currentSlide <= 0) {
            setCurrentSlide(images.length - 2);
        }
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => prev + 1);
        if (currentSlide >= images.length - 2) {
            setCurrentSlide(0);
        }
    };

    const handleSlideClick = (index: number) => {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: index + 1,
        });
    };

    return (
        <Box
            id="opening_section"
            color="black"
            padding="50px 0 100px"
            textAlign="center"
            height="100vh"
            backgroundColor="#FFF5E1" // Warm white color
        >
            <Box
                fontFamily="poppins"
                letterSpacing="2px"
                textTransform="uppercase"
                textAlign="center"
            >
                <SecondaryFont className={"text-xs"}>DEAR MR-MRS-MS,</SecondaryFont>
                <SecondaryFont className={"text-xs mb-5"}>FAMILY & FRIENDS</SecondaryFont>
            </Box>
            <Box>
                <Fade duration={1000} direction="up" triggerOnce>
                    <PrimaryFont className={"text-3xl mb-5"}>
                        Welcome to
                        <br/>
                        Tiffany & Jared’s
                        <br/>
                        Wedding Website
                    </PrimaryFont>
                </Fade>
            </Box>
            <Box>
                <Fade duration={1000} direction="up" triggerOnce>
                    <TextFont fontStyle="italic" className="mb-5 px-20"
                    >
                        Together with joyful hearts and the grace of God, we joyfully
                        announce the upcoming of our marriage.
                    </TextFont>
                </Fade>
            </Box>

            <Box position="relative">
                <Box
                    display={'flex'}
                    flexFlow={'wrap'}
                    boxSizing="border-box"
                    justifyContent={'space-between'}
                    width={'100%'}
                    userSelect={'none'}
                >
                    <Box
                        overflow="hidden"
                        width="100%"
                        maxWidth="840px"
                        display="flex"
                        flexFlow={'wrap'}
                        padding={'0px'}
                    >
                        <Box display={'flex'} boxSizing="border-box" outline={'none'}>
                            {images.map((src, index) => (
                                <Box
                                    key={index}
                                    width="280px"
                                    height={'390px'}
                                    transform={`translateX(-${currentSlide * 280}px)`}
                                    transition="transform 1.2s ease-in-out"
                                    style={{cursor: 'pointer', marginBottom: '20px'}}
                                    onClick={() => handleSlideClick(index)}
                                    margin={'0'}
                                    className={index === currentSlide ? 'selected-image' : ''}
                                >
                                    <Image
                                        src={src}
                                        width="280px"
                                        height={'390px'}
                                        objectFit={'cover'}
                                        objectPosition={'center center'}
                                        border={'10px solid transparent'}
                                        alt={`Slide ${index + 1}`}
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Box>
                    <Button
                        type="button"
                        position="absolute"
                        right="2.5rem" // Swapped position
                        bottom="-50px"
                        alignSelf="center"
                        border="1px solid rgb(26, 27, 29)"
                        borderRadius={'6px'}
                        cursor="pointer"
                        height="30px"
                        lineHeight="1"
                        textAlign="center"
                        width="70px"
                        padding="5px 10px"
                        onClick={handleNext}
                    >
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            width="100%"
                            height="100%"
                            fontSize="24px"
                        >
                            <FaArrowRight style={{marginLeft: '8px'}}/>
                        </Box>
                    </Button>
                    <Button
                        type="button"
                        position="absolute"
                        right="120px" // Swapped position
                        bottom="-50px"
                        alignSelf="center"
                        borderRadius={'6px'}
                        // background="bgSecondary"
                        border="1px solid rgb(26, 27, 29)"
                        cursor="pointer"
                        height="30px"
                        lineHeight="1"
                        textAlign="center"
                        width="70px"
                        padding="5px 10px"
                        onClick={handlePrev}
                    >
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            width="100%"
                            height="100%"
                            fontSize="24px"
                        >
                            <FaArrowLeft style={{marginLeft: '8px'}}/>
                        </Box>
                    </Button>

                </Box>
                <FsLightbox
                    toggler={lightboxController.toggler}
                    sources={images}
                    slide={lightboxController.slide}
                />
            </Box>
        </Box>
    );
};

export default OpeningSection;