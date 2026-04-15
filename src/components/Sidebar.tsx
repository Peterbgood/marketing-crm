export default function Sidebar() {
  const menuItems = [
    { name: 'Dashboard', icon: '📊' },
    { name: 'Pipeline', icon: '🛣️', active: true },
    { name: 'Contacts', icon: '👥' },
    { name: 'Tasks', icon: '✅' },
    { name: 'Settings', icon: '⚙️' },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-slate-400 flex flex-col hidden md:flex shrink-0">
      <div className="p-6 text-white font-bold text-xl flex items-center gap-3">
        <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center shadow-lg shadow-brand-500/40">N</div>
        NexusCRM
      </div>
      
      <nav className="flex-1 px-4 space-y-1 mt-4">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              item.active ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/20' : 'hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3 p-2 bg-slate-800/50 rounded-xl">
          <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold">PG</div>
          <div className="overflow-hidden">
            <p className="text-sm font-medium text-white truncate">Peter Good</p>
            <p className="text-xs text-slate-500 truncate">peterbgood@crm.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}