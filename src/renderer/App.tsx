import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import ApplicationLayout from '@/app/ApplicationLayout';

import HomePage from '@/app/pages/HomePage';
import './App.css';

export default function App() {
  return (
    <>
      <div>Shared modal, or shared toast here</div>
      <Router>
        <ApplicationLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </ApplicationLayout>
      </Router>
    </>
  );
}
