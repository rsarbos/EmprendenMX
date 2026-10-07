import React, { useState } from 'react';
import { 
  ArrowRight, 
  BookOpen, 
  Shield, 
  TrendingUp, 
  AlertCircle, 
  FileCheck, 
  Calculator, 
  Clock, 
  Bell, 
  Sparkles, 
  Download, 
  CheckCircle2, 
  Layers, 
  DollarSign, 
  Users, 
  Target, 
  Lock,
  ChevronRight,
  HelpCircle
} from 'lucide-react';
import { BLOG_ARTICLES, BlogArticle } from '../data/blogArticles';
import { GacetaDiariaSection } from './GacetaDiariaSection';
import { DETAILED_BOUTIQUE_KITS } from '../data/boutiqueKits';
import { BoutiqueProduct } from '../types';

interface PortadaProps {
  onNavigateSimulador: () => void;
  onNavigateClub: () => void;
  onSelectArticle: (article: BlogArticle) => void;
  onAcquireKit: (product: BoutiqueProduct) => void;
}

export const Portada: React.FC<PortadaProps> = ({
  onNavigateSimulador,
  onNavigateClub,
  onSelectArticle,
  onAcquireKit,
}) => {
  // Blog category filter
  const [selectedCategory, setSelectedCategory] = useState<string>('TODOS');
  
  // Interactive mini simulator states
  const [resicoMonthly, setResicoMonthly] = useState<number>(290000);
  const [dividendAmount, setDividendAmount] = useState<number>(600000);
  const [royaltyRevenue, setRoyaltyRevenue] = useState<number>(500000);

  // Upcoming notifications state
  const [notifiedItems, setNotifiedItems] = useState<Record<string, boolean>>({});

  const handleNotifyMe = (id: string) => {
    setNotifiedItems(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      // Keep it true or notify
    }, 3000);
  };

  const filteredArticles = selectedCategory === 'TODOS'
    ? BLOG_ARTICLES
    : BLOG_ARTICLES.filter(a => a.category.includes(selectedCategory) || a.categoryTag.includes(selectedCategory));

  // Upcoming protocols list
  const upcomingProtocols = [
    {
      id: 'fideicomisos-garantia',
      title: 'Fideicomisos de Garantía & Doble Capa Fiduciaria',
      tag: 'SEGREGACIÓN PATRIMONIAL',
      dateEstimated: 'Noviembre 2025',
      description: 'Arquitectura de fideicomiso irrevocable para aislar cuentas bancarias y tesorería excedente de contingencias operativas, laborales o mercantiles de la empresa.',
      audience: 'Family Offices, Directores y Dueños de empresas con saldos en tesorería superiores a $2,000,000 MXN.',
      benefit: 'Protección legal contra embargos de cuentas bancarias y blindaje hereditario directo.'
    },
    {
      id: 'valuador-algoritmico',
      title: 'Motor Algorítmico de Valuación de Marcas IMPI & Software',
      tag: 'PRECIOS DE TRANSFERENCIA CLOUD',
      dateEstimated: 'Diciembre 2025',
      description: 'Plataforma en la nube para calcular de forma automatizada estudios de valuación intercuartil (arm’s length), generando el dictamen de sustento para deducir regalías según Art. 179 LISR.',
      audience: 'Despachos contables, agencias creativas y empresas de software con marcas registradas.',
      benefit: 'Ahorro de $45,000 a $90,000 MXN en honorarios de peritajes externos por cada estudio anual.'
    },
    {
      id: 'detector-discrepancia',
      title: 'Detector Preventivo de Discrepancia Bancaria SAT',
      tag: 'AUDITORÍA PREDICTIVA',
      dateEstimated: 'Enero 2026',
      description: 'Algoritmo inteligente de sincronización bancaria que contrasta en tiempo real los depósitos en tarjetas de crédito y cuentas personales contra los CFDI emitidos, evitando cartas invitación.',
      audience: 'Personas físicas, socios y profesionistas con múltiples tarjetas y cuentas financieras.',
      benefit: 'Elimina el riesgo de presunción de ingresos no declarados bajo el Artículo 91 del Código Fiscal.'
    },
    {
      id: 'boveda-nom151',
      title: 'Bóveda Notarial con Sellado Criptográfico NOM-151',
      tag: 'FECHA CIERTA DIGITAL',
      dateEstimated: 'Febrero 2026',
      description: 'Constancias de conservación de mensajes de datos con certificación de Prestador de Servicios de Certificación (PSC) autorizado por la Secretaría de Economía para dotar a contratos de fecha cierta.',
      audience: 'Directores que firman contratos de mutuo, actas de asamblea y licencias mercantiles remotas.',
      benefit: 'Plena validez jurídica ante el SAT y juzgados sin necesidad de acudir físicamente ante Notario.'
    },
    {
      id: 'app-offline-cfo',
      title: 'App Móvil Nativa Offline para Directores & CFOs',
      tag: 'MOVILIDAD EMPRESARIAL',
      dateEstimated: 'Primer Trimestre 2026',
      description: 'Aplicación para iOS y Android con base de datos encriptada en el dispositivo para simular regímenes, auditar proveedores 69-B y monitorear escudos fiscales en viajes internacionales sin internet.',
      audience: 'Directores Generales, Asesores Fiscales y Socios Directores en constante desplazamiento.',
      benefit: 'Acceso inmediato a fórmulas y cédulas con cifrado AES-256 de nivel militar.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-12 sm:space-y-16">
      
      {/* =========================================================================
          HERO PRINCIPAL: INVITACIÓN A LA DISRUPCIÓN FIDUCIARIA EN MÉXICO
         ========================================================================= */}
      <section className="relative bg-[#0a0a0a] text-[#fcf9f2] border-4 border-[#1c1c18] p-6 sm:p-10 md:p-14 shadow-2xl overflow-hidden">
        {/* Subtle broadsheet & fiduciary light accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#e5c07b]/15 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#1e4d2b]/20 via-transparent to-transparent pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center space-x-2 bg-[#1a1a18] border border-[#e5c07b]/40 px-3.5 py-1 text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase text-[#e5c07b] font-bold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#e5c07b] animate-ping"></span>
            <span>MOVIMIENTO NACIONAL DE DISRUPCIÓN FIDUCIARIA // MÉXICO 2025</span>
          </div>

          {/* Master Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-serif-broadsheet tracking-tight uppercase leading-[0.95] text-[#fcf9f2]">
            SÉ PARTE DE LA DISRUPCIÓN QUE ESTÁ CAMBIANDO EL DESTINO EMPRESARIAL DE MÉXICO
          </h1>

          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-[#e5c07b] to-transparent mx-auto"></div>

          {/* Subtitle */}
          <p className="text-base sm:text-xl font-serif text-[#dcd8cd] max-w-3xl mx-auto leading-relaxed">
            Por décadas, la alta ingeniería fiscal y los escudos corporativos de élite fueron un privilegio reservado para los conglomerados más ricos del país. <strong className="text-[#fcf9f2] font-semibold">En EMPRENDENMEX rompemos ese monopolio.</strong> Dotamos a los fundadores, directores y creadores de valor en México del rigor matemático y el amparo legal necesario para retener su riqueza lícita, erradicar la asfixia tributaria y construir soberanía patrimonial.
          </p>

          {/* Calls to Action */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onNavigateClub}
              className="bg-[#e5c07b] hover:bg-[#d4ad65] text-[#0a0a0a] px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-mono font-black uppercase tracking-wider flex items-center space-x-2.5 transition-all transform hover:-translate-y-0.5 shadow-lg border border-[#e5c07b]"
            >
              <span>UNIRME AL MOVIMIENTO // CLUB DE ESTRATEGAS</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onNavigateSimulador}
              className="bg-[#1f1f1d] hover:bg-[#2c2c28] text-[#fcf9f2] border-2 border-[#d6d0c2]/40 hover:border-[#fcf9f2] px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider flex items-center space-x-2 transition-all shadow-md"
            >
              <span>AUDITAR MI EMPRESA (SIMULADOR GRATUITO)</span>
            </button>
          </div>

          {/* Key Metrics Strip / Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#262624] text-left">
            <div className="bg-[#141412] p-3 sm:p-4 border border-[#2a2a26]">
              <div className="text-[10px] font-mono text-[#e5c07b] uppercase font-bold tracking-wider">
                LIQUIDEZ LIBERADA
              </div>
              <div className="text-xl sm:text-2xl font-mono font-black text-[#fcf9f2] mt-0.5">
                +$48.2M MXN
              </div>
              <div className="text-[10px] font-serif text-[#888] mt-0.5">
                Proyectada en tesorerías locales
              </div>
            </div>

            <div className="bg-[#141412] p-3 sm:p-4 border border-[#2a2a26]">
              <div className="text-[10px] font-mono text-[#3fa662] uppercase font-bold tracking-wider">
                LEGALIDAD PROBATORIA
              </div>
              <div className="text-xl sm:text-2xl font-mono font-black text-[#fcf9f2] mt-0.5">
                100% CFF & SCJN
              </div>
              <div className="text-[10px] font-serif text-[#888] mt-0.5">
                Art. 5-A y Tesis 161/2019
              </div>
            </div>

            <div className="bg-[#141412] p-3 sm:p-4 border border-[#2a2a26]">
              <div className="text-[10px] font-mono text-[#e5c07b] uppercase font-bold tracking-wider">
                RED DE DIRECTORES
              </div>
              <div className="text-xl sm:text-2xl font-mono font-black text-[#fcf9f2] mt-0.5">
                3,850+ C-Suite
              </div>
              <div className="text-[10px] font-serif text-[#888] mt-0.5">
                Fundadores en la alianza nacional
              </div>
            </div>

            <div className="bg-[#141412] p-3 sm:p-4 border border-[#2a2a26]">
              <div className="text-[10px] font-mono text-[#ff8080] uppercase font-bold tracking-wider">
                RIGOR ÉTICO
              </div>
              <div className="text-xl sm:text-2xl font-mono font-black text-[#fcf9f2] mt-0.5">
                0% ELUSIÓN
              </div>
              <div className="text-[10px] font-serif text-[#888] mt-0.5">
                Ingeniería societaria legítima
              </div>
            </div>
          </div>

          {/* Inspirational Fiduciary Quote */}
          <div className="pt-2">
            <p className="text-xs sm:text-sm font-serif italic text-[#c5c2b8] max-w-2xl mx-auto border-l-2 border-[#e5c07b] pl-3 py-1 text-left sm:text-center sm:border-l-0 sm:pl-0">
              «El verdadero patriotismo no es pagar impuestos de más por desconocimiento de las leyes; es reinvertir con inteligencia matemática y certeza legal en el futuro productivo de México.»
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECCIÓN 1: INVESTIGACIÓN PRINCIPAL & PORTADA EDITORIAL BROADSHEET
         ========================================================================= */}
      <div>
        <div className="border-b-2 border-[#1c1c18] pb-6 mb-8 text-center">
          <div className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-[#555] font-bold mb-2 flex items-center justify-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#ba1a1a]"></span>
            <span>INVESTIGACIÓN DE FONDO // GACETA FIDUCIARIA SUPREMA</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-serif-broadsheet uppercase tracking-tight text-[#0a0a0a] max-w-5xl mx-auto leading-none">
            LA NUEVA DOCTRINA DE RAZÓN DE NEGOCIOS Y EL BLINDAJE DE INTANGIBLES EN MÉXICO
          </h1>
          <p className="text-base sm:text-lg font-serif italic text-[#333] max-w-3xl mx-auto mt-4 leading-relaxed">
            Cómo los directores y family offices estructuran holdings de propiedad intelectual para mitigar hasta un 70% de la fricción tributaria bajo el estricto amparo del Artículo 5-A del Código Fiscal de la Federación.
          </p>
        </div>

        {/* 3-Column Broadsheet Front Page Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Lead Editorial Story (7 Cols) */}
          <div className="lg:col-span-7 pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-[#d6d0c2] pb-6 lg:pb-0">
            <div className="flex items-center space-x-2 text-[10px] font-mono text-[#666] uppercase mb-2">
              <span className="font-bold text-[#0a0a0a]">TESIS JURISPRUDENCIAL</span>
              <span>·</span>
              <span>EJERCICIO 2025</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold font-serif-broadsheet text-[#0a0a0a] uppercase leading-tight mb-3">
              El Fin de las Deducciones Superficiales: La Batalla de la Materialidad Probatoria
            </h2>

            <div className="text-sm font-serif text-[#333] leading-relaxed space-y-4">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#0a0a0a]">
                D urante la última década, los contribuyentes en México operaron bajo la creencia de que un simple comprobante fiscal digital (CFDI) amparaba cualquier egreso operativo. Hoy, los algoritmos de fiscalización predictiva del SAT detectan en tiempo real cualquier discrepancia entre el objeto social notarial y la deducibilidad contable.
              </p>
              <p>
                La respuesta técnica no radica en elusión ni en estrategias grises, sino en la <strong>Economía de Opción Legítima</strong>: el derecho inalienable consagrado en la Constitución de seleccionar la vía jurídica mercantil más eficiente para conducir una empresa lícita.
              </p>
              <p>
                Al segregar las marcas registradas, el código de software o las patentes operativas dentro de una entidad fiduciaria independiente, el pago de regalías y derechos de uso se transforma en un gasto estrictamente indispensable y amortizable, reduciendo la tasa efectiva consolidada de un 35% nominal a menos del 10% legal.
              </p>
            </div>

            {/* Interactive Callout to Simulator */}
            <div className="mt-8 bg-[#0a0a0a] text-[#fcf9f2] p-6 border border-[#0a0a0a] shadow-md">
              <div className="flex items-center justify-between text-[10px] font-mono uppercase text-[#e5c07b] font-bold mb-2">
                <span>HERRAMIENTA ACTIVA</span>
                <span>AUDITORÍA EN TIEMPO REAL</span>
              </div>
              <h3 className="text-xl font-bold font-serif-broadsheet uppercase tracking-tight text-[#fcf9f2]">
                ¿Desea auditar su tasa impositiva real hoy mismo?
              </h3>
              <p className="text-xs font-serif text-[#c8c6c5] mt-1 mb-4 leading-relaxed">
                Ejecute el modelo algorítmico REV. 2025.1 en el simulador táctico para identificar sus 3 rutas de liquidez liberada.
              </p>
              <button
                onClick={onNavigateSimulador}
                className="bg-[#fcf9f2] text-[#0a0a0a] px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#ebe7dc] transition-colors flex items-center space-x-2"
              >
                <span>ABRIR SIMULADOR TÁCTICO INTEGRAL</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Secondary Broadsheet Dispatches (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Dispatch 1 */}
            <div className="bg-[#ffffff] border border-[#d6d0c2] p-5 shadow-xs">
              <div className="text-[9px] font-mono text-[#ba1a1a] uppercase font-bold tracking-wider mb-1">
                ALERTA NORMATIVA SAT
              </div>
              <h3 className="text-lg font-bold font-serif-broadsheet uppercase text-[#0a0a0a] mb-2 leading-snug">
                El Riesgo Oculto del Umbral de los $3.5 Millones en RESICO
              </h3>
              <p className="text-xs font-serif text-[#555] leading-relaxed mb-3">
                Superar el umbral por un solo peso sin una transición pactada provoca la expulsión automática al régimen PFAE, detonando cobros retroactivos de ISR al 35% con recargos de actualización.
              </p>
              <button
                onClick={() => onSelectArticle(BLOG_ARTICLES[0])}
                className="text-xs font-mono font-bold text-[#0a0a0a] uppercase underline hover:text-[#555] flex items-center space-x-1"
              >
                <span>Leer Análisis & Solución SAS</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* Dispatch 2 */}
            <div className="bg-[#ffffff] border border-[#d6d0c2] p-5 shadow-xs">
              <div className="text-[9px] font-mono text-[#1e4d2b] uppercase font-bold tracking-wider mb-1">
                ARQUITECTURA TRANSFRONTERIZA
              </div>
              <h3 className="text-lg font-bold font-serif-broadsheet uppercase text-[#0a0a0a] mb-2 leading-snug">
                Estructuración LLC en EE.UU. sin Sanción de $25,000 USD del IRS
              </h3>
              <p className="text-xs font-serif text-[#555] leading-relaxed mb-3">
                Cómo cobrar en dólares mediante entidades en Wyoming o Delaware, canalizando utilidades con exención de retenciones bajo el Convenio Bilateral México-Estados Unidos.
              </p>
              <button
                onClick={() => onSelectArticle(BLOG_ARTICLES[1])}
                className="text-xs font-mono font-bold text-[#0a0a0a] uppercase underline hover:text-[#555] flex items-center space-x-1"
              >
                <span>Revisar Guía IRS Form 5472</span>
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
                Ahorro Anual Consolidado: +$1,132,186 MXN
              </div>
              <p className="text-xs font-serif text-[#555] leading-relaxed">
                Reestructuración societaria migrando de PFAE a una estructura Holding con licenciamiento de código propietario y contratos de soporte técnico cross-border.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* =========================================================================
          SECCIÓN 2: LA GACETA CON PUBLICACIONES DIARIAS (AUTOGENERACIÓN)
         ========================================================================= */}
      <section className="space-y-4">
        <div className="border-b-2 border-[#1c1c18] pb-3 flex flex-wrap items-end justify-between gap-2">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#ba1a1a] font-bold">
              CIRCULACIÓN NACIONAL // CRITERIOS VINCULANTES
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-serif-broadsheet uppercase text-[#0a0a0a] tracking-tight">
              LA GACETA DIARIA FIDUCIARIA
            </h2>
          </div>
          <p className="text-xs font-serif text-[#555] italic max-w-md">
            Despachos técnicos emitidos diariamente con información de valor práctico, alertas normativas y autogenerador interactivo.
          </p>
        </div>

        {/* Daily gazette component with instant autogeneration */}
        <GacetaDiariaSection
          onNavigateSimulador={onNavigateSimulador}
          onNavigateClub={onNavigateClub}
        />
      </section>

      {/* =========================================================================
          SECCIÓN 3: GALERÍA DE TODAS LAS ENTRADAS DE BLOG (ANÁLISIS DE KITS)
         ========================================================================= */}
      <section className="space-y-6">
        <div className="border-b-2 border-[#1c1c18] pb-3 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#555] font-bold">
              BIBLIOTECA EDITORIAL & DOCTRINA PRÁCTICA
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-serif-broadsheet uppercase text-[#0a0a0a] tracking-tight">
              ANÁLISIS Y ENTRADAS DEL BLOG: KITS DE SOLUCIONES
            </h2>
          </div>
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
            {['TODOS', 'INGENIERÍA SOCIETARIA', 'CROSS-BORDER', 'VALUACIÓN'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 uppercase font-semibold transition-colors border ${
                  selectedCategory === cat
                    ? 'bg-[#0a0a0a] text-[#fcf9f2] border-[#0a0a0a]'
                    : 'bg-[#ffffff] text-[#1c1c18] border-[#d6d0c2] hover:bg-[#ebe7dc]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredArticles.map((article) => {
            const kit = article.kitIdAssociated
              ? DETAILED_BOUTIQUE_KITS.find(k => k.id === article.kitIdAssociated)
              : null;

            return (
              <div 
                key={article.id}
                className="bg-[#ffffff] border-2 border-[#1c1c18] flex flex-col justify-between hover:shadow-lg transition-all duration-200 group"
              >
                {/* Card Top */}
                <div className="p-6 space-y-4">
                  {/* Category & Date */}
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#666] border-b border-[#eee] pb-2">
                    <span className="font-bold uppercase text-[#0a0a0a] bg-[#f5f2ea] px-2 py-0.5 border border-[#d6d0c2]">
                      {article.categoryTag}
                    </span>
                    <span>{article.readTime}</span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-serif-broadsheet uppercase text-[#0a0a0a] group-hover:text-[#ba1a1a] transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs font-serif text-[#555] mt-2 line-clamp-3 leading-relaxed">
                      {article.subtitle}
                    </p>
                  </div>

                  {/* Beneficiarios & En qué casos aplica */}
                  <div className="bg-[#fbf9f2] border border-[#e5dfd2] p-3 text-xs space-y-2">
                    <div>
                      <span className="font-mono font-bold text-[9px] text-[#ba1a1a] uppercase block">
                        A QUIÉN BENEFICIA:
                      </span>
                      <p className="font-serif text-[#333] text-[11px] leading-snug line-clamp-2">
                        {article.targetAudience}
                      </p>
                    </div>
                    <div className="border-t border-[#ede7db] pt-1.5">
                      <span className="font-mono font-bold text-[9px] text-[#1e4d2b] uppercase block">
                        EN QUÉ CASOS APLICA:
                      </span>
                      <p className="font-serif text-[#333] text-[11px] leading-snug line-clamp-2">
                        {article.applicableCase}
                      </p>
                    </div>
                  </div>

                  {/* Financial Impact on Income */}
                  <div className="bg-[#0a0a0a] text-[#fcf9f2] p-3 border border-[#0a0a0a]">
                    <div className="text-[9px] font-mono text-[#e5c07b] font-bold uppercase mb-1 flex items-center space-x-1">
                      <DollarSign className="w-3 h-3" />
                      <span>IMPACTO EN GANANCIAS / INGRESOS:</span>
                    </div>
                    <p className="text-[11px] font-serif text-[#d8d5cd] leading-tight line-clamp-3">
                      {article.financialImpactSummary}
                    </p>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="p-4 bg-[#f8f5ed] border-t border-[#1c1c18] space-y-2">
                  <button
                    onClick={() => onSelectArticle(article)}
                    className="w-full bg-[#1c1c18] hover:bg-[#333] text-[#fcf9f2] py-2 px-3 text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-[#e5c07b]" />
                    <span>LEER ANÁLISIS COMPLETO</span>
                  </button>

                  {kit && (
                    <button
                      onClick={() => onAcquireKit(kit)}
                      className="w-full bg-[#ffffff] hover:bg-[#eee8dc] text-[#1c1c18] border border-[#1c1c18] py-1.5 px-3 text-[11px] font-mono font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-colors"
                    >
                      <Download className="w-3 h-3 text-[#1e4d2b]" />
                      <span>DESCARGAR KIT EN ZIP (${kit.priceUSD} USD)</span>
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          SECCIÓN 4: OTRA SECCIÓN PARA LOS SIMULADORES
         ========================================================================= */}
      <section className="space-y-6">
        <div className="border-b-2 border-[#1c1c18] pb-3 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#1e4d2b] font-bold flex items-center space-x-1.5">
              <Calculator className="w-3.5 h-3.5" />
              <span>CÁMARA TÁCTICA // CÁLCULO NUMÉRICO DE ALTA PRECISIÓN</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-serif-broadsheet uppercase text-[#0a0a0a] tracking-tight">
              SUITE DE SIMULADORES FISCALES & DE RENTABILIDAD
            </h2>
          </div>
          <p className="text-xs font-serif text-[#555] italic max-w-md">
            Herramientas algorítmicas en vivo para modelar el impacto de escudos fiduciarios, regímenes impositivos y extracción de utilidades.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* 1. Main Tactical Simulator Card */}
          <div className="bg-[#0a0a0a] text-[#fcf9f2] border-2 border-[#0a0a0a] p-6 flex flex-col justify-between shadow-md relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[10px] font-mono text-[#e5c07b] font-bold">
                <span>SIMULADOR PRINCIPAL V3.8</span>
                <span className="bg-[#1f1f1d] px-2 py-0.5 border border-[#444]">MOTOR COMPLETO</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif-broadsheet uppercase tracking-tight text-[#fcf9f2]">
                Simulador Táctico Integral de Carga Impositiva
              </h3>
              <p className="text-xs font-serif text-[#c5c2ba] leading-relaxed">
                Diagnóstico fiduciario en tiempo real para contrastar PFAE, RESICO, Persona Moral e Informal. Modela deducciones, escudos patrimoniales y calcula las 3 rutas estratégicas de liquidez liberada con descarga de dictamen oficial en PDF.
              </p>
              
              <div className="bg-[#1f1f1d] p-4 border border-[#333] space-y-2 text-xs font-mono">
                <div className="flex justify-between text-[#aaa]">
                  <span>Algoritmo Base:</span>
                  <span className="text-[#fff]">LISR 2025 + CFF 5-A</span>
                </div>
                <div className="flex justify-between text-[#aaa]">
                  <span>Precisión Impositiva:</span>
                  <span className="text-[#80ff9f]">99.8% Calibrado</span>
                </div>
                <div className="flex justify-between text-[#aaa]">
                  <span>Dictamen PDF:</span>
                  <span className="text-[#e5c07b]">Folio Oficial SAT</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={onNavigateSimulador}
                className="w-full bg-[#fcf9f2] hover:bg-[#ebe7dc] text-[#0a0a0a] py-3 text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors shadow-sm"
              >
                <span>ABRIR SIMULADOR INTEGRAL AHORA</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 2. Interactive Mini-Simulator: RESICO Umbral Calculator */}
          <div className="bg-[#ffffff] border-2 border-[#1c1c18] p-6 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[10px] font-mono text-[#ba1a1a] font-bold">
                <span>HERRAMIENTA TÁCTICA #01</span>
                <span>MONITOREO $3.5M</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-serif-broadsheet uppercase text-[#0a0a0a]">
                Simulador de Riesgo RESICO & Transición
              </h3>
              <p className="text-xs font-serif text-[#555] leading-relaxed">
                Superar los $3.5M en RESICO detona el cobro retroactivo de ISR al 35%. Ajuste su facturación mensual para medir su fecha límite:
              </p>

              {/* Slider */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-[#666]">Facturación Mensual:</span>
                  <span className="font-bold text-[#0a0a0a]">${resicoMonthly.toLocaleString('es-MX')} MXN</span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="450000"
                  step="10000"
                  value={resicoMonthly}
                  onChange={(e) => setResicoMonthly(Number(e.target.value))}
                  className="w-full accent-[#0a0a0a] cursor-pointer"
                />
              </div>

              {/* Dynamic Calculation Box */}
              {(() => {
                const anual = resicoMonthly * 12;
                const isOver = anual > 3500000;
                const mesesParaTope = Math.min(12, Math.floor(3500000 / resicoMonthly));
                const golpeFiscal = isOver ? (anual * 0.35) - (anual * 0.02) : 0;

                return (
                  <div className={`p-3 border text-xs font-mono space-y-1.5 ${
                    isOver ? 'bg-[#fff5f5] border-[#ba1a1a] text-[#ba1a1a]' : 'bg-[#f4f8f5] border-[#1e4d2b] text-[#1e4d2b]'
                  }`}>
                    <div className="flex justify-between font-bold">
                      <span>Proyección Anual:</span>
                      <span>${anual.toLocaleString('es-MX')} MXN</span>
                    </div>
                    {isOver ? (
                      <div>
                        <div className="font-bold flex items-center space-x-1 text-[#ba1a1a]">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>¡REBASE DE RESICO EN EL MES {mesesParaTope}!</span>
                        </div>
                        <div className="text-[10px] text-[#444] mt-1">
                          Riesgo de pago retroactivo: ~${Math.round(golpeFiscal).toLocaleString('es-MX')} MXN en PFAE.
                        </div>
                      </div>
                    ) : (
                      <div className="text-[10px] text-[#1e4d2b]">
                        ✓ Dentro del umbral seguro de RESICO (Tasa marginal del 1.5% al 2.5%).
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>

            <div className="pt-4">
              <button
                onClick={() => onSelectArticle(BLOG_ARTICLES[0])}
                className="w-full bg-[#1c1c18] hover:bg-[#333] text-[#fcf9f2] py-2.5 text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-colors"
              >
                <span>VER PROTOCOLO DE BLINDAJE SAS</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 3. Interactive Mini-Simulator: CUFIN vs Asimilados */}
          <div className="bg-[#ffffff] border-2 border-[#1c1c18] p-6 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[10px] font-mono text-[#1e4d2b] font-bold">
                <span>HERRAMIENTA TÁCTICA #02</span>
                <span>DIVIDENDOS CUFIN</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-serif-broadsheet uppercase text-[#0a0a0a]">
                Simulador de Retiro de Utilidades Netas
              </h3>
              <p className="text-xs font-serif text-[#555] leading-relaxed">
                Compare el retiro vía nómina/asimilados (35% ISR) contra el decreto de dividendos con acta protocolizada y saldo en CUFIN (0% adicional):
              </p>

              {/* Slider */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-[#666]">Monto de Utilidad a Retirar:</span>
                  <span className="font-bold text-[#0a0a0a]">${dividendAmount.toLocaleString('es-MX')} MXN</span>
                </div>
                <input
                  type="range"
                  min="200000"
                  max="2000000"
                  step="50000"
                  value={dividendAmount}
                  onChange={(e) => setDividendAmount(Number(e.target.value))}
                  className="w-full accent-[#0a0a0a] cursor-pointer"
                />
              </div>

              {/* Dynamic Calculation */}
              {(() => {
                const perdidaAsimilados = dividendAmount * 0.35;
                const netoAsimilados = dividendAmount * 0.65;
                const netoCufin = dividendAmount;

                return (
                  <div className="bg-[#f5f2ea] border border-[#1c1c18] p-3 text-xs font-mono space-y-1">
                    <div className="flex justify-between text-[#ba1a1a]">
                      <span>Vía Asimilados (35% ISR):</span>
                      <span>-${Math.round(perdidaAsimilados).toLocaleString('es-MX')} MXN</span>
                    </div>
                    <div className="flex justify-between text-[#1e4d2b] font-bold border-t border-[#d6d0c2] pt-1">
                      <span>Vía CUFIN Notariada:</span>
                      <span>${Math.round(netoCufin).toLocaleString('es-MX')} MXN netos</span>
                    </div>
                    <div className="text-[10px] text-[#555] pt-0.5">
                      Liquidez retenida en el bolsillo: +${Math.round(perdidaAsimilados).toLocaleString('es-MX')} MXN.
                    </div>
                  </div>
                );
              })()}
            </div>

            <div className="pt-4">
              <button
                onClick={() => onSelectArticle(BLOG_ARTICLES[0])}
                className="w-full bg-[#1c1c18] hover:bg-[#333] text-[#fcf9f2] py-2.5 text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-colors"
              >
                <span>VER CÉDULA DE ASAMBLEAS CUFIN</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECCIÓN 5: OTRA CON TODO LO QUE ESTÁ EN "PRÓXIMAMENTE"
         ========================================================================= */}
      <section className="space-y-6">
        <div className="border-b-2 border-[#1c1c18] pb-3 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#ba1a1a] font-bold flex items-center space-x-2">
              <span className="bg-[#0a0a0a] text-[#e5c07b] px-2 py-0.5 font-bold">
                PRÓXIMAMENTE
              </span>
              <span>LABORATORIO DE DESARROLLO FIDUCIARIO // EXPEDICIÓN 2025-2026</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-serif-broadsheet uppercase text-[#0a0a0a] tracking-tight">
              PROYECTOS Y PROTOCOLOS EN FASE DE HOMOLOGACIÓN
            </h2>
          </div>
          <p className="text-xs font-serif text-[#555] italic max-w-md">
            Instrumentos de alta ingeniería patrimonial actualmente en validación notarial y desarrollo algorítmico.
          </p>
        </div>

        {/* Upcoming protocols cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingProtocols.map((protocol) => {
            const isNotified = notifiedItems[protocol.id];

            return (
              <div 
                key={protocol.id}
                className="bg-[#faf8f2] border-2 border-dashed border-[#1c1c18] p-6 flex flex-col justify-between hover:border-solid hover:bg-[#ffffff] transition-all relative"
              >
                {/* Top Badge */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="bg-[#0a0a0a] text-[#e5c07b] text-[9px] font-mono font-bold px-2 py-0.5 uppercase tracking-wider">
                      PRÓXIMAMENTE
                    </span>
                    <span className="text-[10px] font-mono text-[#777] font-semibold">
                      {protocol.dateEstimated}
                    </span>
                  </div>

                  <div className="text-[10px] font-mono text-[#555] font-bold uppercase">
                    {protocol.tag}
                  </div>

                  <h3 className="text-lg font-bold font-serif-broadsheet uppercase text-[#0a0a0a] leading-tight">
                    {protocol.title}
                  </h3>

                  <p className="text-xs font-serif text-[#444] leading-relaxed">
                    {protocol.description}
                  </p>

                  <div className="bg-[#f2efe6] p-3 text-xs space-y-1.5 border border-[#e2ddd0]">
                    <div>
                      <span className="font-mono font-bold text-[9px] text-[#666] uppercase block">
                        DIRIGIDO A:
                      </span>
                      <p className="font-serif text-[#333] text-[11px] leading-snug">
                        {protocol.audience}
                      </p>
                    </div>
                    <div className="border-t border-[#dcd6c8] pt-1">
                      <span className="font-mono font-bold text-[9px] text-[#1e4d2b] uppercase block">
                        BENEFICIO ESPERADO:
                      </span>
                      <p className="font-serif text-[#333] text-[11px] leading-snug">
                        {protocol.benefit}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Notification Button */}
                <div className="pt-5 border-t border-[#e5dfd2] mt-4">
                  <button
                    onClick={() => handleNotifyMe(protocol.id)}
                    className={`w-full py-2 px-3 text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-colors border ${
                      isNotified
                        ? 'bg-[#1e4d2b] text-[#fcf9f2] border-[#1e4d2b]'
                        : 'bg-[#ffffff] text-[#1c1c18] border-[#1c1c18] hover:bg-[#0a0a0a] hover:text-[#fcf9f2]'
                    }`}
                  >
                    {isNotified ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#e5c07b]" />
                        <span>¡SOLICITUD REGISTRADA!</span>
                      </>
                    ) : (
                      <>
                        <Bell className="w-3.5 h-3.5 text-[#ba1a1a]" />
                        <span>NOTIFICARME AL LANZAMIENTO</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
