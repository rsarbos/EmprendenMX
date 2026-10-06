import React, { useState } from 'react';
import { 
  BookOpen, 
  ShieldCheck, 
  Scale, 
  Copy, 
  Check, 
  Sparkles, 
  FileText, 
  Layers, 
  Building2, 
  TrendingUp, 
  Terminal, 
  Award,
  ArrowRight,
  Download,
  Share2,
  Cpu
} from 'lucide-react';

interface AcercaDeProps {
  onNavigateSimulador: () => void;
  onNavigateClub: () => void;
}

export const AcercaDe: React.FC<AcercaDeProps> = ({
  onNavigateSimulador,
  onNavigateClub,
}) => {
  const [copiedMasterContext, setCopiedMasterContext] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);

  // Generator State
  const [selectedTopic, setSelectedTopic] = useState<'art5a' | 'resico' | 'mutuo' | 'regalias' | 'crossborder'>('art5a');
  const [selectedFormat, setSelectedFormat] = useState<'hilo' | 'newsletter' | 'memo' | 'guion'>('newsletter');
  const [selectedTone, setSelectedTone] = useState<'rigor' | 'alerta' | 'tactico'>('rigor');

  // MASTER CONTEXT DOSSIER TEXT
  const masterContextText = `[DOSSIER DE CONTEXTO MAESTRO - EMPRENDENMEX 2025/2026]
NOMBRE DE LA ENTIDAD: EMPRENDENMEX (Diario Independiente de Alta Estrategia)
LEMA DOCTRINAL: Fundado bajo rigor matemático y disciplina fiduciaria.
NATURALEZA: Gaceta de ingeniería financiera, terminal cuantitativa de blindaje fiscal y círculo de directores corporativos en México.

1. MISIÓN Y PROPÓSITO:
Brindar a empresarios, directores generales y family offices herramientas matemáticas, análisis jurídicos de vanguardia y contratos notariados para optimizar su carga tributaria legalmente bajo la Doctrina de Economía de Opción y Razón de Negocios (Art. 5-A CFF), reduciendo tasas efectivas del ~35% a menos del ~10% con sustancia corporativa probatoria.

2. HERRAMIENTAS Y USOS PRINCIPALES:
- SIMULADOR TÁCTICO DE INGENIERÍA FISCAL (V3.8): Modela en tiempo real ingresos mensuales, porcentajes de deducciones CFDI 4.0, régimen operativo (PFAE, RESICO, Persona Moral, Informal) y sector de negocio (Tech, Servicios, E-commerce, Inmobiliario). Calcula absorción impositiva comparada, potencial de liquidez liberada anual y 3 rutas de blindaje legal.
- HACKS TÁCTICOS CUANTIFICADOS:
  a) Estructuración de Mutuo Intercompañía (Art. 27 Fracc. VII LISR): Préstamos con pagarés notariales e intereses deducibles a tasa fija interbancaria.
  b) Licenciamiento de Propiedad Intelectual y Marcas (Art. 32 Fracc. I y Art. 167 LISR): Segregación de marcas y software a una holding para cobro de regalías amortizables sin doble ISR ni dividend tax.
  c) Plan de Retiro Corporativo & PPR (Art. 151 Fracc. V LISR): Deducciones personales directas con devolución asegurada en declaración anual de Abril.
- BOUTIQUE MODULAR NOTARIAL: Kits documentales de uso perpetuo validados con fe pública:
  * Kit #01: Blindaje Estatutario SAS (cláusulas drag-along / tag-along, control de Administrador Único).
  * Kit #02: Paquete Estructuración LLC (Operating Agreements Wyoming/Delaware para socios mexicanos con guía IRS Form 5472 y 1120).
  * Kit #03: Protocolo de Regalías de Marca (estudio de razón de negocios y contrato de cesión IMPI conforme a precios de transferencia).
- CLUB DE ESTRATEGAS & MESA PRIVADA DE CONSEJO: Membresía institucional con dictámenes colegiados, peritos certificados ante la Prodecon y la Barra Mexicana de Abogados, y directorio confidencial C-Suite.
- DOSSIERS RESERVADOS & JURISPRUDENCIA: Archivo técnico con precedentes del TFJA, criterios no vinculativos del SAT y tesis de materialidad.

3. MARCO NORMATIVO RECIENTE (EJERCICIO FISCAL 2025/2026):
- Código Fiscal de la Federación (Art. 5-A): El SAT puede recaracterizar actos jurídicos que carezcan de razón de negocios. EMPRENDENMEX estructura sustancia económica, asambleas notariales y contratos con fecha cierta para blindar al contribuyente.
- LISR Art. 113-E (Tope RESICO $3,500,000 MXN): Superar este umbral provoca expulsión retroactiva a PFAE con multas y recargos. Estrategia recomendada: transición programada a holding SAPI antes de alcanzar el tope.
- Art. 91 CFF (Discrepancia Fiscal): Monitoreo de depósitos bancarios >$15k por convenio CNBV-SAT. Riesgo de presunción de ingresos al 35% + 70% de multas.
- LISR Título II vs Título IV: Arbitraje de tasas aprovechando la tasa corporativa y deducciones frente a la tarifa progresiva de personas físicas.

4. VOZ Y ESTILO EDITORIAL:
Tono de broadsheet financiero clásico (estilo Financial Times o Wall Street Journal histórico combinado con terminal Bloomberg). Vocabulario formal: fiduciario, mutuo, razón de negocios, arbitraje impositivo, fecha cierta, materialidad probatoria, economía de opción, absorción impositiva. Cero sensacionalismo; estricto sustento jurídico y matemático.`;

  const handleCopyMasterContext = async () => {
    try {
      await navigator.clipboard.writeText(masterContextText);
      setCopiedMasterContext(true);
      setTimeout(() => setCopiedMasterContext(false), 3000);
    } catch {
      // Fallback
    }
  };

  // DYNAMIC GENERATED DRAFTS BASED ON INPUT
  const generateDraft = () => {
    if (selectedFormat === 'hilo') {
      if (selectedTopic === 'art5a') {
        return `🧵 HILO ESTRATÉGICO: Por qué el 80% de las empresas en México perderán sus deducciones en 2025 (y cómo salvarlas bajo el Art. 5-A del CFF).

1/5 Muchos directores asumen que tener un CFDI 4.0 timbrado es suficiente para deducir un gasto. Falso. Los algoritmos del SAT hoy fiscalizan bajo la Doctrina de Sustancia Económica. Si tu gasto carece de "Razón de Negocios", el SAT lo recaracteriza de oficio.

2/5 ¿Qué exige el Artículo 5-A del Código Fiscal de la Federación? Que el beneficio económico cuantificable del acto jurídico sea superior al beneficio fiscal obtenido. No bastan facturas: se requieren minutas de asamblea, entregables fechados y contratos de fecha cierta.

3/5 El caso más común: honorarios de asesoría o software pagados entre socios. Sin un expediente probatorio notariado, el SAT presume simulación de operaciones y reclama el 35% de ISR omitido más multas de hasta el 70%.

4/5 La Economía de Opción legítima: Segregar activos intangibles (marcas registradas ante IMPI, código fuente) hacia una entidad holding, documentando el pago de regalías mediante estudios de precios de transferencia. Esto reduce la tasa efectiva del 30%+ al 8-11% con total amparo legal.

5/5 En @Emprendenmex hemos modelado este cálculo en el Simulador de Ingeniería Fiscal V3.8. Audita tu caso en tiempo real y descarga tu dictamen cuantitativo con folio protocolar certificado.`;
      } else if (selectedTopic === 'resico') {
        return `🧵 HILO ESTRATÉGICO: La trampa de los $3.5 Millones en RESICO que puede quebrar a tu negocio este año.

1/5 El Régimen Simplificado de Confianza (RESICO) fue vendido como una panacea tributaria: tasas de ISR del 1.0% al 2.5%. Pero tiene una cláusula letal en el Artículo 113-E de la Ley del ISR.

2/5 Si tu facturación anual supera $3,500,000 MXN por un solo peso ($291,666 MXN mensuales), el SAT no te cobra la diferencia: TE EXPULSA DE OFICIO a PFAE con efectos retroactivos a Enero del ejercicio fiscal.

3/5 ¿El resultado? Te exigen el cálculo bajo la tarifa progresiva de hasta el 35% de ISR de todos los meses transcurridos, más recargos por actualización y multas, sin que hayas guardado los comprobantes de deducciones porque "en RESICO no se deducía".

4/5 ¿Cómo protegerse? Monitoreo preventivo del flujo. Cuando la facturación alcance los $2.8M anuales, se debe estructurar una transición anticipada a una Sociedad Anónima Promotora de Inversión (S.A.P.I.) o Holding para blindar el patrimonio personal.

5/5 Descubre en el Simulador de @Emprendenmex exactamente en qué mes tu facturación excede el límite y modela la arquitectura patrimonial de sustitución antes de que el SAT detone la auditoría.`;
      } else if (selectedTopic === 'mutuo') {
        return `🧵 HILO ESTRATÉGICO: El Contrato de Mutuo Intercompañía: Cómo fondear tu empresa y deducir intereses sin pagar doble ISR.

1/5 Cuando un socio inyecta capital a su propia empresa, la mayoría comete el error de hacer aportaciones para futuros aumentos de capital o transferencias directas sin contrato. Error costoso.

2/5 Conforme al Art. 27 Fracción VII de la LISR y Art. 143 de la LGTOC, los préstamos estructurados como Contrato de Mutuo con Interés permiten a la empresa deducir los intereses pagados a tasa fija interbancaria, reduciendo su utilidad gravable.

3/5 Requisitos indispensables para evitar que el SAT lo clasifique como dividendo ficto:
- Pagarés mercantiles individualizados.
- Contrato ratificado ante fedatario público (Fecha Cierta).
- Flujo bancario real y tasa de interés a valor de mercado.

4/5 En nuestro benchmark financiero, una estructuración de mutuo intercompañía libera en promedio +$362,299 MXN anuales de liquidez operativa que antes se iban en impuestos no planificados.

5/5 Encuentra la minuta notarial completa en la Boutique Modular de @Emprendenmex o corre la simulación para tu facturación mensual.`;
      } else if (selectedTopic === 'regalias') {
        return `🧵 HILO ESTRATÉGICO: Licenciamiento de Intangibles: La arquitectura que usan las multinacionales aplicada a empresas mexicanas.

1/5 Tu marca, tu software, tus metodologías y tus listas de clientes valen dinero. Pero si los mantienes dentro de la empresa operativa, están expuestos a embargos mercantiles y gravados con doble tasa (30% corporativo + 10% dividendos).

2/5 La estrategia fiduciaria: Registrar la marca ante el IMPI o inscribir el software ante Indautor a nombre de una Holding o Fideicomiso. La holding otorga una licencia de uso a la empresa operativa a cambio de una regalía mensual.

3/5 Fundamento legal: Art. 32 Fracción I y Art. 167 LISR. La empresa operativa deduce al 100% el pago de regalías, amortizando el intangible y reduciendo su coeficiente de utilidad fiscal.

4/5 La clave es el sustento de Razón de Negocios (Art. 5-A CFF): el contrato debe respaldarse con un estudio técnico de precios de transferencia para fijar una tasa arm’s length defendible ante el SAT.

5/5 Esta estrategia genera en promedio +$543,449 MXN anuales de liquidez neta en empresas con facturaciones de $450k/mes. Audita tu caso en @Emprendenmex.`;
      } else {
        return `🧵 HILO ESTRATÉGICO: Estructuración Cross-Border México-EE.UU.: El blindaje LLC sin caer en doble tributación internacional.

1/5 Cada vez más fundadores mexicanos abren una LLC en Delaware o Wyoming para cobrar en dólares. Pero el 90% ignora los tratados fiscales y termina con contingencias ante el IRS y el SAT simultáneamente.

2/5 Una Single-Member LLC es una "Disregarded Entity" para el IRS. Esto significa que no paga impuesto corporativo en EE.UU., sino que el ingreso se atribuye al socio mexicano. Pero si no presentas la Forma 5472 y 1120 pro-forma, la multa mínima del IRS es de $25,000 USD por año.

3/5 Ante el SAT mexicano: Si retiras las utilidades a tu cuenta personal en México sin un Operating Agreement blindado, el SAT te exigirá el 35% de ISR sin permitirte acreditar gastos operativos realizados en EE.UU.

4/5 La solución fiduciaria: Contrato de servicios técnicos transfronterizos entre la empresa mexicana y la LLC estadounidense, estructurando retenciones en la fuente bajo el Tratado de Doble Tributación México-Estados Unidos.

5/5 Adquiere el paquete completo de Operating Agreement con guía Form 5472 en la Boutique Modular de @Emprendenmex.`;
      }
    } else if (selectedFormat === 'newsletter') {
      return `CRÓNICA FIDUCIARIA // EDICIÓN EXTRAORDINARIA EMPRENDENMEX
VOL. XXIV — MATERIA FISCAL & GOBERNANZA CORPORATIVA 2025

TEMA CENTRAL: ${selectedTopic === 'art5a' ? 'La Materialidad Probatoria en el Artículo 5-A del CFF' : selectedTopic === 'resico' ? 'El Abismo Financiero del Límite de $3.5M en RESICO' : selectedTopic === 'mutuo' ? 'La Mecánica Fiduciaria del Mutuo Intercompañía' : selectedTopic === 'regalias' ? 'Monetización y Blindaje de Marcas Vía Regalías' : 'Estructuración México-EE.UU. y Cumplimiento IRS 5472'}

Estimados Directores y Estrategas Patrimoniales:

En el entorno tributario mexicano de 2025, la frontera entre la rentabilidad y la contingencia fiscal ya no se decide en el volumen de ventas, sino en la calidad probatoria de la estructura jurídica corporativa. 

Los modelos tradicionales de contabilidad reactiva —aquellos que se limitan a esperar el fin de mes para calcular impuestos sobre facturas emitidas y recibidas— han quedado obsoletos frente al motor de auditoría automatizada del Servicio de Administración Tributaria. La autoridad fiscal no cuestiona si se pagó la factura; cuestiona si el acto jurídico que le dio origen contaba con "Sustancia Económica" y "Fecha Cierta".

FUNDAMENTO TÉCNICO Y CUANTIFICACIÓN:
Bajo la doctrina de Economía de Opción, todo contribuyente tiene el derecho legal de organizar sus negocios de la forma que genere la menor carga tributaria posible, siempre que exista una razón de negocios válida (Art. 5-A CFF). 

Al implementar los 3 pilares de la ingeniería fiduciaria de EMPRENDENMEX:
1. Arbitraje de Tasas: Segregación operativa entre el Título II (sociedades) y Título IV (personas físicas).
2. Escudos Intangibles: Amortización de marcas y software vía contratos de regalías (Art. 32 LISR).
3. Protección Fiduciaria: Contratos de mutuo intercompañía con pagarés mercantiles (Art. 27 LISR).

El impacto cuantitativo es contundente: en una empresa con facturación de $450,000 MXN mensuales, la carga tradicional sin estructura absorbe aproximadamente el 29.1% ($131,040 MXN/mes), mientras que una arquitectura con escudos de activos intangibles reduce la absorción impositiva efectiva al 8.2% ($36,691 MXN/mes), liberando más de $1,132,186 MXN anuales de liquidez lista para reinversión.

RECOMENDACIÓN DEL CONSEJO EDITORIAL:
No espere a que una carta invitación o una revisión electrónica del SAT detone la revisión de sus esquemas societarios. Ejecute su diagnóstico en la terminal del Simulador Táctico de Emprendenmex y obtenga su dictamen cuantitativo con folio protocolar certificado.

© 2025 EMPRENDENMEX Gaceta Fiduciaria. Rigor Matemático y Disciplina Fiduciaria.`;
    } else if (selectedFormat === 'memo') {
      return `MEMORÁNDUM TÉCNICO DE GOBIERNO CORPORATIVO
PARA: Consejo de Administración / Comité de Auditoría y Socios Directores
DE: Departamento de Ingeniería Fiduciaria & Estrategia Tributaria
ASUNTO: Dictamen de Mitigación de Riesgo y Optimización Fiscal (${selectedTopic.toUpperCase()})
FECHA: Ejercicio Fiscal 2025 / 2026
CLASIFICACIÓN: Reservado // Protocolo C-Suite

1. ANTECEDENTES Y JUSTIFICACIÓN:
Se presenta a consideración de este cuerpo directivo la auditoría preventiva sobre la estructura patrimonial de la sociedad. Se identifican fricciones impositivas que erosionan el coeficiente de utilidad y exponen la responsabilidad patrimonial ilimitada de los administradores conforme a las reformas del Código Fiscal de la Federación.

2. ANÁLISIS DE EXPOSICIÓN FISCAL:
La falta de contratos de mutuo intercompañía de fecha cierta y la ausencia de contratos de licencia marcaria inscritos ante fedatario público provocan que los pagos entre partes relacionadas sean clasificados presuntivamente como dividendos no deducibles o préstamos simulados, con multas aplicables del 55% al 75% sobre el crédito fiscal determinado.

3. PLAN DE ACCIÓN RECOMENDADO:
a) Protocolización Notarial Inmediata: Otorgar fecha cierta a las minutas de asamblea y emitir pagarés respaldados con tasas fijas interbancarias.
b) Registro y Valuación de Activos Intangibles: Segregar marcas comerciales y herramientas de software hacia una entidad tenedora independiente.
c) Implementación de Planes de Retiro Corporativo (Art. 151 LISR) para blindar el flujo de directores generales.

4. DICTAMEN CUANTITATIVO:
Se estima una tasa de retorno sobre la inversión (ROI) fiduciaria de 138x frente al costo de litigios fiscales tradicionales, garantizando la preservación de capital para expansión operativa.`;
    } else {
      return `[GUION PARA VIDEO / REELS - VOZ DE ALTA AUTORIDAD EDITORIAL]
ESCENOGRAFÍA: Escritorio ejecutivo con biblioteca, ejemplares de broadsheet en papel bond, pluma fuente. Tono formal, sereno, directo.

[00:00 - 00:05] HOOK DE ENTRADA:
"Si tu empresa factura más de 400 mil pesos al mes en México y sigues pagando el 35% de impuestos, no estás cumpliendo con la ley: estás subsidiando ineficiencias por falta de ingeniería fiduciaria."

[00:05 - 00:20] EL PROBLEMA OCULTO:
"La mayoría de los contadores tradicionales se limitan a pedirte facturas de gastos para deducir. Pero en 2025, el SAT no busca facturas: audita la Razón de Negocios bajo el Artículo 5-A del Código Fiscal. Si pagas honorarios o compras equipo sin asambleas notariales y contratos de fecha cierta, el SAT anula la deducción y te cobra multas de hasta el 70%."

[00:20 - 00:40] LA SOLUCIÓN TÉCNICA:
"Los directores de alta estrategia no eluden: aplican la Doctrina de Economía de Opción. Crean holdings para licenciar su propia marca y software, estructuran contratos de mutuo intercompañía con pagarés a tasa fija, y bajan su tasa impositiva real del 29% al 8%. Eso significa liberar más de un millón de pesos anuales de liquidez pura para reinversión."

[00:40 - 00:55] LLAMADO A LA ACCIÓN:
"En Emprendenmex creamos el Simulador Táctico V3.8. Entras, seleccionas tu facturación y en 10 segundos tienes tu balance tributario cuantitativo con respaldo de peritos contables. El enlace está disponible en la terminal de Emprendenmex."`;
    }
  };

  const currentDraft = generateDraft();

  const handleCopyDraft = async () => {
    try {
      await navigator.clipboard.writeText(currentDraft);
      setCopiedDraft(true);
      setTimeout(() => setCopiedDraft(false), 3000);
    } catch {
      // Fallback
    }
  };

  const handleDownloadDraft = () => {
    const blob = new Blob([currentDraft], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `EMPRENDENMEX_${selectedTopic}_${selectedFormat}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      
      {/* 1. TOP BROADSHEET BANNER */}
      <div className="border-b-2 border-[#1c1c18] pb-6 mb-8 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center space-x-2 text-[10px] sm:text-[11px] font-mono tracking-widest uppercase font-bold text-[#555] mb-2">
          <span className="w-2 h-2 rounded-full bg-[#c9a86a]"></span>
          <span>MANIFIESTO INSTITUCIONAL // BASE DE CONOCIMIENTO & CONTEXTO</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif-broadsheet uppercase tracking-tight text-[#0a0a0a] leading-tight">
          ¿QUÉ ES EMPRENDENMEX? PROPÓSITO, DOCTRINA & ARQUITECTURA
        </h1>

        <p className="text-sm sm:text-base font-serif text-[#333] mt-3 leading-relaxed">
          Diario independiente de alta estrategia fiduciaria, terminal analítica de ingeniería fiscal y círculo de gobernanza corporativa para directores en México. Fundado bajo rigor matemático y disciplina fiduciaria.
        </p>
      </div>

      {/* 2. THE 5 STRUCTURAL PILLARS & FUNCTIONS OF EMPRENDENMEX */}
      <div className="mb-12">
        <div className="flex items-center justify-between border-b border-[#1c1c18] pb-2 mb-6">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0a0a0a]">
            MAPA DE CAPACIDADES, USOS & FUNCIONES INTEGRALES
          </span>
          <span className="text-[10px] font-mono text-[#666]">
            ESTÁNDAR BIG 4 // CFF 2025
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Pillar 1 */}
          <div className="bg-[#ffffff] border-2 border-[#1c1c18] p-5 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-9 h-9 bg-[#f5f2ea] border border-[#d6d0c2] flex items-center justify-center mb-3 text-[#0a0a0a]">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="text-[9px] font-mono text-[#ba1a1a] font-bold uppercase tracking-wider mb-1">
                HERRAMIENTA CUANTITATIVA
              </div>
              <h3 className="text-lg font-bold font-serif-broadsheet text-[#0a0a0a] uppercase mb-2">
                1. Simulador Táctico Fiscal V3.8
              </h3>
              <p className="text-xs font-serif text-[#555] leading-relaxed mb-3">
                Motor dinámico que modela en tiempo real la facturación bruta, el porcentaje de comprobación CFDI 4.0 y el régimen contributivo (PFAE, RESICO, Persona Moral, Informal) para calcular la tasa efectiva real y la absorción impositiva comparada.
              </p>
              <ul className="text-[11px] font-mono text-[#444] space-y-1">
                <li>• Arbitraje de tasas entre Título II y Título IV.</li>
                <li>• Modelado de liquidez liberada anual.</li>
                <li>• Alerta de rebase de tope de $3.5M en RESICO.</li>
              </ul>
            </div>
            <button
              onClick={onNavigateSimulador}
              className="mt-4 pt-3 border-t border-[#e0ded8] text-xs font-mono font-bold text-[#0a0a0a] uppercase hover:underline flex items-center justify-between"
            >
              <span>Abrir Simulador Táctico</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Pillar 2 */}
          <div className="bg-[#ffffff] border-2 border-[#1c1c18] p-5 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-9 h-9 bg-[#f5f2ea] border border-[#d6d0c2] flex items-center justify-center mb-3 text-[#0a0a0a]">
                <Layers className="w-5 h-5" />
              </div>
              <div className="text-[9px] font-mono text-[#c9a86a] font-bold uppercase tracking-wider mb-1">
                BÓVEDA NOTARIAL
              </div>
              <h3 className="text-lg font-bold font-serif-broadsheet text-[#0a0a0a] uppercase mb-2">
                2. Boutique Modular de Soluciones
              </h3>
              <p className="text-xs font-serif text-[#555] leading-relaxed mb-3">
                Instrumentos contractuales y mercantiles depositados ante fedatarios públicos con derechos de uso perpetuo sin suscripción forzosa, listos para descargar y personalizar.
              </p>
              <ul className="text-[11px] font-mono text-[#444] space-y-1">
                <li>• Estatutos blindados de SAS (drag/tag along).</li>
                <li>• Operating Agreements LLC (Wyoming/Delaware).</li>
                <li>• Protocolo de cesión y regalías de marca IMPI.</li>
              </ul>
            </div>
            <button
              onClick={onNavigateClub}
              className="mt-4 pt-3 border-t border-[#e0ded8] text-xs font-mono font-bold text-[#0a0a0a] uppercase hover:underline flex items-center justify-between"
            >
              <span>Explorar Boutique Modular</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Pillar 3 */}
          <div className="bg-[#ffffff] border-2 border-[#1c1c18] p-5 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-9 h-9 bg-[#f5f2ea] border border-[#d6d0c2] flex items-center justify-center mb-3 text-[#0a0a0a]">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="text-[9px] font-mono text-[#2e7d32] font-bold uppercase tracking-wider mb-1">
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
              className="mt-4 pt-3 border-t border-[#e0ded8] text-xs font-mono font-bold text-[#0a0a0a] uppercase hover:underline flex items-center justify-between"
            >
              <span>Ver Planes de Membresía</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Pillar 4 */}
          <div className="bg-[#ffffff] border-2 border-[#1c1c18] p-5 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-9 h-9 bg-[#f5f2ea] border border-[#d6d0c2] flex items-center justify-center mb-3 text-[#0a0a0a]">
                <Scale className="w-5 h-5" />
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
            <div className="mt-4 pt-3 border-t border-[#e0ded8] text-[10px] font-mono text-[#666]">
              Marco de Cumplimiento Art. 5-A CFF
            </div>
          </div>

          {/* Pillar 5 */}
          <div className="bg-[#ffffff] border-2 border-[#1c1c18] p-5 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-9 h-9 bg-[#f5f2ea] border border-[#d6d0c2] flex items-center justify-center mb-3 text-[#0a0a0a]">
                <FileText className="w-5 h-5" />
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
            <div className="mt-4 pt-3 border-t border-[#e0ded8] text-[10px] font-mono text-[#666]">
              Emisión Gratuita desde el Simulador
            </div>
          </div>

          {/* Pillar 6 */}
          <div className="bg-[#ffffff] border-2 border-[#1c1c18] p-5 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-9 h-9 bg-[#f5f2ea] border border-[#d6d0c2] flex items-center justify-center mb-3 text-[#0a0a0a]">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-[9px] font-mono text-[#1e4d2b] font-bold uppercase tracking-wider mb-1">
                RED PERICIAL & NOTARIAL
              </div>
              <h3 className="text-lg font-bold font-serif-broadsheet text-[#0a0a0a] uppercase mb-2">
                6. Alianza con Despachos Contables
              </h3>
              <p className="text-xs font-serif text-[#555] leading-relaxed mb-3">
                Agendamiento directo con despachos y notarías aliadas en Ciudad de México, Guadalajara y Monterrey para formalizar transformaciones de PFAE a SAPI, fideicomisos mercantiles y contratos de mutuo con fe pública.
              </p>
              <ul className="text-[11px] font-mono text-[#444] space-y-1">
                <li>• Asignación de actuarios y contadores públicos.</li>
                <li>• Convenio de estricta confidencialidad (NDA).</li>
                <li>• Seguimiento colegiado de fecha cierta.</li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-[#e0ded8] text-[10px] font-mono text-[#666]">
              Red de Cobertura Nacional
            </div>
          </div>

        </div>
      </div>

      {/* 3. MASTER KNOWLEDGE BASE CONTEXT BOX (ONE-CLICK COPY FOR AI / PROMPTS) */}
      <div className="bg-[#0a0a0a] text-[#fcf9f2] p-6 sm:p-8 border-2 border-[#0a0a0a] mb-14 shadow-lg">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#333] gap-4 mb-4">
          <div>
            <div className="inline-block bg-[#e5c07b] text-[#0a0a0a] text-[9px] font-mono px-2 py-0.5 font-bold uppercase tracking-wider mb-1">
              PROMPT MASTER CONTEXT // BASE DE CONOCIMIENTO PARA IA
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif-broadsheet text-[#fcf9f2] uppercase">
              Dossier de Contexto Maestro de Emprendenmex
            </h2>
            <p className="text-xs font-serif text-[#c8c6c5] mt-1 max-w-2xl">
              Este bloque contiene toda la doctrina, datos cuantitativos, fórmulas y marco normativo 2025/2026 de Emprendenmex. Cópialo para usarlo como contexto en ChatGPT, Claude, Gemini o cualquier generador de contenido.
            </p>
          </div>

          <button
            type="button"
            onClick={handleCopyMasterContext}
            className={`px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shrink-0 ${
              copiedMasterContext
                ? 'bg-[#2e7d32] text-[#ffffff]'
                : 'bg-[#fcf9f2] text-[#0a0a0a] hover:bg-[#ebe7dc]'
            }`}
          >
            {copiedMasterContext ? (
              <>
                <Check className="w-4 h-4" />
                <span>¡CONTEXTO COPIADO!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>COPIAR CONTEXTO MAESTRO PARA IA</span>
              </>
            )}
          </button>
        </div>

        {/* Scrollable Context Box */}
        <div className="bg-[#141414] border border-[#2a2a2a] p-4 text-xs font-mono text-[#a5a59f] max-h-60 overflow-y-auto whitespace-pre-wrap leading-relaxed select-all">
          {masterContextText}
        </div>

        <div className="flex flex-wrap items-center justify-between text-[10px] font-mono text-[#777] mt-3 gap-2">
          <span>• Actualizado conforme a la Miscelánea Fiscal y CFF 2025/2026</span>
          <span>• Compatible con System Prompts, Knowledge Bases y Custom GPTs</span>
        </div>

      </div>

      {/* 4. INTERACTIVE STRATEGIC CONTENT GENERATOR */}
      <div className="bg-[#f7f5ed] border-2 border-[#1c1c18] p-6 sm:p-8 shadow-sm">
        
        <div className="flex flex-col sm:flex-row sm:items-start justify-between pb-4 border-b border-[#1c1c18] gap-4 mb-6">
          <div>
            <div className="inline-block bg-[#0a0a0a] text-[#fcf9f2] text-[9px] font-mono px-2 py-0.5 font-bold uppercase tracking-wider mb-1">
              MOTOR EDITORIAL AUTOMATIZADO
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-broadsheet uppercase tracking-tight text-[#0a0a0a]">
              Generador de Despachos & Contenido Estratégico
            </h2>
            <p className="text-xs sm:text-sm font-serif text-[#555] mt-1 max-w-2xl">
              Cree artículos, hilos para redes, memorándums corporativos o guiones de video listos para publicar, fundamentados con las métricas y jurisprudencia más reciente de Emprendenmex.
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2e7d32] animate-ping"></span>
            <span className="text-xs font-mono font-bold text-[#0a0a0a]">MOTOR ACTIVO</span>
          </div>
        </div>

        {/* CONTROLS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          
          {/* 1. Eje Temático */}
          <div>
            <label className="block text-xs font-mono font-bold uppercase text-[#0a0a0a] mb-1.5">
              1. Eje Temático Normativo:
            </label>
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value as any)}
              className="w-full bg-[#ffffff] border border-[#1c1c18] p-2 text-xs font-mono text-[#0a0a0a] focus:outline-none"
            >
              <option value="art5a">Reforma Art. 5-A CFF (Razón de Negocios & Sustancia)</option>
              <option value="resico">Tope RESICO $3.5M (Riesgo y Transición Preventiva)</option>
              <option value="mutuo">Contrato de Mutuo Intercompañía (Pagarés & Intereses)</option>
              <option value="regalias">Licenciamiento de Marcas e Intangibles (IMPI)</option>
              <option value="crossborder">Estructuración Cross-Border LLC (Wyoming/Form 5472)</option>
            </select>
          </div>

          {/* 2. Formato */}
          <div>
            <label className="block text-xs font-mono font-bold uppercase text-[#0a0a0a] mb-1.5">
              2. Formato de Contenido:
            </label>
            <select
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value as any)}
              className="w-full bg-[#ffffff] border border-[#1c1c18] p-2 text-xs font-mono text-[#0a0a0a] focus:outline-none"
            >
              <option value="hilo">Hilo Estratégico (X / Twitter - 5 Posts)</option>
              <option value="newsletter">Crónica Fiduciaria (Newsletter / LinkedIn)</option>
              <option value="memo">Memorándum Técnico para Directores & C-Suite</option>
              <option value="guion">Guion Corto de Video / Reels de Alta Autoridad</option>
            </select>
          </div>

          {/* 3. Tono Editorial */}
          <div>
            <label className="block text-xs font-mono font-bold uppercase text-[#0a0a0a] mb-1.5">
              3. Enfoque & Tono:
            </label>
            <select
              value={selectedTone}
              onChange={(e) => setSelectedTone(e.target.value as any)}
              className="w-full bg-[#ffffff] border border-[#1c1c18] p-2 text-xs font-mono text-[#0a0a0a] focus:outline-none"
            >
              <option value="rigor">Rigor Matemático & Broadsheet (Gaceta)</option>
              <option value="alerta">Alerta Preventiva SAT (Riesgo Inminente)</option>
              <option value="tactico">Táctico para Fundadores (Economía de Opción)</option>
            </select>
          </div>

        </div>

        {/* OUTPUT PREVIEW CONTAINER */}
        <div className="bg-[#ffffff] border-2 border-[#1c1c18] p-5 sm:p-6 mb-4 shadow-sm relative">
          
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#e0ded8]">
            <div className="flex items-center space-x-2 text-[10px] font-mono text-[#555]">
              <FileText className="w-3.5 h-3.5 text-[#0a0a0a]" />
              <span className="font-bold uppercase text-[#0a0a0a]">VISTA PREVIA DEL DESPACHO EDITORIAL</span>
              <span>·</span>
              <span className="uppercase">{selectedFormat}</span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={handleCopyDraft}
                className={`px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center space-x-1.5 ${
                  copiedDraft
                    ? 'bg-[#2e7d32] text-[#ffffff]'
                    : 'bg-[#0a0a0a] text-[#fcf9f2] hover:bg-[#222]'
                }`}
              >
                {copiedDraft ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>¡COPIADO!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPIAR CONTENIDO</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleDownloadDraft}
                className="bg-[#ebe7dc] text-[#1c1c18] hover:bg-[#dfdad0] border border-[#d6d0c2] p-1.5"
                title="Descargar como .txt"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="font-serif text-[#1c1c18] text-xs sm:text-sm leading-relaxed whitespace-pre-wrap select-text">
            {currentDraft}
          </div>

        </div>

        <div className="text-[10px] font-mono text-[#666] flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Contenido redactado bajo el estilo canónico de EMPRENDENMEX con rigor matemático y jurídico.</span>
          <span>Listo para copiar y programar en redes o boletines corporativos.</span>
        </div>

      </div>

    </div>
  );
};
