import {CeldasCategorias} from '/src/componentes/categorias.jsx'
import {AdquicisionInicio} from '/src/componentes/adquicisiones.jsx'
import libros from '/src/libros.json'

export const totalLibros = libros

export function Index() {
	return(
		<main className="principal">
			<div>
				<img src="/pagina/bibloteca.jpg" id="imgInicio"/>
				<p id="tituloInicio">Biblioteca Universitaria</p>
			</div>
			<hr className="separadores"/>
			<div className="adquicisiones">
				<p className="tituloDescripcion">Nuevas adquicisiones</p>
				<div className="adIndex">
					{totalLibros.map((lib,i)=>(
						<AdquicisionInicio titulo={lib.titulo} autor={lib.autor} ISBN={lib.ISBN} numRegistro={lib.numeroRegistro} 
							disponible={lib.disponibilidad? 'Disponible' : 'No disponible'} key={i}/>
					))}
				</div>
			</div>
			<hr className="separadores"/>
			<div className="categorias">
				<p className="tituloDescripcion">Nuestras categorias</p>
				<div>
					<CeldasCategorias/>
				</div>
			</div>
		</main>
	)
}