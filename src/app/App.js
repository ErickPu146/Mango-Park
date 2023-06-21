
import { ParkProvider } from '../context';
import { AppUI } from './AppUI';

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
