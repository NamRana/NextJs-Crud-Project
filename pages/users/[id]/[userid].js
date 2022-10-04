import React from 'react'
import {useRouter} from  "next/router"

const UserIdCmp = () => {
    const router = useRouter();
  return (
    <div>
    <h1>New User Id example{router.query.userid}</h1>
    </div>
  )
}

export default UserIdCmp