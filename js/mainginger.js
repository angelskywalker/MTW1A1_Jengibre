//JavaScript Document
$(document).ready(function(){
		var imgnum=$('.slider li').length;//variables publicas se usan dentro y fuera de las funciones
		//dentro de la variable imgnum se guarda el número de imagenes de nuestro slider
		//console.log(imgnum);
		var imgposicion=1;//posicion de la imagen 
		
		for (i=1; i<=imgnum;i++)
		{
			$('.pagination').append('<li><span class="fa fa-circle"></span></li>');
		}
		
		$('.slider li').hide();//esconde las demás imagenes
		$('.slider li:first').show();//muestra la primera imagen
		$('.pagination li:first').css({'color':'#cd6e2e'});//da el color de los puntos de la lista 
							
		//para mover las imagenes con la flecha 
		//vamos ejecutar las funciones 
		$('.pagination li').click(pagina);
		$('.right span').click(siguienteslider);
		$('.left span').click(anteriorslider);
		
		setInterval(function(){
							 siguienteslider();
							 },5000);//hace que se automatice
		
		//funciones 
		function pagina(){
			var numpunto=$(this).index()+1;
			//console.log(numpunto); //es sirve para hacer prueba de consola
			
			$('.slider li').hide();
			$('.slider li:nth-child('+numpunto+')').fadeIn();
			$('.pagination li').css({'color':'#666666'});
			$(this).css({'color':'#cd6e2e'});
				imgposicion=numpunto;
			}
	//function de avanzar
	function siguienteslider(){
			if(imgposicion>=imgnum)
			{
				imgposicion=1;
			}
			else
			{
				imgposicion++;	
			}
			$('.pagination li').css({'color':'#666666'});
			$('.pagination li:nth-child('+imgposicion+')').css({'color':'#cd6e2e'}); 
			$('.slider li').hide();//desaparece todas las imagenes
			$('.slider li:nth-child('+imgposicion+')').fadeIn();//muestra la imagen de la posición 
			//console.log (imgposicion); 
	}
	function anteriorslider(){
			if(imgposicion<=1)
			{
				imgposicion=imgnum;
			}
			else
			{
				imgposicion--;	
			}
			$('.pagination li').css({'color':'#666666'});
			$('.pagination li:nth-child('+imgposicion+')').css({'color':'#cd6e2e'});
			$('.slider li').hide();//desaparece todas las imagenes
			$('.slider li:nth-child('+imgposicion+')').fadeIn();//muestra la imagen de la posición 
			//console.log (imgposicion); 
	}
	
							});