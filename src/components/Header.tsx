export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
      <div className="flex items-center bg-slate-100 rounded-xl px-4 py-2 w-96 border border-transparent focus-within:border-brand-500 transition-all">
        <span className="text-slate-400 text-sm">🔍 Search deals, leads, or files...</span>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="text-slate-500 hover:bg-slate-100 p-2 rounded-lg transition">
          🔔
        </button>
        <button className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2 rounded-xl text-sm font-bold shadow-lg shadow-brand-600/30 transition-all active:scale-95">
          + Create Deal
        </button>
      </div>
    </header>
  );
}