import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function Home() {

  // How to fetch data
  const [users ,setUsers]=useState('')

  useEffect(()=>{
    const fetchdata=async()=>{
      try{
        const {data}=await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(data);
        setUsers(data)
      }catch(error){
          console.log(error)
      }
    };
    fetchdata();
  },[]);
  return (
    <Layout className={styles.container}>
      <h1>Welcome Naman Rana</h1>
      <ul>
        {users.map(user=>(
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </Layout>
  )
}
