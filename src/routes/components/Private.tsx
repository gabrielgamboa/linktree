import { getAuth } from "firebase/auth"
import { ReactNode, useEffect, useState } from "react"
import { Navigate } from "react-router-dom"

interface PrivateProps {
    children: ReactNode
}

export function Private({ children }: PrivateProps) {
    const [loading, setLoading] = useState(true)
    const [signed, setSigned] = useState(false)

    useEffect(() => {
        const auth = getAuth()
        const user = auth.currentUser

        if (user) {
            const userData  = {
                id: user.uid,
                email: user.email
            }

            localStorage.setItem('@linktree-user', JSON.stringify(userData))

            setLoading(false)
            setSigned(true)
            
        }  
        else {
            console.log('no user logged')
            setLoading(false)
            setSigned(false)
        }
    }, [])

    if (loading) {
        return <div></div>
    }

    if (!signed) {
        return <Navigate to={"/login"}/>
    }

    return children
}