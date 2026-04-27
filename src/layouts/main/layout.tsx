import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';

export function MainLayout() {
  return (
    <>
      <Helmet>
        <title>Studio Time</title>
      </Helmet>

      <div className="wrapper flex grow flex-col">
        <main className="grow pt-5" role="content">
          <Outlet />
        </main>
      </div>
    </>
  );
}
