import {createTask, deleteTask, updateTask, getTask} from "../api/tasks.api";
import {useEffect} from "react";
import { useForm } from "react-hook-form";
import {useNavigate, useParams} from "react-router-dom";


export function TaskFormPage() {

  const {register, handleSubmit, formState: {errors}, setValue} = useForm()
  const params = useParams()
  const navigate = useNavigate()


  const onSubmit = handleSubmit(async (data) => {
    if (params.id == 'new') {
      await createTask(data)
    }else if (params.id != 'new') {
      await updateTask(params.id, data)
    }
    
    navigate("/tasks")
  })

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const { data } = await getTask(params.id);
        setValue("tittle", data.tittle);
        setValue("description", data.description);
      }
    }
    loadTask();
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Title" {...register("tittle", {required: true})} />
        {errors.title && <span>This field is required</span>}
        <textarea placeholder="Description" {...register("description")} />
        {errors.description && <span>This field is required</span>}
        <button>Guardar</button>
        {params.id != 'new' && <button onClick={async () => {
          const accepted = window.confirm("Are you sure?");
          if (accepted) {
            await deleteTask(params.id);
            navigate("/tasks");
          }
        }}>Borrar</button>}
      </form>
    </div>
  )
}
