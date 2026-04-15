import DealCard from './DealCard';

const STAGES = ["Discovery", "Qualification", "Proposal Sent", "Negotiation"] as const;

interface Deal {
  id: string;
  company: string;
  value: number;
  stage: string;
  status: string;
  prob: number;
}

interface KanbanBoardProps {
  deals: Deal[];
  searchQuery: string;
  onUpdateDeal: (deal: Deal) => void;
  onDeleteDeal: (id: string) => void;
}

export default function KanbanBoard({ 
  deals, 
  searchQuery, 
  onUpdateDeal, 
  onDeleteDeal 
}: KanbanBoardProps) {
  
  // 1. Filter deals by search query
  const filteredDeals = deals.filter((deal) =>
    deal.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-full overflow-x-auto p-8 bg-slate-50 pipeline-scroll">
      <div className="flex gap-6 h-full items-start">
        {STAGES.map((stage) => {
          // 2. Filter filteredDeals by current column stage
          const stageDeals = filteredDeals.filter((d) => d.stage === stage);
          
          // 3. Calculate total dollar value for this column
          const totalValue = stageDeals.reduce((sum, d) => sum + d.value, 0);

          return (
            <div key={stage} className="w-80 shrink-0 flex flex-col max-h-full">
              {/* Column Header */}
              <div className="mb-4 px-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-500 text-xs uppercase tracking-widest">
                    {stage}
                  </h3>
                  <span className="bg-slate-200 text-slate-600 text-[10px] px-2 py-0.5 rounded-full font-bold">
                    {stageDeals.length}
                  </span>
                </div>
                <p className="text-slate-400 text-[11px] mt-1 font-medium">
                  Total: ${totalValue.toLocaleString()}
                </p>
              </div>

              {/* Column Cards Container */}
              <div className="space-y-4 overflow-y-auto pr-1 pb-10 custom-scrollbar">
                {stageDeals.length > 0 ? (
                  stageDeals.map((deal) => (
                    <DealCard 
                      key={deal.id} 
                      deal={deal} 
                      onUpdateDeal={onUpdateDeal} 
                      onDeleteDeal={onDeleteDeal} 
                    />
                  ))
                ) : (
                  <div className="py-8 border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center">
                    <p className="text-slate-400 text-xs italic">No deals in this stage</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}