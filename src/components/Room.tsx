import { Box, Button, Grid, HStack, Image, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { FaRegHeart, FaStar } from "react-icons/fa";

export default function Room() {
    const gray = useColorModeValue("gray.600", "gray.300");
    return (
        <VStack spacing={"-0.5"} alignItems={"flex-start"}>
            <Box position={"relative"} overflow={"hidden"} mb={3} rounded="2xl">
                <Image h="280" src="https://bit.ly/2k1H1t6" />
                <Button variant={"unstyled"} position={"absolute"} top={0} right={0} color={"white"}>
                    <FaRegHeart size="20px" />
                </Button>
            </Box>
            <Box>
                <Grid gap={2} templateColumns={"8fr 1fr"}>
                    <Text display={"block"} as={"b"} noOfLines={1} fontSize={"md"}>Sudong-myeon, Namyangju-si, 경기도, 한국</Text>
                    <HStack _hover={{
                        color: "red.100"
                    }} alignItems={"center"}>
                        <FaStar size={12} />
                        <Text fontSize={"sm"}>4.95</Text>
                    </HStack>
                    <Text fontSize={"sm"} color={gray}>경기도, 한국</Text>
                </Grid>
            </Box>
            <Text fontSize={"sm"} color={gray}>
                <Text as={"b"}>$72</Text> / night
            </Text>
        </VStack>
    )
}