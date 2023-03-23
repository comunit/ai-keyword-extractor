import { Box, Image, Text, Flex } from "@chakra-ui/react";
import logo from "../assets/openai.png";

function Footer() {
    return (
        <Box marginTop={50}>
            <Flex justifyContent="center">
                <Image src={logo} marginRight={1} />
                <Text>Powered by Open AI</Text>
            </Flex>
        </Box>
    );
}

export default Footer;
