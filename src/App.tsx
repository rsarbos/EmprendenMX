/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { SimuladorTactico } from './components/SimuladorTactico';
import { ClubEstrategas } from './components/ClubEstrategas';
import { Portada } from './components/Portada';
import { DossiersReservados } from './components/DossiersReservados';
import { AcercaDe } from './components/AcercaDe';
import { Footer } from './components/Footer';
import { DictamenModal } from './components/DictamenModal';
import { AppointmentModal } from './components/AppointmentModal';
import { VipAccessModal } from './components/VipAccessModal';
import { DocumentCheckoutModal } from './components/DocumentCheckoutModal';
import { SearchModal } from './components/SearchModal';
import { BlogArticleModal } from './components/BlogArticleModal';
import { BoutiqueProduct, SimulationInputs, SimulationResults } from './types';
import { calculateFiscalShielding } from './utils/taxCalculator';
import { BlogArticle } from './data/blogArticles';

export default function App() {
  const [activeTab, setActiveTab] = useState<'simulador' | 'club' | 'portada' | 'dossiers' | 'acerca'>('portada');
  
  // Modals state
  const [isDictamenOpen, setIsDictamenOpen] = useState(false);
  const [dictamenInputs, setDictamenInputs] = useState<SimulationInputs>({
    regime: 'PFAE',
    monthlyRevenue: 450000,
    businessNature: 'TECH',
    deductibleExpensePercent: 30,
  });
  const [dictamenResults, setDictamenResults] = useState<SimulationResults>(() => 
    calculateFiscalShielding(dictamenInputs)
  );

  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isVipModalOpen, setIsVipModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedBoutiqueProduct, setSelectedBoutiqueProduct] = useState<BoutiqueProduct | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  const handleOpenDictamen = (results: SimulationResults, inputs: SimulationInputs) => {
    setDictamenInputs(inputs);
    setDictamenResults(results);
    setIsDictamenOpen(true);
  };

  const handleOpenApplication = (planName: string, price: string) => {
    setIsAppointmentOpen(true);
  };

  const handleSelectArticle = (article: BlogArticle) => {
    setSelectedArticle(article);
  };

  return (
    <div className="min-h-screen bg-[#fcf9f2] text-[#1c1c18] flex flex-col font-serif selection:bg-[#1c1c18] selection:text-[#fcf9f2]">
      
      {/* 1. Broadsheet Masthead, Ticker & Nav */}
      <Header
        activeTab={activeTab}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenVipModal={() => setIsVipModalOpen(true)}
      />

      {/* 2. Main Page Content according to active tab */}
      <main className="flex-1 w-full">
        {activeTab === 'simulador' && (
          <SimuladorTactico
            onOpenDictamen={handleOpenDictamen}
            onNavigateClub={() => {
              setActiveTab('club');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenAppointment={() => setIsAppointmentOpen(true)}
          />
        )}

        {activeTab === 'club' && (
          <ClubEstrategas
            onSelectProduct={(product) => setSelectedBoutiqueProduct(product)}
            onOpenApplication={handleOpenApplication}
            onNavigateSimulador={() => {
              setActiveTab('simulador');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'portada' && (
          <Portada
            onNavigateSimulador={() => {
              setActiveTab('simulador');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateClub={() => {
              setActiveTab('club');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectArticle={handleSelectArticle}
            onAcquireKit={(product) => setSelectedBoutiqueProduct(product)}
          />
        )}

        {activeTab === 'dossiers' && (
          <DossiersReservados
            onOpenVipModal={() => setIsVipModalOpen(true)}
          />
        )}

        {activeTab === 'acerca' && (
          <AcercaDe
            onNavigateSimulador={() => {
              setActiveTab('simulador');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateClub={() => {
              setActiveTab('club');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
      </main>

      {/* 3. Broadsheet Editorial Footer */}
      <Footer
        onSelectTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 4. Interactive Dialog Modals */}
      <DictamenModal
        isOpen={isDictamenOpen}
        onClose={() => setIsDictamenOpen(false)}
        inputs={dictamenInputs}
        results={dictamenResults}
      />

      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
      />

      <VipAccessModal
        isOpen={isVipModalOpen}
        onClose={() => setIsVipModalOpen(false)}
        onUpgradeToClub={() => {
          setIsVipModalOpen(false);
          setActiveTab('club');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      <DocumentCheckoutModal
        product={selectedBoutiqueProduct}
        onClose={() => setSelectedBoutiqueProduct(null)}
      />

      <BlogArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onAcquireKit={(kit) => setSelectedBoutiqueProduct(kit)}
        onNavigateSimulador={() => {
          setSelectedArticle(null);
          setActiveTab('simulador');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigateTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

    </div>
  );
}
