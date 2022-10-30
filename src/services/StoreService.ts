import requests from './httpService';

class StoreService {
  getStore(): Promise<IProduct> {
    return requests.get('/store');
  }

  getStoreByID(id: string): Promise<IProduct> {
    return requests.get(`/store/${id}`);
  }

  addStore(body: object): Promise<IProduct> {
    return requests.post(`/store/`, body);
  }

  updateStore(id: string, body: object): Promise<IProduct> {
    return requests.post(`/store/${id}`, body);
  }

  deleteStore(id: string): Promise<IProduct> {
    return requests.delete(`/store/${id}`);
  }
}
export default new StoreService();
