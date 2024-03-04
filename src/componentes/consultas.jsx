import {categorias} from '/src/componentes/categorias.jsx'
import {AdquicisionBusqueda} from '/src/componentes/adquicisiones.jsx'
import {totalLibros} from '/src/componentes/index.jsx'

export function Consultas(){
	return(
		<main className="principal">
			<div id="consultas">
				<p className="tituloLogin">Consultas de Libros</p><br/>
				<div>
					<img src="/pagina/lupa.png" id="imgConsulta"/>
					<input type="text"  placeholder="...Ingreso el titulo del libro que desee buscar"/>
				</div>
			</div>
			<hr className="separadores"/>
			<div id="resConsultas">
				<div id="filtros">
					<p className="tituloLogin">Filtros</p><br/>
					<label>Año de publicacion: </label>
					<select>
						<option value="1900 - 1950">1900 - 1950</option>
						<option value="1950 - 1980">1950 - 1980</option>
						<option value="1980 - 2000">1980 - 2000</option>
						<option value="2000 - 2010">2000 - 2010</option>
						<option value="2010 - 2020">2010 - 2020</option>
						<option value="2020 - Actualidad">2020 - Actualidad</option>
					</select><br/><br/>
					<label>Categorias: </label>
					<select>
						{categorias.map((cat,i)=>(
							<option value={cat} key={i}>{cat}</option>
						))}
					</select><br/><br/>
					<label>Ordenar por:</label><br/>
					<input type="checkbox"/><label> A - Z</label><br/>
					<input type="checkbox"/><label> Fecha de edicion</label><br/>
					<input type="checkbox"/><label> ISBN</label><br/>
					<input type="checkbox"/><label> Disponibilidad</label><br/>
				</div>
				<hr className="separadores"/>
				<div id="resultados">
					<p className="tituloLogin">Resultados Totales: </p>
					{totalLibros.map((lib,i)=>{
						const imagen = "/libros/" + lib.titulo + ".jpg"
						return (
							<AdquicisionBusqueda titulo={lib.titulo} autor={lib.autor} ISBN={lib.ISBN} numRegistro={lib.numeroRegistro} 
								disponible={lib.disponibilidad? 'Disponible' : 'No disponible'} key={i} img={imagen}/>
						)
					})}
				</div>
			</div>
		</main>
	)
}