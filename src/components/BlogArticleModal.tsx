import React from 'react';
import { X, Printer, ShieldCheck, Download, Award, FileText, ArrowRight, CheckCircle2, TrendingUp, Users, Target, DollarSign } from 'lucide-react';
import { BlogArticle } from '../data/blogArticles';
import { DETAILED_BOUTIQUE_KITS } from '../data/boutiqueKits';
import { BoutiqueProduct } from '../types';

interface BlogArticleModalProps {
  article: BlogArticle | null;
  onClose: () => void;
  onAcquireKit: (product: BoutiqueProduct) => void;
  onNavigateSimulador: () => void;
}

export const BlogArticleModal: React.FC<BlogArticleModalProps> = ({
  article,
  onClose,
  onAcquireKit,
  onNavigateSimulador,
}) => {
  if (!article) return null;

  const handlePrint = () => {
    window.print();
  };

  // Find associated kit if available
  const associatedKit = article.kitIdAssociated
    ? DETAILED_BOUTIQUE_KITS.find(k => k.id === article.kitIdAssociated)
    : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/75 backdrop-blur-xs overflow-y-auto print:p-0 print:bg-white">
      <div className="bg-[#fcf9f2] border-2 sm:border-4 border-[#1c1c18] w-full max-w-4xl max-h-[92vh] overflow-y-auto shadow-2xl relative print:border-none print:shadow-none print:max-h-none">
        
        {/* Top Control Bar */}
        <div className="bg-[#0a0a0a] text-[#fcf9f2] px-4 sm:px-6 py-2.5 flex items-center justify-between sticky top-0 z-20 print:hidden">
          <div className="flex items-center space-x-2 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#3fa662] animate-pulse"></span>
            <span className="text-[#e5c07b] font-bold uppercase">{article.categoryTag}</span>
            <span className="text-[#888] hidden sm:inline">| GACETA OFICIAL EMX</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="flex items-center space-x-1.5 px-3 py-1 bg-[#1f1f1d] hover:bg-[#2d2d2a] text-[#fcf9f2] text-xs font-mono uppercase transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Imprimir / Guardar PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 hover:text-[#e5c07b] text-[#fcf9f2] transition-colors"
              aria-label="Cerrar artículo"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article Broadsheet Container */}
        <div className="p-6 sm:p-10 md:p-12 text-[#1c1c18] space-y-8">
          
          {/* Header Metadata Banner */}
          <div className="border-b-2 border-[#1c1c18] pb-6">
            <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#555] mb-3">
              <span className="font-bold text-[#0a0a0a] bg-[#ebe7dc] px-2 py-0.5 border border-[#d6d0c2]">
                {article.category}
              </span>
              <span>{article.editionDate} · {article.readTime}</span>
              <span className="font-semibold text-[#1e4d2b]">FOLIO DICTAMEN: EMX-ART-{article.id.toUpperCase()}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black font-serif-broadsheet uppercase tracking-tight text-[#0a0a0a] leading-tight mb-4">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg font-serif italic text-[#333] leading-relaxed">
              {article.subtitle}
            </p>

            {/* Author Byline */}
            <div className="flex items-center space-x-3 mt-6 pt-4 border-t border-[#e2ddd0]">
              <div className="w-10 h-10 rounded-full border border-[#1c1c18] bg-[#f0ebe0] flex items-center justify-center font-serif font-bold text-sm">
                {article.author.split(' ').map(n => n[0]).slice(0, 2).join('')}
              </div>
              <div>
                <div className="font-bold font-serif text-sm text-[#0a0a0a]">{article.author}</div>
                <div className="text-[11px] font-mono text-[#666]">{article.authorRole}</div>
              </div>
            </div>
          </div>

          {/* Quick Fiduciary Scope Card (A quién beneficia / En qué casos aplica) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#f5f2ea] border-2 border-[#1c1c18] p-5">
            <div className="space-y-1.5">
              <div className="flex items-center space-x-1.5 text-xs font-mono font-bold text-[#ba1a1a] uppercase">
                <Users className="w-4 h-4" />
                <span>¿A QUIÉN BENEFICIA ESTE INSTRUMENTO?</span>
              </div>
              <p className="text-xs sm:text-sm font-serif text-[#2a2a28] leading-relaxed">
                {article.targetAudience}
              </p>
            </div>

            <div className="space-y-1.5 border-t md:border-t-0 md:border-l border-[#d6d0c2] pt-4 md:pt-0 md:pl-5">
              <div className="flex items-center space-x-1.5 text-xs font-mono font-bold text-[#1e4d2b] uppercase">
                <Target className="w-4 h-4" />
                <span>¿EN QUÉ CASOS APLICA EXACTAMENTE?</span>
              </div>
              <p className="text-xs sm:text-sm font-serif text-[#2a2a28] leading-relaxed">
                {article.applicableCase}
              </p>
            </div>
          </div>

          {/* Key Strategic Benefits */}
          {article.benefitsList && article.benefitsList.length > 0 && (
            <div className="border border-[#1c1c18] bg-[#ffffff] p-6 shadow-xs">
              <div className="text-[11px] font-mono font-bold uppercase text-[#555] tracking-widest mb-3 flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#1e4d2b]" />
                <span>BENEFICIOS TANGIBLES Y BLINDAJES INCLUIDOS EN EL PROTOCOLO</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {article.benefitsList.map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs font-serif text-[#333] leading-snug">
                    <CheckCircle2 className="w-4 h-4 text-[#1e4d2b] shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Financial Impact & ROI Section (Cómo se refleja en sus ganancias) */}
          <div className="bg-[#0a0a0a] text-[#fcf9f2] p-6 sm:p-8 border-2 border-[#0a0a0a]">
            <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#e5c07b] uppercase mb-2">
              <DollarSign className="w-4 h-4" />
              <span>IMPACTO EN GANANCIAS & FLUJO NETO DE EFECTIVO</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif-broadsheet uppercase tracking-tight text-[#fcf9f2] mb-3">
              ¿Cómo se refleja directamente en sus ingresos?
            </h3>
            <p className="text-sm font-serif text-[#d8d5cd] leading-relaxed mb-6">
              {article.financialImpactSummary}
            </p>

            {/* Financial Metrics Comparative Table */}
            {article.financialMetricsTable && article.financialMetricsTable.length > 0 && (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono border border-[#333]">
                  <thead>
                    <tr className="bg-[#1f1f1d] text-[#e5c07b] border-b border-[#333]">
                      <th className="p-2.5 uppercase font-bold">Concepto Operativo</th>
                      <th className="p-2.5 uppercase font-bold text-[#ff8080]">Sin Estructura</th>
                      <th className="p-2.5 uppercase font-bold text-[#80ff9f]">Con Protocolo EMX</th>
                      <th className="p-2.5 uppercase font-bold text-[#ffffff]">Impacto / Ahorro</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#2a2a2a] text-[#eae7e1]">
                    {article.financialMetricsTable.map((row, idx) => (
                      <tr key={idx} className="hover:bg-[#1a1a1a]">
                        <td className="p-2.5 font-sans font-semibold text-[#fcf9f2]">{row.label}</td>
                        <td className="p-2.5 text-[#ff9999]">{row.sinEstructura}</td>
                        <td className="p-2.5 text-[#99ffb3] font-bold">{row.conEstructura}</td>
                        <td className="p-2.5 text-[#e5c07b] font-bold">{row.ahorro}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Editorial Content Paragraphs */}
          <div className="space-y-6 pt-2 font-serif text-[#2a2a28] text-sm sm:text-base leading-relaxed">
            {article.contentParagraphs.map((par, idx) => (
              <div key={idx} className="space-y-3">
                {par.heading && (
                  <h2 className="text-lg sm:text-xl font-bold font-serif-broadsheet uppercase text-[#0a0a0a] pt-4 border-t border-[#d6d0c2]">
                    {par.heading}
                  </h2>
                )}
                <p className={idx === 0 ? "first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#0a0a0a]" : ""}>
                  {par.body}
                </p>
                {par.highlight && (
                  <blockquote className="my-4 p-4 border-l-4 border-[#0a0a0a] bg-[#f5f2ea] italic font-serif text-sm sm:text-base text-[#1c1c18]">
                    "{par.highlight}"
                  </blockquote>
                )}
              </div>
            ))}
          </div>

          {/* Official Associated Kit Call to Action Box */}
          {associatedKit && (
            <div className="border-2 border-[#1c1c18] bg-[#fbf9f2] p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#0a0a0a] text-[#e5c07b] px-4 py-1 text-[10px] font-mono font-bold uppercase tracking-wider">
                INSTRUMENTO OFICIAL LISTO PARA IMPLEMENTAR
              </div>
              <div className="text-[10px] font-mono text-[#555] uppercase font-bold tracking-wider mb-1">
                {associatedKit.code}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif-broadsheet uppercase text-[#0a0a0a] mb-2">
                Descargue el Paquete Notarial Completo: {associatedKit.title}
              </h3>
              <p className="text-xs sm:text-sm font-serif text-[#555] mb-4 max-w-2xl">
                {associatedKit.description} Incluye minutas notariales en Word (.doc), guías de cumplimiento paso a paso, checklist de fecha cierta y expedientes de defensa listos para personalizar y descargar en un archivo ZIP.
              </p>
              
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    onClose();
                    onAcquireKit(associatedKit);
                  }}
                  className="bg-[#0a0a0a] text-[#fcf9f2] hover:bg-[#2a2a2a] px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider flex items-center space-x-2 transition-colors shadow-md"
                >
                  <Download className="w-4 h-4 text-[#e5c07b]" />
                  <span>DESCARGAR PAQUETE NOTARIAL EN ZIP (${associatedKit.priceUSD} USD)</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onNavigateSimulador();
                  }}
                  className="border border-[#1c1c18] bg-[#ffffff] hover:bg-[#f0ebe0] text-[#0a0a0a] px-4 py-2.5 text-xs font-mono font-bold uppercase tracking-wider flex items-center space-x-1.5 transition-colors"
                >
                  <span>PROBAR EN SIMULADOR TÁCTICO</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Legal Broadsheet Disclaimer */}
          <div className="border-t border-[#1c1c18] pt-4 text-[10px] font-mono text-[#777] text-center leading-relaxed">
            EMPRENDENMEX GACETA FIDUCIARIA // PROTOCOLO DE INVESTIGACIÓN JURÍDICO-FISCAL REGISTRADO.
            <br />
            Los dictámenes y análisis presentados constituyen opiniones técnicas de ingeniería societaria amparadas bajo el principio constitucional de economía de opción legítima.
          </div>

        </div>

      </div>
    </div>
  );
};
