
import { ParkProvider } from '../context';
import { AppUI } from '../pages/AppUI';

function App() {

  return (
    <>
      <ParkProvider>
        <AppUI />
      </ParkProvider>
    </>
  );
}

export { App };
