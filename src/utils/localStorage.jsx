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
      failed: 0,
    },
    tasks: [
      {
        newTask: true,
        active: false,
        completed: false,
        failed: false,
        taskTitle: "Update Website",
        taskDescription: "Update homepage banner and text",
        taskDate: "2026-05-18",
        category: "Design",
      },
      {
        newTask: false,
        active: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve login redirect issue",
        taskDate: "2026-05-15",
        category: "Development",
      },
      {
        newTask: false,
        active: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard",
        taskDescription: "Build employee dashboard UI",
        taskDate: "2026-05-20",
        category: "Frontend",
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
      failed: 0,
    },
    tasks: [
      {
        newTask: true,
        active: false,
        completed: false,
        failed: false,
        taskTitle: "Write API Docs",
        taskDescription: "Document all REST API endpoints",
        taskDate: "2026-05-19",
        category: "Documentation",
      },
      {
        newTask: false,
        active: false,
        completed: true,
        failed: false,
        taskTitle: "Database Backup",
        taskDescription: "Take weekly database backup",
        taskDate: "2026-05-14",
        category: "Database",
      },
      {
        newTask: false,
        active: true,
        completed: false,
        failed: false,
        taskTitle: "Optimize Images",
        taskDescription: "Compress website assets",
        taskDate: "2026-05-21",
        category: "Performance",
      },
      {
        newTask: false,
        active: false,
        completed: true,
        failed: false,
        taskTitle: "Team Meeting",
        taskDescription: "Attend weekly scrum meeting",
        taskDate: "2026-05-13",
        category: "Management",
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
      failed: 0,
    },
    tasks: [
      {
        newTask: true,
        active: false,
        completed: false,
        failed: false,
        taskTitle: "Test Payment Gateway",
        taskDescription: "Run payment integration tests",
        taskDate: "2026-05-22",
        category: "Testing",
      },
      {
        newTask: false,
        active: true,
        completed: false,
        failed: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Correct mobile navbar alignment",
        taskDate: "2026-05-18",
        category: "UI",
      },
      {
        newTask: false,
        active: false,
        completed: true,
        failed: false,
        taskTitle: "Deploy App",
        taskDescription: "Deploy latest build to production",
        taskDate: "2026-05-10",
        category: "Deployment",
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
      failed: 0,
    },
    tasks: [
      {
        newTask: true,
        active: false,
        completed: false,
        failed: false,
        taskTitle: "Research Tailwind",
        taskDescription: "Explore advanced Tailwind utilities",
        taskDate: "2026-05-23",
        category: "Research",
      },
      {
        newTask: false,
        active: false,
        completed: true,
        failed: false,
        taskTitle: "Update README",
        taskDescription: "Improve project documentation",
        taskDate: "2026-05-11",
        category: "Documentation",
      },
      {
        newTask: false,
        active: true,
        completed: false,
        failed: false,
        taskTitle: "Bug Testing",
        taskDescription: "Test reported UI bugs",
        taskDate: "2026-05-20",
        category: "QA",
      },
      {
        newTask: true,
        active: false,
        completed: false,
        failed: false,
        taskTitle: "Client Feedback",
        taskDescription: "Review client suggestions",
        taskDate: "2026-05-24",
        category: "Communication",
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
      failed: 0,
    },
    tasks: [
      {
        newTask: true,
        active: false,
        completed: false,
        failed: false,
        taskTitle: "Setup Authentication",
        taskDescription: "Implement JWT authentication",
        taskDate: "2026-05-25",
        category: "Backend",
      },
      {
        newTask: false,
        active: false,
        completed: true,
        failed: false,
        taskTitle: "Fix CSS Issues",
        taskDescription: "Resolve responsive layout problems",
        taskDate: "2026-05-12",
        category: "CSS",
      },
      {
        newTask: false,
        active: true,
        completed: false,
        failed: false,
        taskTitle: "Add Charts",
        taskDescription: "Integrate analytics charts",
        taskDate: "2026-05-26",
        category: "Data Visualization",
      },
      {
        newTask: false,
        active: true,
        completed: false,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review teammate pull requests",
        taskDate: "2026-05-19",
        category: "Review",
      },
      {
        newTask: false,
        active: false,
        completed: true,
        failed: false,
        taskTitle: "Refactor Code",
        taskDescription: "Clean old React components",
        taskDate: "2026-05-09",
        category: "Refactoring",
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