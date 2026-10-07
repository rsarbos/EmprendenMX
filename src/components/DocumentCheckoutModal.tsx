import React, { useState } from 'react';
import { X, Check, Download, FileText, Shield, Lock, FileArchive, Eye, FolderArchive, ArrowDownToLine } from 'lucide-react';
import { BoutiqueProduct } from '../types';
import { DETAILED_BOUTIQUE_KITS, generateKitZipBlob, DetailedBoutiqueKit } from '../data/boutiqueKits';

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
  const [downloadingZip, setDownloadingZip] = useState(false);
  const [previewFileIndex, setPreviewFileIndex] = useState<number | null>(null);

  // Find detailed kit
  const detailedKit: DetailedBoutiqueKit = DETAILED_BOUTIQUE_KITS.find(k => k.id === product.id) || {
    ...product,
    files: [
      {
        name: `${product.title.replace(/\s+/g, '_')}_INSTRUMENTO.doc`,
        description: 'Instrumento legal y cláusulas notariales oficiales.',
        mimeType: 'application/msword',
        content: `EMPRENDENMEX // ${product.title}\nCÓDIGO: ${product.code}\n\n${product.details.join('\n')}`
      }
    ],
    isAvailable: true,
  };

  const handleAcquire = (e: React.FormEvent) => {
    e.preventDefault();
    setPurchased(true);
  };

  const handleDownloadZip = async () => {
    try {
      setDownloadingZip(true);
      const zipBlob = await generateKitZipBlob(detailedKit);
      const url = URL.createObjectURL(zipBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${product.title.replace(/\s+/g, '_')}_PAQUETE_NOTARIAL_EMX.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Error generating zip:', err);
    } finally {
      setDownloadingZip(false);
    }
  };

  const handleDownloadSingleFile = (file: { name: string; content: string }) => {
    const blob = new Blob([file.content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div className="bg-[#fcf9f2] border-2 sm:border-4 border-[#0a0a0a] w-full max-w-2xl max-h-[92vh] overflow-y-auto shadow-2xl relative">
        
        {/* Header */}
        <div className="bg-[#0a0a0a] text-[#fcf9f2] px-4 py-3 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center space-x-2 text-xs font-mono">
            <FileArchive className="w-4 h-4 text-[#e5c07b]" />
            <span className="font-bold tracking-wider uppercase">
              BÓVEDA NOTARIAL // PAQUETE DESCARGABLE (.ZIP)
            </span>
          </div>
          <button onClick={onClose} className="p-1 hover:text-[#e5c07b] text-[#fcf9f2]">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {!purchased ? (
            <form onSubmit={handleAcquire} className="space-y-5">
              
              <div className="border-b border-[#1c1c18] pb-4">
                <div className="flex items-center justify-between text-[10px] font-mono tracking-widest uppercase mb-1">
                  <span className="text-[#555] font-bold">{product.code}</span>
                  <span className="bg-[#ebf2ed] text-[#1e4d2b] border border-[#1e4d2b] px-2 py-0.5 font-bold">
                    DISPONIBLE // DESCARGA INMEDIATA (.ZIP)
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-serif-broadsheet uppercase text-[#0a0a0a]">
                  {product.title}
                </h3>
                <p className="text-xs sm:text-sm font-serif text-[#555] mt-1.5 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Exact Files in ZIP Breakdown */}
              <div className="bg-[#ffffff] border-2 border-[#1c1c18] p-4 text-xs space-y-3">
                <div className="flex items-center justify-between border-b border-[#e0ded8] pb-2">
                  <span className="font-mono font-bold text-[11px] uppercase text-[#0a0a0a] flex items-center space-x-1.5">
                    <FolderArchive className="w-4 h-4 text-[#0a0a0a]" />
                    <span>Contenido del Archivo .ZIP ({detailedKit.files.length} Instrumentos):</span>
                  </span>
                  <span className="text-[10px] font-mono text-[#666]">Word + PDF + Cédulas</span>
                </div>

                <div className="space-y-2.5">
                  {detailedKit.files.map((file, idx) => (
                    <div key={idx} className="flex items-start justify-between bg-[#fbf9f5] border border-[#e8e5dc] p-2.5">
                      <div className="pr-3">
                        <div className="font-mono font-bold text-[11px] text-[#0a0a0a] flex items-center space-x-1.5">
                          <span className="w-4 h-4 bg-[#0a0a0a] text-[#fcf9f2] rounded-none text-[9px] flex items-center justify-center font-bold">
                            {idx + 1}
                          </span>
                          <span className="break-all">{file.name}</span>
                        </div>
                        <p className="text-[11px] font-serif text-[#666] mt-1">
                          {file.description}
                        </p>
                      </div>
                      <span className="text-[9px] font-mono bg-[#ebe7dc] text-[#333] px-1.5 py-0.5 shrink-0 font-bold uppercase">
                        {file.name.endsWith('.doc') ? 'DOCX' : file.name.endsWith('.pdf') ? 'PDF' : 'TXT'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Guarantee Row */}
              <div className="bg-[#f5f2ea] border border-[#d6d0c2] p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#666] block">PRECIO UNITARIO PROTOCOLIZADO:</span>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-black font-serif-broadsheet text-[#0a0a0a]">${product.priceUSD}</span>
                    <span className="text-xs font-mono font-bold text-[#555]">USD / Pago Único</span>
                  </div>
                </div>
                <div className="text-left sm:text-right text-[10px] font-mono text-[#555]">
                  <span className="block font-bold text-[#2e7d32]">✓ Derechos de uso perpetuo</span>
                  <span>✓ Sin suscripciones ni renovaciones</span>
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-[#0a0a0a] mb-1.5">
                  Correo Electrónico para Resguardo y Entrega:
                </label>
                <input
                  type="email"
                  required
                  placeholder="director@empresa.mx"
                  value={buyerEmail}
                  onChange={(e) => setBuyerEmail(e.target.value)}
                  className="w-full bg-[#ffffff] border-2 border-[#1c1c18] p-2.5 text-xs font-mono text-[#0a0a0a] focus:outline-none"
                />
              </div>

              {/* Acquire Trigger */}
              <button
                type="submit"
                className="w-full bg-[#0a0a0a] text-[#fcf9f2] py-3.5 px-4 text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#222] transition-colors flex items-center justify-center space-x-2 border border-[#0a0a0a]"
              >
                <Lock className="w-4 h-4 text-[#e5c07b]" />
                <span>ADQUIRIR Y DESCARGAR PAQUETE COMPLETO (${product.priceUSD} USD)</span>
              </button>

              <div className="text-[10px] font-mono text-center text-[#777]">
                Amparado por la garantía de salvaguarda protocolar de 14 días.
              </div>
            </form>
          ) : (
            /* PURCHASED / READY FOR ZIP DOWNLOAD SCREEN */
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-14 h-14 bg-[#ebf2ed] border-2 border-[#1e4d2b] flex items-center justify-center mx-auto text-[#1e4d2b] mb-3">
                  <Check className="w-8 h-8" />
                </div>
                <div className="text-[10px] font-mono uppercase font-bold tracking-widest text-[#2e7d32]">
                  EXPEDIENTE NOTARIAL AUTORIZADO
                </div>
                <h3 className="text-2xl font-bold font-serif-broadsheet uppercase text-[#0a0a0a] mt-1">
                  {product.title}
                </h3>
                <p className="text-xs font-serif text-[#555] max-w-md mx-auto mt-1">
                  Su paquete legal ha sido sellado criptográficamente y está listo para descarga inmediata en formato comprimido (.ZIP).
                </p>
              </div>

              {/* Big ZIP Download Button */}
              <div className="bg-[#ebe7dc] border-2 border-[#1c1c18] p-5 text-center">
                <button
                  type="button"
                  onClick={handleDownloadZip}
                  disabled={downloadingZip}
                  className="w-full bg-[#1e4d2b] text-[#ffffff] py-4 px-6 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider hover:bg-[#286037] transition-all flex items-center justify-center space-x-3 shadow-md disabled:opacity-50"
                >
                  <ArrowDownToLine className="w-5 h-5" />
                  <span>
                    {downloadingZip ? 'GENERANDO ARCHIVO ZIP...' : 'DESCARGAR PAQUETE COMPLETO (.ZIP)'}
                  </span>
                </button>
                <span className="text-[10px] font-mono text-[#666] block mt-2">
                  Incluye los {detailedKit.files.length} archivos (.doc, .pdf, .txt) + Manual de Instrucciones
                </span>
              </div>

              {/* Individual File Download / Peek List */}
              <div className="bg-[#ffffff] border border-[#d6d0c2] p-4">
                <span className="text-[11px] font-mono font-bold uppercase text-[#0a0a0a] block mb-2.5">
                  O descargar archivos individuales:
                </span>
                <div className="space-y-2">
                  {detailedKit.files.map((file, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 bg-[#f9f7f0] border border-[#e0ded8] text-xs font-mono">
                      <div className="truncate pr-2">
                        <span className="font-bold text-[#0a0a0a]">{file.name}</span>
                      </div>
                      <div className="flex items-center space-x-2 shrink-0">
                        <button
                          type="button"
                          onClick={() => setPreviewFileIndex(previewFileIndex === idx ? null : idx)}
                          className="px-2 py-1 bg-[#ebe7dc] hover:bg-[#ded9cc] text-[10px] text-[#0a0a0a] font-bold"
                        >
                          {previewFileIndex === idx ? 'Ocultar' : 'Ver'}
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDownloadSingleFile(file)}
                          className="px-2 py-1 bg-[#0a0a0a] text-[#fcf9f2] text-[10px] font-bold hover:bg-[#333] flex items-center space-x-1"
                        >
                          <Download className="w-3 h-3" />
                          <span>Descargar</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Preview Drawer if open */}
              {previewFileIndex !== null && (
                <div className="bg-[#141414] text-[#a5a59f] p-4 text-xs font-mono border border-[#333] max-h-48 overflow-y-auto whitespace-pre-wrap">
                  <div className="text-[#e5c07b] font-bold pb-2 border-b border-[#333] mb-2 flex justify-between">
                    <span>VISTA PREVIA: {detailedKit.files[previewFileIndex].name}</span>
                    <button onClick={() => setPreviewFileIndex(null)} className="text-[#fff] hover:underline">
                      Cerrar vista
                    </button>
                  </div>
                  {detailedKit.files[previewFileIndex].content}
                </div>
              )}

              <button
                type="button"
                onClick={onClose}
                className="w-full bg-[#f5f2ea] text-[#1c1c18] border border-[#1c1c18] py-2.5 text-xs font-mono font-bold uppercase hover:bg-[#ebe7dc]"
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
