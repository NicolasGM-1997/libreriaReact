export function Footer() {

	function navFacebook(){
		window.open("https:/\/www.facebook.com")
	}

	function navTwitter(){
		window.open("https:/\/www.twitter.com")
	}

	function navInstgram(){
		window.open("https:/\/www.instagram.com")
	}

	function navYoutube(){
		window.open("https:/\/www.youtube.com")
	}

	function navTikTok(){
		window.open("https:/\/www.tiktok.com")
	}
	
	return(
		<footer id="contacto">
			<div>
				<p className="infoFooter">©2023. Todos los derechos reservados.</p>
				<p className="infoFooter">Politicas de seguridad y manejo de informacion</p>
				<p className="infoFooter">Correoelectronico@correo.com</p>
			</div>
			<div>
				<p className="infoFooter">Nuestras Redes Sociales</p>
				<div id="imgRedes">
					<img src="/pagina/facebook.png" className="redes" onClick={navFacebook}/>
					<img src="/pagina/twitter.png" className="redes" onClick={navTwitter}/>
					<img src="/pagina/instagram.png" className="redes" onClick={navInstgram}/>
					<img src="/pagina/youtube.png" className="redes" onClick={navYoutube}/>
					<img src="/pagina/tik-tok.png" className="redes" onClick={navTikTok}/>
				</div>
			</div>
			<div>
				<p className="infoFooter">Secretaria Distrital de Educacion</p>
				<p className="infoFooter">Red de Bibliotecas Distritales</p>
				<p className="infoFooter">Nuestras Editoriales</p>
			</div>
		</footer>
	)
}