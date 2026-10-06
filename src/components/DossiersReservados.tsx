import React, { useState } from 'react';
import { FileText, Lock, Download, Search, Tag, Eye } from 'lucide-react';

interface DossiersReservadosProps {
  onOpenVipModal: () => void;
}

export const DossiersReservados: React.FC<DossiersReservadosProps> = ({ onOpenVipModal }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('todos');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const dossiers = [
    {
      id: 'dos-01',
      category: 'jurisprudencia',
      categoryLabel: 'Jurisprudencia TFJA',
      code: 'EXP-TFJA-2024-88',
      title: 'Tesis de Precedente: Materialidad en Contratos de Licencia de Software',
      date: 'Enero 2025',
      summary: 'Análisis detallado de sentencia absolutoria del Tribunal Federal de Justicia Administrativa validando deducción de regalías intercompañía.',
      securityLevel: 'Nivel 02 Estratega',
    },
    {
      id: 'dos-02',
      category: 'contratos',
      categoryLabel: 'Minutas Notariales',
      code: 'MIN-NOT-2025-04',
      title: 'Protocolo de Asambleas con Derecho de Separación de Minorías',
      date: 'Febrero 2025',
      summary: 'Plantilla de asamblea extraordinaria blindada para evitar dilución involuntaria de fundadores ante rondas de capital privado.',
      securityLevel: 'Nivel 03 Institucional',
    },
    {
      id: 'dos-03',
      category: 'precios',
      categoryLabel: 'Precios de Transferencia',
      code: 'TP-STUDY-MX-US',
      title: 'Metodología CUP vs TNMM en Regalías de Marcas Mexicanas en EE.UU.',
      date: 'Marzo 2025',
      summary: 'Estudio económico estándar para soportar transferencias de valor hacia filiales estadounidenses sin multas del SAT o IRS.',
      securityLevel: 'Nivel 03 Institucional',
    },
    {
      id: 'dos-04',
      category: 'jurisprudencia',
      categoryLabel: 'Jurisprudencia TFJA',
      code: 'SAT-CRITERIO-5A',
      title: 'Guía de Interpretación Práctica: ¿Qué es Razón de Negocios para el SAT?',
      date: 'Diciembre 2024',
      summary: 'Desglose paso a paso de los 14 indicadores que la Administración General de Auditoría Fiscal Federal evalúa al calificar un acto jurídico.',
      securityLevel: 'Acceso Libre',
    },
  ];

  const filteredDossiers = dossiers.filter((d) => {
    const matchesFilter = selectedFilter === 'todos' || d.category === selectedFilter;
    const matchesSearch = d.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          d.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          d.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      
      {/* Header */}
      <div className="border-b border-[#1c1c18] pb-4 mb-6">
        <div className="text-[10px] font-mono tracking-widest uppercase text-[#555] font-bold">
          BÓVEDA CONFIDENCIAL // EXPEDIENTES DE AUDITORÍA
        </div>
        <h1 className="text-2xl sm:text-4xl font-black font-serif-broadsheet uppercase tracking-tight text-[#0a0a0a] mt-1">
          DOSSIERS RESERVADOS & JURISPRUDENCIA
        </h1>
        <p className="text-xs sm:text-sm font-serif text-[#555] mt-1 max-w-2xl">
          Repositorio de resoluciones vinculantes, criterios no reiterados y plantillas contractuales depositadas ante federatarios públicos.
        </p>
      </div>

      {/* Filters and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 bg-[#ffffff] p-3 border border-[#d6d0c2]">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
          {[
            { id: 'todos', label: 'TODOS' },
            { id: 'jurisprudencia', label: 'JURISPRUDENCIA' },
            { id: 'contratos', label: 'MINUTAS NOTARIALES' },
            { id: 'precios', label: 'PRECIOS TRANSFERENCIA' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id)}
              className={`px-3 py-1 font-bold transition-colors ${
                selectedFilter === cat.id
                  ? 'bg-[#0a0a0a] text-[#fcf9f2]'
                  : 'text-[#555] hover:text-[#0a0a0a] hover:bg-[#f5f2ea]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Buscar en expedientes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#f9f7f0] border border-[#d6d0c2] px-3 py-1.5 pl-8 text-xs font-mono text-[#0a0a0a] focus:outline-none focus:border-[#0a0a0a]"
          />
          <Search className="w-3.5 h-3.5 text-[#888] absolute left-2.5 top-2.5" />
        </div>

      </div>

      {/* Dossiers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {filteredDossiers.map((item) => (
          <div
            key={item.id}
            className="bg-[#ffffff] border-2 border-[#1c1c18] p-5 flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <div className="flex items-center justify-between text-[10px] font-mono mb-2">
                <span className="font-bold text-[#ba1a1a] uppercase">{item.code}</span>
                <span className="text-[#666]">{item.date}</span>
              </div>

              <h2 className="text-lg font-bold font-serif-broadsheet uppercase text-[#0a0a0a] mb-2 leading-snug">
                {item.title}
              </h2>

              <p className="text-xs font-serif text-[#555] leading-relaxed mb-4">
                {item.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-[#e0ded8] flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#444] font-semibold flex items-center space-x-1">
                <Lock className="w-3 h-3 text-[#c9a86a]" />
                <span>{item.securityLevel}</span>
              </span>

              <button
                type="button"
                onClick={onOpenVipModal}
                className="bg-[#0a0a0a] text-[#fcf9f2] text-xs font-mono font-bold px-3 py-1.5 uppercase hover:bg-[#222] transition-colors flex items-center space-x-1"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>CONSULTAR</span>
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
