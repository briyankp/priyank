
export enum Page {
  Home = 'home',
  Model1 = 'model1',
  Model2 = 'model2',
  BusinessModel = 'business',
}

export interface Transaction {
  id: string;
  customerName: string;
  amount: number;
  timestamp: string;
  agentId: string;
  type: 'Digital' | 'Cash';
  status: 'Completed' | 'Pending';
}
