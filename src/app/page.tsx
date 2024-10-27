"use client";

import {Box, Flex} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import dynamic from "next/dynamic";
import LeftDesktop from "@/components/LeftDesktop";
import RightDesktop from "@/components/RightDesktop";
import Overlay from "@/components/Overlay";
import MusicPlayerControls from "@/components/MusicPlayerControls";

const ReactPlayer = dynamic(() => import("react-player"), {ssr: false});

export default function Home() {
    const [isOverlayVisible, setOverlayVisible] = useState(true);
    const [isPlaying, setPlaying] = useState(false);
    const [isMuted, setMuted] = useState(true);

    useEffect(() => {
        if (isOverlayVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
            setPlaying(true);
            setMuted(false);
        }
    }, [isOverlayVisible]);

    const handleButtonClick = () => {
        setTimeout(() => setOverlayVisible(false), 1000); // Match the duration of the animation
    };

    const handleTogglePlayPause = () => {
        setPlaying(!isPlaying);
    };

    return (
        <Flex>
            <Box width={{base: "0", lg: "calc(100% - 500px)"}} display={{base: "none", lg: "block"}}>
                <LeftDesktop/>
            </Box>
            <Box width={{base: "100%", lg: "500px"}} position="relative">
                <RightDesktop/>
                {isOverlayVisible && (
                    <Overlay handleButtonClick={handleButtonClick}/>
                )}
                {!isOverlayVisible && (
                    <>
                        <ReactPlayer
                            url="bg-music.mp3"
                            playing={isPlaying}
                            muted={isMuted}
                            controls={true}
                            width="0"
                            height="0"
                        />
                        <MusicPlayerControls isPlaying={isPlaying} handleTogglePlayPause={handleTogglePlayPause}/>
                    </>
                )}
            </Box>
        </Flex>
    );
}