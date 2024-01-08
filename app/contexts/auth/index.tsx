'use client'

import { createContext, useState } from "react";

type UserProps = {
    id?: number,
    name: string,
    token?: string
}

export const AuthContext = createContext({})
export const AuthProvider = ({ children } : { children: React.ReactNode }) => {
    const [users, setUsers] = useState<UserProps[]>([])

    const addUser = (user: any) => {
        setUsers([...users, user])
    }

    return (
        <AuthContext.Provider 
            value={{
                users, 
                addUser
            }}
        >
            <>{children}</>
        </AuthContext.Provider>
    )
}