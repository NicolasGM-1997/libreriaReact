import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {useAuth} from '/src/hooks/estadoSesion.jsx'

export function Login(){
	const navigate = useNavigate()
	const {isLoggedIn, setIsLoggedIn} = useAuth()
	const [isLogin,setIsLogin] = useState(true)
	const users = [{ user: "Admin", password: "12345"}]

	// Login
	const [userLogin,setUserLogin] = useState('')
	const [passLogin,setPassLogin] = useState('')

	// Registro
	const [userRegistro,setUserRegistro] = useState('')
	const [passRegistro,setPassRegistro] = useState('')
	const [idRegistro,setIdRegistro] = useState('')
	const [ciudad,setCiudad] = useState('')
	const [direccion,setDireccion] = useState('')
	const [correo,setCorreo] = useState('')

	const cambioInputs = (index,value) =>{
		switch(index){
			case 1: setUserLogin(value); break;
			case 2: setPassLogin(value); break;
			case 3: setUserRegistro(value); break;
			case 4: setIdRegistro(value); break;
			case 5: setCiudad(value); break;
			case 6: setDireccion(value); break;
			case 7: setCorreo(value); break;
			case 8: setPassRegistro(value); break;
		}
	}

	function loguearse(){
		const foundUser = users.find((usr) => userLogin === usr.user && passLogin === usr.password)
		if(foundUser){
			alert("Usuario Autentificado: "+userLogin)
			setIsLoggedIn(!isLoggedIn)
			navigate('/')
		} else {
			alert("Usuario y/o contraseña incorrectos")
			users.map((usr)=>{
				alert("Usuarios Registrados: \nUsuario: "+usr.user+"\nContraseña"+usr.password)
			})
		}		
	}

	function registrarse(){
		users.push({user: userRegistro, password: passRegistro})
		users.map((usr)=>{
			alert("Usuarios Registrados: \nUsuario: "+usr.user+"\nContraseña: "+usr.password)
		})
	}

	function tipoIngreso(){
		setIsLogin(!isLogin)
	}	

	return(
		<main className="principal">
			{isLogin?(
				<div id="inicioLogin">
					<table>
						<tbody>
							<tr>
								<td><p className="tituloLogin">Iniciar Sesion</p></td>
							</tr>
							<tr>
								<td><input type="text" placeholder="...Usuario" value={userLogin} 
									onChange={(e) => cambioInputs(1,event.target.value)}/></td>
							</tr>
							<tr>
								<td><input type="password" placeholder="...Contraseña" value={passLogin} 
									onChange={(e) => cambioInputs(2,event.target.value)}/></td>
							</tr>
							<tr>
								<td><button className="primario" onClick={loguearse}><img src="/pagina/login.png" id="iconoLogin"/>Ingresar</button></td>
							</tr>
							<tr>
								<td><a className="infoLogin">Olvidaste tu usuario y/o contraseña</a></td>
							</tr>
							<tr>
								<td><p className="infoLogin">No tienes cuenta? Registrate a nuestra plataforma</p></td>
							</tr>
							<tr>
								<td><button className="secundario" onClick={tipoIngreso}>Registarse</button></td>
							</tr>
						</tbody>
					</table>
				</div>
			):(
				<div id="inicioRegistro">
					<table>
						<tbody>
							<tr>
								<td colSpan={2}><p className="tituloLogin">Registro de Nuevo Usuario</p></td>
							</tr>
							<tr>
								<td><input type="text" placeholder="...Usuario" value={userRegistro}
									onChange={(e) => cambioInputs(3,event.target.value)}/></td>
								<td><input type="text" placeholder="...Cedula" value={idRegistro} 
									onChange={(e) => cambioInputs(4,event.target.value)}/></td>
							</tr>
							<tr>
								<td><input type="text" placeholder="...Ciudad" value={ciudad} 
									onChange={(e) => cambioInputs(5,event.target.value)}/></td>
								<td><input type="text" placeholder="...Direccion" value={direccion} 
									onChange={(e) => cambioInputs(6,event.target.value)}/></td>
							</tr>
							<tr>
								<td><input type="email" placeholder="...Correo Alternativo" value={correo}
									onChange={(e) => cambioInputs(7,event.target.value)}/></td>
								<td><input type="password" placeholder="...Contraseña" value={passRegistro}
									onChange={(e) => cambioInputs(8,event.target.value)}/></td>
							</tr>
							<tr>
								<td colSpan={2}><button className="primario" onClick={registrarse}><img src="/pagina/login.png" id="iconoLogin"/>Registrarse</button></td>
							</tr>
							<tr>
								<td colSpan={2}><p className="infoLogin">Ya tienes cuenta? Inicia Sesion en nuestra plataforma</p></td>
							</tr>
							<tr>
								<td colSpan={2}><button className="secundario" onClick={tipoIngreso}>Inicia Sesion</button></td>
							</tr>
						</tbody>
					</table>	
				</div>
			)}
		</main>
	)
}