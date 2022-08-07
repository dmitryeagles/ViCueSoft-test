import axios from "axios";
import {Item, ItemsResponse} from "../types/common.types";

export async function fetchItems(page: number): Promise<ItemsResponse> {
  const resp = await axios.get<ItemsResponse>(
    "https://api.punkapi.com/v2/beers",
    { params: { page: 1, per_page: (page * 20) } }
  );
  return resp.data
}

export async function fetchItemsOff(): Promise<Item[]> {
  const item1: Item = {
    id: 0,
    description:
      "Здесь какое-то описание первого пиваса с сервера",
    name: "Описание какого-то пиваса",
    image_url: "",
    first_brewed: "Что-то про первую дату налива",
  };
  const item2: Item = {
    id: 1,
    description:
      "Здесь какое-то описание второго пиваса с сервера",
    name: "Описание какого-то другого пиваса",
    image_url: "",
    first_brewed: "Что-то про первую дату налива",
  };
  return [item1, item2];
}
