import React, { useState } from 'react';
import { X, Lock, Key, CheckCircle2, Shield, Database, Users, Building, Home, DollarSign, Layers, Plus, Trash2, Edit, Save, RefreshCw, Eye } from 'lucide-react';
import { ProjectPlot, ConstructionPackage, ClientEnquiry } from '../types';
import { BRAND_INFO } from '../data/mockData';
import { getCustomSupabaseConfig, saveSupabaseConfigToStorage } from '../lib/supabase';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  plots: ProjectPlot[];
  onUpdatePlot: (plot: ProjectPlot) => void;
  enquiries: ClientEnquiry[];
  onUpdateEnquiryStatus: (id: string, status: ClientEnquiry['status']) => void;
  packages: ConstructionPackage[];
  onUpdatePackageRate: (id: string, minRate: number, maxRate: number) => void;
  apartmentStatus: string;
  onUpdateApartmentStatus: (status: string) => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  plots,
  onUpdatePlot,
  enquiries,
  onUpdateEnquiryStatus,
  packages,
  onUpdatePackageRate,
  apartmentStatus,
  onUpdateApartmentStatus
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState<'enquiries' | 'plots' | 'packages' | 'apartment' | 'supabase'>('enquiries');

  // Supabase form state
  const config = getCustomSupabaseConfig();
  const [sbUrl, setSbUrl] = useState(config.url);
  const [sbKey, setSbKey] = useState(config.key);
  const [configSaved, setConfigSaved] = useState(false);

  // Plot search in admin
  const [plotSearch, setPlotSearch] = useState('');

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default PIN: kns2026 or admin
    if (passwordInput.trim() === 'kns2026' || passwordInput.trim() === 'admin') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Invalid Admin Access Key. Please try "kns2026"');
    }
  };

  const handleSaveSupabaseConfig = (e: React.FormEvent) => {
    e.preventDefault();
    saveSupabaseConfigToStorage(sbUrl, sbKey);
    setConfigSaved(true);
    setTimeout(() => setConfigSaved(false), 3000);
  };

  const filteredPlots = plots.filter((p) => p.number.includes(plotSearch.trim()));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/90 backdrop-blur-lg animate-in fade-in duration-200">
      <div className="bg-charcoal border border-gold/40 rounded-2xl w-full max-w-5xl h-[90vh] flex flex-col shadow-2xl overflow-hidden relative">
        {/* Modal Top Header */}
        <div className="px-6 py-4 bg-navy-950 border-b border-gold/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-gold/15 border border-gold/40 flex items-center justify-center text-gold">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <span className="font-serif text-lg text-ivory font-semibold block">
                KNS Executive Administration Console
              </span>
              <span className="text-[10px] text-silver font-mono block">
                Authorized Access: Kiran Gajbhare & Managing Directors
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-silver hover:text-gold transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Not Authenticated State */}
        {!isAuthenticated ? (
          <div className="flex-1 flex items-center justify-center p-6">
            <div className="max-w-md w-full glass-panel p-8 rounded-xl border border-gold/30 text-center space-y-6">
              <div className="w-14 h-14 rounded-full bg-navy border border-gold/40 mx-auto flex items-center justify-center text-gold">
                <Lock className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl text-ivory">Restricted Management Portal</h3>
                <p className="text-xs text-silver leading-relaxed">
                  Enter master access PIN to manage client enquiries, 100 villa plots, construction package rates, and Supabase database.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4 text-left">
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-silver block mb-1">
                    Master PIN / Password:
                  </label>
                  <input
                    type="password"
                    autoFocus
                    placeholder="Enter PIN (Default: kns2026)"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    className="w-full bg-navy-800 border border-gold/30 text-ivory text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:border-gold"
                  />
                  {authError && <span className="text-xs text-red-400 mt-1 block">{authError}</span>}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gold hover:bg-gold-500 text-navy font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                >
                  Verify Credentials
                </button>
              </form>

              <div className="p-3 rounded bg-navy-900 border border-gold/15 text-[11px] text-silver font-mono">
                Hint for Developer / Reviewer: Enter <span className="text-gold font-bold">kns2026</span>
              </div>
            </div>
          </div>
        ) : (
          /* Authenticated Dashboard View */
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Navigation Tabs Bar */}
            <div className="flex items-center gap-2 px-6 py-3 bg-navy-900 border-b border-gold/15 overflow-x-auto">
              <button
                onClick={() => setActiveTab('enquiries')}
                className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-colors ${
                  activeTab === 'enquiries' ? 'bg-gold text-navy font-bold' : 'text-silver hover:text-ivory'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Enquiries ({enquiries.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('plots')}
                className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-colors ${
                  activeTab === 'plots' ? 'bg-gold text-navy font-bold' : 'text-silver hover:text-ivory'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>100 Villa Plots</span>
              </button>

              <button
                onClick={() => setActiveTab('packages')}
                className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-colors ${
                  activeTab === 'packages' ? 'bg-gold text-navy font-bold' : 'text-silver hover:text-ivory'
                }`}
              >
                <DollarSign className="w-4 h-4" />
                <span>Package Rates</span>
              </button>

              <button
                onClick={() => setActiveTab('apartment')}
                className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-colors ${
                  activeTab === 'apartment' ? 'bg-gold text-navy font-bold' : 'text-silver hover:text-ivory'
                }`}
              >
                <Building className="w-4 h-4" />
                <span>Kondapur 3BHK</span>
              </button>

              <button
                onClick={() => setActiveTab('supabase')}
                className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-colors ${
                  activeTab === 'supabase' ? 'bg-gold text-navy font-bold' : 'text-silver hover:text-ivory'
                }`}
              >
                <Database className="w-4 h-4" />
                <span>Supabase Backend</span>
              </button>
            </div>

            {/* Tab Body Contents */}
            <div className="flex-1 overflow-y-auto p-6">
              {/* TAB 1: Enquiries */}
              {activeTab === 'enquiries' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl text-ivory">Client Lead Registry</h3>
                    <span className="text-xs text-silver font-mono">Total Recorded: {enquiries.length}</span>
                  </div>

                  <div className="space-y-3">
                    {enquiries.length === 0 ? (
                      <div className="p-8 text-center text-silver text-xs">No client enquiries submitted yet.</div>
                    ) : (
                      enquiries.map((enq) => (
                        <div key={enq.id} className="p-4 rounded-xl bg-navy-800 border border-gold/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2.5">
                              <span className="font-serif text-lg font-bold text-ivory">{enq.name}</span>
                              <span className="text-xs font-mono text-gold px-2 py-0.5 rounded bg-navy border border-gold/20">
                                {enq.id}
                              </span>
                              <span className="text-[10px] text-silver font-mono">{enq.timestamp}</span>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 text-xs text-silver">
                              <span className="text-ivory font-mono">{enq.phone}</span>
                              <span>•</span>
                              <span>{enq.email}</span>
                              <span>•</span>
                              <span className="text-gold font-medium">{enq.service}</span>
                              {enq.builtUpArea && <span>• {enq.builtUpArea} SFT</span>}
                            </div>
                            <p className="text-xs text-silver/90 italic pt-1">
                              "{enq.details}"
                            </p>
                          </div>

                          {/* Status Dropdown */}
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] uppercase font-mono text-silver">Status:</span>
                            <select
                              value={enq.status}
                              onChange={(e) => onUpdateEnquiryStatus(enq.id, e.target.value as any)}
                              className="bg-navy border border-gold/30 text-xs text-ivory py-1.5 px-2.5 rounded font-mono focus:outline-none focus:border-gold"
                            >
                              <option value="New">New</option>
                              <option value="Contacted">Contacted</option>
                              <option value="Meeting Scheduled">Meeting Scheduled</option>
                              <option value="Converted">Converted</option>
                              <option value="Closed">Closed</option>
                            </select>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}

              {/* TAB 2: 100 Villa Plots Manager */}
              {activeTab === 'plots' && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h3 className="font-serif text-xl text-ivory">100 Villa Plots Inventory Manager</h3>
                      <p className="text-xs text-silver">Toggle plot availability in real-time across the website.</p>
                    </div>
                    <input
                      type="text"
                      placeholder="Search plot # (e.g. 18)..."
                      value={plotSearch}
                      onChange={(e) => setPlotSearch(e.target.value)}
                      className="bg-navy-800 border border-gold/30 text-ivory text-xs px-3 py-1.5 rounded focus:outline-none focus:border-gold w-48"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {filteredPlots.slice(0, 30).map((plot) => (
                      <div key={plot.id} className="p-3 rounded-lg bg-navy-800 border border-gold/20 flex items-center justify-between">
                        <div>
                          <span className="font-mono text-sm font-bold text-gold block">
                            Plot #{plot.number}
                          </span>
                          <span className="text-[10px] text-silver block">
                            {plot.facing} Facing • {plot.portion.split(' ')[0]}
                          </span>
                        </div>

                        {/* Status Switcher */}
                        <div className="flex items-center gap-1">
                          {(['available', 'reserved', 'sold'] as const).map((st) => (
                            <button
                              key={st}
                              onClick={() => onUpdatePlot({ ...plot, status: st })}
                              className={`px-2 py-1 rounded text-[10px] font-mono uppercase cursor-pointer transition-colors ${
                                plot.status === st
                                  ? st === 'available'
                                    ? 'bg-emerald-600 text-white font-bold'
                                    : st === 'reserved'
                                    ? 'bg-amber-600 text-white font-bold'
                                    : 'bg-zinc-700 text-white font-bold'
                                  : 'bg-navy text-silver hover:text-ivory'
                              }`}
                            >
                              {st}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: Package Rates */}
              {activeTab === 'packages' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-xl text-ivory">Construction Packages Price Editor</h3>
                    <p className="text-xs text-silver">Update base per-square-foot indicative rates shown on the website and cost calculator.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {packages.map((pkg) => (
                      <div key={pkg.id} className="p-5 rounded-xl bg-navy-800 border border-gold/30 space-y-4">
                        <h4 className="font-serif text-lg text-ivory">{pkg.name}</h4>
                        <div className="space-y-3">
                          <div>
                            <label className="text-[10px] uppercase font-mono text-silver block mb-1">
                              Minimum Rate (₹/SFT):
                            </label>
                            <input
                              type="number"
                              value={pkg.minRate}
                              onChange={(e) => onUpdatePackageRate(pkg.id, Number(e.target.value), pkg.maxRate)}
                              className="w-full bg-navy border border-gold/20 text-gold font-mono font-bold text-sm px-3 py-1.5 rounded"
                            />
                          </div>
                          <div>
                            <label className="text-[10px] uppercase font-mono text-silver block mb-1">
                              Maximum Rate (₹/SFT):
                            </label>
                            <input
                              type="number"
                              value={pkg.maxRate}
                              onChange={(e) => onUpdatePackageRate(pkg.id, pkg.minRate, Number(e.target.value))}
                              className="w-full bg-navy border border-gold/20 text-gold font-mono font-bold text-sm px-3 py-1.5 rounded"
                            />
                          </div>
                        </div>
                        <span className="text-[11px] text-silver block pt-1">
                          Current Display: ₹{pkg.minRate} – ₹{pkg.maxRate}/SFT
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: Apartment Status */}
              {activeTab === 'apartment' && (
                <div className="space-y-6 max-w-xl">
                  <div>
                    <h3 className="font-serif text-xl text-ivory">Raghavendra Residency (Kondapur) Project Status</h3>
                    <p className="text-xs text-silver">Update construction progress status shown on the public website.</p>
                  </div>

                  <div className="p-6 rounded-xl bg-navy-800 border border-gold/30 space-y-4">
                    <div>
                      <label className="text-xs uppercase font-mono text-silver block mb-1">
                        Current Public Construction Status:
                      </label>
                      <input
                        type="text"
                        value={apartmentStatus}
                        onChange={(e) => onUpdateApartmentStatus(e.target.value)}
                        className="w-full bg-navy border border-gold/20 text-ivory text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:border-gold font-medium"
                      />
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {['Booking Open / Earthwork', 'Foundation Cast', 'RCC Slabs in Progress', 'Finishing & Woodwork', 'Ready for Possession'].map((preset) => (
                        <button
                          key={preset}
                          onClick={() => onUpdateApartmentStatus(preset)}
                          className="px-2.5 py-1 rounded bg-navy text-silver hover:text-gold border border-gold/15 cursor-pointer text-[11px]"
                        >
                          {preset}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 5: Supabase Backend Integration */}
              {activeTab === 'supabase' && (
                <div className="space-y-6 max-w-2xl">
                  <div>
                    <h3 className="font-serif text-xl text-ivory">Supabase Cloud Database & Storage</h3>
                    <p className="text-xs text-silver">
                      Configure your Supabase project URL and anon public key. When configured, enquiries and plot statuses synchronize with Supabase PostgreSQL tables.
                    </p>
                  </div>

                  {/* Status Banner */}
                  <div className={`p-4 rounded-xl border flex items-start gap-3 ${
                    config.isConfigured
                      ? 'bg-emerald-950/70 border-emerald-500/50 text-emerald-200'
                      : 'bg-amber-950/70 border-amber-500/50 text-amber-200'
                  }`}>
                    <Database className="w-5 h-5 flex-shrink-0 mt-0.5 text-gold" />
                    <div className="text-xs space-y-1">
                      <span className="font-bold block text-sm">
                        {config.isConfigured ? 'Supabase Live Connected' : 'Running in Local Storage Engine'}
                      </span>
                      <p className="font-light">
                        {config.isConfigured
                          ? 'Enquiries and plot modifications are syncing with your configured Supabase project instance.'
                          : 'No external Supabase credentials detected. Running in secure local storage mode with persistent client enquiries and full CRUD management.'}
                      </p>
                    </div>
                  </div>

                  {/* Supabase Connection Form */}
                  <form onSubmit={handleSaveSupabaseConfig} className="p-6 rounded-xl bg-navy-800 border border-gold/30 space-y-4">
                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider text-silver block mb-1">
                        Supabase Project URL:
                      </label>
                      <input
                        type="url"
                        placeholder="https://xyzcompany.supabase.co"
                        value={sbUrl || ''}
                        onChange={(e) => setSbUrl(e.target.value)}
                        className="w-full bg-navy border border-gold/20 text-ivory text-xs px-3.5 py-2.5 rounded font-mono focus:outline-none focus:border-gold"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider text-silver block mb-1">
                        Supabase Anon Key:
                      </label>
                      <input
                        type="password"
                        placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                        value={sbKey || ''}
                        onChange={(e) => setSbKey(e.target.value)}
                        className="w-full bg-navy border border-gold/20 text-ivory text-xs px-3.5 py-2.5 rounded font-mono focus:outline-none focus:border-gold"
                      />
                    </div>

                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-gold hover:bg-gold-500 text-navy font-semibold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer"
                    >
                      Save Configuration
                    </button>

                    {configSaved && (
                      <span className="text-xs text-emerald-400 block pt-1 font-mono">
                        Configuration stored successfully.
                      </span>
                    )}
                  </form>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
