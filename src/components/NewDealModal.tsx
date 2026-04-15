import { useState } from 'react';

export default function NewDealModal({ onClose, onSave }: { onClose: () => void, onSave: (data: any) => void }) {
  const [formData, setFormData] = useState({
    company: '',
    value: '',
    stage: 'Discovery'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.company) return alert("Company name is required");
    onSave({
      ...formData,
      value: Number(formData.value) || 0
    });
  };

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-xl font-bold text-slate-800">New Deal</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">✕</button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Company Name</label>
            <input 
              autoFocus
              type="text" 
              className="w-full border border-slate-200 rounded-lg p-2.5 focus:ring-2 focus:ring-brand-500 outline-none"
              placeholder="e.g. Tesla Inc"
              value={formData.company}
              onChange={e => setFormData({...formData, company: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Deal Value ($)</label>
            <input 
              type="number" 
              className="w-full border border-slate-200 rounded-lg p-2.5 focus:ring-2 focus:ring-brand-500 outline-none"
              placeholder="0.00"
              value={formData.value}
              onChange={e => setFormData({...formData, value: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Initial Stage</label>
            <select 
              className="w-full border border-slate-200 rounded-lg p-2.5 focus:ring-2 focus:ring-brand-500 outline-none bg-white"
              value={formData.stage}
              onChange={e => setFormData({...formData, stage: e.target.value})}
            >
              <option>Discovery</option>
              <option>Qualification</option>
              <option>Proposal Sent</option>
              <option>Negotiation</option>
            </select>
          </div>

          <div className="pt-4 flex gap-3">
            <button 
              type="button"
              onClick={onClose}
              className="flex-1 py-3 text-slate-600 font-bold hover:bg-slate-50 rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="flex-1 py-3 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-700 shadow-lg shadow-brand-600/20 transition-all"
            >
              Save Deal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}