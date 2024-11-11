import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EntryFeedComponent from './components/EntryFeedComponent.tsx';
import RegisterComponent from './components/RegisterComponent.tsx';
import LoginComponent from './components/LoginComponent.tsx';
import HomeComponent from './components/HomeComponent.tsx';
import TheContextProvider from './components/TheContext.tsx';
import CreateEntryComponent from './components/CreateEntryComponent.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeComponent />
      },
      {
        path: "/entries/titles/:id",
        element: <EntryFeedComponent />
      },
      {
        path: "/entries/title/:id",
        element: <CreateEntryComponent />
      },
      {
        path: "/register",
        element: <RegisterComponent/>
      },
      {
        path: "/login",
        element: <LoginComponent/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TheContextProvider>
      <RouterProvider router={router} />
    </TheContextProvider>
  </React.StrictMode>
)
