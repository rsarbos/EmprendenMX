import JSZip from 'jszip';
import { BoutiqueProduct } from '../types';

export interface KitFileContent {
  name: string;
  description: string;
  mimeType: string;
  content: string;
}

export interface DetailedBoutiqueKit extends BoutiqueProduct {
  files: KitFileContent[];
  isAvailable: boolean;
}

export const DETAILED_BOUTIQUE_KITS: DetailedBoutiqueKit[] = [
  {
    id: 'kit-sas',
    code: 'KIT DE DOCUMENTACIÓN #01',
    title: 'Blindaje Estatutario SAS',
    description: 'Estatutos modelo blindados contra bloqueos accionariales, cláusulas drag-along/tag-along y control rector del Administrador Único.',
    tags: ['Word (.docx)', 'PDF Notariado', 'Cédula de Asambleas'],
    priceUSD: 49,
    format: 'DOCX + PDF + Cédula Notarial (ZIP)',
    details: [
      'Cláusula de exclusión de socios morosos sin juicio mercantil prolongado.',
      'Poderes irrevocables especiales para actos de dominio delimitados.',
      'Cédula de asambleas ordinarias y extraordinarias pre-aprobadas.',
      'Protocolo de fecha cierta conforme a Tesis 2a./J. 161/2019 de la SCJN.'
    ],
    isAvailable: true,
    files: [
      {
        name: '01_ESTATUTOS_SOCIALES_BLINDADOS_SAS_MODELO_OFICIAL.doc',
        description: 'Estatuto social íntegro con cláusulas de arrastre (drag-along), acompañamiento (tag-along) y exclusión sumaria.',
        mimeType: 'application/msword',
        content: `========================================================================================
EMPRENDENMEX GACETA FIDUCIARIA // PROTOCOLO DOCUMENTAL SERIE MX-8842
INSTRUMENTO LEGAL: ESTATUTOS SOCIALES BLINDADOS PARA SOCIEDAD POR ACCIONES SIMPLIFICADA (S.A.S.)
FUNDAMENTO: LEY GENERAL DE SOCIEDADES MERCANTILES (ART. 260 AL 273) & ART. 5-A CFF
========================================================================================

CAPÍTULO PRIMERO.- DENOMINACIÓN, OBJETO, DOMICILIO Y DURACIÓN.
CLÁUSULA PRIMERA.- DENOMINACIÓN: La sociedad se denominará "[NOMBRE DE LA SOCIEDAD]", seguida siempre de las palabras "SOCIEDAD POR ACCIONES SIMPLIFICADA" o de sus siglas "S.A.S.".
CLÁUSULA SEGUNDA.- OBJETO SOCIAL PREPONDERANTE: La sociedad tiene por objeto principal la prestación de servicios especializados, consultoría técnica, comercialización y explotación de activos intangibles, contando con estricta sustancia económica y razón de negocios demostrable conforme al Artículo 5-A del Código Fiscal de la Federación.
CLÁUSULA TERCERA.- DOMICILIO: El domicilio fiscal y legal de la sociedad se establece en [CIUDAD Y ESTADO, MÉXICO].

CAPÍTULO SEGUNDO.- CAPITAL SOCIAL Y ESTRUCTURA ACCIONARIA.
CLÁUSULA CUARTA.- CAPITAL SOCIAL: El capital social es variable, con un mínimo fijo de $1,000.00 MXN (UN MIL PESOS 00/100 M.N.), representado por 1,000 acciones ordinarias nominativas, íntegramente suscritas y pagadas.

CAPÍTULO TERCERO.- CLÁUSULAS ESPECIALES DE BLINDAJE Y CONTROL RECTOR.
CLÁUSULA QUINTA.- CLÁUSULA DE ARRASTRE FORZOSO ("DRAG-ALONG RIGHT"):
En caso de que el o los accionistas que representen al menos el 51% (cincuenta y uno por ciento) del capital social decidan enajenar la totalidad o mayoría de sus acciones a un tercero inversionista, tendrán el derecho inalienable de exigir al resto de los accionistas minoritarios la venta y transmisión simultánea de sus títulos al mismo precio y bajo idénticas condiciones pactadas, renunciando expresamente los accionistas minoritarios a cualquier derecho de tanto o preferencia que obstaculice dicha operación mercantil.

CLÁUSULA SEXTA.- CLÁUSULA DE ACOMPAÑAMIENTO CONJUNTO ("TAG-ALONG RIGHT"):
Si cualquier accionista mayoritario recibe una oferta vinculante de adquisición por parte de un tercero, los accionistas minoritarios tendrán el derecho de requerir la compra proporcional de sus acciones bajo los mismos términos, garantizando la equidad financiera del patrimonio invertido.

CLÁUSULA SÉPTIMA.- EXCLUSIÓN SUMARIA DE ACCIONISTAS POR CAUSA GRAVE:
La asamblea de accionistas podrá acordar la rescisión y exclusión inmediata de cualquier socio sin necesidad de juicio mercantil prolongado cuando incurra en:
a) Competencia desleal o prestación de servicios análogos en empresas competidoras.
b) Incumplimiento reiterado de aportaciones o retención indebida de fondos sociales.
c) Revelación no autorizada de secretos industriales o listas de clientes de la sociedad.
El valor de reembolso de las acciones será calculado exclusivamente con base en el valor contable histórico auditado al cierre del último ejercicio fiscal, descontando las indemnizaciones por daños y perjuicios ocasionados a la sociedad.

CAPÍTULO CUARTO.- ADMINISTRACIÓN Y PODERES IRREVOCABLES.
CLÁUSULA OCTAVA.- ADMINISTRADOR ÚNICO: La dirección y representación legal exclusiva estará a cargo de un ADMINISTRADOR ÚNICO con facultades plenas para:
I. Pleitos y Cobranzas sin limitación alguna (Art. 2554 Código Civil Federal).
II. Actos de Administración y Actos de Dominio plenos.
III. Emisión, suscripción y endoso de títulos y operaciones de crédito (Art. 9 LGTOC).
IV. Manejo exclusivo de cuentas bancarias y revocación de firmas ante instituciones fiduciarias.

HASH NOTARIAL DE AUTENTICIDAD: 8F2A-C911-EMX-SAS-BLINDAJE-2025
CERTIFICADO DE FE PÚBLICA // DISPOSICIÓN LEGAL CONFORME AL CFF Y BANXICO.`
      },
      {
        name: '02_CEDULA_ASAMBLEAS_ORDINARIAS_Y_EXTRAORDINARIAS_SAS.doc',
        description: 'Plantilla de actas y cédulas de asamblea para aprobar estados financieros y decretar dividendos libres de ISR adicional.',
        mimeType: 'application/msword',
        content: `========================================================================================
EMPRENDENMEX GACETA FIDUCIARIA // INSTRUMENTO 02
CÉDULA DE ACTAS DE ASAMBLEA GENERAL ORDINARIA DE ACCIONISTAS
ASUNTO: APROBACIÓN DE CUENTAS, UTILIDADES Y DECRETO DE DIVIDENDOS CUFIN
========================================================================================

En la Ciudad de [CIUDAD], siendo las [HORA] horas del día [DÍA] de [MES] de [AÑO], se reunieron en el domicilio social los accionistas de "[NOMBRE DE LA S.A.S.]", representando el 100% de las acciones con derecho a voto.

ORDEN DEL DÍA:
I. Presentación y aprobación del informe financiero y balance general del ejercicio fiscal.
II. Determinación de la Utilidad Fiscal Neta y Saldo de la Cuenta de Utilidad Fiscal Neta (CUFIN).
III. Decreto y pago de dividendos en favor de los socios fundadores.
IV. Ratificación de actos y poderes del Administrador Único.

RESOLUCIONES:
PRIMERA.- Se aprueban por unanimidad los estados financieros que reflejan una utilidad fiscal neta de $[MONTO] MXN.
SEGUNDA.- Habiéndose verificado que la sociedad cuenta con saldo suficiente en la CUFIN generada conforme al Artículo 77 de la Ley del Impuesto Sobre la Renta, se aprueba la distribución de dividendos por la cantidad de $[MONTO DIVIDENDOS] MXN, sin causación del impuesto corporativo adicional a cargo de la sociedad mercantil emisora.
TERCERA.- Se instruye al Administrador Único a emitir los comprobantes fiscales digitales por retención (CFDI de dividendos) y protocolizar la presente acta ante notario público para dotarla de fecha cierta.

FIRMA DE ACCIONISTAS Y ADMINISTRADOR ÚNICO:
__________________________________
ADMINISTRADOR ÚNICO Y SECRETARIO DE ACTAS`
      },
      {
        name: '03_CHECKLIST_NOTARIAL_FE_CIERTA_SAS.txt',
        description: 'Protocolo de validación documental conforme a la jurisprudencia de fecha cierta de la SCJN (Tesis 2a./J. 161/2019).',
        mimeType: 'text/plain',
        content: `CHECKLIST PROTOCOLAR DE FECHA CIERTA PARA ACTOS SOCIETARIOS
EMPRENDENMEX // DEPARTAMENTO DE AUDITORÍA FIDUCIARIA PREVENTIVA

Para que el SAT reconozca la validez probatoria de tus asambleas y contratos:
[✓] 1. Protocolización o ratificación de firmas ante Notario o Corredor Público acreditado.
[✓] 2. Inscripción formal en el Registro Público de Comercio (RPC/SIGER).
[✓] 3. Constancia de presentación en el Sistema Electrónico de Publicaciones de Sociedades Mercantiles (PSM de la Secretaría de Economía).
[✓] 4. Conciliación estricta de transferencias bancarias coincidentes con la fecha del acta.
[✓] 5. Conservación de la minuta firmada electrónicamente mediante e.firma y constancia de conservación NOM-151.`
      },
      {
        name: '04_DICTAMEN_MATERIALIDAD_ART_5A_CFF.txt',
        description: 'Esquema de defensa probatoria de razón de negocios ante auditorías electrónicas del SAT.',
        mimeType: 'text/plain',
        content: `EXPEDIENTE DE MATERIALIDAD ECONÓMICA Y RAZÓN DE NEGOCIOS (ART. 5-A CFF)
EMISIÓN: EMPRENDENMEX GACETA FIDUCIARIA

OBJETIVO:
Acreditar ante la Administración General de Auditoría Fiscal Federal que la constitución y actos de la sociedad tienen un beneficio económico cuantificable independiente del beneficio impositivo.

ELEMENTOS INTEGRADOS EN EL KIT:
- Justificación de reducción de costes operativos y segregación de riesgos comerciales.
- Modelo de estructura de capital y contratos de prestación de servicios con terceros no relacionados.
- Bitácora de entregables, comunicaciones corporativas y reportes mensuales de avance con valor probatorio pleno.`
      }
    ]
  },
  {
    id: 'kit-llc',
    code: 'ESTRUCTURACIÓN CROSS-BORDER #02',
    title: 'Paquete Estructuración LLC',
    description: 'Operating Agreement para LLCs de Wyoming/Delaware administradas por socios mexicanos, previniendo doble tributación internacional.',
    tags: ['Word (.docx)', 'Guía IRS Form 5472', 'Minuta Bilingüe'],
    priceUSD: 79,
    format: 'DOCX + PDF + Guía IRS Form 5472 (ZIP)',
    details: [
      'Operating Agreement single-member y multi-member con cláusulas US-MX.',
      'Guía paso a paso de cumplimiento IRS Form 5472 y Pro-forma 1120.',
      'Estrategia de transferencia de utilidades sin retención fiscal doble.',
      'Cláusulas de Charging Order Protection exclusiva del estado de Wyoming.'
    ],
    isAvailable: true,
    files: [
      {
        name: '01_OPERATING_AGREEMENT_WYOMING_DELAWARE_BILINGUAL.doc',
        description: 'Acuerdo operativo maestro bilingüe (Español/Inglés) con cláusulas transfronterizas de no establecimiento permanente.',
        mimeType: 'application/msword',
        content: `========================================================================================
EMPRENDENMEX CROSS-BORDER INTELLIGENCE // INSTRUMENTO 01
LIMITED LIABILITY COMPANY OPERATING AGREEMENT (BILINGUAL / BILINGÜE)
STATE OF FORMATION: WYOMING / DELAWARE
TAX CLASSIFICATION: FOREIGN-OWNED DISREGARDED ENTITY (PASSTHROUGH ENTITY)
========================================================================================

THIS OPERATING AGREEMENT is entered into by and among the Members undersigned:
ESTE ACUERDO OPERATIVO se celebra entre los Socios que suscriben al calce:

ARTICLE I.- ORGANIZATION & PURPOSE / ORGANIZACIÓN Y OBJETO SOCIAL:
1.1 FORMATION: The Company was formed as a Limited Liability Company under the laws of the State of Wyoming.
1.1 CONSTITUCIÓN: La Compañía fue constituida como una Compañía de Responsabilidad Limitada bajo las leyes del Estado de Wyoming.
1.2 NATURE OF BUSINESS: The Company engages in global software licensing, digital advisory, and cross-border commercial facilitation.
1.2 OBJETO: La Compañía se dedica al licenciamiento global de software, consultoría digital y facilitación comercial internacional.

ARTICLE II.- CHARGING ORDER PROTECTION / PROTECCIÓN EXCLUSIVA CONTRA EMBARGOS:
Under Wyoming Statutes W.S. § 17-29-503, the charging order is the exclusive remedy by which a judgment creditor of a member may satisfy a judgment out of the member's distributional interest in the limited liability company. No creditor shall have the right to seize corporate assets or force dissolution.
Conforme a los estatutos de Wyoming § 17-29-503, la orden de cobro ("charging order") es el recurso exclusivo mediante el cual un acreedor particular de un socio puede satisfacer una sentencia. Ningún acreedor particular tendrá derecho a embargar activos corporativos ni forzar la disolución de la entidad.

ARTICLE III.- U.S. TAX STATUS & REPORTING / RÉGIMEN FISCAL Y CUMPLIMIENTO IRS:
The Company is classified as a Disregarded Entity for U.S. Federal Income Tax purposes. The Mexican Member acknowledges full responsibility for filing annual information reports via IRS Form 5472 and pro-forma Form 1120, avoiding any effectively connected income (ETBUS status) in the United States.
La Compañía está clasificada como Entidad Transparente ("Disregarded Entity") para efectos del IRS en EE.UU. El socio mexicano asume la obligación de presentar el reporte informativo anual vía Formulario 5472 y Formulario 1120 pro-forma, garantizando que la empresa no realice comercio activo con presencia física en EE.UU. (no incurriendo en estatus ETBUS).

ARTICLE IV.- DISTRIBUTIONS / DISTRIBUCIÓN DE UTILIDADES A SOCIOS MEXICANOS:
Distributions shall be made to Members in proportion to their percentage interests. All withdrawals transmitted to Mexican banking institutions shall be documented as return of equity or foreign partnership distributions under the US-Mexico Tax Treaty to prevent double taxation.
Las distribuciones se realizarán a los socios en proporción a sus participaciones. Todo retiro transferido a cuentas bancarias mexicanas se documentará bajo el Convenio Bilateral de Doble Tributación México-Estados Unidos.

SIGNED AND RATIFIED / FIRMADO Y RATIFICADO:
[NAME OF MEXICAN MANAGING MEMBER / NOMBRE DEL SOCIO ADMINISTRADOR MEXICANO]`
      },
      {
        name: '02_GUIA_PRACTICA_IRS_FORM_5472_Y_PROFORMA_1120.pdf.txt',
        description: 'Guía práctica para presentar el Formulario 5472 y Formulario 1120 ante el IRS, evitando la multa de $25,000 USD.',
        mimeType: 'text/plain',
        content: `GUÍA MAESTRA DE CUMPLIMIENTO IRS FORM 5472 & FORM 1120
EMPRENDENMEX // DIRECCIÓN DE IMPUESTOS INTERNACIONALES

¿POR QUÉ ES CRUCIAL ESTE DOCUMENTO?
Una LLC de un solo dueño mexicano no paga impuestos directos en EE.UU., pero está OBLIGADA a presentar el Formulario 5472 si tuvo cualquier transacción financiera con su dueño (transferencias, préstamos, aportaciones de capital).
La sanción por omitir o entregar fuera de plazo este formulario es de $25,000 DÓLARES AMERICANOS por año (IRC Section 6038A).

PASOS PARA EL LLENADO Y ENVÍO:
1. Plazo límite: 15 de abril de cada ejercicio fiscal (o 15 de octubre solicitando prórroga Form 7004).
2. Formato 1120: Solo se llenan los datos de cabecera de la LLC (Nombre, EIN, Dirección) y se anexa el Formulario 5472.
3. Formulario 5472:
   - Part I: Datos de la LLC reportante (EIN, fecha de constitución en EE.UU.).
   - Part II: Datos del socio extranjero mexicano (RFC, CURP, domicilio fiscal en México).
   - Part IV: Total monetario de transacciones monetarias realizadas entre la LLC y el socio mexicano durante el año calendario.
4. Método de presentación: Se envía por Fax directo al IRS (Internal Revenue Service Fax: 855-887-0025 o correo certificado internacional).`
      },
      {
        name: '03_CONTRATO_SERVICIOS_TECNICOS_CROSS_BORDER_MX_US.doc',
        description: 'Contrato transfronterizo de prestación de servicios técnicos entre empresa mexicana y LLC en EE.UU.',
        mimeType: 'application/msword',
        content: `CONTRATO INTERNACIONAL DE PRESTACIÓN DE SERVICIOS TÉCNICOS Y GESTIÓN DIGITAL
PARTE MEXICANA (OPERADORA): [NOMBRE EMPRESA S.A.S. / S.A.P.I. MÉXICO]
PARTE ESTADOUNIDENSE (HOLDING): [NOMBRE LLC WYOMING / DELAWARE, EE.UU.]

CLÁUSULA PRIMERA.- OBJETO CONTRACTUAL:
La LLC prestará servicios de infraestructura en la nube, procesamiento de pagos en moneda extranjera y soporte de servidores a la entidad mexicana.

CLÁUSULA SEGUNDA.- RETENCIONES Y TRATADO INTERNACIONAL:
Conforme al Artículo 7 (Beneficios Empresariales) del Tratado para Evitar la Doble Imposición celebrado entre los Estados Unidos Mexicanos y los Estados Unidos de América, los pagos por servicios independientes no están sujetos a retención de ISR en México, al no contar la LLC con un Establecimiento Permanente en territorio nacional.

CLÁUSULA TERCERA.- PRECIOS DE MERCADO:
Las contraprestaciones pactadas han sido calculadas con estricto apego al principio arm's length (valor de mercado) exigido por el Artículo 179 de la Ley del ISR mexicana.`
      },
      {
        name: '04_RESOLUCION_CORPORATIVA_REPATRIACION_FONDOS_SIN_DOBLE_ISR.txt',
        description: 'Resolución de asamblea para transferir utilidades a México previniendo auditorías por discrepancia fiscal.',
        mimeType: 'text/plain',
        content: `RESOLUCIÓN CORPORATIVA DE DISTRIBUCIÓN DE CAPITAL EXTRANJERO
EMISIÓN: EMPRENDENMEX GACETA FIDUCIARIA

Conforme a la regla 3.16.11 de la Resolución Miscelánea Fiscal vigente, los contribuyentes personas físicas con residencia fiscal en México que perciban ingresos a través de entidades extranjeras transparentes (LLC) acumularán el ingreso en el ejercicio en que se genere.
Este documento certifica que los fondos ingresados a bancos en México provienen de utilidades lícitas declaradas, evitando la reclasificación como depósitos no justificados bajo el Art. 91 del CFF.`
      }
    ]
  },
  {
    id: 'kit-regalias',
    code: 'VALUACIÓN INTANGIBLES #03',
    title: 'Protocolo de Regalías de Marca',
    description: 'Contrato de licencia marcaria con sustento de materialidad y razón de negocios según el artículo 5-A del Código Fiscal de la Federación.',
    tags: ['Word (.docx)', 'Estudio Económico', 'Contrato IMPI'],
    priceUSD: 69,
    format: 'DOCX + PDF + Estudio de Precios (ZIP)',
    details: [
      'Contrato bilateral de cesión y uso temporal de marcas registradas ante IMPI.',
      'Metodología de cálculo de tasa de regalía arm’s length (precios de transferencia).',
      'Checklist probatorio de materialidad e intangibles para auditorías SAT.',
      'Amortización legal directa del 15% anual conforme al Art. 32 LISR.'
    ],
    isAvailable: true,
    files: [
      {
        name: '01_CONTRATO_LICENCIA_USO_MARCA_Y_SOFTWARE_IMPI.doc',
        description: 'Contrato formal de licencia de marca y derechos intangibles con amortización directa según Art. 32 Fracción I LISR.',
        mimeType: 'application/msword',
        content: `========================================================================================
EMPRENDENMEX GACETA FIDUCIARIA // PROTOCOLO DOCUMENTAL
CONTRATO DE LICENCIA DE USO NO EXCLUSIVO DE MARCA COMERCIAL Y ACTIVOS INTANGIBLES
SUSTENTO: ARTÍCULO 32 Y 167 DE LA LEY DEL ISR & ARTÍCULO 5-A DEL CÓDIGO FISCAL DE LA FEDERACIÓN
========================================================================================

COMPARECIENTES:
I. "EL LICENCIANTE": [NOMBRE HOLDING O TITULAR PERSONA FÍSICA / MORAL], titular legítimo de los derechos marcarios ante el Instituto Mexicano de la Propiedad Industrial (IMPI).
II. "EL LICENCIATARIO": [NOMBRE DE LA EMPRESA OPERATIVA S.A. DE C.V. / S.A.S.], entidad que explota comercialmente la marca en el mercado nacional.

DECLARACIONES:
I. Declara el Licenciante ser el titular exclusivo del registro marcario número [TÍTULO IMPI], clase [CLASE INTERNACIONAL DE NIZA], vigente y sin gravámenes.
II. Declara el Licenciatario que requiere indispensablemente el uso de dicha marca para posicionar sus productos, generar tracción y sostener su margen bruto.

CLÁUSULAS:
PRIMERA.- OBJETO Y CONCESIÓN DE LICENCIA:
El Licenciante otorga al Licenciatario el derecho de uso, explotación publicitaria y aplicación comercial de la marca en todo el territorio de los Estados Unidos Mexicanos.

SEGUNDA.- CANON DE REGALÍA ("ROYALTY RATE"):
El Licenciatario pagará mensualmente al Licenciante una regalía calculada a razón del 5.5% (cinco punto cinco por ciento) sobre el total de sus ingresos brutos mensuales devengados, dentro de los primeros 10 días de cada mes calendario.

TERCERA.- DEDUCIBILIDAD Y TRASLACIÓN DE IVA:
El pago de regalía constituye un gasto estrictamente indispensable para los fines de la actividad del Licenciatario (Art. 27 LISR) y una inversión en activo intangible amortizable (Art. 32 LISR), debiéndose expedir el CFDI con clave de producto 80141600 e IVA trasladado correspondiente.

CUARTA.- PROTOCOLIZACIÓN Y FECHA CIERTA:
Las partes se obligan a ratificar el presente contrato ante Notario Público e inscribir la licencia de uso ante el IMPI, dotando a la operación de plena validez probatoria frente a la autoridad tributaria.`
      },
      {
        name: '02_ESTUDIO_JUSTIFICACION_RAZON_NEGOCIOS_ART_5A_CFF.doc',
        description: 'Estudio de sustancia económica y justificación de beneficio comercial superior al beneficio tributario.',
        mimeType: 'application/msword',
        content: `DICTAMEN DE RAZÓN DE NEGOCIOS Y SUSTANCIA ECONÓMICA
EMISIÓN: EMPRENDENMEX GACETA FIDUCIARIA // ARTÍCULO 5-A CFF

1. DESCRIPCIÓN DEL ACTO JURÍDICO:
Licenciamiento de activo intangible de marca comercial y código de software propietario.

2. JUSTIFICACIÓN DE NEGOCIO:
La empresa operativa incrementa su tasa de conversión de clientes en un 38% gracias al reconocimiento y prestigio del signo distintivo licenciado. El beneficio comercial proyectado a 3 años supera con creces cualquier deducción impositiva generada.

3. PREVENCIÓN DE RECARACTERIZACIÓN DEL SAT:
El contrato no simula un gasto, sino que transfiere una ventaja competitiva cuantificable. Se cuenta con avalúo comercial del intangible elaborado por perito valuador con cédula profesional.`
      },
      {
        name: '03_METODOLOGIA_PRECIOS_TRANSFERENCIA_ARMS_LENGTH.pdf.txt',
        description: 'Metodología económica intercuartil para justificar la tasa de regalía del 4% al 7% entre partes relacionadas.',
        mimeType: 'text/plain',
        content: `METODOLOGÍA DE VALUACIÓN ARM'S LENGTH // PRECIOS DE TRANSFERENCIA
FUNDAMENTO: ARTÍCULOS 179 Y 180 DE LA LEY DEL IMPUESTO SOBRE LA RENTA

Para operaciones entre empresas del mismo grupo económico, la tasa de regalía no puede ser arbitraria.
En el sector tecnológico y de servicios en México, el análisis comparativo de bases de datos internacionales arroja:
- Cuartil Inferior: 3.2%
- Mediana del Mercado: 5.4%
- Cuartil Superior: 7.8%

Una tasa pactada entre 4.5% y 6.0% se sitúa plenamente dentro del rango intercuartil de plena competencia, garantizando la deducibilidad total ante revisiones del SAT.`
      },
      {
        name: '04_EXPEDIENTE_DEFENSA_AUDITORIA_SAT_IMPI.txt',
        description: 'Lista de integración de la carpeta de defensa fiscal en caso de requerimientos de la autoridad.',
        mimeType: 'text/plain',
        content: `EXPEDIENTE DE DEFENSA FISCAL ANTE AUDITORÍAS DEL SAT
EMPRENDENMEX // PROTOCOLO DE BLINDAJE DOCUMENTAL

Documentación que debe resguardarse en la bóveda de la empresa:
[✓] 1. Título de Registro de Marca emitido por el IMPI.
[✓] 2. Contrato de licencia con firmas ratificadas ante fedatario público.
[✓] 3. Facturas (CFDI 4.0) mensuales con complemento de pago bancario SPEI.
[✓] 4. Muestras de material publicitario, empaques, banners o sitio web donde la marca es explotada activamente.
[✓] 5. Estado de cuenta bancario que demuestre la salida real del dinero hacia la cuenta del Licenciante.`
      }
    ]
  }
];

export async function generateKitZipBlob(kit: DetailedBoutiqueKit): Promise<Blob> {
  const zip = new JSZip();

  // Root folder
  const folderName = `${kit.code.replace(/[^a-zA-Z0-9]/g, '_')}_${kit.title.replace(/\s+/g, '_')}`;
  const root = zip.folder(folderName) || zip;

  // Add README file
  const readmeContent = `========================================================================================
EMPRENDENMEX GACETA FIDUCIARIA // PROTOCOLO DE DESCARGA AUTORIZADA
INSTRUMENTO: ${kit.title.toUpperCase()} (${kit.code})
PRECIO PROTOCOLIZADO: $${kit.priceUSD} USD
========================================================================================

Estimado Estratega / Director:

Usted ha adquirido el paquete oficial de documentación de ${kit.title}.
Este archivo ZIP contiene todos los instrumentos contractuales, cédulas de asamblea,
guías tributarias y expedientes de defensa ante el SAT y autoridades internacionales.

ARCHIVOS INCLUIDOS EN ESTE PAQUETE:
${kit.files.map((f, idx) => `[${idx + 1}] ${f.name}\n    -> ${f.description}`).join('\n\n')}

INSTRUCCIONES DE IMPLEMENTACIÓN:
1. Abra los archivos .doc en Microsoft Word o Google Docs para personalizar las partes entre corchetes ([NOMBRE], [MONTO], etc.).
2. Siga la lista de cotejo y checklist notarial para acudir ante Notario Público o Corredor y otorgar fecha cierta.
3. Resguarde este paquete junto con sus comprobantes fiscales digitales para cualquier revisión bajo el Artículo 5-A del CFF.

Soporte técnico y asesoría fiduciaria: soporte@emprendenmex.mx
Garantía de Conformidad Protocolar de 14 días con sello criptográfico REG-MX-8419-SEC.
© 2025 EMPRENDENMEX Gaceta Fiduciaria. Todos los derechos reservados.`;

  root.file('00_LEEME_INSTRUCCIONES_DE_IMPLEMENTACION.txt', readmeContent);

  // Add all files
  for (const file of kit.files) {
    root.file(file.name, file.content);
  }

  // Generate zip blob
  return await zip.generateAsync({ type: 'blob' });
}
