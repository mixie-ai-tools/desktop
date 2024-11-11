import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import ApplicationLayout from '@/src/renderer/app/ApplicationLayout';
import HomePage from '@/src/renderer/app/pages/HomePage';

export default function App() {
  return (
    <>
      <div className="bg-blue-500">Shared modal, or shared toast here</div>
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
