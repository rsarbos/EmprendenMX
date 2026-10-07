import React from 'react';
import { 
  BookOpen, 
  ShieldCheck, 
  Scale, 
  Building2, 
  TrendingUp, 
  Award,
  ArrowRight, 
  Cpu, 
  Layers, 
  FileText, 
  CheckCircle2, 
  Landmark, 
  Users, 
  Target,
  Sparkles
} from 'lucide-react';

interface AcercaDeProps {
  onNavigateSimulador: () => void;
  onNavigateClub: () => void;
}

export const AcercaDe: React.FC<AcercaDeProps> = ({
  onNavigateSimulador,
  onNavigateClub,
}) => {
  const decalogo = [
    {
      num: '01',
      title: 'Economía de Opción Legítima',
      desc: 'El derecho inalienable de todo ciudadano y empresa de organizar sus actos mercantiles bajo la figura jurídica más eficiente que permita la ley.'
    },
    {
      num: '02',
      title: 'Rigor Matemático & Fiduciario',
      desc: 'Cada estrategia se fundamenta en modelos cuantitativos auditables, eliminando la especulación o los esquemas empíricos.'
    },
    {
      num: '03',
      title: 'Sustancia Económica & Razón de Negocios',
      desc: 'Cumplimiento irrestricto del Artículo 5-A del CFF: todo acto corporativo genera un beneficio comercial real superior al beneficio tributario.'
    },
    {
      num: '04',
      title: 'Fecha Cierta Inatacable',
      desc: 'Validación ante fedatarios públicos y registros oficiales para dotar a contratos y asambleas de pleno valor probatorio judicial.'
    },
    {
      num: '05',
      title: 'Democratización de la Alta Estrategia',
      desc: 'Poner al alcance de los fundadores mexicanos las mismas herramientas que históricamente estuvieron reservadas para monopolios.'
    },
    {
      num: '06',
      title: 'Protección Integral de Intangibles',
      desc: 'Blindar el software, las marcas y el intelecto de los creadores mediante segregación patrimonial y valuaciones de plena competencia.'
    },
    {
      num: '07',
      title: 'Gobernanza y Paz Accionaria',
      desc: 'Estatutos diseñados para prevenir bloqueos, proteger a socios mayoritarios y resguardar a inversionistas minoritarios.'
    },
    {
      num: '08',
      title: 'Independencia Editorial Absoluta',
      desc: 'Análisis libre de compromisos políticos o partidistas, orientado exclusivamente a la salvaguarda del patrimonio lícito.'
    },
    {
      num: '09',
      title: 'Reinversión Productiva Nacional',
      desc: 'Cada peso legítimamente retenido en la tesorería de la empresa se transforma en empleos de alto valor y crecimiento económico.'
    },
    {
      num: '10',
      title: 'Cero Elusión / Cero Simulación',
      desc: 'Rechazo total a facturación simulada o esquemas opacos; operamos exclusivamente bajo la letra viva y jurisprudencia del Estado mexicano.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12 space-y-12 sm:space-y-16">
      
      {/* 1. TOP BROADSHEET BANNER */}
      <div className="border-b-2 border-[#1c1c18] pb-8 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center space-x-2 text-[10px] sm:text-[11px] font-mono tracking-widest uppercase font-bold text-[#555] mb-3">
          <span className="w-2 h-2 rounded-full bg-[#1e4d2b]"></span>
          <span>MANIFIESTO INSTITUCIONAL // DIARIO INDEPENDIENTE DE ALTA ESTRATEGIA</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-serif-broadsheet uppercase tracking-tight text-[#0a0a0a] leading-tight">
          ¿QUÉ ES EMPRENDENMEX?
        </h1>
        <div className="h-[2px] w-24 bg-[#0a0a0a] mx-auto my-4"></div>
        <p className="text-base sm:text-xl font-serif italic text-[#333] mt-2 leading-relaxed max-w-3xl mx-auto">
          La institución fiduciaria y gaceta técnica que democratiza la ingeniería financiera de élite para los directores, fundadores y creadores de valor en México.
        </p>
      </div>

      {/* 2. MANIFIESTO DISRUPTIVO // POR QUÉ NACIÓ EMPRENDENMEX */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#ffffff] border-2 border-[#1c1c18] p-6 sm:p-10 shadow-sm">
        <div className="lg:col-span-7 space-y-4 font-serif text-[#2a2a28] text-sm sm:text-base leading-relaxed">
          <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#ba1a1a]">
            DOCTRINA FUNDACIONAL // LA REALIDAD MEXICANA
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-serif-broadsheet uppercase text-[#0a0a0a] leading-snug">
            Rompemos el Monopolio de la Alta Estrategia Tributaria
          </h2>
          <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#0a0a0a]">
            D urante décadas, el sistema económico en México operó con una asimetría estructural: mientras los grandes consorcios multinacionales disponían de despachos de élite y fideicomisos sofisticados para pagar tasas efectivas de un dígito, las empresas medianas y los emprendedores independientes eran asfixiados con tasas nominales del 30% al 35% de ISR y auditorías automáticas.
          </p>
          <p>
            <strong>EMPRENDENMEX nació para cambiar esta regla de forma definitiva.</strong> No somos una consultoría tradicional ni un despacho opaco. Somos un diario fiduciario independiente, un laboratorio analítico cuantitativo y una red de gobernanza que traslada el conocimiento de las firmas Big 4 directamente a la mesa de los directores generales.
          </p>
          <p>
            Creemos que el verdadero patriotismo económico consiste en defender la rentabilidad de las empresas lícitas, blindar el empleo formal y reinvertir el capital liberado en innovación y desarrollo para nuestro país.
          </p>
        </div>

        <div className="lg:col-span-5 bg-[#fbf9f2] border-2 border-[#1c1c18] p-6 space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-[#1e4d2b]">
            <Landmark className="w-4 h-4" />
            <span>ESTÁNDARES DE RIGOR INSTITUCIONAL</span>
          </div>

          <div className="space-y-3 font-mono text-xs text-[#333]">
            <div className="bg-[#ffffff] p-3 border border-[#d6d0c2]">
              <div className="font-bold text-[#0a0a0a] text-sm mb-1">0% SIMULACIÓN</div>
              <p className="text-[11px] font-serif text-[#555]">
                Rechazo rotundo a la compra de facturas o estrategias grises. Toda nuestra arquitectura se fundamenta en la letra viva del Código Fiscal de la Federación.
              </p>
            </div>

            <div className="bg-[#ffffff] p-3 border border-[#d6d0c2]">
              <div className="font-bold text-[#0a0a0a] text-sm mb-1">100% SUSTANCIA ECONÓMICA</div>
              <p className="text-[11px] font-serif text-[#555]">
                Respaldado bajo el Artículo 5-A del CFF con expedientes de defensa, bitácoras de entregables y fecha cierta protocolar.
              </p>
            </div>

            <div className="bg-[#ffffff] p-3 border border-[#d6d0c2]">
              <div className="font-bold text-[#0a0a0a] text-sm mb-1">MATEMÁTICA PURA</div>
              <p className="text-[11px] font-serif text-[#555]">
                Modelado en tiempo real con algoritmos de precisión que cuantifican cada centavo de liquidez retenida antes de firmar cualquier acto notarial.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. LOS 6 PILARES ESTRUCTURALES Y CAPACIDADES DE EMPRENDENMEX */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b-2 border-[#1c1c18] pb-3">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#555] font-bold">
              ARQUITECTURA INTEGRAL DE SERVICIOS
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-serif-broadsheet uppercase text-[#0a0a0a] tracking-tight">
              LOS 6 PILARES DE EMPRENDENMEX
            </h2>
          </div>
          <span className="text-xs font-mono text-[#666] hidden sm:inline">
            EJERCICIO FISCAL 2025 // 2026
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Pilar 1 */}
          <div className="bg-[#ffffff] border-2 border-[#1c1c18] p-6 flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-10 h-10 bg-[#f5f2ea] border border-[#1c1c18] flex items-center justify-center mb-4 text-[#0a0a0a]">
                <Cpu className="w-5 h-5 text-[#ba1a1a]" />
              </div>
              <div className="text-[9px] font-mono text-[#ba1a1a] font-bold uppercase tracking-wider mb-1">
                HERRAMIENTA CUANTITATIVA
              </div>
              <h3 className="text-lg font-bold font-serif-broadsheet text-[#0a0a0a] uppercase mb-2">
                1. Simulador Táctico Fiscal V3.8
              </h3>
              <p className="text-xs font-serif text-[#555] leading-relaxed mb-3">
                Motor algorítmico que diagnostica en tiempo real la facturación bruta, el porcentaje de comprobación CFDI 4.0 y el régimen contributivo (PFAE, RESICO, Persona Moral, Informal) para calcular la tasa efectiva real y la absorción impositiva comparada.
              </p>
              <ul className="text-[11px] font-mono text-[#444] space-y-1">
                <li>• Arbitraje de tasas entre Título II y Título IV.</li>
                <li>• Modelado de liquidez liberada anual.</li>
                <li>• Alerta de rebase del umbral de $3.5M en RESICO.</li>
              </ul>
            </div>
            <button
              onClick={onNavigateSimulador}
              className="mt-5 pt-3 border-t border-[#e0ded8] text-xs font-mono font-bold text-[#0a0a0a] uppercase hover:underline flex items-center justify-between"
            >
              <span>Abrir Simulador Táctico</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Pilar 2 */}
          <div className="bg-[#ffffff] border-2 border-[#1c1c18] p-6 flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-10 h-10 bg-[#f5f2ea] border border-[#1c1c18] flex items-center justify-center mb-4 text-[#0a0a0a]">
                <Layers className="w-5 h-5 text-[#c9a86a]" />
              </div>
              <div className="text-[9px] font-mono text-[#c9a86a] font-bold uppercase tracking-wider mb-1">
                BÓVEDA NOTARIAL
              </div>
              <h3 className="text-lg font-bold font-serif-broadsheet text-[#0a0a0a] uppercase mb-2">
                2. Boutique Modular de Soluciones
              </h3>
              <p className="text-xs font-serif text-[#555] leading-relaxed mb-3">
                Instrumentos contractuales y mercantiles listos para descargar en paquetes ZIP oficiales, validados con fe pública y diseñados para su adopción inmediata sin costos recurrentes.
              </p>
              <ul className="text-[11px] font-mono text-[#444] space-y-1">
                <li>• Estatutos blindados de SAS (cláusulas drag/tag along).</li>
                <li>• Operating Agreements LLC (Wyoming/Delaware).</li>
                <li>• Protocolo de cesión y regalías de marca IMPI.</li>
              </ul>
            </div>
            <button
              onClick={onNavigateClub}
              className="mt-5 pt-3 border-t border-[#e0ded8] text-xs font-mono font-bold text-[#0a0a0a] uppercase hover:underline flex items-center justify-between"
            >
              <span>Explorar Boutique Modular</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Pilar 3 */}
          <div className="bg-[#ffffff] border-2 border-[#1c1c18] p-6 flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-10 h-10 bg-[#f5f2ea] border border-[#1c1c18] flex items-center justify-center mb-4 text-[#0a0a0a]">
                <Building2 className="w-5 h-5 text-[#1e4d2b]" />
              </div>
              <div className="text-[9px] font-mono text-[#1e4d2b] font-bold uppercase tracking-wider mb-1">
                GOBERNANZA & CÍRCULO
              </div>
              <h3 className="text-lg font-bold font-serif-broadsheet text-[#0a0a0a] uppercase mb-2">
                3. Club de Estrategas VIP
              </h3>
              <p className="text-xs font-serif text-[#555] leading-relaxed mb-3">
                Membresía institucional para directores generales, fundadores y family offices con sesiones mensuales de consulta técnica de 45 min con peritos certificados ante la Prodecon y la Barra Mexicana de Abogados.
              </p>
              <ul className="text-[11px] font-mono text-[#444] space-y-1">
                <li>• Revisión colegiada de contratos societarios.</li>
                <li>• Acceso a directorio confidencial C-Suite.</li>
                <li>• Garantía protocolar de salvaguarda de 14 días.</li>
              </ul>
            </div>
            <button
              onClick={onNavigateClub}
              className="mt-5 pt-3 border-t border-[#e0ded8] text-xs font-mono font-bold text-[#0a0a0a] uppercase hover:underline flex items-center justify-between"
            >
              <span>Ver Planes de Membresía</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Pilar 4 */}
          <div className="bg-[#ffffff] border-2 border-[#1c1c18] p-6 flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-10 h-10 bg-[#f5f2ea] border border-[#1c1c18] flex items-center justify-center mb-4 text-[#0a0a0a]">
                <Scale className="w-5 h-5 text-[#555]" />
              </div>
              <div className="text-[9px] font-mono text-[#555] font-bold uppercase tracking-wider mb-1">
                INTELIGENCIA NORMATIVA
              </div>
              <h3 className="text-lg font-bold font-serif-broadsheet text-[#0a0a0a] uppercase mb-2">
                4. Doctrina de Razón de Negocios
              </h3>
              <p className="text-xs font-serif text-[#555] leading-relaxed mb-3">
                Estructuración documental rigurosa bajo el Artículo 5-A del CFF. Cada recomendación y contrato integra elementos probatorios de materialidad, minutas de asamblea y fecha cierta para superar revisiones electrónicas del SAT.
              </p>
              <ul className="text-[11px] font-mono text-[#444] space-y-1">
                <li>• Precedentes del TFJA y tesis de la SCJN.</li>
                <li>• Economía de opción constitucionalmente legítima.</li>
                <li>• Prevención de reclasificación como simulación.</li>
              </ul>
            </div>
            <div className="mt-5 pt-3 border-t border-[#e0ded8] text-[10px] font-mono text-[#666]">
              Marco de Cumplimiento Art. 5-A CFF
            </div>
          </div>

          {/* Pilar 5 */}
          <div className="bg-[#ffffff] border-2 border-[#1c1c18] p-6 flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-10 h-10 bg-[#f5f2ea] border border-[#1c1c18] flex items-center justify-center mb-4 text-[#0a0a0a]">
                <FileText className="w-5 h-5 text-[#0a0a0a]" />
              </div>
              <div className="text-[9px] font-mono text-[#0a0a0a] font-bold uppercase tracking-wider mb-1">
                CERTIFICACIÓN PROTOCOLAR
              </div>
              <h3 className="text-lg font-bold font-serif-broadsheet text-[#0a0a0a] uppercase mb-2">
                5. Emisión de Dictámenes en PDF
              </h3>
              <p className="text-xs font-serif text-[#555] leading-relaxed mb-3">
                Generador instantáneo de dictámenes oficiales de ingeniería fiscal con folio SAT, balance comparativo de liquidez, sellos notariales y firmas de peritos colegiados listos para imprimir en papel bond digital.
              </p>
              <ul className="text-[11px] font-mono text-[#444] space-y-1">
                <li>• Folio único: EMX-8419-DF-2025.</li>
                <li>• Desglose normativo de los 3 hacks tácticos.</li>
                <li>• Sello criptográfico verificable ante la CNBV.</li>
              </ul>
            </div>
            <div className="mt-5 pt-3 border-t border-[#e0ded8] text-[10px] font-mono text-[#666]">
              Emisión Gratuita desde el Simulador
            </div>
          </div>

          {/* Pilar 6 */}
          <div className="bg-[#ffffff] border-2 border-[#1c1c18] p-6 flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-10 h-10 bg-[#f5f2ea] border border-[#1c1c18] flex items-center justify-center mb-4 text-[#0a0a0a]">
                <Award className="w-5 h-5 text-[#1e4d2b]" />
              </div>
              <div className="text-[9px] font-mono text-[#1e4d2b] font-bold uppercase tracking-wider mb-1">
                RED PERICIAL & NOTARIAL
              </div>
              <h3 className="text-lg font-bold font-serif-broadsheet text-[#0a0a0a] uppercase mb-2">
                6. Alianza con Despachos Contables
              </h3>
              <p className="text-xs font-serif text-[#555] leading-relaxed mb-3">
                Agendamiento directo con despachos y notarías aliadas en Ciudad de México, Guadalajara y Monterrey para formalizar transformaciones societarias, fideicomisos mercantiles y contratos con fe pública.
              </p>
              <ul className="text-[11px] font-mono text-[#444] space-y-1">
                <li>• Asignación de actuarios y contadores públicos.</li>
                <li>• Convenio de estricta confidencialidad (NDA).</li>
                <li>• Seguimiento colegiado de fecha cierta.</li>
              </ul>
            </div>
            <div className="mt-5 pt-3 border-t border-[#e0ded8] text-[10px] font-mono text-[#666]">
              Red de Cobertura Nacional
            </div>
          </div>

        </div>
      </div>

      {/* 4. EL DECÁLOGO FIDUCIARIO DE EMPRENDENMEX */}
      <div className="bg-[#fbf9f2] border-2 border-[#1c1c18] p-6 sm:p-10">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#1e4d2b] mb-1">
            CÓDIGO ÉTICO Y DOCTRINAL
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-serif-broadsheet uppercase text-[#0a0a0a]">
            El Decálogo Fiduciario de Emprendenmex
          </h2>
          <p className="text-xs font-serif text-[#555] mt-1">
            Los diez mandamientos que rigen cada instrumento, dictamen y publicación en nuestra plataforma.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {decalogo.map((item) => (
            <div key={item.num} className="bg-[#ffffff] border border-[#d6d0c2] p-4 flex items-start space-x-3">
              <span className="font-mono font-black text-lg text-[#ba1a1a] shrink-0">
                {item.num}.
              </span>
              <div>
                <h3 className="font-serif-broadsheet font-bold text-sm uppercase text-[#0a0a0a] mb-0.5">
                  {item.title}
                </h3>
                <p className="text-xs font-serif text-[#555] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. CALL TO ACTION FINAL */}
      <div className="bg-[#0a0a0a] text-[#fcf9f2] p-8 sm:p-12 text-center max-w-4xl mx-auto border-2 border-[#0a0a0a] shadow-xl">
        <div className="text-xs font-mono font-bold text-[#e5c07b] uppercase tracking-widest mb-2">
          SÉ PARTE DE LA DISRUPCIÓN
        </div>
        <h2 className="text-2xl sm:text-4xl font-black font-serif-broadsheet uppercase tracking-tight text-[#fcf9f2] max-w-2xl mx-auto leading-tight mb-4">
          Únete a la Red de Directores que Lideran la Nueva Economía en México
        </h2>
        <p className="text-xs sm:text-sm font-serif text-[#c8c6c5] max-w-xl mx-auto leading-relaxed mb-8">
          Audita tu empresa hoy mismo en el simulador o accede al Club de Estrategas para recibir acompañamiento técnico de primer nivel.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onNavigateSimulador}
            className="bg-[#fcf9f2] text-[#0a0a0a] hover:bg-[#ebe7dc] px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider flex items-center space-x-2 transition-colors shadow-md"
          >
            <span>AUDITAR MI EMPRESA EN EL SIMULADOR</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onNavigateClub}
            className="border-2 border-[#e5c07b] text-[#e5c07b] hover:bg-[#e5c07b] hover:text-[#0a0a0a] px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider transition-colors"
          >
            <span>UNIRME AL CLUB DE ESTRATEGAS</span>
          </button>
        </div>
      </div>

    </div>
  );
};
