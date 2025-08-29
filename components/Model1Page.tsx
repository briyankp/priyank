
import React, { useState } from 'react';
import Card from './common/Card';
import { PhoneMockup, AgentAppScreen } from './common/PhoneMockup';
import { DashboardMockup } from './common/DashboardMockup';
import { StepIndicator } from './common/StepIndicator';
import { UserGroupIcon, DocumentTextIcon, QrCodeIcon } from './icons';

const agentSteps = [
    "Onboarding & KYC",
    "QR Code for Payment",
    "View Collection History",
    "Secure Restricted Wallet"
];

const mfiSteps = [
    "Agent Registration",
    "Real-time Tracking",
    "Consolidated Settlement"
];

const Model1Page: React.FC = () => {
    const [currentView, setCurrentView] = useState<'agent' | 'mfi'>('agent');
    const [agentStep, setAgentStep] = useState(0);
    const [mfiStep, setMfiStep] = useState(0);

    const agentStepContent = [
        { title: "1. Onboarding & Limited KYC", description: "Agent receives an SMS, downloads the SpicePay app, and completes a minimal KYC process (Aadhaar + PAN). The wallet is automatically marked as 'Enterprise Restricted'."},
        { title: "2. Show QR to Customer", description: "The app generates a unique UPI VPA (e.g., AgentID_MFIcode@spicepay) and a static QR code. The agent simply shows this screen to the customer for payment."},
        { title: "3. View Collection History", description: "Agents can view a real-time, read-only history of their digital collections. This provides transparency and helps with their daily reconciliation."},
        { title: "4. Receive-Only Wallet", description: "The agent's wallet clearly shows the balance but has no options for withdrawal or transfer. A message confirms all funds will be auto-settled to the MFI account."}
    ];
    
    const mfiStepContent = [
        { title: "1. Agent Registration", description: "MFI shares a master list of agents (Name, Employee ID, Mobile) with Spice Money to initiate the onboarding process. This process is already established."},
        { title: "2. Real-time Digital Tracking", description: "The existing CMS MFI Dashboard is enhanced to show agent-wise, real-time digital collection data as transactions happen in the field."},
        { title: "3. Consolidated Settlement", description: "Digitally collected funds are auto-swept from agent wallets and settled directly to the MFI's current account, either at a ₹2 lakh limit or at a predefined settlement time."}
    ];

    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-gray-900">Model 1: B2C QR (With App)</h1>
                <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600">
                    An individual wallet-based model where each agent uses the SpicePay app for collections.
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
                        <div>
                             <PhoneMockup>
                                <AgentAppScreen step={agentStep} />
                            </PhoneMockup>
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
                                <UserGroupIcon className="h-20 w-20 text-indigo-400 mb-4"/>
                                <h3 className="text-xl font-bold">Bulk Agent Onboarding</h3>
                                <p className="text-gray-600 mt-2">MFI provides agent master data via a secure portal or API for seamless registration.</p>
                            </div>}
                           {mfiStep === 1 && <DashboardMockup showNewTransaction={true} />}
                           {mfiStep === 2 && <div className="p-8 bg-gray-100 rounded-lg text-center flex flex-col items-center justify-center h-full">
                                <DocumentTextIcon className="h-20 w-20 text-indigo-400 mb-4"/>
                                <h3 className="text-xl font-bold">Unified Reconciliation</h3>
                                <p className="text-gray-600 mt-2">MFI receives detailed settlement reports that combine both cash and digital collections for easy accounting.</p>
                            </div>}
                        </div>
                    </div>
                </Card>
            )}
        </div>
    );
};

export default Model1Page;
