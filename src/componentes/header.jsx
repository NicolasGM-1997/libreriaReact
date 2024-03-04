import {Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {useAuth} from '/src/hooks/estadoSesion.jsx'

export function BarraNav() {
	const navigate = useNavigate()
	const { isLoggedIn, setIsLoggedIn } = useAuth()

	function inicio(){
		navigate('/')
	}

	function iniciarSesion(){
		navigate('/login')
	}

	function cerrarSesion(){
		setIsLoggedIn(!isLoggedIn)
	}

	return(
		<header>
			<div id="nav1">
				<img src="/pagina/icono.png" id="iconoPagina" onClick={inicio}/>
			</div>
			<div id="nav2">
				<ul>
					<li><Link to="/">Inicio</Link></li>
					<li><Link to="/consultas">Consultas</Link></li>
					<li><Link to="/categorias">Categorias</Link></li>
					<li><Link to="/nosotros">Nosotros</Link></li>
				</ul>
			</div>
			<div id="nav3">
				{isLoggedIn?(
					<div>
						<img src="/pagina/usuario.png" className="user"/>
						<img src="/pagina/configuracion.png" className="user"/>
						<label>#Usuario123</label>
						<button className="primario" onClick={cerrarSesion}><img src="/pagina/login.png" id="iconoSalir"/>Cerrar Sesion</button>
					</div>
				):(
					<div>
						<button className="primario" onClick={iniciarSesion}><img src="/pagina/login.png" id="iconoLogin"/>Ingresar</button>
					</div>
				)}
			</div>
		</header>
	)
}