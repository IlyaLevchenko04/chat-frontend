import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { Provider } from 'react-redux';

import { routeTree } from './routeTree.gen';
import { store } from './redux/store';

import '../src/shared/styles/index.css';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <Provider store={store}>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </Provider>
  );
}
