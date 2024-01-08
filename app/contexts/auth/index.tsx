'use client'

import { SessionProvider } from "next-auth/react";
import { createContext, useState } from "react";

export interface User {
    id?: number,
    email: string,
    name: string
}

export const AuthContext = createContext({})
export const AuthProvider = ({ children } : { children: React.ReactNode }) => {
    const [users, setUsers] = useState<User[]>([])

    const addUser = (user: User) => {
        setUsers([...users, user])
    }

    return (
        <AuthContext.Provider 
            value={{
                users, 
                addUser
            }}
        >
            <SessionProvider>
                {children}
            </SessionProvider>
        </AuthContext.Provider>
    )
}