import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {ErrorBoundary} from 'react-error-boundary'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import FallbackComponent from './components/FallbackComponent.jsx'
import './index.css'
import App from './App.jsx'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      //staleTime: 5 * 60 * 1000, // 5 minutes
	    //refetchOnWindowFocus: false,
	    //retry: false,
    },
  },
})


function AppSetup() {
    return (
      <StrictMode>
        <ErrorBoundary FallbackComponent={FallbackComponent}>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </ErrorBoundary>
      </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<AppSetup />);
