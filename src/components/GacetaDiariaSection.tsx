import React, { useState } from 'react';
import { Newspaper, Calendar, Check, ArrowRight, ShieldCheck, Scale, AlertCircle, Copy, Share2, TrendingUp, Layers, BookOpen } from 'lucide-react';
import { DailyGazettePost, HISTORICAL_DAILY_POSTS, getTodaysGazettePost } from '../data/blogArticles';

interface GacetaDiariaSectionProps {
  onNavigateSimulador: () => void;
  onNavigateClub: () => void;
}

export const GacetaDiariaSection: React.FC<GacetaDiariaSectionProps> = ({
  onNavigateSimulador,
  onNavigateClub,
}) => {
  const [currentPost, setCurrentPost] = useState<DailyGazettePost>(() => getTodaysGazettePost());
  const [selectedArchiveIndex, setSelectedArchiveIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleSelectArchive = (index: number) => {
    setSelectedArchiveIndex(index);
    setCurrentPost(HISTORICAL_DAILY_POSTS[index] || getTodaysGazettePost());
  };

  const handleCopyDispatch = () => {
    const textToCopy = `${currentPost.headline}\n${currentPost.subheadline}\n\nBeneficiarios: ${currentPost.beneficiaryGroup}\nImpacto: ${currentPost.financialImpact}\nFundamento: ${currentPost.legalBasis}\n\nFuente: EMPRENDENMEX Gaceta Fiduciaria (${currentPost.folio})`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="w-full bg-[#fbf9f2] border-2 border-[#1c1c18] p-5 sm:p-8 md:p-10 shadow-sm relative overflow-hidden">
      
      {/* Top Banner & Folio */}
      <div className="flex flex-wrap items-center justify-between border-b-2 border-[#1c1c18] pb-4 mb-6 gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full border border-[#1c1c18] bg-[#0a0a0a] text-[#fcf9f2] flex items-center justify-center shrink-0">
            <Newspaper className="w-5 h-5 text-[#e5c07b]" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#ba1a1a]">
                PUBLICACIÓN DIARIA OFICIAL // DESPACHO DEL DÍA
              </span>
              <span className="w-2 h-2 rounded-full bg-[#3fa662] inline-block animate-pulse"></span>
            </div>
            <div className="text-xs font-mono font-semibold text-[#0a0a0a] flex items-center space-x-2">
              <span>{currentPost.folio}</span>
              <span className="text-[#888]">·</span>
              <span className="text-[#1e4d2b] font-bold">
                {currentPost.editionNumber}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleCopyDispatch}
            className="flex items-center space-x-1.5 px-3 py-1.5 border border-[#1c1c18] bg-[#ffffff] hover:bg-[#eae6db] text-[#1c1c18] text-xs font-mono font-semibold transition-colors shadow-xs"
            title="Copiar despacho al portapapeles"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#1e4d2b]" />
                <span className="text-[#1e4d2b]">Copiado al Portapapeles</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#555]" />
                <span>Compartir / Copiar Despacho</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Daily Broadsheet Story */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Headline and In-depth Analysis */}
        <div className="lg:col-span-8 space-y-5">
          <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono text-[#555]">
            <span className="bg-[#1c1c18] text-[#fcf9f2] px-2 py-0.5 font-bold uppercase">
              COYUNTURA NORMATIVA SAT
            </span>
            <span>FECHA: {currentPost.dateStr}</span>
            <span>·</span>
            <span className="italic">{currentPost.author}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-serif-broadsheet uppercase tracking-tight text-[#0a0a0a] leading-tight">
            {currentPost.headline}
          </h2>

          <p className="text-sm sm:text-base font-serif italic text-[#333] leading-relaxed border-l-2 border-[#ba1a1a] pl-4">
            {currentPost.subheadline}
          </p>

          <div className="text-xs sm:text-sm font-serif text-[#2a2a28] leading-relaxed space-y-3 pt-2">
            {currentPost.editorialBody.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Actionable Steps for Today */}
          <div className="bg-[#ffffff] border border-[#1c1c18] p-5 shadow-xs">
            <div className="text-[10px] font-mono font-bold uppercase text-[#1e4d2b] tracking-wider mb-2 flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>PASOS DE IMPLEMENTACIÓN INMEDIATA (CHECKLIST PROTOCOLAR)</span>
            </div>
            <ul className="space-y-2">
              {currentPost.tacticalActionSteps.map((step, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-xs font-serif text-[#333]">
                  <span className="font-mono font-bold text-[#ba1a1a] shrink-0">[{idx + 1}]</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Key Metrics, Beneficiaries & Archive Tabs */}
        <div className="lg:col-span-4 space-y-5">
          
          {/* Key Stat Card */}
          <div className="bg-[#0a0a0a] text-[#fcf9f2] p-5 border border-[#0a0a0a]">
            <div className="text-[9px] font-mono font-bold text-[#e5c07b] uppercase tracking-wider mb-1">
              MÉTRICA CLAVE DEL DESPACHO
            </div>
            <div className="text-2xl sm:text-3xl font-black font-mono text-[#ffffff] mb-1">
              {currentPost.keyStat.value}
            </div>
            <p className="text-xs font-serif text-[#c5c2ba]">
              {currentPost.keyStat.label}
            </p>
          </div>

          {/* Target Audience & Impact Box */}
          <div className="bg-[#ffffff] border border-[#d6d0c2] p-4 text-xs space-y-3">
            <div>
              <span className="font-mono font-bold text-[10px] text-[#ba1a1a] uppercase block">
                BENEFICIARIOS DIRECTOS:
              </span>
              <p className="font-serif text-[#222] mt-0.5 leading-snug">
                {currentPost.beneficiaryGroup}
              </p>
            </div>

            <div className="border-t border-[#ece7dc] pt-2">
              <span className="font-mono font-bold text-[10px] text-[#1e4d2b] uppercase block">
                IMPACTO EN GANANCIAS / INGRESOS:
              </span>
              <p className="font-serif text-[#222] mt-0.5 leading-snug">
                {currentPost.financialImpact}
              </p>
            </div>

            <div className="border-t border-[#ece7dc] pt-2">
              <span className="font-mono font-bold text-[10px] text-[#555] uppercase block">
                FUNDAMENTO JURÍDICO APLICABLE:
              </span>
              <p className="font-mono text-[11px] text-[#444] mt-0.5">
                {currentPost.legalBasis}
              </p>
            </div>
          </div>

          {/* Recent Daily Dispatches Selector */}
          <div className="bg-[#f5f2ea] border border-[#1c1c18] p-4">
            <div className="text-[10px] font-mono font-bold uppercase text-[#555] tracking-widest mb-2 flex items-center justify-between">
              <span>EDICIONES DE LA SEMANA</span>
              <Calendar className="w-3.5 h-3.5 text-[#666]" />
            </div>
            <div className="space-y-1.5">
              {HISTORICAL_DAILY_POSTS.map((post, idx) => (
                <button
                  key={post.id}
                  onClick={() => handleSelectArchive(idx)}
                  className={`w-full text-left p-2 text-xs transition-colors border ${
                    selectedArchiveIndex === idx && currentPost.id === post.id
                      ? 'bg-[#0a0a0a] text-[#fcf9f2] border-[#0a0a0a]'
                      : 'bg-[#ffffff] text-[#1c1c18] border-[#d6d0c2] hover:bg-[#ebe7dc]'
                  }`}
                >
                  <div className="text-[9px] font-mono opacity-80">{post.dateStr}</div>
                  <div className="font-serif font-bold truncate text-[11px] mt-0.5">{post.headline}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Simulation Link */}
          <div className="pt-1">
            <button
              onClick={onNavigateSimulador}
              className="w-full bg-[#1e4d2b] hover:bg-[#163820] text-[#fcf9f2] py-2.5 px-3 text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-colors shadow-xs"
            >
              <span>AUDITAR TU CASO EN EL SIMULADOR</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
