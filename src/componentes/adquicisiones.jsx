import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {useAuth} from '/src/hooks/estadoSesion.jsx'

export function AdquicisionInicio({titulo,autor,ISBN,numRegistro,disponible}){
	const navigate = useNavigate()

	function navAdquicision(libro){
		navigate("/consultas")
	}

	return(
		<div onClick={() => navAdquicision(titulo)}>
			<ul>
				<li><label className="infoLibro">Titulo:</label> {titulo}</li>
				<li><label className="infoLibro">Autor:</label> {autor}</li>
				<li><label className="infoLibro">ISBN:</label> {ISBN}</li>
				<li><label className="infoLibro">Numero de Registro:</label> {numRegistro}</li>
				<li><label className="infoLibro">Disponibilidad:</label> {disponible}</li>
			</ul>
		</div>
	)
}

export function AdquicisionBusqueda({titulo,autor,ISBN,numRegistro,disponible,img}){
	const navigate = useNavigate()
	const { isLoggedIn, setIsLoggedIn } = useAuth()
	const [reservado,setReservado] = useState(false)

	function reservar(){
		setReservado(!reservado)
	}

	function navAdquicision(libro){
		navigate("/consultas")
	}

	function comprar(){
		alert('El libro ya ha sido comprado, si ingresa a la pagina lo puede reservar')
	}

	return(
		<div id="resLibro">
			<div>
				<img id="imgRes" src={img} onClick={navAdquicision}/>
			</div>
			<div>
				<ul>
					<li><label className="infoLibro">Titulo:</label> {titulo}</li>
					<li><label className="infoLibro">Autor:</label> {autor}</li>
					<li><label className="infoLibro">ISBN:</label> {ISBN}</li>
					<li><label className="infoLibro">Numero de Registro:</label> {numRegistro}</li>
					<li><label className="infoLibro">Disponibilidad:</label> {disponible}</li>
				</ul>
			</div>
			<div>
				{isLoggedIn?(
					reservado?(
						<div><button className="primario" onClick={reservar}>Devolver</button></div>
					):(
						<div><button className="secundario" onClick={reservar}>Reservar</button></div>
					)
				):(
					<div><button className="terciario" onClick={comprar}>Comprar</button></div>
				)}
			</div>
		</div>
	)
}