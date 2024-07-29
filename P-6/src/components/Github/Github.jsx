import React from "react";
import { useState, useEffect} from "react";
import {useLoaderData} from 'react-router-dom'
function Github() {
  // const [data, useData] = useState({});
  // useEffect(() => {
  //   try {
  //     fetch("https://api.github.com/users/Karam-Abbas")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         useData(data);
  //         console.log(data);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  const data = useLoaderData();
  return (
    <>
    <div className="bg-gray-600 flex items-center justify-center text-3xl text-white py-3 px-3">
      Github
    </div>
    <div className="bg-gray-600 px-5 text-white flex flex-row items-center gap-20 justify-start pb-10">
      <img className=" min-h-48 min-w-48 rounded-full bg-cover" src={data.avatar_url} alt="no image" />
      <div className="px-3 text-2xl flex flex-col items-start justify-start gap-5">
      <div>Name: {data.name}</div>
      <div>Username: {data.login}</div>
      <div>Profile Link: <a className="text-blue-500 underline hover:text-blue-600" href={data.html_url}>Karam Abbas</a></div>
      <div>Bio: {data.bio}</div>
      <div>Following: {data.following}</div>
      <div>Followers: {data.followers}</div>
    </div>
    </div>
    </>
  );
}

export default Github;
