
import React from 'react';
import Card from './common/Card';
import { ChartBarIcon, DocumentTextIcon } from './icons';

const InfoCard: React.FC<{title: string, children: React.ReactNode}> = ({title, children}) => (
    <Card className="h-full">
        <h3 className="text-lg font-bold text-indigo-600">{title}</h3>
        <div className="mt-2 text-gray-600 space-y-2">
            {children}
        </div>
    </Card>
);

const BusinessModelPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900">Business Model & Revenue Streams</h1>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600">
                A breakdown of the proposed digital collection revenue model and key success metrics.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InfoCard title="1. Transaction-Based Revenue">
                <p><strong>UPI MDR:</strong> 0 bps (currently free as per NPCI/RBI).</p>
                <p><strong>Platform Fee:</strong> 5-15 bps, similar to cash collection. Can be higher for enterprises demanding features like instant settlement.</p>
            </InfoCard>

            <InfoCard title="2. Float Income">
                <p>Generated from the Average Daily Float with a duration until enterprise settlement.</p>
                <p><strong>Treasury Income:</strong> ~% p.a. on float.</p>
                <p><strong>Revenue Share:</strong> Keep 100% of float income.</p>
            </InfoCard>

            <InfoCard title="3. Value-Added Services">
                <p><strong>Instant Settlement:</strong> Offer immediate settlement for an additional bps fee, providing flexibility and value to the MFI.</p>
            </InfoCard>
        </div>

        <div className="mt-16">
            <Card>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Understanding the Unified Collection Flow</h2>
                        <p className="mt-2 text-gray-600">The process seamlessly combines digital and cash collections into a single, manageable workflow for the agent and MFI.</p>
                        <ol className="mt-4 space-y-3 list-decimal list-inside text-gray-700">
                            <li><strong>Morning:</strong> Agent receives collection list (physical or in-app).</li>
                            <li><strong>Field Collection:</strong>
                                <ul className="pl-5 mt-1 space-y-1 list-disc list-inside">
                                    <li><span className="font-semibold">Digital:</span> Shows QR → Customer pays → Auto-confirmation SMS/Notification.</li>
                                    <li><span className="font-semibold">Cash:</span> Collects physically as usual.</li>
                                </ul>
                            </li>
                            <li><strong>No Fund Access:</strong> Digital funds are locked and secure. Agent cannot withdraw.</li>
                            <li><strong>Settlement:</strong> Digital funds are auto-settled. Cash is settled via the regular CMS process.</li>
                            <li><strong>MFI View:</strong> A unified dashboard provides complete visibility over both Cash + UPI collections.</li>
                        </ol>
                    </div>
                    <div className="bg-gray-100 p-8 rounded-lg flex items-center justify-center">
                         <DocumentTextIcon className="w-48 h-48 text-indigo-200" />
                    </div>
                </div>
            </Card>
        </div>

        <div className="mt-16">
            <Card className="bg-indigo-600 text-white">
                 <h2 className="text-2xl font-bold text-center">Success Metrics</h2>
                 <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div>
                        <p className="text-3xl font-bold">%</p>
                        <p className="mt-1 text-indigo-200">Digital Collection Adoption</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold">₹X Cr</p>
                        <p className="mt-1 text-indigo-200">Daily Average Float Generation</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold">₹Y</p>
                        <p className="mt-1 text-indigo-200">Revenue per MFI/NBFC</p>
                    </div>
                     <div>
                        <p className="text-3xl font-bold">#Z</p>
                        <p className="mt-1 text-indigo-200">Agents Adopting QR Solution</p>
                    </div>
                 </div>
            </Card>
        </div>
    </div>
  );
};

export default BusinessModelPage;
