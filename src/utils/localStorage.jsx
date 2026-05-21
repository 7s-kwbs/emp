const employees = [
  {
    id: 1,
    firstname: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskNumber: {
      newTask: 1,
      active: 1,
      completed: 1,
      overdue: 0,
    },
    tasks: [
      {
        newTask: true,
        active: false,
        completed: false,
        overdue: false,
        taskTitle: "Update Website",
        taskDescription: "Update homepage banner and text",
        taskDate: "2026-05-18",
        deadline: "2026-05-28",
        category: "Design",
        assignedBy: "Sagar",
        progress: 0,
        priority: "medium",
      },
      {
        newTask: false,
        active: false,
        completed: true,
        overdue: false,
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve login redirect issue",
        taskDate: "2026-05-15",
        deadline: "2026-05-17",
        category: "Development",
        assignedBy: "Anita",
        progress: 100,
        priority: "high",
      },
      {
        newTask: false,
        active: true,
        completed: false,
        overdue: false,
        taskTitle: "Create Dashboard",
        taskDescription: "Build employee dashboard UI",
        taskDate: "2026-05-20",
        deadline: "2026-05-30",
        category: "Frontend",
        assignedBy: "Sagar",
        progress: 65,
        priority: "high",
      },
    ],
  },

  {
    id: 2,
    firstname: "Sujan",
    email: "employee2@example.com",
    password: "123",
    taskNumber: {
      newTask: 1,
      active: 1,
      completed: 2,
      overdue: 0,
    },
    tasks: [
      {
        newTask: true,
        active: false,
        completed: false,
        overdue: false,
        taskTitle: "Write API Docs",
        taskDescription: "Document all REST API endpoints",
        taskDate: "2026-05-19",
        deadline: "2026-05-29",
        category: "Documentation",
        assignedBy: "Rohan",
        progress: 0,
        priority: "medium",
      },
      {
        newTask: false,
        active: false,
        completed: true,
        overdue: false,
        taskTitle: "Database Backup",
        taskDescription: "Take weekly database backup",
        taskDate: "2026-05-14",
        deadline: "2026-05-15",
        category: "Database",
        assignedBy: "Sagar",
        progress: 100,
        priority: "high",
      },
      {
        newTask: false,
        active: true,
        completed: false,
        overdue: false,
        taskTitle: "Optimize Images",
        taskDescription: "Compress website assets",
        taskDate: "2026-05-21",
        deadline: "2026-05-27",
        category: "Performance",
        assignedBy: "Anita",
        progress: 52,
        priority: "low",
      },
      {
        newTask: false,
        active: false,
        completed: true,
        overdue: false,
        taskTitle: "Team Meeting",
        taskDescription: "Attend weekly scrum meeting",
        taskDate: "2026-05-13",
        deadline: "2026-05-13",
        category: "Management",
        assignedBy: "Rohan",
        progress: 100,
        priority: "low",
      },
    ],
  },

  {
    id: 3,
    firstname: "Prakash",
    email: "employee3@example.com",
    password: "123",
    taskNumber: {
      newTask: 1,
      active: 1,
      completed: 1,
      overdue: 0,
    },
    tasks: [
      {
        newTask: true,
        active: false,
        completed: false,
        overdue: false,
        taskTitle: "Test Payment Gateway",
        taskDescription: "Run payment integration tests",
        taskDate: "2026-05-22",
        deadline: "2026-05-31",
        category: "Testing",
        assignedBy: "Sagar",
        progress: 0,
        priority: "high",
      },
      {
        newTask: false,
        active: true,
        completed: false,
        overdue: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Correct mobile navbar alignment",
        taskDate: "2026-05-18",
        deadline: "2026-05-24",
        category: "UI",
        assignedBy: "Anita",
        progress: 40,
        priority: "medium",
      },
      {
        newTask: false,
        active: false,
        completed: true,
        overdue: false,
        taskTitle: "Deploy App",
        taskDescription: "Deploy latest build to production",
        taskDate: "2026-05-10",
        deadline: "2026-05-11",
        category: "Deployment",
        assignedBy: "Rohan",
        progress: 100,
        priority: "high",
      },
    ],
  },

  {
    id: 4,
    firstname: "Nabin",
    email: "employee4@example.com",
    password: "123",
    taskNumber: {
      newTask: 2,
      active: 1,
      completed: 1,
      overdue: 0,
    },
    tasks: [
      {
        newTask: true,
        active: false,
        completed: false,
        overdue: false,
        taskTitle: "Research Tailwind",
        taskDescription: "Explore advanced Tailwind utilities",
        taskDate: "2026-05-23",
        deadline: "2026-06-02",
        category: "Research",
        assignedBy: "Anita",
        progress: 0,
        priority: "low",
      },
      {
        newTask: false,
        active: false,
        completed: true,
        overdue: false,
        taskTitle: "Update README",
        taskDescription: "Improve project documentation",
        taskDate: "2026-05-11",
        deadline: "2026-05-13",
        category: "Documentation",
        assignedBy: "Sagar",
        progress: 100,
        priority: "medium",
      },
      {
        newTask: false,
        active: true,
        completed: false,
        overdue: false,
        taskTitle: "Bug Testing",
        taskDescription: "Test reported UI bugs",
        taskDate: "2026-05-20",
        deadline: "2026-05-26",
        category: "QA",
        assignedBy: "Rohan",
        progress: 73,
        priority: "high",
      },
      {
        newTask: true,
        active: false,
        completed: false,
        overdue: false,
        taskTitle: "Client Feedback",
        taskDescription: "Review client suggestions",
        taskDate: "2026-05-24",
        deadline: "2026-05-30",
        category: "Communication",
        assignedBy: "Anita",
        progress: 0,
        priority: "medium",
      },
    ],
  },

  {
    id: 5,
    firstname: "Ritesh",
    email: "employee5@example.com",
    password: "123",
    taskNumber: {
      newTask: 1,
      active: 2,
      completed: 2,
      overdue: 0,
    },
    tasks: [
      {
        newTask: true,
        active: false,
        completed: false,
        overdue: false,
        taskTitle: "Setup Authentication",
        taskDescription: "Implement JWT authentication",
        taskDate: "2026-05-25",
        deadline: "2026-06-05",
        category: "Backend",
        assignedBy: "Sagar",
        progress: 0,
        priority: "high",
      },
      {
        newTask: false,
        active: false,
        completed: true,
        overdue: false,
        taskTitle: "Fix CSS Issues",
        taskDescription: "Resolve responsive layout problems",
        taskDate: "2026-05-12",
        deadline: "2026-05-14",
        category: "CSS",
        assignedBy: "Anita",
        progress: 100,
        priority: "medium",
      },
      {
        newTask: false,
        active: true,
        completed: false,
        overdue: false,
        taskTitle: "Add Charts",
        taskDescription: "Integrate analytics charts",
        taskDate: "2026-05-26",
        deadline: "2026-06-01",
        category: "Data Visualization",
        assignedBy: "Rohan",
        progress: 48,
        priority: "medium",
      },
      {
        newTask: false,
        active: true,
        completed: false,
        overdue: false,
        taskTitle: "Code Review",
        taskDescription: "Review teammate pull requests",
        taskDate: "2026-05-19",
        deadline: "2026-05-23",
        category: "Review",
        assignedBy: "Sagar",
        progress: 82,
        priority: "high",
      },
      {
        newTask: false,
        active: false,
        completed: true,
        overdue: false,
        taskTitle: "Refactor Code",
        taskDescription: "Clean old React components",
        taskDate: "2026-05-09",
        deadline: "2026-05-12",
        category: "Refactoring",
        assignedBy: "Anita",
        progress: 100,
        priority: "medium",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    firstname: "Sagar",
    email: "admin@example.com",
    password: "123",
  },
  {
    id: 2,
    firstname: "Anita",
    email: "admin2@example.com",
    password: "123",
  },
  {
    id: 3,
    firstname: "Rohan",
    email: "admin3@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};

export const getAllEmployees = () =>
  JSON.parse(localStorage.getItem("employees")) || [];

export const getAllAdmins = () =>
  JSON.parse(localStorage.getItem("admin")) || [];

export const getEmployeeById = (id) =>
  getAllEmployees().find((emp) => emp.id === id) || null;

export const updateEmployee = (updatedEmp) => {
  const updated = getAllEmployees().map((emp) =>
    emp.id === updatedEmp.id ? updatedEmp : emp
  );
  localStorage.setItem("employees", JSON.stringify(updated));
};

export const authenticateUser = (email, password) => {
  const emp = getAllEmployees().find(
    (e) => e.email === email && e.password === password
  );
  if (emp) return { ...emp, role: "employee" };

  const adm = getAllAdmins().find(
    (a) => a.email === email && a.password === password
  );
  if (adm) return { ...adm, role: "admin" };

  return null;
};