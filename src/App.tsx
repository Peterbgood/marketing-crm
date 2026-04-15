import Sidebar from './components/Sidebar';
import Header from './components/Header'; // Line 2 (The one causing the error)
import KanbanBoard from './components/KanbanBoard';

function App() {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        {/* ADD THIS LINE BELOW TO FIX THE ERROR */}
        <Header /> 
        
        <main className="flex-1 overflow-hidden">
          <KanbanBoard />
        </main>
      </div>
    </div>
  );
}

export default App;