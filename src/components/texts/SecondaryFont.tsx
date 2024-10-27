import React from 'react';
import {Text, TextProps} from '@chakra-ui/react';

const SecondaryFont: React.FC<TextProps> = ({children, ...props}) => {
    return (
        <Text fontFamily="Poppins" {...props}>
            {children}
        </Text>
    );
};

export default SecondaryFont;