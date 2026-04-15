export default function Dashboard({ deals }: { deals: any[] }) {
  const totalValue = deals.reduce((sum, d) => sum + d.value, 0);
  const activeDeals = deals.length;
  const avgValue = activeDeals > 0 ? totalValue / activeDeals : 0;

  const stats = [
    { label: 'Total Pipeline Value', value: `$${totalValue.toLocaleString()}`, color: 'text-brand-600' },
    { label: 'Active Deals', value: activeDeals, color: 'text-slate-800' },
    { label: 'Avg. Deal Size', value: `$${Math.round(avgValue).toLocaleString()}`, color: 'text-slate-800' },
  ];

  return (
    <div className="p-8 space-y-8 overflow-y-auto h-full bg-slate-50">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-slate-800">Revenue Overview</h2>
        <p className="text-slate-500 text-sm">Real-time performance metrics for your sales pipeline.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm transition-all hover:shadow-md">
            <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
            <p className={`text-3xl font-black ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
          <span>📊</span> Pipeline Distribution
        </h3>
        <div className="flex items-end gap-3 h-64 border-b border-slate-100 pb-2">
          {deals.length > 0 ? (
            deals.map((d, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                <div 
                  className="bg-brand-500 w-full rounded-t-lg transition-all duration-500 group-hover:bg-brand-400 relative" 
                  style={{ height: `${Math.max((d.value / totalValue) * 100, 10)}%` }}
                >
                   <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity">
                     ${d.value.toLocaleString()}
                   </span>
                </div>
                <span className="text-[10px] text-slate-400 font-medium truncate w-full text-center">
                  {d.company}
                </span>
              </div>
            ))
          ) : (
            <div className="w-full flex items-center justify-center text-slate-400 italic">
              No deals found to visualize.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}