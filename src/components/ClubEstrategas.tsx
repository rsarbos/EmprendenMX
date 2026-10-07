import React, { useState } from 'react';
import { 
  Check, 
  X as CloseIcon, 
  ShieldCheck, 
  FileText, 
  Globe, 
  Award, 
  Download, 
  ChevronRight, 
  Lock, 
  Calendar,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { BoutiqueProduct } from '../types';
import { DETAILED_BOUTIQUE_KITS } from '../data/boutiqueKits';

interface ClubEstrategasProps {
  onSelectProduct: (product: BoutiqueProduct) => void;
  onOpenApplication: (planName: string, price: string) => void;
  onNavigateSimulador: () => void;
}

export const ClubEstrategas: React.FC<ClubEstrategasProps> = ({
  onSelectProduct,
  onOpenApplication,
  onNavigateSimulador,
}) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [activeCurvePoint, setActiveCurvePoint] = useState<number>(2);

  const boutiqueItems = DETAILED_BOUTIQUE_KITS;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      
      {/* 1. PROTOCOL HEADER */}
      <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
        <div className="inline-flex items-center space-x-2 text-[10px] sm:text-[11px] font-mono tracking-widest uppercase font-bold text-[#555] mb-2">
          <span className="w-2 h-2 rounded-full bg-[#c9a86a]"></span>
          <span>PROTOCOLO VIP // EJERCICIO FISCAL 2025</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif-broadsheet tracking-tight text-[#0a0a0a] uppercase leading-tight">
          MEMBRESÍA & CÍRCULO DE INGENIERÍA FINANCIERA EMX
        </h1>

        <p className="text-sm sm:text-base font-serif text-[#333] mt-3 leading-relaxed max-w-2xl mx-auto">
          Acceda a dictámenes reservados, plantillas contractuales notariales y modelos cuantitativos de optimización fiduciaria para directores y estrategas patrimoniales.
        </p>

        {/* BILLING TOGGLE */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="bg-[#ebe7dc] p-1 border border-[#d6d0c2] inline-flex items-center">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 font-mono text-xs font-bold uppercase transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-[#0a0a0a] text-[#fcf9f2] shadow-sm'
                  : 'text-[#555] hover:text-[#0a0a0a]'
              }`}
            >
              FACTURACIÓN MENSUAL
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-1.5 font-mono text-xs font-bold uppercase transition-all flex items-center space-x-1.5 ${
                billingCycle === 'annual'
                  ? 'bg-[#0a0a0a] text-[#fcf9f2] shadow-sm'
                  : 'text-[#555] hover:text-[#0a0a0a]'
              }`}
            >
              <span>FACTURACIÓN ANUAL</span>
              <span className="bg-[#e5c07b] text-[#0a0a0a] px-1.5 py-0.2 text-[9px] font-bold">
                -25% + SELLO NOTARIAL
              </span>
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-2 text-[10px] sm:text-[11px] font-mono text-[#666] mt-3">
          <ShieldCheck className="w-3.5 h-3.5 text-[#2e7d32]" />
          <span>Validación protocolar fiduciaria con respaldo legal ante la CNBV y SAT</span>
        </div>
      </div>

      {/* 2. MEMBERSHIP TIERS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
        
        {/* TIER 1: NIVEL 01 / GENERAL */}
        <div className="bg-[#f7f5ed] border-2 border-[#1c1c18] p-6 sm:p-8 flex flex-col justify-between shadow-sm relative">
          <div>
            <div className="flex items-center justify-between text-[10px] font-mono tracking-wider uppercase mb-2">
              <span className="text-[#666] font-semibold">NIVEL 01 / GENERAL</span>
              <span className="bg-[#ebe7dc] border border-[#d6d0c2] text-[#444] px-2 py-0.5 font-bold">
                ACCESO LIBRE
              </span>
            </div>

            <h2 className="text-2xl font-bold font-serif-broadsheet uppercase text-[#0a0a0a]">
              Acceso Abierto / Lector
            </h2>
            
            <p className="text-xs font-serif text-[#555] mt-1 mb-6 leading-relaxed">
              Lecturas fundamentales para emprendedores que inician en el marco fiscal y societario mexicano.
            </p>

            <div className="flex items-baseline space-x-1.5 pb-6 border-b border-[#d6d0c2]">
              <span className="text-4xl font-black font-serif-broadsheet text-[#0a0a0a]">$0</span>
              <span className="text-xs font-mono font-bold text-[#666]">USD / indefinido</span>
            </div>

            <ul className="space-y-3.5 my-6 text-xs font-serif text-[#333]">
              <li className="flex items-start space-x-2.5">
                <Check className="w-4 h-4 text-[#2e7d32] shrink-0 mt-0.5" />
                <span>Artículos quincenales de análisis macroeconómico nacional.</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Check className="w-4 h-4 text-[#2e7d32] shrink-0 mt-0.5" />
                <span>Boletín semanal ejecutivo 'Crónica Fiduciaria'.</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Check className="w-4 h-4 text-[#2e7d32] shrink-0 mt-0.5" />
                <span>Acceso estándar al simulador de cálculo del ISR y RESICO.</span>
              </li>
              <li className="flex items-start space-x-2.5 text-[#888]">
                <CloseIcon className="w-4 h-4 text-[#ba1a1a] shrink-0 mt-0.5" />
                <span>Sin acceso a la bóveda de formatos notariales descargables.</span>
              </li>
            </ul>
          </div>

          <button
            type="button"
            onClick={() => onOpenApplication('Acceso Abierto / Lector', '$0 USD')}
            className="w-full bg-[#ebe7dc] text-[#1c1c18] border border-[#1c1c18] py-3 px-4 font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#ded9cc] transition-colors"
          >
            ACTIVAR SUSCRIPCIÓN BÁSICA
          </button>
        </div>

        {/* TIER 2: NIVEL 03 / INSTITUCIONAL (MESA PRIVADA DE CONSEJO) */}
        <div className="bg-[#ffffff] border-2 border-[#0a0a0a] p-6 sm:p-8 flex flex-col justify-between shadow-md relative">
          
          <div>
            <div className="flex items-center justify-between text-[10px] font-mono tracking-wider uppercase mb-2">
              <span className="text-[#666] font-semibold">NIVEL 03 / INSTITUCIONAL</span>
              <span className="bg-[#0a0a0a] text-[#e5c07b] border border-[#e5c07b] px-2 py-0.5 font-bold text-[9px] tracking-wider">
                PRÓXIMAMENTE // Q4 2025
              </span>
            </div>

            <h2 className="text-2xl font-bold font-serif-broadsheet uppercase text-[#0a0a0a]">
              Mesa Privada de Consejo
            </h2>
            
            <p className="text-xs font-serif text-[#555] mt-1 mb-6 leading-relaxed">
              Acompañamiento especializado, dictámenes colegiados y vinculación de alto perfil fiduciario.
            </p>

            <div className="flex items-baseline space-x-1.5 pb-6 border-b border-[#d6d0c2]">
              <span className="text-4xl font-black font-serif-broadsheet text-[#0a0a0a]">
                {billingCycle === 'annual' ? '$149' : '$199'}
              </span>
              <span className="text-xs font-mono font-bold text-[#666]">
                USD / {billingCycle === 'annual' ? 'mes (anual)' : 'mes'}
              </span>
            </div>

            <ul className="space-y-3.5 my-6 text-xs font-serif text-[#333]">
              <li className="flex items-start space-x-2.5">
                <Check className="w-4 h-4 text-[#2e7d32] shrink-0 mt-0.5" />
                <span>Todos los privilegios y herramientas del Pase Estratega.</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Check className="w-4 h-4 text-[#2e7d32] shrink-0 mt-0.5" />
                <span>Sesión mensual de consulta técnica (45 min) con especialistas.</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Check className="w-4 h-4 text-[#2e7d32] shrink-0 mt-0.5" />
                <span>Revisión colegiada de un contrato o esquema societario por ciclo.</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Check className="w-4 h-4 text-[#2e7d32] shrink-0 mt-0.5" />
                <span>Acceso al directorio confidencial de socios operadores y C-Suite.</span>
              </li>
            </ul>
          </div>

          <button
            type="button"
            onClick={() => onOpenApplication('Mesa Privada de Consejo (Lista de Espera)', billingCycle === 'annual' ? '$149 USD/mes' : '$199 USD/mes')}
            className="w-full bg-[#0a0a0a] text-[#fcf9f2] py-3.5 px-4 font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#222] transition-colors border border-[#0a0a0a] flex items-center justify-center space-x-2"
          >
            <Lock className="w-3.5 h-3.5 text-[#e5c07b]" />
            <span>SOLICITAR LISTA DE ESPERA (PRÓXIMAMENTE)</span>
          </button>
        </div>

      </div>

      {/* 3. PROYECCIÓN DE RETORNO SOBRE LA INVERSIÓN (ROI MATRIX) */}
      <div className="bg-[#f7f5ed] border-2 border-[#1c1c18] p-6 sm:p-8 mb-16 shadow-sm">
        
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 pb-6 border-b border-[#1c1c18]">
          <div className="max-w-2xl">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#555] block">
              AUDITORÍA CUANTITATIVA // MODELO MATRICIAL
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-broadsheet tracking-tight text-[#0a0a0a] uppercase mt-0.5">
              PROYECCIÓN DE RETORNO SOBRE LA INVERSIÓN
            </h2>
            <p className="text-xs sm:text-sm font-serif text-[#555] mt-1 leading-relaxed">
              Compare el costo de las horas notariales externas y los litigios tributarios comunes frente a la implementación anticipada de nuestras metodologías fiduciarias.
            </p>
          </div>

          <div className="flex items-center space-x-4 sm:space-x-8">
            <div className="bg-[#ffffff] border border-[#d6d0c2] p-3 text-left">
              <span className="text-[9px] font-mono uppercase tracking-wider text-[#666] block">
                CAPITAL PROMEDIO PRESERVADO
              </span>
              <span className="text-xl sm:text-2xl font-black font-serif-broadsheet text-[#0a0a0a] tabular-nums block">
                $48,500 USD
              </span>
              <span className="text-[9px] font-mono text-[#2e7d32] font-semibold">
                Tasa efectiva reducida 6.8%
              </span>
            </div>

            <div className="bg-[#ffffff] border border-[#d6d0c2] p-3 text-left">
              <span className="text-[9px] font-mono uppercase tracking-wider text-[#666] block">
                MÚLTIPLO ROI ANUAL
              </span>
              <span className="text-xl sm:text-2xl font-black font-serif-broadsheet text-[#0a0a0a] tabular-nums block">
                138x
              </span>
              <span className="text-[9px] font-mono text-[#555]">
                Sobre costo de Pase Estratega
              </span>
            </div>
          </div>
        </div>

        {/* MITIGATION CHART AND COMPARISON TABLE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-center">
          
          {/* Curve Graphic (SVG Interactive) */}
          <div className="lg:col-span-6 bg-[#ffffff] border border-[#d6d0c2] p-4 sm:p-5">
            <div className="flex items-center justify-between mb-3 text-[10px] font-mono">
              <span className="font-bold text-[#0a0a0a] uppercase tracking-wider">
                MITIGACIÓN DE RIESGO FISCAL ACUMULADA
              </span>
              <span className="bg-[#0a0a0a] text-[#fcf9f2] px-2 py-0.5 font-bold">
                +284% de Eficiencia
              </span>
            </div>

            {/* SVG Visual Curve */}
            <div className="relative w-full h-40 pt-4">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 400 120" preserveAspectRatio="none">
                <line x1="20" y1="100" x2="380" y2="100" stroke="#e0ded8" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="20" y1="60" x2="380" y2="60" stroke="#e0ded8" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="20" y1="20" x2="380" y2="20" stroke="#e0ded8" strokeWidth="1" strokeDasharray="3 3" />
                
                {/* Curve path */}
                <path
                  d="M 30 95 Q 120 85, 200 55 T 370 25"
                  fill="none"
                  stroke="#0a0a0a"
                  strokeWidth="3"
                />

                {/* Shaded Area */}
                <path
                  d="M 30 95 Q 120 85, 200 55 T 370 25 L 370 100 L 30 100 Z"
                  fill="rgba(197, 160, 89, 0.12)"
                />

                {/* Point 1: Mes 01 */}
                <circle 
                  cx="50" 
                  cy="92" 
                  r={activeCurvePoint === 0 ? "6" : "4"} 
                  fill="#0a0a0a" 
                  className="cursor-pointer hover:scale-125 transition-transform" 
                  onClick={() => setActiveCurvePoint(0)} 
                />
                
                {/* Point 2: Mes 06 */}
                <circle 
                  cx="200" 
                  cy="55" 
                  r={activeCurvePoint === 1 ? "6" : "4"} 
                  fill="#0a0a0a" 
                  className="cursor-pointer hover:scale-125 transition-transform" 
                  onClick={() => setActiveCurvePoint(1)} 
                />
                
                {/* Point 3: Mes 12 */}
                <circle 
                  cx="360" 
                  cy="26" 
                  r={activeCurvePoint === 2 ? "6" : "4"} 
                  fill="#0a0a0a" 
                  className="cursor-pointer hover:scale-125 transition-transform" 
                  onClick={() => setActiveCurvePoint(2)} 
                />
              </svg>
            </div>

            {/* Labels below chart */}
            <div className="grid grid-cols-3 text-center text-[10px] font-mono text-[#555] pt-3 border-t border-[#e0ded8]">
              <button 
                onClick={() => setActiveCurvePoint(0)} 
                className={`transition-colors ${activeCurvePoint === 0 ? 'font-bold text-[#0a0a0a]' : 'hover:text-[#0a0a0a]'}`}
              >
                Mes 01: Blindaje Base
              </button>
              <button 
                onClick={() => setActiveCurvePoint(1)} 
                className={`transition-colors ${activeCurvePoint === 1 ? 'font-bold text-[#0a0a0a]' : 'hover:text-[#0a0a0a]'}`}
              >
                Mes 06: Contratos y Regalías
              </button>
              <button 
                onClick={() => setActiveCurvePoint(2)} 
                className={`transition-colors ${activeCurvePoint === 2 ? 'font-bold text-[#0a0a0a]' : 'hover:text-[#0a0a0a]'}`}
              >
                Mes 12: Consolidación Total
              </button>
            </div>
          </div>

          {/* Right Side Ledger Comparison */}
          <div className="lg:col-span-6 space-y-3">
            
            <div className="bg-[#ffffff] border border-[#d6d0c2] p-3.5 flex items-center justify-between">
              <span className="text-xs font-serif text-[#333]">
                Costo estimado de Notario y Asesoría Tradicional:
              </span>
              <span className="font-mono font-bold text-xs sm:text-sm text-[#ba1a1a] tabular-nums">
                $6,200 USD
              </span>
            </div>

            <div className="bg-[#ffffff] border border-[#d6d0c2] p-3.5 flex items-center justify-between">
              <span className="text-xs font-serif text-[#333]">
                Inversión anual en 'Pase Estratega':
              </span>
              <span className="font-mono font-bold text-xs sm:text-sm text-[#0a0a0a] tabular-nums">
                $350 USD
              </span>
            </div>

            <div className="bg-[#ebf2ed] border-2 border-[#1e4d2b] p-4 flex items-center justify-between shadow-sm">
              <span className="text-xs font-mono font-bold text-[#1e4d2b] uppercase tracking-wide">
                AHORRO OPERATIVO NETO INMEDIATO:
              </span>
              <span className="font-mono font-black text-base sm:text-lg text-[#1e4d2b] tabular-nums">
                +$5,850 USD
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* 4. BOUTIQUE MODULAR DE SOLUCIONES */}
      <div className="mb-16">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#1c1c18] pb-3 mb-8">
          <div>
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#555] block">
              ACCESO UNITARIO // SIN SUSCRIPCIÓN
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-broadsheet tracking-tight text-[#0a0a0a] uppercase mt-0.5">
              BOUTIQUE MODULAR DE SOLUCIONES
            </h2>
          </div>
          <p className="text-xs font-serif text-[#666] max-w-sm mt-2 sm:mt-0 text-left sm:text-right">
            Adquiera instrumentos documentales específicos validados notarialmente con derechos de uso perpetuo.
          </p>
        </div>

        {/* 3 Modular Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {boutiqueItems.map((item) => (
            <div 
              key={item.id}
              className="bg-[#ffffff] border-2 border-[#1c1c18] p-5 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="w-8 h-8 bg-[#f5f2ea] border border-[#d6d0c2] flex items-center justify-center mb-3">
                  {item.id === 'kit-sas' && <FileText className="w-4 h-4 text-[#0a0a0a]" />}
                  {item.id === 'kit-llc' && <Globe className="w-4 h-4 text-[#0a0a0a]" />}
                  {item.id === 'kit-regalias' && <Award className="w-4 h-4 text-[#0a0a0a]" />}
                </div>

                <div className="flex items-center justify-between text-[9px] font-mono tracking-wider text-[#666] uppercase mb-1 font-semibold">
                  <span>{item.code}</span>
                  <span className="bg-[#ebf2ed] text-[#1e4d2b] border border-[#1e4d2b] px-1.5 py-0.2 font-bold">
                    PAQUETE .ZIP
                  </span>
                </div>

                <h3 className="text-lg font-bold font-serif-broadsheet text-[#0a0a0a] uppercase mb-2">
                  {item.title}
                </h3>

                <p className="text-xs font-serif text-[#555] leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="bg-[#f5f2ea] text-[#333] border border-[#d6d0c2] text-[9px] font-mono px-2 py-0.5 font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price & Action */}
              <div className="flex items-center justify-between pt-4 border-t border-[#e0ded8]">
                <div className="flex items-baseline space-x-1">
                  <span className="text-2xl font-black font-serif-broadsheet text-[#0a0a0a] tabular-nums">
                    ${item.priceUSD}
                  </span>
                  <span className="text-[10px] font-mono text-[#666] font-bold">USD</span>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectProduct(item)}
                  className="bg-[#0a0a0a] text-[#fcf9f2] text-xs font-mono font-bold px-3.5 py-2 uppercase hover:bg-[#222] transition-colors border border-[#0a0a0a] flex items-center space-x-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-[#e5c07b]" />
                  <span>DESCARGAR (.ZIP)</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* 5. GUARANTEE OF PROTOCOL COMPLIANCE (14 DAYS) */}
      <div className="bg-[#f7f5ed] border-2 border-[#1c1c18] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-[#ffffff] border-2 border-[#1c1c18] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-7 h-7 text-[#0a0a0a]" />
          </div>

          <div className="max-w-2xl">
            <div className="inline-block bg-[#ebe7dc] text-[#555] text-[9px] font-mono px-2 py-0.5 uppercase font-bold tracking-wider mb-1">
              GARANTÍA DE CONFORMIDAD PROTOCOLAR
            </div>
            
            <h3 className="text-xl font-bold font-serif-broadsheet uppercase text-[#0a0a0a]">
              Período de Salvaguarda de 14 Días
            </h3>

            <p className="text-xs sm:text-sm font-serif text-[#555] mt-1 leading-relaxed">
              Si dentro de las primeras dos semanas de su membresía determina que nuestros análisis de ingeniería financiera y contratos fiduciarios no aportan un valor cuantitativamente superior a su inversión, nuestro departamento de tesorería reintegrará el 100% de los honorarios sin objeción técnica.
            </p>
          </div>
        </div>

        {/* Cryptographic Seal Badge */}
        <div className="bg-[#ffffff] border border-[#d6d0c2] p-4 text-center shrink-0 w-full md:w-auto shadow-sm">
          <span className="text-[8px] font-mono text-[#777] uppercase tracking-wider block">
            SELLO CRIPTOGRÁFICO
          </span>
          <span className="text-xs font-mono font-bold text-[#0a0a0a] block my-0.5 tracking-wider">
            REG-MX-8419-SEC
          </span>
          <span className="text-[9px] font-mono text-[#2e7d32] font-semibold block">
            Certificado 2025
          </span>
        </div>

      </div>

    </div>
  );
};
