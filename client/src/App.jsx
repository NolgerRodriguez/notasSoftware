import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { TaskFormPage } from "./pages/TaskFormPage";
import { TasksPage } from "./pages/TasksPage";
import { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="max-w-4xl mx-auto px-4 py-6">
        <Navigation />
        <div className="mt-8">
          <Routes>
            {/* Redirige a /tasks */}
            <Route path="/" element={<Navigate to="/tasks" />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/tasks/:id" element={<TaskFormPage />} />
            <Route path="/tasks-create" element={<TaskFormPage />} />
          </Routes>
        </div>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;

