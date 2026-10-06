import React, { useState, useEffect } from 'react';
import { Search, Lock, Shield, Menu, X, Terminal } from 'lucide-react';

interface HeaderProps {
  activeTab: 'simulador' | 'club' | 'portada' | 'dossiers' | 'acerca';
  onSelectTab: (tab: 'simulador' | 'club' | 'portada' | 'dossiers' | 'acerca') => void;
  onOpenSearch: () => void;
  onOpenVipModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
  onOpenSearch,
  onOpenVipModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('es-MX', {
        timeZone: 'America/Mexico_City',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
      setCurrentTime(timeStr);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { id: 'portada', label: 'PORTADA' },
    { id: 'simulador', label: 'SIMULADOR TÁCTICO' },
    { id: 'club', label: 'CLUB DE ESTRATEGAS' },
    { id: 'dossiers', label: 'DOSSIERS RESERVADOS' },
    { id: 'acerca', label: 'ACERCA DE' },
  ] as const;

  return (
    <header className="w-full bg-[#fcf9f2] text-[#1c1c18] border-b border-[#1c1c18]">
      {/* 1. TOP TICKER BAR (MERCADOS // EN DIRECTO) */}
      <div className="bg-[#0a0a0a] text-[#f4f1ea] px-3 sm:px-6 py-1.5 text-[10px] sm:text-[11px] font-mono tracking-tight overflow-x-auto whitespace-nowrap scrollbar-none flex items-center justify-between border-b border-[#2a2a2a]">
        <div className="flex items-center space-x-4 sm:space-x-6 shrink-0">
          <div className="flex items-center space-x-1 font-semibold text-[#fcf9f2]">
            <span className="text-[#c9a86a]">MERCADOS // EN DIRECTO</span>
          </div>
          
          <div className="flex items-center space-x-1.5">
            <span className="text-[#a5a59f]">USD/MXN</span>
            <span className="font-semibold tabular-nums">$20.4820</span>
            <span className="text-[#e25555] font-medium">-0.34%</span>
          </div>

          <span className="text-[#555]">•</span>

          <div className="flex items-center space-x-1.5">
            <span className="text-[#a5a59f]">UDIS</span>
            <span className="font-semibold tabular-nums">$8.2419</span>
            <span className="text-[#3fa662] font-medium">+0.04%</span>
          </div>

          <span className="text-[#555]">•</span>

          <div className="flex items-center space-x-1.5">
            <span className="text-[#a5a59f]">CETES 28D</span>
            <span className="font-semibold tabular-nums">10.15%</span>
            <span className="text-[#3fa662] font-medium">+0.05%</span>
          </div>

          <span className="text-[#555]">•</span>

          <div className="flex items-center space-x-1.5">
            <span className="text-[#a5a59f]">BTC/USD</span>
            <span className="font-semibold tabular-nums">$88,410</span>
            <span className="text-[#3fa662] font-medium">+3.12%</span>
          </div>

          <span className="text-[#555]">•</span>

          <div className="flex items-center space-x-1.5">
            <span className="text-[#a5a59f]">S&P 500</span>
            <span className="font-semibold tabular-nums">5,870.62</span>
            <span className="text-[#a5a59f] font-medium">0.00%</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-2 text-[10px] text-[#8e8d88] pl-6 border-l border-[#222]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3fa662] animate-pulse"></span>
          <span>BANXICO / SAT FIX FEED</span>
        </div>
      </div>

      {/* 2. BROAD SHEET MASTHEAD */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
          
          {/* Masthead Left Folio */}
          <div className="hidden md:flex md:col-span-3 flex-col text-left border-r border-[#d6d0c2] pr-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#444748] font-bold">
              CIUDAD DE MÉXICO
            </span>
            <span className="text-[12px] font-serif-broadsheet italic text-[#666]">
              VOL. XXIV — EDICIÓN Nº 8,419
            </span>
            <span className="text-[9px] font-mono text-[#888] mt-0.5">
              CIRCULACIÓN FIDUCIARIA NACIONAL
            </span>
          </div>

          {/* Masthead Center Title */}
          <div className="col-span-1 md:col-span-6 text-center flex flex-col items-center">
            <button 
              onClick={() => onSelectTab('portada')}
              className="group focus:outline-none"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif-broadsheet tracking-tight text-[#0a0a0a] group-hover:opacity-90 transition-opacity uppercase">
                EMPRENDENMEX
              </h1>
            </button>
            <div className="h-[2px] w-full max-w-md bg-[#0a0a0a] my-1 sm:my-1.5"></div>
            <p className="text-[11px] sm:text-[12px] font-serif-broadsheet uppercase tracking-[0.18em] font-semibold text-[#1c1c18]">
              DIARIO INDEPENDIENTE DE ALTA ESTRATEGIA
            </p>
            <p className="text-[10px] sm:text-[11px] italic font-serif text-[#555] mt-0.5">
              Fundado bajo rigor matemático y disciplina fiduciaria
            </p>
          </div>

          {/* Masthead Right Actions */}
          <div className="hidden md:flex md:col-span-3 items-center justify-end space-x-3 pl-4 border-l border-[#d6d0c2]">
            {/* Search Trigger */}
            <button 
              onClick={onOpenSearch}
              className="p-2 border border-[#1c1c18] hover:bg-[#1c1c18] hover:text-[#fcf9f2] transition-colors"
              title="Buscar en Archivos y Leyes"
              aria-label="Buscar"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* VIP Access Button */}
            <button
              onClick={onOpenVipModal}
              className="flex items-center space-x-1.5 bg-[#0a0a0a] text-[#fcf9f2] px-3 py-2 text-[11px] font-mono tracking-wider font-semibold uppercase hover:bg-[#2a2a2a] transition-all border border-[#0a0a0a]"
            >
              <Lock className="w-3.5 h-3.5 text-[#e5c07b]" />
              <span className="whitespace-nowrap">ACCESO ESTRATEGA VIP</span>
            </button>

            {/* Circular Wax Seal Emblem */}
            <div className="relative w-10 h-10 rounded-full border-2 border-[#1c1c18] flex items-center justify-center bg-[#f5f2ea] shadow-inner shrink-0" title="Sello Fiduciario Verificado">
              <div className="w-8 h-8 rounded-full border border-dashed border-[#1c1c18] flex flex-col items-center justify-center text-[7px] font-mono leading-none">
                <span className="font-bold">EMX</span>
                <span className="text-[5px] text-[#666]">1999</span>
              </div>
            </div>
          </div>

          {/* Mobile Header Quick Actions */}
          <div className="flex md:hidden items-center justify-between pt-2 border-t border-[#d6d0c2]">
            <div className="text-[10px] font-mono text-[#666]">
              VOL. XXIV · ED. 8,419
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={onOpenSearch}
                className="p-1.5 border border-[#1c1c18] text-[#1c1c18]"
                aria-label="Buscar"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onOpenVipModal}
                className="bg-[#0a0a0a] text-[#fcf9f2] px-2.5 py-1 text-[10px] font-mono font-bold flex items-center space-x-1"
              >
                <Lock className="w-3 h-3 text-[#e5c07b]" />
                <span>VIP</span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 border border-[#1c1c18] bg-[#0a0a0a] text-[#fcf9f2]"
                aria-label="Abrir Menú"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* 3. NAVIGATION BAR */}
      <nav className="border-t border-b border-[#1c1c18] bg-[#f9f7f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Desktop Nav Tabs */}
          <div className="hidden md:flex items-center space-x-8 text-[12px] font-mono font-bold tracking-wider py-2.5">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => onSelectTab(link.id)}
                  className={`relative py-1 transition-all ${
                    isActive 
                      ? 'text-[#0a0a0a] font-extrabold after:content-[""] after:absolute after:bottom-[-9px] after:left-0 after:right-0 after:h-[3px] after:bg-[#0a0a0a]' 
                      : 'text-[#555] hover:text-[#0a0a0a]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Mobile Nav Links Row */}
          <div className="flex md:hidden items-center space-x-3 overflow-x-auto py-2 text-[11px] font-mono font-bold scrollbar-none">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => onSelectTab(link.id)}
                  className={`px-2.5 py-1 whitespace-nowrap transition-colors ${
                    isActive
                      ? 'bg-[#0a0a0a] text-[#fcf9f2]'
                      : 'text-[#444] border border-[#d6d0c2]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Status Indicator */}
          <div className="hidden sm:flex items-center space-x-2 text-[11px] font-mono tracking-wider font-semibold text-[#1c1c18]">
            <span className="w-2 h-2 rounded-full bg-[#d93838] animate-ping"></span>
            <span>TERMINAL: ACTIVA</span>
          </div>

        </div>
      </nav>

      {/* 4. SUB-BAR: AUDIT CLOCK & SYSTEM ENGINE */}
      <div className="bg-[#ebe7dc] border-b border-[#d6d0c2] px-4 sm:px-6 py-1 text-[10px] sm:text-[11px] font-mono text-[#444] flex flex-wrap items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="font-bold text-[#1c1c18]">ESTATUS: MOTOR DINÁMICO EN LÍNEA</span>
          <span className="hidden sm:inline text-[#999]">|</span>
          <span className="hidden sm:inline">ALGORITMO ART. 5-A CFF REVISIÓN 2025</span>
        </div>
        <div className="flex items-center space-x-2 text-[#222]">
          <span className="font-semibold">RELOJ AUDITORÍA:</span>
          <span className="tabular-nums font-bold text-[#0a0a0a] bg-[#fcf9f2] px-1.5 py-0.2 border border-[#d6d0c2]">
            {currentTime || '12:35:55'} CDMX
          </span>
        </div>
      </div>
    </header>
  );
};
