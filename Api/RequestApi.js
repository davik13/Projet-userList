import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Axios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
  });

  export  const fetchUsers = async () => {
    try {
      const {data} = await Axios.get(`/users`);

      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  export  const  fetchUserDetails = async (id) => {
    try {
      const { data } = await Axios.get(`/users/${id}`);
  
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };