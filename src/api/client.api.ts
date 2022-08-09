import axios from "axios";
import { Item, BeerSearchQuery } from "../types/common.types";

export async function fetchItems(query: BeerSearchQuery): Promise<Item[]> {
  const params = {
    page: query.page,
    per_page: query.per_page,
    beer_name: query.name ? query.name.replace(' ', '_') : undefined
  }
  const resp = await axios.get<Item[]>(
    "https://api.punkapi.com/v2/beers",
    { params: params }
  );
  return resp.data
}

