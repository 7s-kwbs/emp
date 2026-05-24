import { useAuth } from "../context/AuthProvider";

const Card = () => {
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  const { user, allEmployees } = useAuth();

  let totalTask = 0;
  let taskCompleted = 0;
  let overdue = 0;
  let totalTaskFormLastWeek = 0;
  let completionRateFromLastWeek = 0;
  let overdueFromLastWeek = 0;

  allEmployees.forEach((employee) => {
    employee.tasks?.forEach((task) => {
      const taskDate = new Date(task.taskDate);
      if (task.assignedBy === user.name) {
        totalTask++;
        if (taskDate >= oneWeekAgo) {
          totalTaskFormLastWeek++;
        }
      }
      if (task.assignedBy === user.name && task.completed) {
        taskCompleted++;
        if (taskDate >= oneWeekAgo) {
          completionRateFromLastWeek++;
        }
      }
      if (task.assignedBy === user.name && task.overdue) {
        overdue++;
        if (taskDate >= oneWeekAgo) {
          console.log("overdue");
        }
      }
    });
  });

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
      {/* task assigned  */}
      <div className="border-[1.5px] border-gray-300 p-5 rounded-xl bg-white shadow-lg ">
        <div className="flex justify-between ">
          <div>
            <p className="text-gray-600 ">Total task assigned</p>
            <p className="text-gray-800 text-2xl font-semibold">{totalTask}</p>
          </div>
          <div className="w-12 h-12 shrink-0   bg-blue-100 rounded-xl flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <g
                fill="none"
                stroke="#1b70f5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="m9 11l3 3l8-8" />
                <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9" />
              </g>
            </svg>
          </div>
        </div>
        <p className="text-gray-600">
          {((totalTaskFormLastWeek / totalTask) * 100).toFixed(2)}% from last
          week
        </p>
      </div>
      {/* completaion rate */}
      <div className="border-[1.5px] border-gray-100 p-5 rounded-xl bg-white shadow-lg ">
        <div className="flex justify-between ">
          <div>
            <p className="text-gray-600 ">Completation Rate</p>
            <p className="text-gray-800 text-2xl font-semibold">
              {((taskCompleted / totalTask) * 100).toFixed(2)}%
            </p>
          </div>
          <div className="w-12 h-12 shrink-0 bg-green-100  rounded-xl flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="#3cb41a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="m3 17l6-6l4 4l8-8" />
                <path d="M17 7h4v4" />
              </g>
            </svg>
          </div>
        </div>
        <p className="text-gray-600">
          {completionRateFromLastWeek}% form last week
        </p>
      </div>

      {/* Overdue */}
      <div className="border-[1.5px] border-gray-100 p-5 rounded-xl bg-white shadow-lg ">
        <div className="flex justify-between ">
          <div>
            <p className="text-gray-600 ">Overdue items</p>
            <p className="text-gray-800 text-2xl font-semibold">{overdue}</p>
          </div>
          <div className="w-12 h-12 shrink-0  bg-red-100 rounded-xl flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <g class="alert-outline">
                <g fill="#f42019" class="Vector">
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-10 8a8 8 0 1 0 0-16a8 8 0 0 0 0 16"
                    clip-rule="evenodd"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M12 14a1 1 0 0 1-1-1V8a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1"
                    clip-rule="evenodd"
                  />
                  <path d="M11 16a1 1 0 1 1 2 0a1 1 0 0 1-2 0" />
                </g>
              </g>
            </svg>
          </div>
        </div>
        <p className="text-gray-600">{overdueFromLastWeek}% from last week</p>
      </div>
    </div>
  );
};

export default Card;
