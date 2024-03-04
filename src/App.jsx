import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import '/src/index.css'

// Importacion de componentes
import {BarraNav} from '/src/componentes/header.jsx'
import {Index} from '/src/componentes/index.jsx'
import {Footer} from '/src/componentes/footer.jsx'
import {Login} from '/src/componentes/login.jsx'
import {Consultas} from '/src/componentes/consultas.jsx'
import {Categorias} from '/src/componentes/categorias.jsx'
import {Nosotros} from '/src/componentes/nosotros.jsx'
import {Contacto} from '/src/componentes/contacto.jsx'

// Importacion de variables y constantes
import {rutasCat} from '/src/componentes/categorias.jsx'

// Estados
import {AuthProvider} from '/src/hooks/estadoSesion.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))

function Navegacion() {
	return(
		<Router>
			<BarraNav/>
			<Routes>
				<Route path="/" exact element={<Index/>}></Route>
				<Route path="/consultas" element={<Consultas/>}></Route>
				<Route path="/categorias" element={<Categorias/>}></Route>
				<Route path="/nosotros" element={<Nosotros/>}></Route>
				<Route path="/login" element={<Login/>}></Route>
				{rutasCat.map((rut,i)=>(
					<Route path={rut.toLowerCase()} key={i}></Route>
				))}
			</Routes>
		</Router>
	)
}

root.render(
	<React.StrictMode>
		<AuthProvider>
			<Navegacion/>
			<Footer/>
		</AuthProvider>
	</React.StrictMode>
)