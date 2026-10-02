import React, { useState } from 'react';
import { AutomotiveEvent } from '../types';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Ticket, 
  Clock, 
  ShieldAlert, 
  CheckCircle, 
  X, 
  Compass
} from 'lucide-react';

interface EventsSectionProps {
  events: AutomotiveEvent[];
  onRegisterEvent: (eventId: string, driverName: string, vehicleInfo: string) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ events, onRegisterEvent }) => {
  const [selectedEvent, setSelectedEvent] = useState<AutomotiveEvent | null>(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const [driverName, setDriverName] = useState('');
  const [vehicleInfo, setVehicleInfo] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleOpenRegister = (ev: AutomotiveEvent) => {
    setSelectedEvent(ev);
    setIsRegistering(true);
    setRegistrationSuccess(false);
    setDriverName('');
    setVehicleInfo('');
  };

  const handleSubmitRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEvent || !driverName.trim() || !vehicleInfo.trim()) return;

    onRegisterEvent(selectedEvent.id, driverName, vehicleInfo);
    setRegistrationSuccess(true);
    setTimeout(() => {
      // Keep modal open to show paddock pass
    }, 500);
  };

  return (
    <section className="py-12 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-neutral-900">
          <div>
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>Physical Asphalt Gatherings</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mt-1">
              Events & Track Invitationals
            </h2>
            <p className="text-sm text-neutral-400 mt-1 max-w-xl">
              From dawn mountain sprints to low-car-count private circuit track days. Driver discipline over ego. Strict safety and acoustic compliance.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 bg-neutral-900 px-3 py-2 rounded-lg border border-neutral-800">
            <Compass className="w-4 h-4 text-emerald-400" />
            <span>Strict 30–40 Car Caps for Pure Laps</span>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {events.map((ev) => (
            <div
              key={ev.id}
              className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 text-[11px] font-mono font-bold uppercase rounded bg-neutral-950 text-emerald-400 border border-emerald-500/30">
                    {ev.type}
                  </span>
                  <span className={`text-xs font-mono ${ev.spotsRemaining < 6 ? 'text-amber-400' : 'text-neutral-400'}`}>
                    {ev.spotsRemaining} spots left
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-display mb-2">
                  {ev.title}
                </h3>

                <div className="space-y-1.5 text-xs text-neutral-400 mb-4 font-mono">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                    <span>{ev.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                    <span>{ev.location}</span>
                  </div>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed line-clamp-3 mb-5">
                  {ev.description}
                </p>

                {/* Schedule preview */}
                <div className="bg-neutral-950/70 border border-neutral-800/80 rounded-lg p-3 mb-5">
                  <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-emerald-400" />
                    <span>Schedule Run Down</span>
                  </div>
                  <div className="space-y-1.5">
                    {ev.schedule.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between text-[11px]">
                        <span className="font-mono text-neutral-400">{item.time}</span>
                        <span className="text-neutral-200 truncate ml-2 text-right">{item.activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase font-mono text-neutral-400">Driver Entry</div>
                  <div className="text-lg font-bold text-white font-mono">
                    {ev.entryFee === 0 ? 'Free RSVP' : `$${ev.entryFee}`}
                  </div>
                </div>

                <button
                  onClick={() => handleOpenRegister(ev)}
                  disabled={ev.spotsRemaining === 0}
                  className={`px-4 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${
                    ev.spotsRemaining === 0
                      ? 'bg-neutral-800 text-neutral-500 cursor-not-allowed'
                      : 'bg-emerald-500 hover:bg-emerald-400 text-neutral-950 shadow-md shadow-emerald-500/10'
                  }`}
                >
                  <Ticket className="w-3.5 h-3.5" />
                  <span>{ev.spotsRemaining === 0 ? 'Sold Out' : 'Reserve Driver Slot'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Driver Registration Modal */}
        {isRegistering && selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/90 backdrop-blur-md">
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <div>
                  <span className="text-[11px] font-mono text-emerald-400 uppercase">
                    Paddock Driver Application
                  </span>
                  <h3 className="text-lg font-bold text-white font-display">
                    {selectedEvent.title}
                  </h3>
                </div>
                <button
                  onClick={() => setIsRegistering(false)}
                  className="p-1 rounded-lg text-neutral-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {registrationSuccess ? (
                <div className="py-6 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white font-display">Slot Confirmed</h4>
                    <p className="text-xs text-neutral-300 mt-1 max-w-xs mx-auto">
                      Your driver credential for <strong className="text-white">{driverName}</strong> driving the <strong className="text-white">{vehicleInfo}</strong> has been logged to the paddock roster.
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-950 border border-neutral-800 rounded-lg text-left text-xs font-mono space-y-2">
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Date:</span>
                      <span className="text-white">{selectedEvent.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Paddock Location:</span>
                      <span className="text-white">{selectedEvent.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Radio Frequency:</span>
                      <span className="text-amber-400">146.520 MHz</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsRegistering(false)}
                    className="w-full py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-xs rounded-lg transition-colors"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitRegistration} className="mt-5 space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-neutral-300 mb-1.5">
                      Driver Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Liam Vance"
                      value={driverName}
                      onChange={(e) => setDriverName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-300 mb-1.5">
                      Vehicle Make, Model & Tire Compound *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 2018 Porsche Cayman GTS (Michelin Cup 2)"
                      value={vehicleInfo}
                      onChange={(e) => setVehicleInfo(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  {/* Rules & safety declaration */}
                  <div className="bg-neutral-950/80 border border-neutral-800 rounded-lg p-3 text-xs space-y-2">
                    <div className="font-bold text-neutral-200 flex items-center gap-1.5 font-display">
                      <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                      <span>Paddock Driver Rules</span>
                    </div>
                    <ul className="space-y-1 text-neutral-400">
                      {selectedEvent.rules.map((rule, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-emerald-400 font-mono">✓</span>
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-3">
                    <div className="text-xs text-neutral-400">
                      Remaining spots: <span className="font-mono text-white font-bold">{selectedEvent.spotsRemaining}</span>
                    </div>

                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs rounded-lg transition-all shadow-md shadow-emerald-500/10"
                    >
                      Confirm Driver Registration
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
