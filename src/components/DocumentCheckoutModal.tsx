import React, { useState } from 'react';
import { X, Check, Download, FileText, Shield, CreditCard, Lock } from 'lucide-react';
import { BoutiqueProduct } from '../types';

interface DocumentCheckoutModalProps {
  product: BoutiqueProduct | null;
  onClose: () => void;
}

export const DocumentCheckoutModal: React.FC<DocumentCheckoutModalProps> = ({
  product,
  onClose,
}) => {
  if (!product) return null;

  const [purchased, setPurchased] = useState(false);
  const [buyerEmail, setBuyerEmail] = useState('');

  const handleAcquire = (e: React.FormEvent) => {
    e.preventDefault();
    setPurchased(true);
  };

  const handleSimulatedDownload = () => {
    // Generate text blob mimicking legal contract template
    const content = `====================================================================
EMPRENDENMEX GACETA FIDUCIARIA // PROTOCOLO DOCUMENTAL
INSTRUMENTO: ${product.title.toUpperCase()}
CÓDIGO OFICIAL: ${product.code}
VALOR CONTRATADO: $${product.priceUSD} USD
====================================================================

CLÁUSULA PRIMERA.- DEL OBJETO CONTRACTUAL Y MATERIALIDAD.
Las partes acuerdan expresamente el otorgamiento de derechos de uso, 
estatutos y esquemas de gobierno corporativo bajo el estricto amparo 
del Artículo 5-A del Código Fiscal de la Federación (CFF), con plena 
razón de negocios y beneficio económico cuantificable.

CLÁUSULA SEGUNDA.- CERTIFICACIÓN DE FECHA CIERTA.
El presente instrumento cuenta con folio de protocolización notarial 
conforme a la jurisprudencia de la Suprema Corte de Justicia de la Nación.

CONTENIDO DEL PAQUETE ADQUIRIDO:
${product.details.map((d, i) => `[${i + 1}] ${d}`).join('\n')}

HASH CRIPTOGRÁFICO: 8F2A-C911-EMX-SAT-2025
TODOS LOS DERECHOS RESERVADOS © 2025 EMPRENDENMEX.`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${product.title.replace(/\s+/g, '_')}_FORMATO_NOTARIAL.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs">
      <div className="bg-[#fcf9f2] border-2 sm:border-4 border-[#0a0a0a] w-full max-w-lg shadow-2xl relative">
        
        {/* Header */}
        <div className="bg-[#0a0a0a] text-[#fcf9f2] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs font-mono">
            <FileText className="w-3.5 h-3.5 text-[#e5c07b]" />
            <span className="font-bold tracking-wider uppercase">
              BÓVEDA NOTARIAL // ADQUISICIÓN PERPETUA
            </span>
          </div>
          <button onClick={onClose} className="p-1 hover:text-[#e5c07b] text-[#fcf9f2]">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {!purchased ? (
            <form onSubmit={handleAcquire} className="space-y-4">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#555] font-bold block">
                  {product.code}
                </span>
                <h3 className="text-xl font-bold font-serif-broadsheet uppercase text-[#0a0a0a]">
                  {product.title}
                </h3>
                <p className="text-xs font-serif text-[#555] mt-1 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Inclusions */}
              <div className="bg-[#ffffff] border border-[#d6d0c2] p-3 text-xs space-y-2">
                <span className="font-mono font-bold text-[10px] uppercase text-[#0a0a0a] block">
                  Archivos y Cláusulas Incluidas:
                </span>
                {product.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-[#444] font-serif">
                    <Check className="w-3.5 h-3.5 text-[#2e7d32] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {/* Price Row */}
              <div className="bg-[#f5f2ea] border border-[#d6d0c2] p-3 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#666] block">PRECIO TOTAL:</span>
                  <span className="text-2xl font-black font-serif-broadsheet text-[#0a0a0a]">${product.priceUSD} USD</span>
                </div>
                <div className="text-right text-[10px] font-mono text-[#555]">
                  <span className="block font-semibold">Descarga Inmediata</span>
                  <span>Sin suscripción recurrente</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-[#0a0a0a] mb-1">
                  Correo Electrónico para Entrega Inmediata:
                </label>
                <input
                  type="email"
                  required
                  placeholder="titular@empresa.mx"
                  value={buyerEmail}
                  onChange={(e) => setBuyerEmail(e.target.value)}
                  className="w-full bg-[#ffffff] border border-[#d6d0c2] p-2 text-xs font-mono text-[#0a0a0a] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0a0a0a] text-[#fcf9f2] py-3 text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#222] transition-colors flex items-center justify-center space-x-2"
              >
                <Lock className="w-3.5 h-3.5 text-[#e5c07b]" />
                <span>AUTORIZAR Y ADQUIRIR INSTRUMENTO (${product.priceUSD} USD)</span>
              </button>

              <div className="text-[9px] font-mono text-center text-[#777]">
                Amparado por la garantía de salvaguarda protocolar de 14 días.
              </div>
            </form>
          ) : (
            <div className="text-center py-4 space-y-4">
              <div className="w-12 h-12 bg-[#ebf2ed] border-2 border-[#1e4d2b] flex items-center justify-center mx-auto text-[#1e4d2b]">
                <Check className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-serif-broadsheet uppercase text-[#0a0a0a]">
                Instrumento Generado
              </h3>
              <p className="text-xs font-serif text-[#555]">
                Se ha generado el expediente digital de <strong>{product.title}</strong> con fe pública digital y sello de agua conforme al Art. 5-A CFF.
              </p>
              
              <button
                onClick={handleSimulatedDownload}
                className="w-full bg-[#1e4d2b] text-[#ffffff] py-3 text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#286037] flex items-center justify-center space-x-2 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>DESCARGAR FORMATO LEGAL (TXT/WORD)</span>
              </button>

              <button
                onClick={onClose}
                className="w-full bg-[#f5f2ea] text-[#1c1c18] border border-[#1c1c18] py-2 text-xs font-mono font-bold uppercase"
              >
                CERRAR VENTANA
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
