import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './components';

const Main = React.lazy(() => import('./pages/Main').then(v => ({ default: v.Main })));
const Contacts = React.lazy(() => import('./pages/Contacts').then(v => ({ default: v.Contacts })));
const Profile = React.lazy(() => import('./pages/Profile').then(v => ({ default: v.Profile })));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/me",
    element: <Profile />,
  },
]);

function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
