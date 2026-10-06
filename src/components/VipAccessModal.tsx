import React, { useState } from 'react';
import { X, Lock, KeyRound, ArrowRight, ShieldCheck } from 'lucide-react';

interface VipAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpgradeToClub: () => void;
}

export const VipAccessModal: React.FC<VipAccessModalProps> = ({
  isOpen,
  onClose,
  onUpgradeToClub,
}) => {
  if (!isOpen) return null;

  const [protocolKey, setProtocolKey] = useState('');
  const [authError, setAuthError] = useState(false);
  const [authSuccess, setAuthSuccess] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (protocolKey.trim().toUpperCase() === 'EMX-2025' || protocolKey.trim().length >= 6) {
      setAuthSuccess(true);
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs">
      <div className="bg-[#fcf9f2] border-2 sm:border-4 border-[#0a0a0a] w-full max-w-md shadow-2xl relative">
        
        {/* Header */}
        <div className="bg-[#0a0a0a] text-[#fcf9f2] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs font-mono">
            <Lock className="w-3.5 h-3.5 text-[#e5c07b]" />
            <span className="font-bold tracking-wider uppercase">
              TERMINAL PROTOCOLAR ESTRATEGA VIP
            </span>
          </div>
          <button onClick={onClose} className="p-1 hover:text-[#e5c07b] text-[#fcf9f2]">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {!authSuccess ? (
            <form onSubmit={handleVerify} className="space-y-4">
              <div className="text-center mb-4">
                <div className="w-12 h-12 rounded-full border-2 border-[#1c1c18] bg-[#f5f2ea] flex items-center justify-center mx-auto mb-2">
                  <KeyRound className="w-6 h-6 text-[#0a0a0a]" />
                </div>
                <h3 className="text-xl font-bold font-serif-broadsheet uppercase text-[#0a0a0a]">
                  Ingreso con Clave Criptográfica
                </h3>
                <p className="text-xs font-serif text-[#666] mt-1">
                  Ingrese la clave de 8 caracteres emitida en su membresía institucional o expediente fiduciario.
                </p>
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold uppercase text-[#0a0a0a] mb-1">
                  CLAVE PROTOCOLAR (TOKEN EMX):
                </label>
                <input
                  type="text"
                  placeholder="ej. EMX-2025"
                  value={protocolKey}
                  onChange={(e) => {
                    setProtocolKey(e.target.value);
                    setAuthError(false);
                  }}
                  className="w-full bg-[#ffffff] border-2 border-[#1c1c18] p-2.5 text-center font-mono text-sm tracking-widest uppercase font-bold focus:outline-none"
                />
                {authError && (
                  <p className="text-[10px] font-mono text-[#ba1a1a] mt-1 text-center font-semibold">
                    Clave no registrada en el ejercicio fiscal en curso.
                  </p>
                )}
                <p className="text-[9px] font-mono text-[#777] mt-1 text-center">
                  Tip: Puede probar ingresando la clave de demostración <code className="bg-[#ebe7dc] px-1 font-bold">EMX-2025</code>
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0a0a0a] text-[#fcf9f2] py-3 text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#222] transition-colors"
              >
                DESBLOQUEAR TERMINAL
              </button>

              <div className="border-t border-[#d6d0c2] pt-4 text-center">
                <span className="text-xs font-serif text-[#555] block mb-2">
                  ¿Aún no cuenta con acreditación protocolar?
                </span>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onUpgradeToClub();
                  }}
                  className="text-xs font-mono font-bold text-[#0a0a0a] uppercase underline hover:text-[#555] inline-flex items-center space-x-1"
                >
                  <span>Solicitar Admisión al Club de Estrategas</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-4 space-y-4">
              <div className="w-12 h-12 bg-[#ebf2ed] border-2 border-[#1e4d2b] flex items-center justify-center mx-auto text-[#1e4d2b]">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-serif-broadsheet uppercase text-[#0a0a0a]">
                Acreditación Validada
              </h3>
              <p className="text-xs font-serif text-[#555]">
                Bienvenido al entorno de alta dirección fiduciaria de Emprendenmex. Su sesión cuenta con privilegios de descarga ilimitada para todos los kits y dossiers.
              </p>
              <button
                onClick={onClose}
                className="w-full bg-[#0a0a0a] text-[#fcf9f2] py-2.5 text-xs font-mono font-bold uppercase tracking-wider"
              >
                CONTINUAR CON PERMISO VIP
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
