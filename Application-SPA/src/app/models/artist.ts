export interface Entity {
  id: string;
  name: string;
}
export interface ArtistInterfaceEntity {
  artists: ArtistResponse;
}
export interface Response {
  href: string;
  limit: number;
  next: string;
  offset: number;
  total: number;
}

export interface Follower {
  href: string;
  total: 4900;
}
export interface Image {
  heigth: number;
  width: number;
  url: string;
}
export interface Artist extends Entity {
  followers: Follower;
  genre: string[];
  href: string;
  type: string;
  popularity: number;
  images: Image[];
}
export interface ArtistResponse extends Response {
  items: Artist[];
}
