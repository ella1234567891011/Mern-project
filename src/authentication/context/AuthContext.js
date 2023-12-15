import React, { useState, createContext } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../config';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    
    const register = async (firstName, lastName, email, password) => {
        setIsLoading(true);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'}
        }
        try {
         const response = await axios.post(`${BASE_URL}/user/signup`, {
            firstName,
            lastName,
            email,
            password
         }, requestOptions);
         if (response.data) {
            let userInfo = response.data;
            setUserInfo(userInfo);
         } else {
            setIsLoading(false);
         }
    }catch(error) {
     setIsLoading(false);
    }
}

      const login =  (email, password) => {
        setIsLoading(true);
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}
        }
        axios.post(`${BASE_URL}/user/login`, {
            email,
            password
        }, requestOptions).then(res => {
            let userInfo = res.data;
            setUserInfo(userInfo);
            setIsLoading(false);
      }).catch(error => {
        setIsLoading(false);
      });
    }
    return (
        <AuthContext.Provider value={{ isLoading, userInfo, register, login}}>
            { children }
        </AuthContext.Provider>
    );
}