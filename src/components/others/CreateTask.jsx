import React from 'react'

const CreateTask = () => {
  return (
    
    <div  >
      <div className='bg-[#1C1C1C]'>
        <form className="flex justify-between gap-10 mt-10 p-5">
          {/* left */}
          <div className="w-1/2">
            <div>
              <h3>Task Title</h3>
              <input
                type="text"
                placeholder="Make a UI Design"
                className="text-white border border-white outline-none w-full px-4 py-2 font-normal rounded-lg "
              />
            </div>

            <div>
              <h3>Date</h3>
              <input
                type="date"
                className="text-white border  w-full px-4 py-2 rounded-lg  "
              />
            </div>

            <div>
              <h3>Assign to</h3>
              <input
                type="text"
                placeholder="employee name"
                className="text-white border px-4 py-2 rounded-lg w-full"
              />
            </div>

            <div>
              <h3>Category</h3>
              <input
                type="text"
                placeholder="Design, dev,etc"
                className="text-white border px-4 py-2 w-full rounded-lg"
              />
            </div>
          </div>

          {/* right */}
          <div className="w-1/2 flex justify-start flex-col ">
            <div>
              <h3>Description</h3>
              <textarea
                name=""
                id=""
                cols="30"
                row="10"
                placeholder="write description"
                className="text-white border w-full h-48 "
              ></textarea>
            </div>
            <button className="bg-emerald-600 px-4 py-2 rounded">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  
  )
}

export default CreateTask