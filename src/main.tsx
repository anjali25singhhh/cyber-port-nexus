
import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<div className="loading">Loading...</div>}>
    <App />
  </Suspense>
);
