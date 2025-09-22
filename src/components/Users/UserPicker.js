import { useState, useEffect } from "react";
import Spinner from '../UI/Spinner'

export default function UserPicker () {
  const [users, setUsers] = useState(null)
  
  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      // load data once when component is first mounted
  }, [])

  if (users === null) {
    return <Spinner/>
  }
  
  return (
    <select>
      {
        users.map(user => (
          <option key={user.id}>{user.name}</option>
        ))
      }
    </select>
  );
}