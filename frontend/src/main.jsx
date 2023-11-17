import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import HomePage from './pages/Home.jsx';
import QrCodeGenerator from './pages/qrcodegenerator.jsx';
import Archive from './pages/Archive.jsx';
import { ChakraProvider } from '@chakra-ui/react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "home",
    element: <HomePage />,
  },
  {
    path: "generator",
    element: <QrCodeGenerator />,
  },
  {
    path: "archive",
    element: <Archive />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
<ChakraProvider>
    <RouterProvider router={router} />
</ChakraProvider>
);