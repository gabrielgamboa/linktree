import { FormEvent, useState } from 'react'
import { Input } from "../../components/Input";

import { auth } from '../../services/firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function handleSubmitLogin(e: FormEvent) {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/admin")
      })
      .catch((err) => {
        alert('Erro ao fazer login')
        console.log(err)
      })
  }

  return (
    <div className=" flex flex-col justify-center items-center h-screen">
      <h1 className="text-white mb-7 font-bold text-5xl">Dev
        <span className=" bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">link</span>
      </h1>

      <form onSubmit={handleSubmitLogin} className="max-w-xl w-full flex flex-col px-4">
        <Input
          placeholder="Digite seu e-mail..."
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Digite sua senha..."
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />  
        <button type="submit" className="bg-blue-700 rounded text-lg font-medium text-white h-9">
          Acessar
        </button>
      </form>
    </div>
  )
}