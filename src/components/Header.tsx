export default function Header({ 
  onSearchChange, 
  onCreateDeal 
}: { 
  onSearchChange: (val: string) => void;
  onCreateDeal: () => void;
}) {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
      <div className="flex items-center bg-slate-100 rounded-xl px-4 py-2 w-96 border border-transparent focus-within:border-brand-500 focus-within:bg-white transition-all">
        <span className="mr-2">🔍</span>
        <input 
          type="text"
          placeholder="Search deals..."
          className="bg-transparent border-none outline-none text-sm w-full"
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      
      <button 
        onClick={onCreateDeal}
        className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2 rounded-xl text-sm font-bold transition-all active:scale-95 cursor-pointer"
      >
        + Create Deal
      </button>
    </header>
  );
}