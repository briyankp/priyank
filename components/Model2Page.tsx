
import React, { useState } from 'react';
import Card from './common/Card';
import { PhoneMockup } from './common/PhoneMockup';
import { DashboardMockup } from './common/DashboardMockup';
import { StepIndicator } from './common/StepIndicator';
// FIX: Import WalletIcon to be used in the component.
import { QrCodeIcon, UserGroupIcon, WalletIcon } from './icons';

const agentSteps = [
    "Receive Physical QR",
    "Customer Scans & Pays",
    "Receive SMS Confirmation"
];

const mfiSteps = [
    "Bulk QR Generation",
    "Real-time Tracking",
    "Single Settlement"
];

const Model2Page: React.FC = () => {
    const [currentView, setCurrentView] = useState<'agent' | 'mfi'>('agent');
    const [agentStep, setAgentStep] = useState(0);
    const [mfiStep, setMfiStep] = useState(0);

    const agentStepContent = [
        { title: "1. Receive Printed QR Code", description: "The agent receives a physical, durable QR code standee or sticker from the MFI. No app download or smartphone is required for the agent."},
        { title: "2. Customer Scans and Pays", description: "The agent presents the physical QR code to the customer, who can scan it with any UPI-enabled app to make a payment. The agent's ID is embedded in the QR for tracking."},
        { title: "3. Payment Confirmation via SMS", description: "Upon successful payment, the agent receives an instant SMS confirming the amount received and the customer details. This serves as a digital receipt."}
    ];
    
    const mfiStepContent = [
        { title: "1. Bulk QR Generation", description: "Based on the agent master data, the system generates unique UPI strings (MFIcode.agentID@spicepay) and printable QR codes in bulk."},
        { title: "2. Real-time Agent-wise Tracking", description: "Even without an agent wallet, all transactions are tracked by Agent ID. Funds flow directly to the MFI's master wallet, and the dashboard reflects this in real-time."},
        { title: "3. Single, Simplified Settlement", description: "All digital collections are pooled in the MFI's master wallet. A single bulk credit is made to the MFI's current account along with the cash settlement."}
    ];

    const AgentJourneyVisual = () => {
        switch(agentStep) {
            case 0:
                return <div className="p-8 bg-white rounded-lg text-center flex flex-col items-center justify-center h-full">
                    <QrCodeIcon className="w-32 h-32 text-gray-800" />
                    <p className="mt-4 font-mono text-sm">MFIcode.AG1234@spicepay</p>
                    <p className="mt-2 text-lg font-semibold">Physical QR Standee</p>
                </div>
            case 1:
                return <div className="p-8 bg-white rounded-lg text-center flex flex-col items-center justify-center h-full">
                     <QrCodeIcon className="w-32 h-32 text-indigo-500 animate-pulse" />
                     <p className="mt-4 text-lg font-semibold">Customer scans to pay...</p>
                </div>
            case 2:
                return <PhoneMockup isGeneric={true}>
                    <div className="bg-gray-100 h-full p-4 flex flex-col justify-center">
                        <div className="bg-white p-3 rounded-lg shadow-md max-w-xs mx-auto">
                            <p className="text-xs text-gray-500">From: DM-SPICEP</p>
                            <p className="mt-2 text-sm">Payment of ₹750 received from Customer ABC on behalf of YourMFI. Ref ID: 8264910472.</p>
                        </div>
                    </div>
                </PhoneMockup>
            default: return null;
        }
    }

    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-gray-900">Model 2: B2B QR (No App Required)</h1>
                <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600">
                    An enterprise model where funds flow directly to the MFI, and agents only need a physical QR code.
                </p>
            </div>
            
            <div className="flex justify-center mb-8 bg-gray-200 p-1 rounded-lg w-fit mx-auto">
                 <button onClick={() => setCurrentView('agent')} className={`px-6 py-2 rounded-md font-semibold text-sm transition ${currentView === 'agent' ? 'bg-white text-indigo-600 shadow' : 'text-gray-600'}`}>
                    Collection Agent Journey
                </button>
                <button onClick={() => setCurrentView('mfi')} className={`px-6 py-2 rounded-md font-semibold text-sm transition ${currentView === 'mfi' ? 'bg-white text-indigo-600 shadow' : 'text-gray-600'}`}>
                    MFI Enterprise Journey
                </button>
            </div>

            {currentView === 'agent' && (
                 <Card>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="flex flex-col justify-center">
                            <StepIndicator steps={agentSteps} currentStep={agentStep} onStepClick={setAgentStep} />
                            <div className="mt-6 p-4 bg-gray-50 rounded-lg min-h-[140px]">
                                <h3 className="font-bold text-lg text-indigo-700">{agentStepContent[agentStep].title}</h3>
                                <p className="mt-2 text-gray-600">{agentStepContent[agentStep].description}</p>
                            </div>
                        </div>
                        <div className="bg-gray-200 p-4 rounded-xl h-[500px] flex items-center justify-center">
                           <AgentJourneyVisual/>
                        </div>
                    </div>
                </Card>
            )}

            {currentView === 'mfi' && (
                <Card>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                       <div className="flex flex-col justify-center">
                            <StepIndicator steps={mfiSteps} currentStep={mfiStep} onStepClick={setMfiStep} />
                            <div className="mt-6 p-4 bg-gray-50 rounded-lg min-h-[140px]">
                                <h3 className="font-bold text-lg text-indigo-700">{mfiStepContent[mfiStep].title}</h3>
                                <p className="mt-2 text-gray-600">{mfiStepContent[mfiStep].description}</p>
                            </div>
                        </div>
                        <div>
                           {mfiStep === 0 && <div className="p-8 bg-gray-100 rounded-lg text-center flex flex-col items-center justify-center h-full">
                                <UserGroupIcon className="h-16 w-16 text-indigo-400 mb-4"/>
                                <h3 className="text-xl font-bold">Bulk QR Code Generation</h3>
                                <p className="text-gray-600 mt-2">System generates printable QR codes, uniquely mapped to each Agent ID, ready for distribution.</p>
                                <QrCodeIcon className="h-20 w-20 text-gray-700 mt-4"/>
                            </div>}
                           {mfiStep === 1 && <DashboardMockup showNewTransaction={true} />}
                           {mfiStep === 2 && <div className="p-8 bg-gray-100 rounded-lg text-center flex flex-col items-center justify-center h-full">
                                <WalletIcon className="h-20 w-20 text-indigo-400 mb-4"/>
                                <h3 className="text-xl font-bold">Direct to MFI Master Wallet</h3>
                                <p className="text-gray-600 mt-2">Funds are credited directly to the enterprise master wallet, eliminating the need for agent wallets and simplifying the fund flow.</p>
                            </div>}
                        </div>
                    </div>
                </Card>
            )}
        </div>
    );
};

export default Model2Page;