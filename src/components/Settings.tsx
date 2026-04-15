interface SettingsProps {
  deals: any[];
  setDeals: (deals: any[]) => void;
}

export default function Settings({ deals, setDeals }: SettingsProps) {
  
  // Feature: Download current deals as a JSON file
  const handleExport = () => {
    if (deals.length === 0) {
      alert("No data to export!");
      return;
    }
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(deals, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "nexus_crm_backup.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  // Feature: The "Nuclear Option"
  const handleClearData = () => {
    // The "Ugly" native popup
    const confirmed = window.confirm(
      "🚨 DATABASE WIPE REQUESTED\n\nThis will delete ALL your deals from local storage. This action is permanent.\n\nAre you sure you want to proceed?"
    );

    if (confirmed) {
      setDeals([]);
      alert("Database cleared successfully.");
    }
  };

  return (
    <div className="p-8 h-full overflow-y-auto bg-slate-50">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Settings</h2>
        <p className="text-slate-500 mb-8 font-medium">Manage your CRM data and system preferences.</p>
        
        <div className="space-y-6">
          {/* Data Management Card */}
          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
              <span>💾</span> Data Management
            </h3>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
              Since this CRM uses **Local Storage**, your data is saved only in this browser. 
              Export a backup file to move your data to another device.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleExport}
                className="px-6 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-sm font-bold transition-all shadow-lg shadow-brand-600/10 cursor-pointer active:scale-95"
              >
                Export JSON Backup
              </button>
              
              <button 
                onClick={handleClearData}
                className="px-6 py-2.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl text-sm font-bold transition-all cursor-pointer active:scale-95"
              >
                Wipe All Data
              </button>
            </div>
          </section>

          {/* System Info Card */}
          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span>🛠️</span> System Information
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="p-3 bg-slate-50 rounded-lg">
                <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider mb-1">Status</p>
                <p className="text-green-600 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Connected (Local)
                </p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg">
                <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider mb-1">Total Records</p>
                <p className="text-slate-800 font-bold">{deals.length} Deals</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg">
                <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider mb-1">Storage Version</p>
                <p className="text-slate-800 font-bold">v1.0.4-TS</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg">
                <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider mb-1">Engine</p>
                <p className="text-slate-800 font-bold">Vite + React</p>
              </div>
            </div>
          </section>

          <p className="text-center text-slate-400 text-[11px] font-medium pt-4">
            Nexus CRM &copy; 2026 | All data is stored locally in your browser.
          </p>
        </div>
      </div>
    </div>
  );
}