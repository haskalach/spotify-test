export interface Entity {
  id: string;
  name: string;
}
export interface Response {
  href: string;
  limit: number;
  next: string;
  offset: number;
  total: number;
}

export interface Image {
  heigth: number;
  width: number;
  url: string;
}

export interface ItemResponse extends Entity {
  href: string;
  type: string;
  images: Image[];
}
