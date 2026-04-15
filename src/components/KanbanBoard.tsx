import DealCard from './DealCard';

// 1. Define the Stage type for better safety
const STAGES = ["Discovery", "Qualification", "Proposal Sent", "Negotiation"] as const;

// 2. Define the Deal Interface so TypeScript stops complaining
interface Deal {
  id: string;
  company: string;
  value: number;
  stage: typeof STAGES[number] | string;
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
    <div className="h-full overflow-x-auto pipeline-scroll p-8 bg-slate-50">
      <div className="flex gap-6 h-full items-start">
        {STAGES.map((stage) => (
          <div key={stage} className="w-80 shrink-0 flex flex-col max-h-full">
            <div className="flex items-center justify-between mb-4 px-1">
              <h3 className="font-bold text-slate-600 text-xs uppercase tracking-widest">{stage}</h3>
              <span className="bg-slate-200 text-slate-500 text-[10px] px-2 py-0.5 rounded-full font-bold">
                {DEALS.filter((d: Deal) => d.stage === stage).length}
              </span>
            </div>
            
            <div className="space-y-4 overflow-y-auto pr-1">
              {DEALS.filter((deal: Deal) => deal.stage === stage).map((deal: Deal) => (
                <DealCard key={deal.id} deal={deal} />
              ))}
              
              <button className="w-full py-3 border-2 border-dashed border-slate-200 rounded-xl text-slate-400 text-sm hover:bg-slate-100 transition-colors cursor-pointer">
                + Add Deal
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}