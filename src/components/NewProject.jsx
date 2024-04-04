import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const duedate = useRef();

  // handle save function
  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDuedate = duedate.current.value;

    // validation .....
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDuedate.trim() === ""
    ) {
      // error-Modal will display here
      modal.current.open();
      return;
    }

    // single data adding
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      duedate: enteredDuedate,
    });
  }
  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-700 mb-4">
          Oops ... Looks like you forgot to enter a value.
        </p>
        <p className="text-stone-700 mb-4">
          Please Make Sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 hover:text-red-600"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 hover:text-green-600"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} type="text" label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input ref={duedate} type="date" label="Due Date" />
        </div>
      </div>
    </>
  );
}
