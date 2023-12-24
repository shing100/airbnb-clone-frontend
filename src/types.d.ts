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
  pk: number;
  name: string;
  description: string;
}

export interface IRoomDetail extends IRoomList {
  id: number;
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

export interface IReviewData {
  page: IPage;
  content: IReview[]
}

export interface IReview {
  payload: string;
  rating: number;
  user: IRoomOwner;
  booking: Object;
}

export interface IUser {
  last_login: string;
  username: string;
  email: string;
  date_joined: string;
  avatar: string;
  name: string;
  is_host: boolean;
  gender: string;
  language: string;
  currency: string;
}

export interface ICategory {
  pk: number;
  name: string;
  kind: string;
}