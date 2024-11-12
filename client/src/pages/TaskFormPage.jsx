import { createTask, deleteTask, updateTask, getTask } from "../api/tasks.api";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

export function TaskFormPage() {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const params = useParams();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id === 'new') {
      await createTask(data);
    } else if (params.id !== 'new') {
      await updateTask(params.id, data);
    }

    navigate("/tasks");
  });

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const { data } = await getTask(params.id);
        setValue("tittle", data.tittle);
        setValue("description", data.description);
      }
    }
    loadTask();
  }, [params.id, setValue]);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Título"
            {...register("tittle", { required: "Este campo es obligatorio" })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.tittle && <span className="text-red-500 text-sm">{errors.tittle.message}</span>}
        </div>
        <div>
          <textarea
            placeholder="Descripción"
            {...register("description")}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.description && <span className="text-red-500 text-sm">{errors.description.message}</span>}
        </div>
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Guardar
          </button>
          {params.id !== 'new' && (
            <button
              type="button"
              onClick={async () => {
                const accepted = window.confirm("¿Estás seguro?");
                if (accepted) {
                  await deleteTask(params.id);
                  navigate("/tasks");
                }
              }}
              className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
            >
              Borrar
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
