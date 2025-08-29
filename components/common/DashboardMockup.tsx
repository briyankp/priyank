
import React from 'react';
import { Transaction } from '../../types';

const initialTransactions: Transaction[] = [
    { id: 'TX789', customerName: 'V. Sharma', amount: 850, timestamp: '11:15 AM', agentId: 'AG-1122', type: 'Digital', status: 'Completed' },
    { id: 'TX788', customerName: 'S. Reddy', amount: 1500, timestamp: '11:05 AM', agentId: 'AG-4812', type: 'Cash', status: 'Pending' },
    { id: 'TX787', customerName: 'P. Desai', amount: 1200, timestamp: '10:58 AM', agentId: 'AG-1122', type: 'Digital', status: 'Completed' },
    { id: 'TX786', customerName: 'A. Khan', amount: 950, timestamp: '10:45 AM', agentId: 'AG-4812', type: 'Digital', status: 'Completed' },
];

const newTransaction: Transaction = {
    id: 'TX790', customerName: 'R. Kumar', amount: 500, timestamp: '11:20 AM', agentId: 'AG-4812', type: 'Digital', status: 'Completed'
};

interface DashboardMockupProps {
    showNewTransaction?: boolean;
}

export const DashboardMockup: React.FC<DashboardMockupProps> = ({ showNewTransaction = false }) => {
    const transactions = showNewTransaction ? [newTransaction, ...initialTransactions] : initialTransactions;

    return (
        <div className="bg-gray-100 p-2 sm:p-4 rounded-xl shadow-lg border border-gray-200">
            <div className="bg-white rounded-lg overflow-hidden">
                <div className="p-4 border-b">
                    <h3 className="font-bold text-lg">MFI Collections Dashboard</h3>
                    <p className="text-sm text-gray-500">Real-time visibility of Cash + UPI collections</p>
                </div>
                <div className="p-4 grid grid-cols-3 gap-4 text-center border-b">
                    <div>
                        <p className="text-xs text-gray-500">Total Collections</p>
                        <p className="font-bold text-xl text-indigo-600">₹5,000</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Digital</p>
                        <p className="font-bold text-xl">₹3,500</p>
                    </div>
                     <div>
                        <p className="text-xs text-gray-500">Cash</p>
                        <p className="font-bold text-xl">₹1,500</p>
                    </div>
                </div>
                <div>
                    <h4 className="p-4 font-semibold text-sm">Recent Transactions</h4>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-50 text-xs text-gray-700 uppercase">
                                <tr>
                                    <th className="px-4 py-2">Agent ID</th>
                                    <th className="px-4 py-2">Amount</th>
                                    <th className="px-4 py-2">Type</th>
                                    <th className="px-4 py-2">Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.slice(0, 4).map((tx, index) => (
                                    <tr key={tx.id} className={`border-b ${index === 0 && showNewTransaction ? 'bg-green-100 animate-pulse' : ''}`}>
                                        <td className="px-4 py-2 font-medium">{tx.agentId}</td>
                                        <td className="px-4 py-2">₹{tx.amount.toLocaleString('en-IN')}</td>
                                        <td className="px-4 py-2">
                                            <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${tx.type === 'Digital' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                {tx.type}
                                            </span>
                                        </td>
                                        <td className="px-4 py-2 text-gray-500">{tx.timestamp}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};
