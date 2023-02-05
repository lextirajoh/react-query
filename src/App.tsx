import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Home } from './pages/Home';

export default function App() {
  const client = new QueryClient({});

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Home />
      </QueryClientProvider>
    </div>
  );
}
