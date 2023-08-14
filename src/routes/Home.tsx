import { Box, Grid, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

export default function Home() {
  return (
    <Grid py={5} px={40} columnGap={4} rowGap={8} templateColumns={"repeat(5, 1fr)"}>
      <VStack spacing={"-0.5"} alignItems={"flex-start"}>
        <Box overflow={"hidden"} mb={3} rounded="3xl">
          <Image h="280" src="https://bit.ly/2k1H1t6" />
        </Box>
        <Box>
          <Grid gap={2} templateColumns={"7fr 1fr"}>
            <Text display={"block"} as={"b"} noOfLines={1} fontSize={"md"}>Sudong-myeon, Namyangju-si, 경기도, 한국</Text>
            <HStack>
              <FaStar size={15}/>
              <Text>4.95</Text>
            </HStack>
            <Text fontSize={"sm"} color={"gray.600"}>경기도, 한국</Text>
          </Grid>
        </Box>
        <Text fontSize={"sm"} color={"gray.600"}>
          <Text as={"b"}>$72</Text> / night
        </Text>
      </VStack>
    </Grid>
  )
}