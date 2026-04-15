const STAGES = ["Discovery", "Qualification", "Proposal Sent", "Negotiation"];

interface Deal {
  id: string;
  company: string;
  value: number;
  stage: string;
  status: 'active' | 'stalled';
  prob: number;
}

const DEALS: Deal[] = [
  { id: '1', company: 'Acme Corp', value: 12000, stage: 'Discovery', status: 'active', prob: 20 },
  { id: '2', company: 'Global Tech', value: 45000, stage: 'Proposal Sent', status: 'active', prob: 75 },
  { id: '3', company: 'Starlight Inc', value: 8500, stage: 'Discovery', status: 'stalled', prob: 10 },
];

export default function KanbanBoard() {
  return (
    <div className="h-full overflow-x-auto pipeline-scroll p-8">
      <div className="flex gap-6 h-full items-start">
        {STAGES.map((stage) => (
          <div key={stage} className="w-80 shrink-0 flex flex-col max-h-full">
            <div className="flex items-center justify-between mb-4 px-1">
              <h3 className="font-bold text-slate-600 text-xs uppercase tracking-widest">{stage}</h3>
              <span className="bg-slate-200 text-slate-500 text-[10px] px-2 py-0.5 rounded-full font-bold">
                {DEALS.filter(d => d.stage === stage).length}
              </span>
            </div>
            
            <div className="space-y-4 overflow-y-auto pr-1">
              {DEALS.filter(deal => deal.stage === stage).map(deal => (
                <div key={deal.id} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 hover:border-brand-500 transition-all cursor-pointer group">
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                      deal.status === 'active' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'
                    }`}>
                      {deal.status}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-800">{deal.company}</h4>
                  <p className="text-sm text-slate-500 font-medium">${deal.value.toLocaleString()}</p>
                  
                  <div className="mt-4">
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-500" style={{ width: `${deal.prob}%` }}></div>
                    </div>
                  </div>
                </div>
              ))}
              <button className="w-full py-3 border-2 border-dashed border-slate-200 rounded-xl text-slate-400 text-sm hover:bg-slate-100 transition-colors">
                + Add Deal
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}