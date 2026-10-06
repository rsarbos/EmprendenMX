import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Shield, User, Mail, Phone } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    rfc: '',
    consultationType: 'holding',
    date: '2025-03-12',
    timeSlot: '11:00 AM',
    firm: 'Gabinete Fiduciario & Fiscal Asociados SC',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs">
      <div className="bg-[#fcf9f2] border-2 sm:border-4 border-[#0a0a0a] w-full max-w-xl max-h-[92vh] overflow-y-auto shadow-2xl relative">
        
        {/* Top Header */}
        <div className="bg-[#0a0a0a] text-[#fcf9f2] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs font-mono">
            <Calendar className="w-4 h-4 text-[#e5c07b]" />
            <span className="font-bold tracking-wider uppercase">
              SESIÓN DE VALIDACIÓN PROTOCOLAR
            </span>
          </div>
          <button onClick={onClose} className="p-1 hover:text-[#e5c07b] text-[#fcf9f2]">
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#555] font-bold">
                AUDITORÍA PRIVADA CON PERITOS CONTABLES
              </div>
              <h2 className="text-xl font-bold font-serif-broadsheet uppercase text-[#0a0a0a]">
                Agendar Consulta de Viabilidad Fiduciaria
              </h2>
              <p className="text-xs font-serif text-[#666] mt-1">
                Sesión técnica de 45 minutos para revisar contratos de mutuo, actas constitutivas y esquemas de intangibles ante peritos acreditados.
              </p>
            </div>

            {/* Objective */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase text-[#0a0a0a] mb-1">
                Objetivo Principal de la Estrategia:
              </label>
              <select
                value={formData.consultationType}
                onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                className="w-full bg-[#ffffff] border border-[#d6d0c2] p-2 text-xs font-mono text-[#0a0a0a] focus:outline-none focus:border-[#0a0a0a]"
              >
                <option value="holding">Estructuración de Holding & Regalías de Marca (Art. 5-A CFF)</option>
                <option value="resico">Transición Preventiva de RESICO a SAPI antes de superar $3.5M</option>
                <option value="mutuo">Contratos de Mutuo Intercompañía con Pagarés Notariados</option>
                <option value="blindaje">Blindaje de Patrimonio Personal y Segregación de Pasivos</option>
              </select>
            </div>

            {/* Firm */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase text-[#0a0a0a] mb-1">
                Despacho Contable / Notaría Colegiada:
              </label>
              <select
                value={formData.firm}
                onChange={(e) => setFormData({ ...formData, firm: e.target.value })}
                className="w-full bg-[#ffffff] border border-[#d6d0c2] p-2 text-xs font-mono text-[#0a0a0a] focus:outline-none focus:border-[#0a0a0a]"
              >
                <option value="Gabinete Fiduciario & Fiscal Asociados SC">Gabinete Fiduciario & Fiscal Asociados S.C. (CDMX)</option>
                <option value="Valenzuela & Partners M&A Fiscal">Valenzuela & Partners M&A Fiscal (Guadalajara / San Pedro)</option>
                <option value="Sindicatura Corporativa Especializada">Sindicatura Corporativa Especializada (Monterrey)</option>
              </select>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-[#0a0a0a] mb-1">
                  Fecha Preferida:
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-[#ffffff] border border-[#d6d0c2] p-2 text-xs font-mono text-[#0a0a0a] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-[#0a0a0a] mb-1">
                  Horario Disponible:
                </label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full bg-[#ffffff] border border-[#d6d0c2] p-2 text-xs font-mono text-[#0a0a0a] focus:outline-none"
                >
                  <option value="10:00 AM">10:00 AM (CDMX)</option>
                  <option value="11:30 AM">11:30 AM (CDMX)</option>
                  <option value="03:00 PM">03:00 PM (CDMX)</option>
                  <option value="05:00 PM">05:00 PM (CDMX)</option>
                </select>
              </div>
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-[#0a0a0a] mb-1">
                  Nombre Completo / Razón Social:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Lic. Roberto Montes"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#ffffff] border border-[#d6d0c2] p-2 text-xs font-mono text-[#0a0a0a] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-[#0a0a0a] mb-1">
                  RFC (Opcional para pre-dictamen):
                </label>
                <input
                  type="text"
                  placeholder="XAXX010101000"
                  value={formData.rfc}
                  onChange={(e) => setFormData({ ...formData, rfc: e.target.value })}
                  className="w-full bg-[#ffffff] border border-[#d6d0c2] p-2 text-xs font-mono text-[#0a0a0a] focus:outline-none uppercase"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-[#0a0a0a] mb-1">
                  Correo Electrónico:
                </label>
                <input
                  type="email"
                  required
                  placeholder="director@empresa.mx"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#ffffff] border border-[#d6d0c2] p-2 text-xs font-mono text-[#0a0a0a] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-[#0a0a0a] mb-1">
                  Teléfono / WhatsApp:
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+52 55 1234 5678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#ffffff] border border-[#d6d0c2] p-2 text-xs font-mono text-[#0a0a0a] focus:outline-none"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-[#d6d0c2]">
              <button
                type="submit"
                className="w-full bg-[#0a0a0a] text-[#fcf9f2] py-3 text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#222] transition-colors"
              >
                CONFIRMAR Y ASIGNAR AUDITOR FISCAL
              </button>
              <div className="text-[10px] font-mono text-center text-[#777] mt-2">
                Sesión amparada por convenio de estricta confidencialidad (NDA) fiduciario.
              </div>
            </div>

          </form>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-[#ebf2ed] border-2 border-[#1e4d2b] flex items-center justify-center mx-auto text-[#1e4d2b]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="text-[10px] font-mono uppercase font-bold tracking-widest text-[#2e7d32]">
              SOLICITUD PROTOCOLIZADA CON ÉXITO
            </div>

            <h3 className="text-2xl font-bold font-serif-broadsheet uppercase text-[#0a0a0a]">
              Sesión Confirmada
            </h3>

            <div className="bg-[#f5f2ea] border border-[#d6d0c2] p-4 text-xs font-mono text-left space-y-1.5 max-w-md mx-auto">
              <div><strong>Folio de Cita:</strong> CITA-EMX-{Math.floor(100000 + Math.random() * 900000)}</div>
              <div><strong>Despacho:</strong> {formData.firm}</div>
              <div><strong>Fecha y Hora:</strong> {formData.date} a las {formData.timeSlot}</div>
              <div><strong>Titular:</strong> {formData.name || 'Contribuyente'}</div>
              <div><strong>Notificación enviada a:</strong> {formData.email || 'correo corporativo'}</div>
            </div>

            <p className="text-xs font-serif text-[#555] max-w-sm mx-auto">
              Un actuario fiscal del despacho le contactará con el enlace seguro de videoconferencia cifrada y la lista de cotejo de documentos requeridos.
            </p>

            <button
              onClick={onClose}
              className="bg-[#0a0a0a] text-[#fcf9f2] px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#222]"
            >
              VOLVER A LA TERMINAL
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
