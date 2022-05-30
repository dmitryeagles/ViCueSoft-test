import axios from "axios";
import {
  Product,
  User,
  UsersResponse,
  Notification,
} from "../types/common.types";
import { format } from 'date-fns'

export async function fetchUsers(): Promise<User[]> {
  const resp = await axios.get<UsersResponse>(
    "https://test.relabs.ru/api/users/list"
  );

  return resp.data.items;
}

export async function fetchProducts(): Promise<Product[]> {
  const product1: Product = {
    id: 0,
    description:
      "Apple/Смартфон iPhone 13 pro 128Gb / 6.1 / 2532x1170 / OLED /128 Гб",
    price: 100000,
    img: "https://atstore.ba/wp-content/uploads/2020/10/1-20.png",
    sale: 14,
  };
  const product2: Product = {
    id: 0,
    description:
      "Apple/Смартфон iPhone 10 pro 128Gb / 6.1 / 2532x1170 / OLED /128 Гб",
    price: 80000,
    img: "https://atstore.ba/wp-content/uploads/2020/10/1-20.png",
    sale: 14,
  };
  return [product1, product2];
}

export function collectNotifications(
  socket: WebSocket,
  onNotification: (n: Notification) => void
): void {
  socket.addEventListener("message", (event) => {
    const obj = JSON.parse(event.data);
    const notification: Notification= {
          event: obj.event,
          ctime: format(new Date(obj.ctime * 1000),'dd.MM.yyyy HH:MM' ),
    }
    onNotification(notification);
  });
}
