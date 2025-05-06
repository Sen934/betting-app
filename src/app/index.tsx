import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { StrictMode } from 'react';
import { enableMocking } from './mocks/browser.ts';

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
