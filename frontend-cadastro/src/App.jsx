// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
// import Cadastro from "./pages/Cadastro"
// import Login from "./pages/Login"
// import ListarUsuarios from "./pages/Lista"


// function App() {

//   return (
//     <BrowserRouter>
//     <header className="bg-blue-600 text-white p-4 shadow-md">
//       <h1 className="text-2xl font-bold text-center" >Sistema de Cadastro de Usuários</h1>
//     </header>
//       <Routes>
//         <Route path="/" element={<Cadastro />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/listar-usuarios" element={<ListarUsuarios />} />
//       </Routes>
//     </BrowserRouter>


//   )
// }

// export default App


import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Cadastro from "./pages/Cadastro"
import Login from "./pages/Login"
import ListarUsuarios from "./pages/Lista"


function App() {

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-zinc-50 font-sans">
        <header className="bg-white border-b border-zinc-200 py-6 sticky top-0 z-10">
          <h1 className="text-xl font-bold text-center tracking-tight text-zinc-900">
            Sistema de Cadastro
          </h1>
        </header>
        
        <main className="flex-1 container mx-auto px-4 py-12">
          <Routes>
            <Route path="/" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/listar-usuarios" element={<ListarUsuarios />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
