import requests from './httpService';

class DashboardService {
  getStates(): Promise<IDashboardStates> {
    return requests.get('/dashboard/stats');
  }
}
export default new DashboardService();
