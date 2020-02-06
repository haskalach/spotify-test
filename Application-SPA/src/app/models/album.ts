import { Artist } from './artist';
import { Response, ItemResponse } from './main-entity';

export interface SpotifyUrl {
  spotify: string;
}
export interface Album extends ItemResponse {
  release_date: string;
  total_tracks: number;
  artists: Artist[];
  external_urls: SpotifyUrl;
}
export interface AlbumResponse extends Response {
  items: Album[];
}
