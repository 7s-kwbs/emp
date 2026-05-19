
const employees = [
  {
    id: 1,
    firstname: "Aarav",
    email: "employee1@example.com",
    password: "123",

    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        taskTitle: "Update Website",
        taskDescription: "Update homepage banner and text",
        taskDate: "2026-05-18",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve login redirect issue",
        taskDate: "2026-05-15",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: false,
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
      active: 2,
      newTask: 1,
      completed: 2,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        taskTitle: "Write API Docs",
        taskDescription: "Document all REST API endpoints",
        taskDate: "2026-05-19",
        category: "Documentation",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        taskTitle: "Database Backup",
        taskDescription: "Take weekly database backup",
        taskDate: "2026-05-14",
        category: "Database",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        taskTitle: "Optimize Images",
        taskDescription: "Compress website assets",
        taskDate: "2026-05-21",
        category: "Performance",
      },
      {
        active: false,
        newTask: false,
        completed: true,
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
      active: 2,
      newTask: 1,
      completed: 1,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        taskTitle: "Test Payment Gateway",
        taskDescription: "Run payment integration tests",
        taskDate: "2026-05-22",
        category: "Testing",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Correct mobile navbar alignment",
        taskDate: "2026-05-18",
        category: "UI",
      },
      {
        active: false,
        newTask: false,
        completed: true,
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
      active: 3,
      newTask: 2,
      completed: 1,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        taskTitle: "Research Tailwind",
        taskDescription: "Explore advanced Tailwind utilities",
        taskDate: "2026-05-23",
        category: "Research",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        taskTitle: "Update README",
        taskDescription: "Improve project documentation",
        taskDate: "2026-05-11",
        category: "Documentation",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        taskTitle: "Bug Testing",
        taskDescription: "Test reported UI bugs",
        taskDate: "2026-05-20",
        category: "QA",
      },
      {
        active: true,
        newTask: true,
        completed: false,
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
      active: 3,
      newTask: 1,
      completed: 2,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        taskTitle: "Setup Authentication",
        taskDescription: "Implement JWT authentication",
        taskDate: "2026-05-25",
        category: "Backend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        taskTitle: "Fix CSS Issues",
        taskDescription: "Resolve responsive layout problems",
        taskDate: "2026-05-12",
        category: "CSS",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        taskTitle: "Add Charts",
        taskDescription: "Integrate analytics charts",
        taskDate: "2026-05-26",
        category: "Data Visualization",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        taskTitle: "Code Review",
        taskDescription: "Review teammate pull requests",
        taskDate: "2026-05-19",
        category: "Review",
      },
      {
        active: false,
        newTask: false,
        completed: true,
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

export const setLocalStorage =()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage =()=>{
    const employees=  JSON.parse(localStorage.getItem('employees'))
    const admin= JSON.parse( localStorage.getItem('admin'))

    return {employees, admin}
}