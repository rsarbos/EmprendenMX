import React from 'react';

interface FooterProps {
  onSelectTab: (tab: 'simulador' | 'club' | 'portada' | 'dossiers' | 'acerca') => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="w-full bg-[#f7f5ed] border-t-2 border-[#1c1c18] text-[#1c1c18] mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-8">
          
          {/* Brand & Manifesto (4 cols) */}
          <div className="lg:col-span-4 pr-4">
            <h4 className="text-xl font-black font-serif-broadsheet uppercase tracking-tight text-[#0a0a0a] mb-2">
              EMPRENDENMEX
            </h4>
            <p className="text-xs font-serif text-[#444] leading-relaxed mb-4">
              La Gaceta de Ingeniería Financiera y Estrategia Patrimonial. Información y modelos estructurados para el mando ejecutivo corporativo.
            </p>
            <div className="text-[10px] font-mono text-[#666] tracking-wider uppercase font-semibold">
              REGISTRO DE FE PÚBLICA // SERIE MX-8842
            </div>
          </div>

          {/* Cámaras de Análisis (2 cols) */}
          <div className="lg:col-span-3">
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0a0a0a] border-b border-[#d6d0c2] pb-1.5 mb-3">
              CÁMARAS DE ANÁLISIS
            </div>
            <ul className="space-y-2 text-xs font-serif text-[#444]">
              <li>
                <button onClick={() => onSelectTab('portada')} className="hover:text-[#0a0a0a] hover:underline text-left">
                  Boletín Matutino Fiduciario
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('dossiers')} className="hover:text-[#0a0a0a] hover:underline text-left">
                  Inteligencia M&A y Private Equity
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('simulador')} className="hover:text-[#0a0a0a] hover:underline text-left">
                  Modelos Fiscales y Tasa Efectiva
                </button>
              </li>
            </ul>
          </div>

          {/* Régimen y Sociedad (2 cols) */}
          <div className="lg:col-span-2">
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0a0a0a] border-b border-[#d6d0c2] pb-1.5 mb-3">
              RÉGIMEN Y SOCIEDAD
            </div>
            <ul className="space-y-2 text-xs font-serif text-[#444]">
              <li>
                <button onClick={() => onSelectTab('club')} className="hover:text-[#0a0a0a] hover:underline text-left">
                  Membresía C-Suite & Family Offices
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('dossiers')} className="hover:text-[#0a0a0a] hover:underline text-left">
                  Archivo Criptográfico de Casos
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('portada')} className="hover:text-[#0a0a0a] hover:underline text-left">
                  Carta del Consejo Editorial
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('acerca')} className="hover:text-[#0a0a0a] hover:underline text-left font-semibold">
                  Manifiesto: ¿Qué es Emprendenmex?
                </button>
              </li>
            </ul>
          </div>

          {/* Certificación Protocolar Box (3 cols) */}
          <div className="lg:col-span-3">
            <div className="bg-[#ffffff] border border-[#d6d0c2] p-4 text-xs font-mono">
              <span className="font-bold text-[9px] uppercase tracking-wider text-[#0a0a0a] block mb-1">
                CERTIFICACIÓN PROTOCOLAR
              </span>
              <p className="text-[11px] font-serif text-[#555] leading-snug">
                Emisión validada bajo estándar fiduciario Banxico-CNBV con registro de cadena documental.
              </p>
            </div>
            <div className="text-[9px] font-mono text-[#777] mt-3 tracking-wider">
              HASH: 8F2A-C911-EMX-SAT-2025
            </div>
          </div>

        </div>

        {/* Bottom Rule and Copyright */}
        <div className="border-t border-[#d6d0c2] pt-6 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-[#666] gap-3">
          <div>
            © 2025 EMPRENDENMEX Gaceta Fiduciaria. Todos los derechos reservados. Impreso en papel bond digital.
          </div>
          <div className="flex items-center space-x-4">
            <span className="hover:underline cursor-pointer">Privacidad Protocolar</span>
            <span>·</span>
            <span className="hover:underline cursor-pointer">Términos del Fondo</span>
            <span>·</span>
            <span className="hover:underline cursor-pointer">Aviso Legal SAT</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
