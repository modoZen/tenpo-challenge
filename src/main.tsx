import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AppProvider } from './context/AppProvider';
import { Loading } from './components/Loading/Loading';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
        <Suspense fallback={<Loading />}>
          <App />
        </Suspense>
      </AppProvider>
    </BrowserRouter>
  </StrictMode>,
);
