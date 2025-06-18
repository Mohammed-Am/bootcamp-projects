import ErrorBoundary from './ErrorBoundary';
import BuggyCounter from './BuggyCounter';
import EX3and4 from './EX2and3';

function App() {
  return (
    <>
    <div>
      <h1>Simulation 1</h1>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
    </div>

    <div>
      <h1>Simulation 2</h1>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
    </div>


    <div>
      <h1>Simulation 3</h1>
      <BuggyCounter />
    </div>


     <EX3and4/>
    </>
  );
}

export default App;