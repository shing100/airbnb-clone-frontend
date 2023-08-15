export interface IRoomPhotoPhoto {
  pk: string;
  file: string;
  description: string;
}

export interface IRoomData {
  content: IRoomList[];
  page: IPage;
}

export interface IRoomList {
  pk: number;
  name: string;
  country: string;
  city: string;
  price: number;
  address: string;
  rating: number;
  is_owner: boolean;
  photos: IRoomPhotoPhoto[];
}

export interface IPage {
  active: number;
  couunt: number;
  next_link: string;
  pages: number;
  previous_link: string;
}

export interface IRoomOwner {
  name: string;
  avatar: string;
  username: string;
}

export interface IAmenity {
  name: string;
  description: string;
}

export interface IRoomDetail extends IRoomList {
  created_at: string;
  updated_at: string;
  rooms: number;
  toilets: number;
  description: string;
  address: string;
  pet_friendly: true;
  kind: string;
  is_owner: boolean;
  is_liked: boolean;
  category: {
    name: string;
    kind: string;
  };
  owner: IRoomOwner;
  amenities: IAmenity[];
}

export interface IReview {
  payload: string;
  rating: number;
  user: IRoomOwner;
}