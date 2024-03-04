import {useNavigate} from 'react-router-dom'

export const categorias = ["Novela","Cuento","Ciencia ficcion","Fantasia","Misterio","Suspenso","Terror","Romance","Aventura",
		"Ensayo","Biografia","Autobiografia","Historia","Ciencia","Divulgación cientifica","Politica","Religion",
		"Psicologia","Filosofia","Libros de referencia","Poesia","Teatro","Literatura","Historietas","Libros de motivacion",
		"Desarrollo personal","Emprendimiento","Economia","Libros de salud","Nutricion","Ejercicio","Medicina alternativa",
		"Guías de viaje","Relatos de viajes","Astronomia","Fisica","Biologia","Arte","Fotografia","Arquitectura",
		"Libros de recetas","Gastronomía"]

export const rutasCat = categorias.map((cat)=>`/${cat}`)

export function CeldasCategorias(){
	const navigate = useNavigate()

	function navCategoria(categoria){
		navigate("/categorias#"+categoria.toLowerCase())
	}

	return(
		<div className="celdaCat">
			{categorias.map((cat,i)=>(
				<div className="itemCat" key={i} onClick={() => navCategoria(cat)}>{cat}</div>
			))}
		</div>
	)
}

export function Categorias(){
	return(
		<main className="principal">
			<div>
				<p className="tituloLogin">Nuestras Categorias en Libros</p>
			</div>
			<hr className="separadores"/>
			<div className="divCategorias">
				<div id="Novela">
					<p className="tituloLogin">Novela</p>
					<p> 
					La novela es un extenso género literario en prosa que se distingue por contar historias complejas y detalladas. 
					Caracterizada por su longitud, permite una exploración profunda de personajes, tramas y temas. A través de una 
					narrativa estructurada, aborda la diversidad de la experiencia humana y puede adoptar diversos géneros, desde 
					la fantasía hasta la novela histórica.
					</p>
				</div> 
				<div id="Cuento">
					<p className="tituloLogin">Cuento</p>
					<p> 
					Un cuento es una narrativa breve que presenta una trama concisa y personajes limitados en un espacio de tiempo 
					más reducido que una novela. A menudo, los cuentos buscan transmitir un mensaje o moraleja a través de su trama. 
					Estos relatos, que pueden variar en género y estilo, tienen la capacidad de evocar emociones intensas o reflexiones
					profundas en el lector. 
					</p>
				</div>
				<div id="Ciencia-Ficcion">
					<p className="tituloLogin">Cienca Ficcion</p>
					<p> 
					La ciencia ficción es un género literario que explora posibilidades futuras basadas en avances científicos o 
					tecnológicos imaginarios. Las novelas y cuentos de ciencia ficción suelen ambientarse en mundos futuristas, 
					universos alternativos o en el espacio exterior, incorporando elementos como tecnologías avanzadas, extraterrestres, 
					viajes en el tiempo y realidades paralelas. 
					</p>
				</div>
				<div id="Fantasia">
					<p className="tituloLogin">Fantasia</p>
					<p> 
					La fantasía es un género literario que transporta a los lectores a mundos imaginarios donde la magia, lo sobrenatural 
					y lo extraordinario son elementos fundamentales. Tanto en novelas como en cuentos de fantasía, los autores crean 
					universos alternativos llenos de criaturas mágicas, hechicería, y a menudo, un conflicto entre el bien y el mal. 
					Este género permite la exploración de temas universales a través de contextos y elementos inusuales.
					</p>
				</div>
				<div id="Misterio">
					<p className="tituloLogin">Misterio</p>
					<p> 
					El misterio es un género literario que se centra en la intriga, la resolución de enigmas y la revelación de secretos 
					a lo largo de la trama. Tanto en novelas como en cuentos de misterio, los autores construyen narrativas en las que 
					un evento desconcertante o un crimen desencadena una búsqueda de respuestas.
					</p>
				</div>
				<div id="Terror">
					<p className="tituloLogin">Terror</p>
					<p> 
					El terror es un género literario que busca provocar miedo, ansiedad y perturbación emocional en los lectores. En 
					novelas y cuentos de terror, los autores utilizan elementos como lo sobrenatural, lo macabro, lo desconocido y lo 
					psicológico para crear una atmósfera aterradora. Las tramas suelen centrarse en situaciones amenazantes o eventos 
					paranormales que desafían la comprensión racional.
					</p>
				</div>
			</div>
		</main>
	)
}