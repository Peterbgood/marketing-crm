interface SidebarProps {
  currentView: string;
  setView: (view: string) => void;
}

export default function Sidebar({ currentView, setView }: SidebarProps) {
  const menuItems = [
    { name: 'Dashboard', icon: '📊' },
    { name: 'Pipeline', icon: '🛣️' },
    { name: 'Contacts', icon: '👥' },
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
            // THIS LINE IS THE FIX: It tells App.tsx to change the view
            onClick={() => setView(item.name)} 
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all cursor-pointer ${
              currentView === item.name 
                ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/20' 
                : 'hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </button>
        ))}
      </nav>

      <div className="pt-4 border-t border-slate-800 text-[10px] text-center uppercase tracking-widest text-slate-600">
        v1.0.2 - Local Storage
      </div>
    </aside>
  );
}