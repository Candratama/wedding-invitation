import React from 'react';
import {Text, TextProps} from '@chakra-ui/react';

const TextFont: React.FC<TextProps> = ({children, fontStyle = 'normal', ...props}) => {
    return (
        <Text fontFamily="Newsreader" fontStyle={fontStyle} {...props}>
            {children}
        </Text>
    );
};

export default TextFont;