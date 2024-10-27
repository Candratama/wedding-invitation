import React from 'react';
import {Text, TextProps} from '@chakra-ui/react';

const PrimaryFont: React.FC<TextProps> = ({children, ...props}) => {
    return (
        <Text fontFamily="Butler Light" {...props}>
            {children}
        </Text>
    );
};

export default PrimaryFont;