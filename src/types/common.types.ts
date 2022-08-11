export type ItemsResponse = {
  page: number;
  per_page: number;
  total: number;
  items: Item[];
};

export type Item = {
  id:number;
  abv?: number;
  attenuation_level?: number;
  description: string;
  food_pairing?: string;
  image_url:string;
  tagline?:string;
  name:string;
  first_brewed?:string;
};

export type BeerSearchQuery = {
  page: number;
  per_page: number;
  name: string;
};


