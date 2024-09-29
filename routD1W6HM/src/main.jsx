import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './cmbonent/ErrorPage.jsx';
import Sea from './cmbonent/Sea.jsx';
import Desert from './cmbonent/Desert.jsx';
import Ice from './cmbonent/Ice.jsx';
import Forest from './cmbonent/Forest.jsx';
import Mountains from './cmbonent/Mountains.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sea",
    element: <Sea></Sea>,
  },
  {
    path: "/desert",
    element: <Desert></Desert>,
  },
  {
    path: "/ice",
    element: <Ice></Ice>,
  },
  {
    path: "/forest",
    element: <Forest></Forest>,
  },
  {
    path: "/mountains",
    element: <Mountains></Mountains>,
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
