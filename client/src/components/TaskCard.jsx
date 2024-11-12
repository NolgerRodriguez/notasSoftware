import { useNavigate } from "react-router-dom";

export function TaskCard({ task }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-zinc-800 p-6 rounded-lg shadow-lg hover:bg-zinc-700 hover:cursor-pointer transition-all duration-300"
      onClick={() => {
        navigate(`/tasks/${task.id}`);
      }}
    >
      <h1 className="text-white font-bold text-xl mb-2">{task.tittle}</h1>
      <p className="text-slate-400 mb-4">{task.description}</p>
      <div className="flex justify-end">
        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
          Ver Más
        </button>
      </div>
    </div>
  );
}
