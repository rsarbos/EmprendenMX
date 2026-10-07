import React, { useState } from 'react';
import { X, Search, FileText, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateTab: (tab: 'simulador' | 'club' | 'portada' | 'dossiers' | 'acerca') => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigateTab,
}) => {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

  const quickIndex = [
    { title: 'Simulador Táctico Integral de Carga Impositiva', tab: 'simulador' as const, type: 'Herramienta Cuantitativa' },
    { title: 'Gaceta Fiduciaria Diaria // Publicaciones Oficiales', tab: 'portada' as const, type: 'Publicación Diaria' },
    { title: 'Blog: Blindaje Estatutario SAS (Kit #01)', tab: 'portada' as const, type: 'Artículo de Blog // Kit' },
    { title: 'Blog: Estructuración Cross-Border LLC & Marcas (Kit #02 & #03)', tab: 'portada' as const, type: 'Artículo de Blog // Kit' },
    { title: 'Blog: Protocolo de Regalías de Marca ante el IMPI (Kit #03)', tab: 'portada' as const, type: 'Artículo de Blog // Kit' },
    { title: 'Suite de Simuladores: Umbral RESICO $3.5M & Dividendos CUFIN', tab: 'portada' as const, type: 'Simuladores Portada' },
    { title: 'Protocolos en Próximamente (Fideicomisos & Valuador Algorítmico)', tab: 'portada' as const, type: 'Laboratorio Fiduciario' },
    { title: '¿Qué es Emprendenmex? Manifiesto & Los 6 Pilares Institucionales', tab: 'acerca' as const, type: 'Manifiesto Institucional' },
    { title: 'Artículo 5-A CFF: Razón de Negocios y Materialidad', tab: 'portada' as const, type: 'Jurisprudencia' },
    { title: 'Boutique Modular: Descarga de Kits en ZIP Oficial', tab: 'club' as const, type: 'Boutique Modular' },
    { title: 'Mesa Privada de Consejo Institucional', tab: 'club' as const, type: 'Membresía VIP' },
    { title: 'Precedentes TFJA sobre Deducción de Software', tab: 'dossiers' as const, type: 'Dossier Reservado' },
  ];

  const filtered = quickIndex.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.type.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-10 pt-16 sm:pt-20 bg-black/60 backdrop-blur-xs">
      <div className="bg-[#fcf9f2] border-2 sm:border-4 border-[#0a0a0a] w-full max-w-xl shadow-2xl overflow-hidden">
        
        {/* Search Input Bar */}
        <div className="bg-[#0a0a0a] p-3 flex items-center space-x-3 text-[#fcf9f2]">
          <Search className="w-5 h-5 text-[#e5c07b] shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Buscar por artículo, ley, régimen o estrategia..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base font-mono text-[#fcf9f2] placeholder-[#888] focus:outline-none"
          />
          <button onClick={onClose} className="p-1 hover:text-[#e5c07b]">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto divide-y divide-[#d6d0c2] p-2">
          {filtered.length > 0 ? (
            filtered.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onNavigateTab(item.tab);
                  onClose();
                }}
                className="w-full text-left p-3 hover:bg-[#ebe7dc] transition-colors flex items-center justify-between group"
              >
                <div>
                  <span className="text-[10px] font-mono text-[#666] uppercase block font-semibold">
                    {item.type}
                  </span>
                  <span className="text-xs sm:text-sm font-serif-broadsheet font-bold text-[#0a0a0a] group-hover:text-[#ba1a1a] transition-colors">
                    {item.title}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#888] group-hover:text-[#0a0a0a] shrink-0 group-hover:translate-x-1 transition-transform" />
              </button>
            ))
          ) : (
            <div className="p-6 text-center text-xs font-mono text-[#666]">
              No se encontraron coincidencias para "{query}".
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#ebe7dc] px-4 py-2 border-t border-[#d6d0c2] text-[10px] font-mono text-[#666] flex justify-between">
          <span>ÍNDICE DE CONSULTA FISCAL CFF / LISR 2025</span>
          <span>ESC para cerrar</span>
        </div>

      </div>
    </div>
  );
};
