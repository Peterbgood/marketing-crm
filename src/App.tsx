import Sidebar from './components/Sidebar';
import Header from './components/Header';
import KanbanBoard from './components/KanbanBoard';


function App() {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      {/* Sidebar - Permanent on Desktop */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center bg-slate-100 rounded-xl px-4 py-2 w-96">
            <span className="text-slate-400 italic text-sm">Search deals...</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2 rounded-xl text-sm font-bold shadow-lg shadow-brand-600/30 transition-all active:scale-95">
              + Create Deal
            </button>
          </div>
        </header>
        
        {/* The Pipeline Scroll Area */}
        <main className="flex-1 overflow-hidden">
          <KanbanBoard />
        </main>
      </div>
    </div>
  );
}

export default App;