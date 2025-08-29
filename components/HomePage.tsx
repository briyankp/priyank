
import React from 'react';
import { Page } from '../types';
import Card from './common/Card';
// FIX: Import CheckCircleIcon to be used in the component.
import { AppIcon, ArrowRightIcon, NoAppIcon, CheckCircleIcon } from './icons';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Digital Collection Integration with <span className="text-indigo-600">Spice Pay</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
          An interactive guide to enabling MFI/NBFC collection agents to accept digital payments alongside cash collections, featuring receive-only wallets, automated settlement, and unified reconciliation.
        </p>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <Card onClick={() => onNavigate(Page.Model1)} className="border-2 border-transparent hover:border-indigo-500">
            <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-indigo-500 flex items-center justify-center">
                    <AppIcon className="h-7 w-7 text-white"/>
                </div>
                <div>
                    <h2 className="text-xl font-bold">Model 1: B2C QR</h2>
                    <p className="mt-1 text-gray-600 font-semibold">Individual Agent Onboarding with Restricted Wallet</p>
                    <p className="mt-2 text-gray-500">Agents use the SpicePay app to show a QR code, view collections, and manage a secure, receive-only wallet.</p>
                </div>
            </div>
             <div className="mt-6 flex items-center justify-end text-indigo-600 font-semibold">
                Explore Model 1 <ArrowRightIcon className="ml-2 h-5 w-5"/>
            </div>
        </Card>

        <Card onClick={() => onNavigate(Page.Model2)} className="border-2 border-transparent hover:border-indigo-500">
             <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-indigo-500 flex items-center justify-center">
                    <NoAppIcon className="h-7 w-7 text-white"/>
                </div>
                <div>
                    <h2 className="text-xl font-bold">Model 2: B2B QR</h2>
                    <p className="mt-1 text-gray-600 font-semibold">Enterprise Merchant - No App Required</p>
                    <p className="mt-2 text-gray-500">A simplified flow where agents only need a physical QR code. No app, no wallet, and no KYC for the agent.</p>
                </div>
            </div>
            <div className="mt-6 flex items-center justify-end text-indigo-600 font-semibold">
                Explore Model 2 <ArrowRightIcon className="ml-2 h-5 w-5"/>
            </div>
        </Card>
      </div>

      <div className="mt-16">
        <Card className="bg-indigo-700 text-white">
          <h3 className="text-2xl font-bold">Core Design Principle: The Receive-Only Wallet</h3>
          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 list-inside">
            <li className="flex items-start"><CheckCircleIcon className="h-6 w-6 text-green-300 mr-2 mt-1 flex-shrink-0"/><span>Collection agents <strong className="font-bold">CANNOT</strong> withdraw funds from wallets.</span></li>
            <li className="flex items-start"><CheckCircleIcon className="h-6 w-6 text-green-300 mr-2 mt-1 flex-shrink-0"/><span>Wallets are blocked for all outward transactions.</span></li>
            <li className="flex items-start"><CheckCircleIcon className="h-6 w-6 text-green-300 mr-2 mt-1 flex-shrink-0"/><span>Only inward UPI payments are allowed.</span></li>
            <li className="flex items-start"><CheckCircleIcon className="h-6 w-6 text-green-300 mr-2 mt-1 flex-shrink-0"/><span>Auto-sweep to the MFI's current account is the only outflow.</span></li>
            <li className="flex items-start"><CheckCircleIcon className="h-6 w-6 text-green-300 mr-2 mt-1 flex-shrink-0"/><span>The agent has zero control over fund movement, ensuring security.</span></li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;