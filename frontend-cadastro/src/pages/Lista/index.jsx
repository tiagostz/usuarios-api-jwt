// import { useEffect, useState } from "react"
// import api from "../../services/api"

// function ListarUsuarios() {
//     const [allUsers, setAllUsers] = useState()

//     useEffect(() => {
//         async function loadUsers() {

//             const token = localStorage.getItem('token')
//             const {
//                 data: { users },
//             } = await api.get('/listar-usuarios', {
//                 headers: { Authorization: `Bearer ${token}` }
//                 //headers.authorization
//             })

//             setAllUsers(users)

//         }

//         loadUsers()

//         console.log(allUsers)
//     }, [])


//     return (
//         <div className="max-w-2xl mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-md shadow-lg">
//             <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Listar de Usuários</h2>
//             <ul className=" space-y-2">
                
//                 {allUsers && allUsers.length > 0 && allUsers.map(user => (
//                     <li key={user.id} className="bg-gray-100 p-4 rounded-md">
//                         <p className="font-semibold">ID: {user.id}</p>
//                         <p className="font-semibold">Nome: {user.name}</p>
//                         <p className="font=semibold">Email: {user.email}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>

//     )
// }

// export default ListarUsuarios

import { useEffect, useState } from "react"
import api from "../../services/api"

function ListarUsuarios() {
    const [allUsers, setAllUsers] = useState()

    useEffect(() => {
        async function loadUsers() {

            const token = localStorage.getItem('token')
            const {
                data: { users },
            } = await api.get('/listar-usuarios', {
                headers: { Authorization: `Bearer ${token}` }
                //headers.authorization
            })

            setAllUsers(users)

        }

        loadUsers()
    }, [])


    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-zinc-900">Usuários Cadastrados</h2>
                    <p className="text-zinc-500 text-sm mt-1">Gerencie os usuários do sistema</p>
                </div>
                <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                    {allUsers?.length || 0} Total
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {allUsers && allUsers.length > 0 ? (
                    allUsers.map(user => (
                        <div key={user.id} className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm hover:border-blue-200 transition-colors group">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-500 font-bold text-lg group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                        {user.name.charAt(0).toUpperCase()}
                                    </div>
                                    <div>
                                        <p className="font-bold text-zinc-900">{user.name}</p>
                                        <p className="text-zinc-500 text-sm">{user.email}</p>
                                    </div>
                                </div>
                                <span className="text-[10px] font-mono text-zinc-400 bg-zinc-50 px-2 py-1 rounded border border-zinc-100">
                                    ID: {user.id.toString().slice(-4)}
                                </span>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full py-20 text-center bg-zinc-50 border-2 border-dashed border-zinc-200 rounded-3xl">
                        <p className="text-zinc-400">Nenhum usuário encontrado</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ListarUsuarios