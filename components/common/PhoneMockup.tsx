
import React from 'react';
import { QrCodeIcon } from '../icons';

interface PhoneMockupProps {
  children: React.ReactNode;
  isGeneric?: boolean;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ children, isGeneric = false }) => (
  <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[550px] w-[280px] shadow-xl">
    {!isGeneric && (
      <>
        <div className="w-[140px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
        <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
      </>
    )}
    <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white">
      {children}
    </div>
  </div>
);

interface AgentAppScreenProps {
    step: number;
}

const AppHeader = ({ title }: { title: string }) => (
    <div className="bg-indigo-600 text-white p-3 text-center font-bold text-sm">
        {title}
    </div>
);

export const AgentAppScreen: React.FC<AgentAppScreenProps> = ({ step }) => {
    const transactions = [
        { name: 'R. Kumar', amount: 500, time: '10:45 AM' },
        { name: 'S. Patel', amount: 1250, time: '10:12 AM' },
        { name: 'M. Singh', amount: 700, time: '9:50 AM' },
        { name: 'A. Gupta', amount: 2100, time: '9:33 AM' },
    ];

    switch(step) {
        case 0: // Onboarding
            return (
                <div className="h-full flex flex-col justify-center items-center text-center p-4 bg-gray-50">
                    <h2 className="text-lg font-bold">Welcome, Agent!</h2>
                    <p className="text-sm text-gray-600 mt-2">Complete your one-time KYC to activate your secure collection wallet.</p>
                    <div className="mt-6 w-full space-y-3">
                        <div className="bg-white p-2 rounded border">Aadhaar Verification</div>
                        <div className="bg-white p-2 rounded border">PAN Verification</div>
                    </div>
                    <button className="mt-6 bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg">Proceed</button>
                    <p className="text-xs text-gray-400 mt-4">Wallet will be 'Enterprise Restricted'</p>
                </div>
            );
        case 1: // QR Code
             return (
                <div className="h-full flex flex-col bg-gray-50">
                    <AppHeader title="Receive Payment" />
                    <div className="flex-grow flex flex-col items-center justify-center p-4 text-center">
                        <QrCodeIcon className="w-40 h-40 text-gray-800"/>
                        <p className="mt-2 font-bold text-sm">Agent ID: AG-4812</p>
                        <p className="font-mono text-xs text-gray-500">AG4812_SUNMFI@spicepay</p>
                        <p className="mt-4 text-sm bg-green-100 text-green-800 p-2 rounded-lg">Show this QR to the customer</p>
                    </div>
                </div>
            );
        case 2: // History
            return (
                <div className="h-full flex flex-col bg-gray-50">
                    <AppHeader title="Collection History (Read-Only)" />
                    <div className="p-2 space-y-2 overflow-y-auto">
                        {transactions.map((tx, i) => (
                             <div key={i} className="bg-white p-2 rounded-lg shadow-sm flex justify-between items-center">
                                <div>
                                    <p className="font-semibold text-sm">{tx.name}</p>
                                    <p className="text-xs text-gray-500">{tx.time}</p>
                                </div>
                                <p className="font-bold text-green-600">₹{tx.amount.toLocaleString('en-IN')}</p>
                            </div>
                        ))}
                    </div>
                </div>
            );
        case 3: // Wallet
            return (
                <div className="h-full flex flex-col bg-gray-50">
                    <AppHeader title="Restricted Wallet" />
                    <div className="p-4 text-center">
                        <p className="text-sm text-gray-500">Current Balance</p>
                        <p className="text-4xl font-bold mt-1">₹4,550</p>
                    </div>
                    <div className="flex-grow p-4 flex flex-col justify-center items-center bg-yellow-50 border-t-2 border-dashed border-yellow-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <h3 className="font-bold mt-2">Receive-Only Wallet</h3>
                        <p className="text-xs text-gray-600 text-center mt-1">You cannot withdraw or transfer funds. All collections will be auto-settled to your MFI's account.</p>
                    </div>
                     <div className="p-4 grid grid-cols-2 gap-4">
                        <button className="bg-gray-300 text-gray-500 p-3 rounded-lg text-sm cursor-not-allowed">Withdraw</button>
                        <button className="bg-gray-300 text-gray-500 p-3 rounded-lg text-sm cursor-not-allowed">Transfer</button>
                    </div>
                </div>
            );
        default: return null;
    }
};
