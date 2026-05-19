import { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

function App() {
  const [user, setUser] = useState('')
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authdata = useContext(AuthContext)

  // useEffect(() => {
  //   if(authdata){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // }, [authdata])
  
  const handleLogin =(email, password)=>{
    if (authdata && authdata.admin.find((e)=> email=== e.email && password === e.password)){
      setUser({role:'admin'})
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }
    else if(authdata ){
      const employee = authdata.employees.find((e)=> email === e.email && password=== e.password)
      if(employee){
        setUser({role:'employee'})
        setLoggedInUserData (employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
      }
    }
    else{
      alert('invalid Credentials')
    }
  }

  

  return (
    <>
    {!user ? <Login handleLogin={handleLogin} />: ''}
   { user == 'admin' ? <AdminDashboard/> : (user.role == "employee" ? <EmployeeDashboard data={loggedInUserData} />: null)}
    </>
  )
}

export default App
