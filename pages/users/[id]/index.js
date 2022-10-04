import React from 'react'
import {useRouter} from "next/router"

const UserId = () => {
    const router = useRouter();
  return (
    <h1>User Id{router.query.id}</h1>
  )
}

export default UserId