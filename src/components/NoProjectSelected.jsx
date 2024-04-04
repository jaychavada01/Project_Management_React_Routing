import Button from "./Button";
import noprojects from "../assets/no-projects.png"

export default function NoProjectSelected({onStartAddProject}){
    return (
        <div className="mt-24 text-center w-2/3">
        <img 
        className="m-auto"
        src= {noprojects}
        alt="An Empty task list"
        width={120}
        />
        <h2 className="text-xl font-bold text-stone-500 my-4">
            No Project Selected
        </h2>
        <p className="text-stone-400 mb-4">
        Select a Project or get started with a new one
        </p>
        <p className="mt-8">
        <Button onClick = {onStartAddProject}>Create a new Project</Button>
        </p>
        </div>
    )
}