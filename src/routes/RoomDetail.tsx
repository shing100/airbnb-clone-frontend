import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getRoom, getRoomReviews } from "../api";
import { IRoomDetail, IReview, IReviewData } from "../types";
import { Box, Container, Grid, GridItem, Heading, HStack, Image, Skeleton, Text, VStack, Avatar } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";


export default function RoomDetail() {
    const { roomPk } = useParams();
    const { isLoading, data } = useQuery<IRoomDetail>([`rooms`, roomPk], getRoom);
    const { data: reviewsData, isLoading: isReviewsLoading } = useQuery<IReviewData[]>([`rooms`, roomPk, `reviews`], getRoomReviews);
    const content: IReview[] = reviewsData?.content;
    return (
        <Box pb={20} mt={10} px={{ base: 10, md: 20, lg: 40,}}>
            <Skeleton height={"43px"} width="25%" isLoaded={!isLoading}>
                <Heading>{data?.name}</Heading>
            </Skeleton>
            <Grid mt={8} rounded="xl" overflow={"hidden"} gap={2} height="60vh" templateRows={"1fr 1fr"} templateColumns={"repeat(4, 1fr)"}>
                {[0, 1, 2, 3, 4].map((index) => (
                    <GridItem
                    colSpan={index === 0 ? 2 : 1}
                    rowSpan={index === 0 ? 2 : 1}
                    overflow={"hidden"}
                    key={index}
                >
                    <Skeleton rounded={"xl"} isLoaded={!isLoading} h="100%" w="100%">
                    <Image objectFit={"cover"} w="100%" h="100%" src={data?.photos[index].file} />
                    </Skeleton>
                </GridItem>
                ))}
            </Grid>
            <HStack width={"40%"} justifyContent={"space-between"} mt={10}>
                <VStack alignItems={"flex-start"}>
                <Skeleton isLoaded={!isReviewsLoading} height={"30px"}>
                    <Heading fontSize={"2xl"}>
                    House hosted by {data?.owner.name}
                    </Heading>
                </Skeleton>
                <Skeleton isLoaded={!isReviewsLoading} height={"30px"}>
                    <HStack justifyContent={"flex-start"} w="100%">
                    <Text>
                        {data?.toilets} toliet{data?.toilets === 1 ? "" : "s"}
                    </Text>
                    <Text>∙</Text>
                    <Text>
                        {data?.rooms} room{data?.rooms === 1 ? "" : "s"}
                    </Text>
                    </HStack>
                </Skeleton>
                </VStack>
                <Avatar name={data?.owner.name} size={"xl"} src={data?.owner.avatar} />
            </HStack>
            <Box mt={10}>
                <Heading mb={5} fontSize={"2xl"}>
                <HStack>
                    <FaStar /> <Text>{data?.rating}</Text>
                    <Text>∙</Text>
                    <Text>
                    {content?.length} review{content?.length === 1 ? "" : "s"}
                    </Text>
                </HStack>
                </Heading>
                <Container mt={16} maxW="container.lg" marginX="none">
                    <Grid gap={10} templateColumns={"1fr 1fr"}>
                        {content?.map((review, index) => (
                        <VStack alignItems={"flex-start"} key={index}>
                            <HStack>
                            <Avatar
                                name={review.user.name}
                                src={review.user.avatar}
                                size="md"
                            />
                            <VStack spacing={0} alignItems={"flex-start"}>
                                <Heading fontSize={"md"}>{review.user.name}</Heading>
                                <HStack spacing={1}>
                                <FaStar size="12px" />
                                <Text>{review.rating}</Text>
                                </HStack>
                            </VStack>
                            </HStack>
                            <Text>{review.payload}</Text>
                        </VStack>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </Box>
  );
}