export default function Sidebar() {
  const menuItems = [
    { name: 'Dashboard', icon: '📊' },
    { name: 'Pipeline', icon: '🛣️', active: true },
    { name: 'Contacts', icon: '👥' },
    { name: 'Tasks', icon: '✅' },
    { name: 'Reports', icon: '📈' },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-slate-400 flex flex-col hidden md:flex shrink-0">
      <div className="p-6 text-white font-bold text-xl flex items-center gap-3">
        <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">N</div>
        NexusCRM
      </div>
      
      <nav className="flex-1 px-4 space-y-1 mt-4">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href="#"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              item.active ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/20' : 'hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </a>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3 p-2 bg-slate-800/50 rounded-xl">
          <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center text-white font-bold">AM</div>
          <div className="overflow-hidden">
            <p className="text-sm font-medium text-white truncate">Alex Miller</p>
            <p className="text-xs text-slate-500">Sales Lead</p>
          </div>
        </div>
      </div>
    </aside>
  );
}