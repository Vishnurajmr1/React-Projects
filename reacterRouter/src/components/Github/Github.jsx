import React, { useEffect, useState } from "react";
import {useLoaderData} from 'react-router-dom'

const Github = () => {
  const data=useLoaderData()
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/vishnurajmr1")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Follwers:{data.followers}
      <img src={data.avatar_url} alt={data.name} width="300px" />
    </div>
  );
};

export default Github;

export const githubLoaderInfo = async () => {
  const response = await fetch("https://api.github.com/users/vishnurajmr1");
  return response.json();
};
