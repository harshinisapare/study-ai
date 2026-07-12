import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import Workspace from '../pages/Workspace';
import Library from '../pages/Library';
import Chat from '../pages/Chat';
import Notes from '../pages/Notes';
import Flashcards from '../pages/Flashcards';
import Quiz from '../pages/Quiz';
import Settings from '../pages/Settings';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Navigate to="/workspace" replace />} />
        <Route path="/workspace" element={<Workspace />} />
        <Route path="/library" element={<Library />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
