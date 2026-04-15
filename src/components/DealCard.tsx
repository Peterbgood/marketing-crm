// 1. Define the interface for the props so TypeScript doesn't complain
interface DealCardProps {
  deal: {
    id: string;
    company: string;
    value: number;
    status: string;
    prob: number;
  };
  onUpdateDeal: (deal: any) => void;
  onDeleteDeal: (id: string) => void;
}

export default function DealCard({ deal, onUpdateDeal, onDeleteDeal }: DealCardProps) {
  
  const handleEdit = () => {
    // Standard JS prompts for a quick & easy "database" update
    const newName = prompt("Enter Company Name:", deal.company);
    const newValue = prompt("Enter Deal Value:", deal.value.toString());
    
    if (newName !== null && newValue !== null) {
      onUpdateDeal({ 
        ...deal, 
        company: newName || deal.company, 
        value: Number(newValue) || 0 
      });
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 group hover:border-brand-500 hover:shadow-md transition-all relative">
      <div className="flex justify-between items-start mb-3">
        <span className={`px-2 py-0.5 text-[10px] font-bold rounded uppercase ${
          deal.status === 'active' ? 'bg-green-50 text-green-700' : 'bg-orange-50 text-orange-700'
        }`}>
          {deal.status}
        </span>
        
        {/* Delete Button */}
        <button 
          onClick={(e) => {
            e.stopPropagation(); // Prevents clicking delete from opening the edit prompt
            if(confirm("Delete this deal?")) onDeleteDeal(deal.id);
          }}
          className="text-slate-300 hover:text-red-500 transition-colors text-xs font-medium cursor-pointer"
        >
          Delete
        </button>
      </div>
      
      {/* Clickable area for Editing */}
      <div onClick={handleEdit} className="cursor-pointer">
        <h4 className="font-bold text-slate-800 leading-snug group-hover:text-brand-600 transition-colors">
          {deal.company}
        </h4>
        <p className="text-sm text-slate-500 mt-1 font-medium">
          ${deal.value.toLocaleString()}
        </p>
        
        {/* Added the probability bar back for that "Pro CRM" look */}
        <div className="mt-4">
          <div className="bg-slate-100 h-1.5 w-full rounded-full overflow-hidden">
            <div 
              className="bg-brand-500 h-full transition-all duration-500" 
              style={{ width: `${deal.prob}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}