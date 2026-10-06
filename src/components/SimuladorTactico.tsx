import React, { useState } from 'react';
import { 
  Scale, 
  Terminal, 
  Briefcase, 
  ShoppingCart, 
  Building2, 
  FileText, 
  Lock, 
  Calendar, 
  ShieldCheck, 
  AlertTriangle,
  ChevronRight,
  TrendingDown,
  Info
} from 'lucide-react';
import { BusinessNature, SimulationInputs, SimulationResults, TaxRegime } from '../types';
import { calculateFiscalShielding } from '../utils/taxCalculator';

interface SimuladorTacticoProps {
  onOpenDictamen: (results: SimulationResults, inputs: SimulationInputs) => void;
  onNavigateClub: () => void;
  onOpenAppointment: () => void;
}

export const SimuladorTactico: React.FC<SimuladorTacticoProps> = ({
  onOpenDictamen,
  onNavigateClub,
  onOpenAppointment,
}) => {
  const [inputs, setInputs] = useState<SimulationInputs>({
    regime: 'PFAE',
    monthlyRevenue: 450000,
    businessNature: 'TECH',
    deductibleExpensePercent: 30,
  });

  const [customRevenueInput, setCustomRevenueInput] = useState<string>('450,000');

  const results = calculateFiscalShielding(inputs);

  const handleRevenueSlider = (val: number) => {
    setInputs(prev => ({ ...prev, monthlyRevenue: val }));
    setCustomRevenueInput(val.toLocaleString('es-MX'));
  };

  const handleRevenueInputBlur = () => {
    const cleanNum = parseInt(customRevenueInput.replace(/[^0-9]/g, ''), 10);
    if (!isNaN(cleanNum) && cleanNum > 0) {
      setInputs(prev => ({ ...prev, monthlyRevenue: cleanNum }));
      setCustomRevenueInput(cleanNum.toLocaleString('es-MX'));
    } else {
      setCustomRevenueInput(inputs.monthlyRevenue.toLocaleString('es-MX'));
    }
  };

  const revenuePresets = [
    { label: '$50,000', value: 50000 },
    { label: '$500,000', value: 500000 },
    { label: '$1,000,000', value: 1000000 },
    { label: '$1,800,000', value: 1800000 },
    { label: '$2,500,000+', value: 2500000 },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      
      {/* HERO SECTION WITH TITLE AND SAT/BANXICO BADGE */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 pb-6 border-b border-[#1c1c18] mb-8">
        <div className="max-w-3xl">
          <div className="inline-block bg-[#0a0a0a] text-[#fcf9f2] text-[10px] sm:text-[11px] font-mono px-2.5 py-0.5 font-bold uppercase tracking-wider mb-2">
            INSTRUMENTO ANALÍTICO V3.8
          </div>
          <span className="text-[11px] font-mono tracking-widest text-[#555] uppercase ml-2 hidden sm:inline">
            // INGENIERÍA PATRIMONIAL & CORPORATIVA
          </span>
          
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black font-serif-broadsheet tracking-tight text-[#0a0a0a] uppercase leading-tight mt-1">
            SIMULADOR DE INGENIERÍA FISCAL & BLINDAJE
          </h1>
          
          <p className="text-sm sm:text-base font-serif text-[#333] mt-2 leading-relaxed">
            Diagnóstico en tiempo real para optimizar tu carga impositiva y estructurar tu flujo de capital conforme a la ley. Modelado bajo la doctrina de razón de negocios y economía de opción.
          </p>
        </div>

        {/* SAT / BANXICO VALIDATION EMBLEM */}
        <div className="bg-[#f5f2ea] border border-[#d6d0c2] p-4 flex items-start space-x-3 max-w-xs shrink-0 shadow-sm self-start">
          <div className="p-2.5 bg-[#0a0a0a] text-[#fcf9f2] shrink-0">
            <Scale className="w-5 h-5 text-[#e5c07b]" />
          </div>
          <div className="text-[11px] font-mono">
            <div className="font-bold text-[#0a0a0a] uppercase tracking-wide">
              VALIDACIÓN FIDUCIARIA BANXICO/SAT
            </div>
            <div className="text-[#666] text-[10px] mt-0.5">
              Vigencia Régimen Fiscal 2025
            </div>
            <div className="text-[#ba1a1a] font-bold text-[10px] mt-1">
              Tasa Máx. Teórica: 35.0% + 16.0% IVA
            </div>
          </div>
        </div>
      </div>

      {/* DYNAMIC RISK WARNING (e.g. RESICO threshold or INFORMAL discrepancy) */}
      {results.warningMessage && (
        <div className="mb-6 p-4 bg-[#fff1f0] border-2 border-[#ba1a1a] flex items-start space-x-3 text-[#7a1c1c]">
          <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5 text-[#ba1a1a]" />
          <div className="text-xs sm:text-sm font-mono">
            <div className="font-bold uppercase tracking-wider mb-1">
              DICTAMEN DE CONTINGENCIA PREVENTIVA
            </div>
            <p className="leading-relaxed">{results.warningMessage}</p>
          </div>
        </div>
      )}

      {/* MAIN TWO-COLUMN BROADSHEET WORKSPACE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* ========================================================= */}
        {/* LEFT COLUMN: CÉDULA DE CAPTURA TÉCNICA (HOJA DE TRABAJO)   */}
        {/* ========================================================= */}
        <div className="lg:col-span-6 bg-[#f7f5ed] border-2 border-[#1c1c18] p-5 sm:p-7 shadow-sm">
          
          {/* Card Title & SAT Folio */}
          <div className="flex items-start justify-between border-b border-[#1c1c18] pb-4 mb-6">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#555] block">
                CÉDULA DE CAPTURA TÉCNICA
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-serif-broadsheet tracking-tight text-[#0a0a0a] uppercase">
                HOJA DE TRABAJO DE REESTRUCTURACIÓN
              </h2>
            </div>
            <div className="bg-[#0a0a0a] text-[#fcf9f2] text-[10px] font-mono px-2 py-1 font-bold tracking-wider shrink-0">
              FOLIO SAT: 849-01
            </div>
          </div>

          <div className="space-y-7">
            
            {/* 1. RÉGIMEN O ESTRUCTURA ACTUAL */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className="w-5 h-5 bg-[#0a0a0a] text-[#fcf9f2] font-mono text-xs flex items-center justify-center font-bold">
                    1
                  </span>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0a0a0a]">
                    RÉGIMEN O ESTRUCTURA ACTUAL
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#666] hidden sm:inline">
                  Seleccione estructura operativa
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                
                {/* Option: PFAE */}
                <button
                  type="button"
                  onClick={() => setInputs(prev => ({ ...prev, regime: 'PFAE' }))}
                  className={`p-3 text-left border transition-all flex flex-col justify-between ${
                    inputs.regime === 'PFAE'
                      ? 'bg-[#0a0a0a] text-[#fcf9f2] border-[#0a0a0a]'
                      : 'bg-[#ffffff] text-[#1c1c18] border-[#d6d0c2] hover:border-[#1c1c18]'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="font-bold text-xs font-mono tracking-wider">PFAE</span>
                    <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                      inputs.regime === 'PFAE' ? 'border-[#fcf9f2] bg-[#fcf9f2]' : 'border-[#666]'
                    }`}>
                      {inputs.regime === 'PFAE' && <span className="w-1.5 h-1.5 rounded-full bg-[#0a0a0a]"></span>}
                    </span>
                  </div>
                  <div className={`text-[10px] mt-1 ${inputs.regime === 'PFAE' ? 'text-[#c8c6c5]' : 'text-[#555]'}`}>
                    Persona Física Actividad Empresarial
                  </div>
                  <div className={`text-[9px] font-mono mt-2 font-semibold ${inputs.regime === 'PFAE' ? 'text-[#e5c07b]' : 'text-[#ba1a1a]'}`}>
                    Tarifa Progresiva ISR hasta 35%
                  </div>
                </button>

                {/* Option: RESICO */}
                <button
                  type="button"
                  onClick={() => setInputs(prev => ({ ...prev, regime: 'RESICO' }))}
                  className={`p-3 text-left border transition-all flex flex-col justify-between ${
                    inputs.regime === 'RESICO'
                      ? 'bg-[#0a0a0a] text-[#fcf9f2] border-[#0a0a0a]'
                      : 'bg-[#ffffff] text-[#1c1c18] border-[#d6d0c2] hover:border-[#1c1c18]'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="font-bold text-xs font-mono tracking-wider">RESICO</span>
                    <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                      inputs.regime === 'RESICO' ? 'border-[#fcf9f2] bg-[#fcf9f2]' : 'border-[#666]'
                    }`}>
                      {inputs.regime === 'RESICO' && <span className="w-1.5 h-1.5 rounded-full bg-[#0a0a0a]"></span>}
                    </span>
                  </div>
                  <div className={`text-[10px] mt-1 ${inputs.regime === 'RESICO' ? 'text-[#c8c6c5]' : 'text-[#555]'}`}>
                    Régimen Simplificado de Confianza
                  </div>
                  <div className={`text-[9px] font-mono mt-2 font-semibold ${inputs.regime === 'RESICO' ? 'text-[#e5c07b]' : 'text-[#2e7d32]'}`}>
                    Tasa Marginal 1.0% a 2.5% (Cap $3.5M)
                  </div>
                </button>

                {/* Option: PERSONA MORAL */}
                <button
                  type="button"
                  onClick={() => setInputs(prev => ({ ...prev, regime: 'MORAL' }))}
                  className={`p-3 text-left border transition-all flex flex-col justify-between ${
                    inputs.regime === 'MORAL'
                      ? 'bg-[#0a0a0a] text-[#fcf9f2] border-[#0a0a0a]'
                      : 'bg-[#ffffff] text-[#1c1c18] border-[#d6d0c2] hover:border-[#1c1c18]'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="font-bold text-xs font-mono tracking-wider">PERSONA MORAL</span>
                    <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                      inputs.regime === 'MORAL' ? 'border-[#fcf9f2] bg-[#fcf9f2]' : 'border-[#666]'
                    }`}>
                      {inputs.regime === 'MORAL' && <span className="w-1.5 h-1.5 rounded-full bg-[#0a0a0a]"></span>}
                    </span>
                  </div>
                  <div className={`text-[10px] mt-1 ${inputs.regime === 'MORAL' ? 'text-[#c8c6c5]' : 'text-[#555]'}`}>
                    Sociedad Anónima / S.A.P.I. / S.A.S.
                  </div>
                  <div className={`text-[9px] font-mono mt-2 font-semibold ${inputs.regime === 'MORAL' ? 'text-[#e5c07b]' : 'text-[#555]'}`}>
                    Tasa Corporativa 30% + 10% Dividendos
                  </div>
                </button>

                {/* Option: INFORMAL */}
                <button
                  type="button"
                  onClick={() => setInputs(prev => ({ ...prev, regime: 'INFORMAL' }))}
                  className={`p-3 text-left border transition-all flex flex-col justify-between ${
                    inputs.regime === 'INFORMAL'
                      ? 'bg-[#0a0a0a] text-[#fcf9f2] border-[#0a0a0a]'
                      : 'bg-[#ffffff] text-[#1c1c18] border-[#d6d0c2] hover:border-[#1c1c18]'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="font-bold text-xs font-mono tracking-wider">INFORMAL</span>
                    <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                      inputs.regime === 'INFORMAL' ? 'border-[#fcf9f2] bg-[#fcf9f2]' : 'border-[#666]'
                    }`}>
                      {inputs.regime === 'INFORMAL' && <span className="w-1.5 h-1.5 rounded-full bg-[#0a0a0a]"></span>}
                    </span>
                  </div>
                  <div className={`text-[10px] mt-1 ${inputs.regime === 'INFORMAL' ? 'text-[#c8c6c5]' : 'text-[#555]'}`}>
                    Sin Estructura Formalizada
                  </div>
                  <div className={`text-[9px] font-mono mt-2 font-semibold ${inputs.regime === 'INFORMAL' ? 'text-[#ff6b6b]' : 'text-[#ba1a1a]'}`}>
                    Riesgo Discrepancia Fiscal SAT
                  </div>
                </button>

              </div>
            </div>

            {/* 2. FACTURACIÓN MENSUAL PROMEDIO */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center space-x-2">
                  <span className="w-5 h-5 bg-[#0a0a0a] text-[#fcf9f2] font-mono text-xs flex items-center justify-center font-bold">
                    2
                  </span>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0a0a0a]">
                    FACTURACIÓN MENSUAL PROMEDIO
                  </span>
                </div>
                
                {/* Revenue Display Box */}
                <div className="bg-[#ffffff] border-2 border-[#1c1c18] px-3 py-1 flex items-center space-x-1 shadow-sm">
                  <span className="font-mono text-xs text-[#555]">$</span>
                  <input
                    type="text"
                    value={customRevenueInput}
                    onChange={(e) => setCustomRevenueInput(e.target.value)}
                    onBlur={handleRevenueInputBlur}
                    className="w-24 sm:w-28 font-mono text-xs sm:text-sm font-bold text-right text-[#0a0a0a] bg-transparent focus:outline-none"
                  />
                  <span className="font-mono text-[10px] font-bold text-[#555]">MXN</span>
                </div>
              </div>

              <p className="text-[10px] font-mono text-[#666] mb-3">
                Ingreso bruto facturado o cobrado en cuenta bancaria.
              </p>

              {/* Range Slider */}
              <div className="relative py-2">
                <input
                  type="range"
                  min={50000}
                  max={2500000}
                  step={25000}
                  value={inputs.monthlyRevenue}
                  onChange={(e) => handleRevenueSlider(Number(e.target.value))}
                  className="w-full broadsheet-slider"
                />
              </div>

              {/* Preset Buttons */}
              <div className="grid grid-cols-5 gap-1 pt-1 text-center font-mono text-[9px] text-[#666]">
                {revenuePresets.map((preset) => (
                  <button
                    key={preset.value}
                    type="button"
                    onClick={() => handleRevenueSlider(preset.value)}
                    className={`py-1 border transition-colors ${
                      inputs.monthlyRevenue === preset.value
                        ? 'bg-[#0a0a0a] text-[#fcf9f2] font-bold border-[#0a0a0a]'
                        : 'bg-[#ffffff] hover:border-[#1c1c18] border-[#e0ded8]'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. NATURALEZA DEL NEGOCIO / OBJETO SOCIAL */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className="w-5 h-5 bg-[#0a0a0a] text-[#fcf9f2] font-mono text-xs flex items-center justify-center font-bold">
                    3
                  </span>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0a0a0a]">
                    NATURALEZA DEL NEGOCIO / OBJETO SOCIAL
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#666] hidden sm:inline">
                  Clasificación de activo intangible
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                
                {/* SOFTWARE & TECH */}
                <button
                  type="button"
                  onClick={() => setInputs(prev => ({ ...prev, businessNature: 'TECH' }))}
                  className={`p-2.5 text-left border flex flex-col justify-between transition-all ${
                    inputs.businessNature === 'TECH'
                      ? 'bg-[#0a0a0a] text-[#fcf9f2] border-[#0a0a0a]'
                      : 'bg-[#ffffff] text-[#1c1c18] border-[#d6d0c2] hover:border-[#1c1c18]'
                  }`}
                >
                  <Terminal className={`w-4 h-4 mb-2 ${inputs.businessNature === 'TECH' ? 'text-[#e5c07b]' : 'text-[#0a0a0a]'}`} />
                  <div>
                    <div className="font-mono font-bold text-[10px] leading-tight uppercase">
                      SOFTWARE & TECH
                    </div>
                    <div className={`text-[8px] font-mono mt-0.5 ${inputs.businessNature === 'TECH' ? 'text-[#c8c6c5]' : 'text-[#666]'}`}>
                      SaaS / IP Intangible
                    </div>
                  </div>
                </button>

                {/* AGENCIA & SERVICIOS */}
                <button
                  type="button"
                  onClick={() => setInputs(prev => ({ ...prev, businessNature: 'AGENCY' }))}
                  className={`p-2.5 text-left border flex flex-col justify-between transition-all ${
                    inputs.businessNature === 'AGENCY'
                      ? 'bg-[#0a0a0a] text-[#fcf9f2] border-[#0a0a0a]'
                      : 'bg-[#ffffff] text-[#1c1c18] border-[#d6d0c2] hover:border-[#1c1c18]'
                  }`}
                >
                  <Briefcase className={`w-4 h-4 mb-2 ${inputs.businessNature === 'AGENCY' ? 'text-[#e5c07b]' : 'text-[#0a0a0a]'}`} />
                  <div>
                    <div className="font-mono font-bold text-[10px] leading-tight uppercase">
                      AGENCIA & SERVICIOS
                    </div>
                    <div className={`text-[8px] font-mono mt-0.5 ${inputs.businessNature === 'AGENCY' ? 'text-[#c8c6c5]' : 'text-[#666]'}`}>
                      Honorarios & Consultoría
                    </div>
                  </div>
                </button>

                {/* E-COMMERCE & RETAIL */}
                <button
                  type="button"
                  onClick={() => setInputs(prev => ({ ...prev, businessNature: 'ECOMMERCE' }))}
                  className={`p-2.5 text-left border flex flex-col justify-between transition-all ${
                    inputs.businessNature === 'ECOMMERCE'
                      ? 'bg-[#0a0a0a] text-[#fcf9f2] border-[#0a0a0a]'
                      : 'bg-[#ffffff] text-[#1c1c18] border-[#d6d0c2] hover:border-[#1c1c18]'
                  }`}
                >
                  <ShoppingCart className={`w-4 h-4 mb-2 ${inputs.businessNature === 'ECOMMERCE' ? 'text-[#e5c07b]' : 'text-[#0a0a0a]'}`} />
                  <div>
                    <div className="font-mono font-bold text-[10px] leading-tight uppercase">
                      E-COMMERCE & RETAIL
                    </div>
                    <div className={`text-[8px] font-mono mt-0.5 ${inputs.businessNature === 'ECOMMERCE' ? 'text-[#c8c6c5]' : 'text-[#666]'}`}>
                      Mercancía & Inventarios
                    </div>
                  </div>
                </button>

                {/* REAL ESTATE & INVER. */}
                <button
                  type="button"
                  onClick={() => setInputs(prev => ({ ...prev, businessNature: 'REAL_ESTATE' }))}
                  className={`p-2.5 text-left border flex flex-col justify-between transition-all ${
                    inputs.businessNature === 'REAL_ESTATE'
                      ? 'bg-[#0a0a0a] text-[#fcf9f2] border-[#0a0a0a]'
                      : 'bg-[#ffffff] text-[#1c1c18] border-[#d6d0c2] hover:border-[#1c1c18]'
                  }`}
                >
                  <Building2 className={`w-4 h-4 mb-2 ${inputs.businessNature === 'REAL_ESTATE' ? 'text-[#e5c07b]' : 'text-[#0a0a0a]'}`} />
                  <div>
                    <div className="font-mono font-bold text-[10px] leading-tight uppercase">
                      REAL ESTATE & INVER.
                    </div>
                    <div className={`text-[8px] font-mono mt-0.5 ${inputs.businessNature === 'REAL_ESTATE' ? 'text-[#c8c6c5]' : 'text-[#666]'}`}>
                      Rentas & Plusvalías
                    </div>
                  </div>
                </button>

              </div>
            </div>

            {/* 4. GASTOS DEDUCIBLES COMPROBABLES (CFDI 4.0) */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center space-x-2">
                  <span className="w-5 h-5 bg-[#0a0a0a] text-[#fcf9f2] font-mono text-xs flex items-center justify-center font-bold">
                    4
                  </span>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0a0a0a]">
                    GASTOS DEDUCIBLES COMPROBABLES (CFDI 4.0)
                  </span>
                </div>
                
                <div className="bg-[#ffffff] border-2 border-[#1c1c18] px-3 py-1 font-mono text-xs font-bold text-[#0a0a0a] shadow-sm">
                  {inputs.deductibleExpensePercent}% del ingreso
                </div>
              </div>

              <p className="text-[10px] font-mono text-[#666] mb-3">
                Porcentaje de gastos con factura emitida a tu RFC.
              </p>

              <div className="relative py-2">
                <input
                  type="range"
                  min={5}
                  max={85}
                  step={5}
                  value={inputs.deductibleExpensePercent}
                  onChange={(e) => setInputs(prev => ({ ...prev, deductibleExpensePercent: Number(e.target.value) }))}
                  className="w-full broadsheet-slider"
                />
              </div>

              <div className="grid grid-cols-4 gap-1 text-[9px] font-mono text-[#666] pt-1 text-center">
                <span className={inputs.deductibleExpensePercent <= 15 ? 'font-bold text-[#ba1a1a]' : ''}>5% (Mínimo comprobable)</span>
                <span className={inputs.deductibleExpensePercent === 30 ? 'font-bold text-[#0a0a0a]' : ''}>30% (Promedio)</span>
                <span className={inputs.deductibleExpensePercent === 50 ? 'font-bold text-[#0a0a0a]' : ''}>50%</span>
                <span className={inputs.deductibleExpensePercent >= 70 ? 'font-bold text-[#2e7d32]' : ''}>85% (Alta deducción)</span>
              </div>
            </div>

            {/* CLAÚSULA ANTI-ELUSIÓN (ART. 5-A CFF) */}
            <div className="bg-[#ffffff] border border-[#d6d0c2] p-3.5 flex items-start space-x-3 text-[11px] leading-relaxed">
              <Scale className="w-4 h-4 text-[#0a0a0a] shrink-0 mt-0.5" />
              <div>
                <span className="font-mono font-bold text-[#0a0a0a] uppercase tracking-wide">
                  Cláusula Anti-Elusión (Art. 5-A CFF):
                </span>{' '}
                <span className="font-serif text-[#444]">
                  Todas las formulaciones calculadas por esta plataforma integran elementos probatorios de sustancia corporativa, asambleas notariales y contratos certificados de fecha cierta.
                </span>
              </div>
            </div>

          </div>

          {/* METHODOLOGY BIG 4 STANDARDS FOOTER */}
          <div className="mt-8 pt-6 border-t border-[#1c1c18]">
            <div className="flex items-center justify-between text-[10px] font-mono text-[#555] uppercase tracking-wider font-semibold mb-3">
              <span>METODOLOGÍA DE INGENIERÍA</span>
              <span>ESTÁNDAR BIG 4</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-[#ffffff] p-2.5 border border-[#e0ded8]">
                <div className="font-mono font-bold text-[10px] uppercase text-[#0a0a0a] mb-1">
                  ARBITRAJE DE TASAS
                </div>
                <p className="text-[10px] font-serif text-[#666] leading-tight">
                  Aprovechamiento del diferencial entre tasas del Título II y Título IV conforme a ley.
                </p>
              </div>

              <div className="bg-[#ffffff] p-2.5 border border-[#e0ded8]">
                <div className="font-mono font-bold text-[10px] uppercase text-[#0a0a0a] mb-1">
                  ESCUDOS INTANGIBLES
                </div>
                <p className="text-[10px] font-serif text-[#666] leading-tight">
                  Amortización legal de activos de propiedad intelectual e intangibles de marca registrada.
                </p>
              </div>

              <div className="bg-[#ffffff] p-2.5 border border-[#e0ded8]">
                <div className="font-mono font-bold text-[10px] uppercase text-[#0a0a0a] mb-1">
                  PROTECCIÓN FIDUCIARIA
                </div>
                <p className="text-[10px] font-serif text-[#666] leading-tight">
                  Aislamiento patrimonial de pasivos operativos mediante fideicomisos mercantiles.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* RIGHT COLUMN: DIAGNÓSTICO CUANTITATIVO (BALANCE TRIBUTARIO) */}
        {/* ========================================================= */}
        <div className="lg:col-span-6 bg-[#f7f5ed] border-2 border-[#1c1c18] p-5 sm:p-7 relative shadow-sm overflow-hidden">
          
          {/* DIAGONAL VINTAGE CORNER WATERMARK BADGE */}
          <div className="absolute -top-7 -right-7 sm:-top-6 sm:-right-6 w-36 sm:w-44 h-14 bg-[#0a0a0a] text-[#fcf9f2] text-[8px] sm:text-[9px] font-mono tracking-widest font-bold uppercase rotate-45 flex items-end justify-center pb-1 shadow-md select-none pointer-events-none">
            SIMULACIÓN CERTIFICADA
          </div>

          {/* Header */}
          <div className="border-b border-[#1c1c18] pb-4 mb-6">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#555] block">
              DIAGNÓSTICO CUANTITATIVO
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif-broadsheet tracking-tight text-[#0a0a0a] uppercase">
              BALANCE DE CARGA TRIBUTARIA
            </h2>
          </div>

          {/* Top Two Metrics: BASE ACTUAL vs CON ESCUDOS FISCALES */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
            
            {/* CARGA BASE ACTUAL */}
            <div className="bg-[#ffffff] border border-[#d6d0c2] p-4">
              <span className="text-[10px] font-mono uppercase font-bold text-[#ba1a1a] block tracking-wide">
                CARGA BASE ACTUAL
              </span>
              <span className="text-[9px] font-mono text-[#777] block mb-2">
                ISR + IVA Estimado / mes
              </span>
              <div className="text-2xl sm:text-3xl font-black font-serif-broadsheet text-[#0a0a0a] tabular-nums">
                ${results.baseTaxMonthly.toLocaleString('es-MX')}
              </div>
              <div className="text-[11px] font-mono text-[#555] mt-1 font-semibold">
                Tasa Efectiva: ~{results.baseEffectiveRate}%
              </div>
            </div>

            {/* CON ESCUDOS FISCALES */}
            <div className="bg-[#0a0a0a] text-[#fcf9f2] border border-[#0a0a0a] p-4">
              <span className="text-[10px] font-mono uppercase font-bold text-[#e5c07b] block tracking-wide">
                CON ESCUDOS FISCALES
              </span>
              <span className="text-[9px] font-mono text-[#a5a59f] block mb-2">
                Optimizado Emprendenmex
              </span>
              <div className="text-2xl sm:text-3xl font-black font-serif-broadsheet text-[#fcf9f2] tabular-nums">
                ${results.optimizedTaxMonthly.toLocaleString('es-MX')}
              </div>
              <div className="text-[11px] font-mono text-[#c8c6c5] mt-1 font-semibold">
                Tasa Efectiva: ~{results.optimizedEffectiveRate}%
              </div>
            </div>

          </div>

          {/* POTENCIAL DE LIQUIDEZ LIBERADA (LARGE HIGHLIGHT) */}
          <div className="bg-[#ebe7dc] border border-[#d6d0c2] p-5 mb-6 text-left">
            <div className="flex items-center justify-between text-[10px] font-mono tracking-wider uppercase mb-1">
              <span className="font-bold text-[#1c1c18]">POTENCIAL DE LIQUIDEZ LIBERADA</span>
              <span className="bg-[#0a0a0a] text-[#fcf9f2] px-2 py-0.5 font-bold">
                IMPACTO ANUAL
              </span>
            </div>
            
            <div className="text-3xl sm:text-4xl md:text-5xl font-black font-serif-broadsheet text-[#0a0a0a] tracking-tight tabular-nums py-1">
              ${results.annualSavedLiquidity.toLocaleString('es-MX')}
            </div>
            
            <p className="text-[10px] sm:text-[11px] font-mono uppercase font-semibold text-[#555] tracking-wide mt-1">
              PESOS MEXICANOS ANUALES LISTOS PARA REINVERSIÓN
            </p>
          </div>

          {/* COMPARATIVE TAX ABSORPTION BARS */}
          <div className="mb-6 bg-[#ffffff] p-4 border border-[#d6d0c2]">
            <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-[#0a0a0a] block mb-3">
              ABSORCIÓN IMPOSITIVA COMPARADA
            </span>

            {/* Bar 1: Traditional without structure */}
            <div className="mb-3">
              <div className="flex justify-between text-[11px] font-mono mb-1">
                <span className="text-[#333]">Carga Tradicional Sin Estructura</span>
                <span className="font-bold text-[#ba1a1a] tabular-nums">{results.baseEffectiveRate}%</span>
              </div>
              <div className="w-full bg-[#f0eee6] h-3.5 border border-[#d6d0c2]">
                <div 
                  className="bg-[#ba1a1a] h-full transition-all duration-500" 
                  style={{ width: `${Math.min(100, Math.max(5, results.baseEffectiveRate))}%` }}
                ></div>
              </div>
            </div>

            {/* Bar 2: With Fiscal Shielding */}
            <div>
              <div className="flex justify-between text-[11px] font-mono mb-1">
                <span className="text-[#333]">Con Ingeniería & Escudos Fiscales</span>
                <span className="font-bold text-[#0a0a0a] tabular-nums">{results.optimizedEffectiveRate}%</span>
              </div>
              <div className="w-full bg-[#f0eee6] h-3.5 border border-[#d6d0c2]">
                <div 
                  className="bg-[#0a0a0a] h-full transition-all duration-500" 
                  style={{ width: `${Math.min(100, Math.max(5, results.optimizedEffectiveRate))}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* TACTICAL HACKS RECOMMENDED */}
          <div className="mb-6">
            <div className="flex items-center justify-between text-[10px] font-mono uppercase font-bold tracking-wider text-[#0a0a0a] mb-2 border-b border-[#1c1c18] pb-1">
              <span>HACKS TÁCTICOS RECOMENDADOS</span>
              <span className="text-[#555]">3 RUTAS IDENTIFICADAS</span>
            </div>

            <div className="space-y-2">
              {results.routes.map((route) => (
                <div 
                  key={route.id}
                  className="bg-[#ffffff] border border-[#d6d0c2] p-3 text-left hover:border-[#1c1c18] transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="font-serif-broadsheet font-bold text-xs sm:text-sm text-[#0a0a0a]">
                      <span className="font-mono text-xs mr-1 text-[#666]">{route.number}.</span>
                      {route.title}
                    </div>
                    <div className="font-mono font-bold text-xs text-[#2e7d32] shrink-0 ml-2 tabular-nums">
                      +${route.annualBenefit.toLocaleString('es-MX')}/año
                    </div>
                  </div>
                  <p className="text-[11px] font-serif text-[#555] mt-1 leading-snug">
                    {route.description}
                  </p>
                  <div className="text-[9px] font-mono text-[#888] mt-1">
                    Fundamento: {route.legalBasis}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* THREE HIGH-VALUE ACTION BUTTONS */}
          <div className="space-y-2.5 mb-6">
            
            {/* Button 1: Download PDF Dictamen */}
            <button
              type="button"
              onClick={() => onOpenDictamen(results, inputs)}
              className="w-full bg-[#0a0a0a] text-[#fcf9f2] py-3.5 px-4 font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#222] transition-colors flex items-center justify-center space-x-2 border border-[#0a0a0a]"
            >
              <FileText className="w-4 h-4 text-[#fcf9f2]" />
              <span>DESCARGAR DICTAMEN FISCAL EN PDF (GRATUITO)</span>
            </button>

            {/* Button 2: Unlock Full Blueprint in Club de Estrategas */}
            <button
              type="button"
              onClick={onNavigateClub}
              className="w-full bg-[#3d2f1f] text-[#fcf9f2] py-3 px-4 font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#523e2a] transition-colors flex items-center justify-center space-x-2 border border-[#2a1e12]"
            >
              <Lock className="w-4 h-4 text-[#e5c07b]" />
              <span>DESBLOQUEAR BLUEPRINT COMPLETO EN CLUB DE ESTRATEGAS</span>
            </button>

            {/* Button 3: Schedule Appointment with Allied CPA Firm */}
            <button
              type="button"
              onClick={onOpenAppointment}
              className="w-full bg-[#ebe7dc] text-[#1c1c18] py-3 px-4 font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#dfdad0] transition-colors flex items-center justify-center space-x-2 border border-[#d6d0c2]"
            >
              <Calendar className="w-4 h-4 text-[#1c1c18]" />
              <span>AGENDAR VALIDACIÓN CON DESPACHO CONTABLE ALIADO</span>
            </button>

          </div>

          {/* Model Footnotes */}
          <div className="flex items-center justify-between text-[9px] font-mono text-[#777] border-t border-[#d6d0c2] pt-2 mb-4">
            <span>MODELO ALGORÍTMICO REV. 2025.1</span>
            <span>NO CONSTITUYE ASESORÍA FISCAL VINCULANTE</span>
          </div>

          {/* Trust Guarantee Box */}
          <div className="bg-[#ffffff] border border-[#d6d0c2] p-3 flex items-start space-x-3">
            <ShieldCheck className="w-5 h-5 text-[#2e7d32] shrink-0 mt-0.5" />
            <div className="text-[11px]">
              <div className="font-mono font-bold text-[#0a0a0a] uppercase tracking-wide">
                Certeza Jurídica Documentada
              </div>
              <p className="font-serif text-[#555] mt-0.5 leading-snug">
                Estrategias verificadas por peritos contables certificados ante la Prodecon y la Barra Mexicana de Abogados.
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
