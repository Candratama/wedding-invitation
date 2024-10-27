import React from 'react';
import {Box, Button} from "@chakra-ui/react";
import {FaPause, FaPlay} from "react-icons/fa";

interface MusicPlayerControlsProps {
    isPlaying: boolean;
    handleTogglePlayPause: () => void;
}

const MusicPlayerControls: React.FC<MusicPlayerControlsProps> = ({isPlaying, handleTogglePlayPause}) => {
    return (
        <Box position="fixed" bottom="20px" left="20px">
            <Button onClick={handleTogglePlayPause} colorScheme="yellow">
                {isPlaying ? <FaPause/> : <FaPlay/>}
            </Button>
        </Box>
    );
};

export default MusicPlayerControls;