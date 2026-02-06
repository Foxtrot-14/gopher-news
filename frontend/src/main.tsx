import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App'
import { HashRouter } from 'react-router-dom'
import { Suspense } from 'react'
import { EventsOn } from "../wailsjs/runtime";
import { useAppState } from "./store/appState";

EventsOn("startup:records", ({ exists, error }) => {
  if (!error) {
    useAppState.getState().setHasRecords(exists);
  }
});

const container = document.getElementById('root')

const root = createRoot(container!)

root.render(
  <HashRouter>
    <Suspense>
      <App />
    </Suspense>
  </HashRouter>
)
