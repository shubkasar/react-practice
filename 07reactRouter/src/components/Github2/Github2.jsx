import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github2() {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/shubkasar')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])

    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl" >
            <div>Github Name: {data.name}</div>
            <div>Github login: {data.login}</div>
            <img src={data.avatar_url} alt="Github Pic" width={300} />
        </div>
    )
}

export default Github2

export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/shubkasar')
    return res.json();
}