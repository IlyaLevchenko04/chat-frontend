import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Header } from '../shared/components/header';

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <hr />
      <main>
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  ),
});
