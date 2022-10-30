interface IProduct {
  _id?: string;
  name: string;
  category: string;
  description: string;
  store: string;
  price: number;
  image: string;
}

interface IStore {
  id?: string;
  name: string;
  description: string;
  image: string;
}

interface IAuthData {
  name: string;
  email: string;
  id: string;
  role: string;
  status: string;
  token: string;
}

interface IDashboardStates {
  totalUser: number;
  totalOrder: number;
  totalProduct: number;
  totalStore: number;
}