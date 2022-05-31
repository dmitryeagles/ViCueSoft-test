export type UsersResponse = {
  limit: number;
  offset: number;
  total: number;
  items: User[];
};

export type User = {
  id: number;
  name: string;
  role: string;
  ctime: number;
};

export type Product = {
  id: number;
  price: number;
  sale: number;
  img: string;
  description:string;

} ;

export type Notification = {
  ctime: string;
  event: string;
}


export type PagUsers = {
  usersPerPage: number;
  totalUsers: number;
  paginate: number;
}