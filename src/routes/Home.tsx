import { Grid } from "@chakra-ui/react";
import Room from "../components/Room";
import RoomSkeleton from "../components/RoomSkeleton";
import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../api";

interface IPhoto {
  pk: string;
  file: string;
  description: string;
}

interface IRoom {
  pk: number;
  name: string;
  country: string;
  city: string;
  price: number;
  rating: number;
  is_owner: boolean;
  photos: IPhoto[];
}

interface IPage {
  active: number;
  couunt: number;
  next_link: string;
  pages: number;
  previous_link: string;
}

interface IRoomProps {
  content: IRoom[];
  page: IPage;
}

export default function Home() {
  const { isLoading, data } = useQuery<IRoomProps>(["rooms"], getRooms);
  
  return (
    <Grid mt={10} py={5} px={{
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
      {isLoading ? (
        <>
          {Array.from({ length: 15 }, (_, index) => (
            <RoomSkeleton key={index} />
          ))}
        </>
      ) : null}
      {data?.content.map((room: IRoom) => (
        <Room
          key={room.pk}
          pk={room.pk}
          imageUrl={room.photos[0].file}
          name={room.name}
          rating={room.rating}
          city={room.city}
          country={room.country}
          price={room.price}
        />
      ))}
    </Grid>
  )
}