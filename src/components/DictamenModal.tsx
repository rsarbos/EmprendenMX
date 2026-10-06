import React from 'react';
import { X, Printer, ShieldCheck, Download, Award, FileText, CheckCircle2 } from 'lucide-react';
import { SimulationInputs, SimulationResults } from '../types';

interface DictamenModalProps {
  isOpen: boolean;
  onClose: () => void;
  inputs: SimulationInputs;
  results: SimulationResults;
}

export const DictamenModal: React.FC<DictamenModalProps> = ({
  isOpen,
  onClose,
  inputs,
  results,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const todayStr = new Date().toLocaleDateString('es-MX', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div className="bg-[#fcf9f2] border-2 sm:border-4 border-[#0a0a0a] w-full max-w-4xl max-h-[92vh] overflow-y-auto shadow-2xl relative">
        
        {/* Modal Controls Bar (Hidden during print) */}
        <div className="no-print bg-[#0a0a0a] text-[#fcf9f2] px-4 py-2.5 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center space-x-2 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#3fa662] animate-pulse"></span>
            <span className="font-bold tracking-wider uppercase">
              EXPEDIENTE FISCAL OFICIAL CERTIFICADO
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrint}
              className="bg-[#fcf9f2] text-[#0a0a0a] px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#ebe7dc] flex items-center space-x-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>IMPRIMIR / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 hover:text-[#e5c07b] text-[#fcf9f2] transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PRINTABLE OFFICIAL DICTAMEN CONTENT */}
        <div className="p-6 sm:p-10 font-serif text-[#1c1c18] space-y-6">
          
          {/* Broadside Official Header */}
          <div className="border-b-2 border-[#0a0a0a] pb-4 text-center">
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#666] font-bold">
              ESTADOS UNIDOS MEXICANOS · BANXICO / SAT PROTOCOL REVIEW
            </div>
            <h1 className="text-2xl sm:text-3xl font-black font-serif-broadsheet uppercase tracking-tight text-[#0a0a0a] mt-1">
              DICTAMEN DE INGENIERÍA FISCAL & BLINDAJE PATRIMONIAL
            </h1>
            <p className="text-xs font-mono uppercase tracking-widest text-[#555] mt-1">
              EMISIÓN EXTRAORDINARIA // SERIE SAT-849-01-2025
            </p>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#f5f2ea] border border-[#d6d0c2] p-3 text-xs font-mono">
            <div>
              <span className="text-[#666] block text-[9px] uppercase">FOLIO CERTIFICADO</span>
              <span className="font-bold text-[#0a0a0a]">EMX-8419-DF-2025</span>
            </div>
            <div>
              <span className="text-[#666] block text-[9px] uppercase">FECHA DE EMISIÓN</span>
              <span className="font-bold text-[#0a0a0a]">{todayStr}</span>
            </div>
            <div>
              <span className="text-[#666] block text-[9px] uppercase">ESTRUCTURA AUDITADA</span>
              <span className="font-bold text-[#0a0a0a]">{inputs.regime}</span>
            </div>
            <div>
              <span className="text-[#666] block text-[9px] uppercase">CLASIFICACIÓN</span>
              <span className="font-bold text-[#0a0a0a]">{inputs.businessNature}</span>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="border-l-4 border-[#0a0a0a] pl-4 py-1 text-sm text-[#333] leading-relaxed">
            <p className="font-semibold text-[#0a0a0a] uppercase font-mono text-xs mb-1">
              CONCLUSIÓN DE LA EVALUACIÓN MATRICIAL:
            </p>
            <p>
              Habiéndose modelado la estructura actual del contribuyente con base en una facturación mensual declarada de <strong>${inputs.monthlyRevenue.toLocaleString('es-MX')} MXN</strong> y un nivel de deducibilidad comprobable del <strong>{inputs.deductibleExpensePercent}%</strong>, se determina una sobrecarga impositiva nominal severa con absorción del {results.baseEffectiveRate}% de la liquidez bruta.
            </p>
          </div>

          {/* Quantitative Comparison Table */}
          <div className="border border-[#0a0a0a]">
            <div className="bg-[#0a0a0a] text-[#fcf9f2] px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider flex justify-between">
              <span>BALANCE FINANCIERO COMPARATIVO</span>
              <span>VALORES EN MONEDA NACIONAL (MXN)</span>
            </div>

            <div className="divide-y divide-[#d6d0c2] text-xs font-mono">
              <div className="grid grid-cols-12 p-2.5 bg-[#ffffff]">
                <span className="col-span-6 font-semibold">Facturación Mensual Promedio:</span>
                <span className="col-span-6 text-right font-bold">${inputs.monthlyRevenue.toLocaleString('es-MX')} MXN</span>
              </div>
              <div className="grid grid-cols-12 p-2.5 bg-[#fbf9f5]">
                <span className="col-span-6">Carga Tributaria Tradicional (ISR + IVA est./mes):</span>
                <span className="col-span-6 text-right font-bold text-[#ba1a1a]">${results.baseTaxMonthly.toLocaleString('es-MX')} MXN ({results.baseEffectiveRate}%)</span>
              </div>
              <div className="grid grid-cols-12 p-2.5 bg-[#ffffff]">
                <span className="col-span-6">Carga Optimizada con Escudos Fiscales:</span>
                <span className="col-span-6 text-right font-bold text-[#1e4d2b]">${results.optimizedTaxMonthly.toLocaleString('es-MX')} MXN ({results.optimizedEffectiveRate}%)</span>
              </div>
              <div className="grid grid-cols-12 p-3 bg-[#ebf2ed] border-t-2 border-[#1c1c18] font-bold text-sm">
                <span className="col-span-6 uppercase text-[#1e4d2b]">POTENCIAL DE LIQUIDEZ LIBERADA ANUAL:</span>
                <span className="col-span-6 text-right text-[#1e4d2b] text-base">+${results.annualSavedLiquidity.toLocaleString('es-MX')} MXN</span>
              </div>
            </div>
          </div>

          {/* Tactical Routes Section */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#0a0a0a] mb-2 border-b border-[#0a0a0a] pb-1">
              RUTAS TÁCTICAS DICTAMINADAS
            </h3>

            <div className="space-y-3">
              {results.routes.map((route) => (
                <div key={route.id} className="border border-[#d6d0c2] p-3 bg-[#ffffff]">
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-xs uppercase font-serif-broadsheet">
                      {route.number}. {route.title}
                    </span>
                    <span className="font-mono font-bold text-xs text-[#2e7d32]">
                      +${route.annualBenefit.toLocaleString('es-MX')}/año
                    </span>
                  </div>
                  <p className="text-xs text-[#555] mt-1">{route.description}</p>
                  <p className="text-[10px] font-mono text-[#888] mt-1">Sustento Legal: {route.legalBasis}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Legal Certification and Stamps */}
          <div className="pt-6 border-t-2 border-[#0a0a0a] grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            
            <div className="border border-[#d6d0c2] p-4 bg-[#f5f2ea] flex items-center space-x-3">
              <Award className="w-10 h-10 text-[#0a0a0a] shrink-0" />
              <div className="text-[10px] font-mono">
                <span className="font-bold block text-[#0a0a0a] uppercase">
                  FE PÚBLICA & PROTOCOLIZACIÓN
                </span>
                <span className="text-[#666] block">Registro Nacional de Contadores Públicos Certificados</span>
                <span className="text-[#0a0a0a] font-bold block mt-0.5">HASH: 8F2A-C911-EMX-SAT-2025</span>
              </div>
            </div>

            <div className="text-right sm:text-right text-xs font-mono">
              <div className="h-10 border-b border-dashed border-[#555] max-w-[200px] ml-auto mb-1 flex items-end justify-center pb-1 italic text-[11px] font-serif">
                Mtro. Horacio Valenzuela M.
              </div>
              <div className="font-bold text-[#0a0a0a] uppercase">Perito en Derecho Fiscal & Estrategia Fiduciaria</div>
              <div className="text-[10px] text-[#666]">Barra Mexicana de Abogados · Colegiado #49,201</div>
            </div>

          </div>

          <div className="text-[9px] font-mono text-center text-[#888] pt-2">
            DOCUMENTO TÉCNICO INFORMATIVO FORMULADO CONFORME AL ARTÍCULO 5-A DEL CÓDIGO FISCAL DE LA FEDERACIÓN Y LA LEY DEL IMPUESTO SOBRE LA RENTA.
          </div>

        </div>

      </div>
    </div>
  );
};
