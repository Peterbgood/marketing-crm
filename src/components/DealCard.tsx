export default function DealCard({ deal }: { deal: any }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 group hover:border-brand-500 transition-all cursor-pointer">
      <div className="flex justify-between items-start mb-3">
        <span className={`px-2 py-0.5 text-[10px] font-bold rounded uppercase ${
          deal.status === 'active' ? 'bg-green-50 text-green-700' : 'bg-orange-50 text-orange-700'
        }`}>
          {deal.status}
        </span>
        <p className="text-xs text-slate-400">Mar 12</p>
      </div>
      
      <h4 className="font-bold text-slate-800 leading-snug group-hover:text-brand-600 transition-colors">
        {deal.company}
      </h4>
      <p className="text-sm text-slate-500 mt-1">${deal.value.toLocaleString()}</p>
      
      <div className="mt-4">
        <div className="bg-slate-100 h-1.5 w-full rounded-full overflow-hidden">
          <div 
            className="bg-brand-500 h-full transition-all duration-500" 
            style={{ width: `${deal.prob}%` }}
          />
        </div>
        <p className="text-[10px] text-slate-400 mt-2 font-medium uppercase">
          Probability: {deal.prob}%
        </p>
      </div>
    </div>
  );
}