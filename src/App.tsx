import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import KanbanBoard from './components/KanbanBoard';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import NewDealModal from './components/NewDealModal';

const INITIAL_DEALS = [
  { id: '1', company: 'Acme Corp', value: 12000, stage: 'Discovery', status: 'active', prob: 20 },
  { id: '2', company: 'Global Tech', value: 45000, stage: 'Proposal Sent', status: 'active', prob: 75 },
];

function App() {
  const [view, setView] = useState('Pipeline'); // Default view
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [deals, setDeals] = useState(() => {
    const saved = localStorage.getItem('nexus_crm_deals');
    return saved ? JSON.parse(saved) : INITIAL_DEALS;
  });

  useEffect(() => {
    localStorage.setItem('nexus_crm_deals', JSON.stringify(deals));
  }, [deals]);

  const handleAddDeal = (formData: { company: string; value: number; stage: string }) => {
    const newDeal = { id: Date.now().toString(), ...formData, status: 'active', prob: 10 };
    setDeals([newDeal, ...deals]);
    setIsModalOpen(false);
  };

  const updateDeal = (updatedDeal: any) => {
    setDeals(deals.map((d: any) => (d.id === updatedDeal.id ? updatedDeal : d)));
  };

  const deleteDeal = (id: string) => {
    setDeals(deals.filter((d: any) => d.id !== id));
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 font-sans">
      {/* 1. Sidebar receives 'view' and 'setView' */}
      <Sidebar currentView={view} setView={setView} />

      <div className="flex-1 flex flex-col min-w-0">
        <Header 
          onSearchChange={setSearchQuery} 
          onCreateDeal={() => setIsModalOpen(true)} 
        />
        
        <main className="flex-1 overflow-hidden relative">
          {/* 2. Conditional Rendering Logic */}
          {view === 'Pipeline' && (
            <KanbanBoard 
              deals={deals} 
              searchQuery={searchQuery} 
              onUpdateDeal={updateDeal} 
              onDeleteDeal={deleteDeal} 
            />
          )}
          
          {view === 'Dashboard' && (
            <Dashboard deals={deals} />
          )}

          {view === 'Settings' && (
            <Settings deals={deals} setDeals={setDeals} />
          )}
        </main>
      </div>

      {isModalOpen && (
        <NewDealModal onClose={() => setIsModalOpen(false)} onSave={handleAddDeal} />
      )}
    </div>
  );
}

export default App;