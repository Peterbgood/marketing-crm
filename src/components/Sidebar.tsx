interface SidebarProps {
  currentView: string;
  setView: (view: string) => void;
}

export default function Sidebar({ currentView, setView }: SidebarProps) {
  // These names must match the strings in App.tsx perfectly
  const menuItems = [
    { name: 'Dashboard', icon: '📊' },
    { name: 'Pipeline', icon: '🛣️' },
    { name: 'Settings', icon: '⚙️' },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-slate-400 flex flex-col p-4 shrink-0">
      <div className="p-4 text-white font-bold text-xl flex items-center gap-3 mb-8">
        <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">N</div>
        NexusCRM
      </div>
      
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setView(item.name)} 
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all cursor-pointer ${
              currentView === item.name 
                ? 'bg-brand-600 text-white shadow-lg' 
                : 'hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </button>
        ))}
      </nav>
      
      <div className="p-4 bg-slate-800/50 rounded-xl">
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Database</p>
        <p className="text-xs text-slate-300 font-medium">Local Browser</p>
      </div>
    </aside>
  );
}