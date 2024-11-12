import { Link } from 'react-router-dom';

export function Navigation() {
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-start">
            <Link to="/" className="text-2xl text-blue-600 hover:text-blue-800">
                <h1>Menú de Navegación</h1>
            </Link>
            <nav className="mt-6 flex gap-6">
                <Link to="/tasks" className="text-lg text-blue-600 hover:text-blue-800 hover:underline">
                    Tareas
                </Link>
                <Link to="/tasks/new" className="text-lg text-blue-600 hover:text-blue-800 hover:underline">
                    Nueva Tarea
                </Link>
            </nav>
        </div>
    );
}

