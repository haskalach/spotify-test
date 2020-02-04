import { Entity, ItemResponse } from './main-entity';

export interface ArtistInterfaceEntity {
  artists: ArtistResponse;
}

export interface Follower {
  href: string;
  total: 4900;
}
export interface Artist extends ItemResponse {
  followers: Follower;
  genre: string[];
  popularity: number;
}
export interface ArtistResponse extends Response {
  items: Artist[];
}
