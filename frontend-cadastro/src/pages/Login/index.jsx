// import { useRef } from "react"
// import { Link, useNavigate } from "react-router-dom"
// import api from "../../services/api"

// function Login() {
//     const emailRef = useRef()
//     const passwordRef = useRef()
//     const navigate = useNavigate()

//     async function handleSubmit(event) {
//         event.preventDefault()

//         try {
//            const { data:token } = await api.post('/login', {
//                 email: emailRef.current.value,
//                 password: passwordRef.current.value
//             })

//             localStorage.setItem('token', token)

//             navigate('/listar-usuarios')

//         } catch (err) {
//             alert("Senha ou email incorretos")

//         }

//     }

//     return (
//         <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
//             <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
//                 <input ref={emailRef} placeholder="Email" type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" />
//                 <input ref={passwordRef} placeholder="Senha" type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" />
//                 <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-400">Login</button>
//             </form>
//             <Link to="/" className="text-blue-700 hover:underline mt-4 block text-center">Não tem uma conta? Cadastre-se</Link>
//         </div>
//     )

// }

// export default Login

import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import api from "../../services/api"

function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault()

        try {
           const { data:token } = await api.post('/login', {
                email: emailRef.current.value,
                password: passwordRef.current.value
            })

            localStorage.setItem('token', token)

            navigate('/listar-usuarios')

        } catch {
            alert("Senha ou email incorretos")

        }

    }

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-sm border border-zinc-200">
            <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold text-zinc-900">Bem-vindo de volta</h2>
                <p className="text-zinc-500 text-sm mt-2">Entre com suas credenciais para acessar</p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">E-mail</label>
                    <input 
                        ref={emailRef} 
                        placeholder="seu@email.com" 
                        type="email" 
                        className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" 
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">Senha</label>
                    <input 
                        ref={passwordRef} 
                        placeholder="••••••••" 
                        type="password" 
                        className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" 
                    />
                </div>

                <button className="w-full bg-zinc-900 text-white font-medium py-3 px-4 rounded-xl hover:bg-zinc-800 transition-colors mt-2">
                    Entrar
                </button>
            </form>

            <div className="mt-6 text-center">
                <p className="text-zinc-500 text-sm">
                    Não tem uma conta?{" "}
                    <Link to="/" className="text-blue-600 font-medium hover:underline">
                        Cadastre-se
                    </Link>
                </p>
            </div>
        </div>
    )

}

export default Login