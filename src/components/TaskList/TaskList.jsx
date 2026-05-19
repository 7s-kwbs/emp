import React from "react";

const TaskList = ({data}) => {
  return (
    <div
      id="tasklist"
      className="flex  items-center justify-start gap-5 flex-nowrap h-[55%] w-full  mt-10 py-5 overflow-x-auto"
    >
      <div className="shrink-0 h-full w-75 p-5 bg-red-300 rounded-xl">

        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a Youtube video</h2>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, quam? Tempora cumque cum quisquam delectus.</p>
      </div>

      <div className="shrink-0 h-full w-75 p-5 bg-blue-300 rounded-xl">

        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a Youtube video</h2>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, quam? Tempora cumque cum quisquam delectus.</p>
      </div>

      <div className="shrink-0 h-full w-75 p-5 bg-green-300 rounded-xl">

        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a Youtube video</h2>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, quam? Tempora cumque cum quisquam delectus.</p>
      </div>

      <div className="shrink-0 h-full w-75 p-5 bg-yellow-300 rounded-xl">

        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a Youtube video</h2>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, quam? Tempora cumque cum quisquam delectus.</p>
      </div>
    </div>

    
  );
};

export default TaskList;
