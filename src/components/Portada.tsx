import React from 'react';
import { ArrowRight, BookOpen, Shield, TrendingUp, AlertCircle, FileCheck } from 'lucide-react';

interface PortadaProps {
  onNavigateSimulador: () => void;
  onNavigateClub: () => void;
}

export const Portada: React.FC<PortadaProps> = ({
  onNavigateSimulador,
  onNavigateClub,
}) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      
      {/* Lead Headline Banner */}
      <div className="border-b-2 border-[#1c1c18] pb-6 mb-8 text-center">
        <div className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-[#555] font-bold mb-2">
          INVESTIGACIÓN DE FONDO // DICTAMEN FISCAL SUPREMO
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-serif-broadsheet uppercase tracking-tight text-[#0a0a0a] max-w-5xl mx-auto leading-none">
          LA NUEVA DOCTRINA DE RAZÓN DE NEGOCIOS Y EL BLINDAJE DE INTANGIBLES EN MÉXICO
        </h1>
        <p className="text-base sm:text-lg font-serif italic text-[#333] max-w-3xl mx-auto mt-4 leading-relaxed">
          Cómo los directores y family offices estructuran holdings de propiedad intelectual para mitigar hasta un 70% de la fricción tributaria bajo el estricto amparo del Artículo 5-A del Código Fiscal de la Federación.
        </p>
      </div>

      {/* 3-Column Broadsheet Front Page Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        
        {/* Left Column: Lead Editorial Story (7 Cols) */}
        <div className="lg:col-span-7 pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-[#d6d0c2] pb-6 lg:pb-0">
          <div className="flex items-center space-x-2 text-[10px] font-mono text-[#666] uppercase mb-2">
            <span className="font-bold text-[#0a0a0a]">TESIS JURISPRUDENCIAL</span>
            <span>·</span>
            <span>EJERCICIO 2025</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-serif-broadsheet text-[#0a0a0a] uppercase leading-tight mb-3">
            El Fin de las Deducciones Superficiales: La Batalla de la Materialidad
          </h2>

          <div className="text-sm font-serif text-[#333] leading-relaxed space-y-4">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#0a0a0a]">
              D urante la última década, los contribuyentes en México operaron bajo la creencia de que un simple comprobante fiscal digital (CFDI) amparaba cualquier egreso operativo. Hoy, los algoritmos de fiscalización predictiva del SAT detectan en tiempo real cualquier discrepancia entre el objeto social notarial y la deducibilidad contable.
            </p>
            <p>
              La respuesta técnica no radica en elusión ni en estrategias grises, sino en la **Economía de Opción Legítima**: el derecho inalienable consagrado en la Constitución de seleccionar la vía jurídica mercantil más eficiente para conducir una empresa lícita.
            </p>
            <p>
              Al segregar las marcas registradas, el código de software o las patentes operativas dentro de una entidad fiduciaria independiente, el pago de regalías y derechos de uso se transforma en un gasto estrictamente indispensable y amortizable, reduciendo la tasa efectiva consolidada de un 35% nominal a menos del 10% legal.
            </p>
          </div>

          {/* Interactive Simulator Callout Banner */}
          <div className="mt-8 bg-[#0a0a0a] text-[#fcf9f2] p-6 border border-[#0a0a0a] shadow-md">
            <div className="flex items-center justify-between text-[10px] font-mono uppercase text-[#e5c07b] font-bold mb-2">
              <span>HERRAMIENTA ACTIVA</span>
              <span>ACCESO INMEDIATO</span>
            </div>
            <h3 className="text-xl font-bold font-serif-broadsheet uppercase tracking-tight">
              ¿Desea auditar su tasa impositiva real hoy mismo?
            </h3>
            <p className="text-xs font-serif text-[#c8c6c5] mt-1 mb-4 leading-relaxed">
              Ejecute el modelo algorítmico REV. 2025.1 en el simulador táctico para identificar sus 3 rutas de liquidez liberada.
            </p>
            <button
              onClick={onNavigateSimulador}
              className="bg-[#fcf9f2] text-[#0a0a0a] px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#ebe7dc] transition-colors flex items-center space-x-2"
            >
              <span>ABRIR SIMULADOR TÁCTICO</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Column: Secondary Broadsheet Dispatches (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Dispatch 1 */}
          <div className="bg-[#ffffff] border border-[#d6d0c2] p-5">
            <div className="text-[9px] font-mono text-[#ba1a1a] uppercase font-bold tracking-wider mb-1">
              ALERTA NORMATIVA SAT
            </div>
            <h3 className="text-lg font-bold font-serif-broadsheet uppercase text-[#0a0a0a] mb-2 leading-snug">
              El Riesgo Oculto de la Regla de los $3.5 Millones en RESICO
            </h3>
            <p className="text-xs font-serif text-[#555] leading-relaxed mb-3">
              Superar el umbral por un solo peso sin una transición pactada provoca la expulsión automática al régimen PFAE, detonando auditorías retroactivas con recargos de actualización.
            </p>
            <button
              onClick={onNavigateClub}
              className="text-xs font-mono font-bold text-[#0a0a0a] uppercase underline hover:text-[#555] flex items-center space-x-1"
            >
              <span>Ver Dictamen Preventivo</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Dispatch 2 */}
          <div className="bg-[#ffffff] border border-[#d6d0c2] p-5">
            <div className="text-[9px] font-mono text-[#2e7d32] uppercase font-bold tracking-wider mb-1">
              ARQUITECTURA PATRIMONIAL
            </div>
            <h3 className="text-lg font-bold font-serif-broadsheet uppercase text-[#0a0a0a] mb-2 leading-snug">
              Contratos de Mutuo Intercompañía con Pagarés de Fecha Cierta
            </h3>
            <p className="text-xs font-serif text-[#555] leading-relaxed mb-3">
              Cómo los préstamos corporativos a tasa interbancaria fija permiten inyectar capital de trabajo deduciendo intereses sin impactar el coeficiente de utilidad de la entidad operativa.
            </p>
            <button
              onClick={onNavigateClub}
              className="text-xs font-mono font-bold text-[#0a0a0a] uppercase underline hover:text-[#555] flex items-center space-x-1"
            >
              <span>Revisar Modelo Contractual</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Dispatch 3: Case Study Box */}
          <div className="bg-[#f5f2ea] border-2 border-[#1c1c18] p-5">
            <div className="text-[9px] font-mono text-[#666] uppercase font-bold tracking-wider mb-1">
              EXPEDIENTE TESTIFICADO
            </div>
            <h3 className="text-base font-bold font-serif-broadsheet uppercase text-[#0a0a0a] mb-1">
              Caso Estudio: Empresa de Software en Jalisco
            </h3>
            <div className="font-mono text-xs font-bold text-[#1e4d2b] mb-2">
              Ahorro Anual Consolidado: $1,420,000 MXN
            </div>
            <p className="text-xs font-serif text-[#555] leading-relaxed">
              Reestructuración societaria migrando de PFAE a una estructura Holding SAPI con licenciamiento de código propietario y contratos de soporte técnico transfronterizo.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
