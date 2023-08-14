import { Box, Button, Grid, HStack, Image, Skeleton, SkeletonText, Text, VStack } from "@chakra-ui/react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import Room from "../components/Room";

export default function Home() {
  return (
    <Grid py={5} px={{
      base: 5,
      md: 20,
      lg: 40,
    }} columnGap={4} rowGap={8} templateColumns={{
      base: "repeat(1, 1fr)",
      md: "repeat(2, 1fr)",
      lg: "repeat(3, 1fr)",
      xl: "repeat(4, 1fr)",
      "2xl": "repeat(5, 1fr)",
    }}>
      <Box>
        <Skeleton borderRadius="2xl" mb={6} height="280px" />
        <SkeletonText w={"80%"} noOfLines={1} mb={5} />
        <SkeletonText w={"50%"} noOfLines={2} mb={2} />
      </Box>
      <Room />
    </Grid>
  )
}