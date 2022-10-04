import React from 'react'
import {useRouter} from "next/router"
import Layout from '../components/Layout';

const About = () => {
    const router=useRouter();
  return (
    <Layout >
    <h1>
        This is a about page
    </h1>
    <button onClick={()=>router.push('/')}>Go Back Home</button>
    </Layout>
  )
}

export default About