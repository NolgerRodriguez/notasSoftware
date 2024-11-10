import { Link } from 'react-router-dom'

export function Navigation() {
    return (
        <div>
            <Link to="/"><h1>Navigation</h1></Link>
            <Link to="/tasks">Tasks</Link>
            <Link to="/tasks/new">New Task</Link>
        </div>
    )
}