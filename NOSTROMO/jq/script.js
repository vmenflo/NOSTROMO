$(function(){
        /*Funcion para cerrar el menu si hay un resize()*/
    $(window).on('resize', function() {
        if ($(window).width() <= 900) {
            // Solo oculta el menú si la pantalla es más pequeña o igual a 900px
            $("ul#menu").stop(true,true).slideUp();
        }
    });

    //Si tocamos otra parte de la web que se despliegue
    $('body').on('click', function(){
        if ($(window).width() <= 900) {
            $('ul#menu').stop(true,true).slideUp();
        }
    })

    //Efecto para el menu en version escritorio
    //Efecto de los enlaces al pasar por ellos
    if ($(window).width() > 900) {
        $('#menu li a').on('mouseenter', function(){
            $(this).stop(false,true).animate({
                'opacity':'0.4'
            },300);
        })
        $('#menu li a').on('mouseleave', function(){
            $(this).stop(false,true).animate({
                'opacity':'1'
            },200);
        })
    }
        /*Controlar el botón menu*/
        $('#hamburguesa').on('click', function(event) {
            event.stopPropagation(); // Detener la propagación del evento
            if ($('ul#menu').is(':visible')) {
                $('ul#menu').stop(true, true).slideUp();
            } else {
                $('ul#menu').stop(true, true).slideDown('slow');
            }
        });
        /*Controlar el hover en los botones*/
        /*Otras sesiones*/
        $('#boton-sesiones').on('mouseenter', function(){
            $(this).stop(true,true).delay(100).queue(function(){
                var src = $(this).attr('src');
                $(this).attr("src", src.replace('.png', '-hover.png')); 
            })
            });
        $('#boton-sesiones').on('mouseleave', function(){
            var src = $(this).attr('src');
            $(this).stop(true,true).attr("src", src.replace('-hover.png', '.png'));
        });
        /*Comprar*/
        $('.boton-comprar').on('mouseenter', function(){
            $(this).stop(true,true).delay(100).queue(function(){
                var src = $(this).attr('src');
                $(this).attr("src", src.replace('.png', '-hover.png')); 
            })
            });
            $('.boton-comprar').on('mouseleave', function(){
                var src = $(this).attr('src');
                $(this).stop(true,true).attr("src", src.replace('-hover.png', '.png'));
            });
        /*Controlar boton entrar*/
        $('.boton-entrar').on('mouseenter', function(){
            $(this).stop(true,true).delay(100).queue(function(){
                var src = $(this).attr('src');
                $(this).attr("src", src.replace('.png', '-hover.png')); 
            })
            });
            $('.boton-entrar').on('mouseleave', function(){
                var src = $(this).attr('src');
                $(this).stop(true,true).attr("src", src.replace('-hover.png', '.png'));
            });
        /*Efectos boton registrar*/
        $('.boton-registrar').on('mouseenter', function(){
            $(this).stop(true,true).delay(100).queue(function(){
                var src = $(this).attr('src');
                $(this).attr("src", src.replace('.png', '-hover.png')); 
            })
            });
            $('.boton-registrar').on('mouseleave', function(){
                var src = $(this).attr('src');
                $(this).stop(true,true).attr("src", src.replace('-hover.png', '.png'));
            });
        /*Efecto boton volver*/
        $('.boton-volver').on('mouseenter', function(){
            $(this).stop(true,true).delay(100).queue(function(){
                var src = $(this).attr('src');
                $(this).attr("src", src.replace('.png', '-hover.png')); 
            })
            });
            $('.boton-volver').on('mouseleave', function(){
                var src = $(this).attr('src');
                $(this).stop(true,true).attr("src", src.replace('-hover.png', '.png'));
            });
        /*Efecto boton continuar*/
        $('.boton-continuar').on('mouseenter', function(){
            $(this).stop(true,true).delay(100).queue(function(){
                var src = $(this).attr('src');
                $(this).attr("src", src.replace('.png', '-hover.png')); 
            })
            });
            $('.boton-continuar').on('mouseleave', function(){
                var src = $(this).attr('src');
                $(this).stop(true,true).attr("src", src.replace('-hover.png', '.png'));
            });
        /*Efecto boton cancelar*/
        $('.boton-cancelar').on('mouseenter', function(){
            $(this).stop(true,true).delay(100).queue(function(){
                var src = $(this).attr('src');
                $(this).attr("src", src.replace('.png', '-hover.png')); 
            })
            });
            $('.boton-cancelar').on('mouseleave', function(){
                var src = $(this).attr('src');
                $(this).stop(true,true).attr("src", src.replace('-hover.png', '.png'));
            });
        /*Efecto boton pagar*/
        $('.boton-pagar').on('mouseenter', function(){
            $(this).stop(true,true).delay(100).queue(function(){
                var src = $(this).attr('src');
                $(this).attr("src", src.replace('.png', '-hover.png')); 
            })
            });
            $('.boton-pagar').on('mouseleave', function(){
                var src = $(this).attr('src');
                $(this).stop(true,true).attr("src", src.replace('-hover.png', '.png'));
            });
        /*Controlar que si hay algun dato incorrecto se indique*/
        /*Efecto cookies*/
        $('#boton-cookies').on('click', function(){
            $('#fondo-negro').css('display', 'none');
            $('#cookies').css('display', 'none');
        })
        /*Efecto para el formulario*/ 
        // He investigado el evento blur mientras esté vacio muestra el mensaje
        $('#formulario-login > div > input[required]').blur(function(){
            if ($(this).val().trim().length === 0) {
                $(this).closest('div').next('.error').css('visibility','visible');
            } else {
                $(this).closest('div').next('.error').css('visibility','hidden');
            }
        });

        //Efecto formulario de crear cuenta
        $('#formulario-registrar > div > input[required]').blur(function(){
            if ($(this).val().trim().length === 0) {
                $(this).closest('div').next('.error').css('visibility','visible');
            } else {
                $(this).closest('div').next('.error').css('visibility','hidden');
            }
        });
        $(window).on('scroll',function() {
            if($(this).scrollTop() > 10){ // Si la posición del scroll se mueve
            $('#arriba').fadeIn();
            }else{
            $('#arriba').fadeOut();//Lo quitamos
            }
        });
        /*Para conseguir que al pulsar el botón suba arriba*/
        $('#arriba').on('click', function(){
        
            $('body,html').animate({
                scrollTop:'0px'
            },300);
        })

        $(window).resize(function(){
            $('ul#menu').removeAttr('style');
        })

      });

      $(function(){
        /*Controlar el Slider*/
        $("#slider").lightSlider({
            item:2,
            auto:true,
            loop:true,
            pause:5000,
          }); 
    
        /*Version Escritorio Slider*/
        $("#slider-escritorio").lightSlider({
            item:1,
            auto:true,
            loop:true,
            pause:10000,
          }); 
         
    });
        
    $(function(){
        /*JAVA PARA EL VIDEO*/
            const video = document.getElementById('video');
            const playPauseButton = document.getElementById('play-pause');
            const stopButton = document.getElementById('stop');
            const rewindButton = document.getElementById('rewind');
            const fastForwardButton = document.getElementById('fast-forward');
            const barrita = document.getElementById('barrita');
            const speedUpButton = document.getElementById('speed-up');
            const skipButton = document.getElementById('skip');
            const tiempo = document.getElementById('tiempo');
            const tiempoRestante = document.getElementById('tiempo-restante');
            const replayButton = document.getElementById('replay');
            const volumeButton = document.getElementById('volume');
            const volumeRange = document.getElementById('volumen-rango');
            const fullScreenButton = document.getElementById('full-screen');
    
            playPauseButton.addEventListener('click', togglePlayPause);
            stopButton.addEventListener('click', stopVideo);
            rewindButton.addEventListener('click', rewind);
            fastForwardButton.addEventListener('click', fastForward);
            speedUpButton.addEventListener('click', speedUp);
            skipButton.addEventListener('click', skip);
            replayButton.addEventListener('click', replay);
            volumeButton.addEventListener('click', toggleMute);
            volumeRange.addEventListener('input', setVolume);
            fullScreenButton.addEventListener('click', toggleFullScreen);
            video.addEventListener('timeupdate', updateProgressBar);
    
            //FUNCIONES
            //Si pulsas el video se reproduce
            $(video).on('click', function(){
                video.play();
            })
            //Play / Stop
            function togglePlayPause() {
                
                if (video.paused || video.ended) {
                    video.play();
                    playPauseButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:#ffffff;transform: ;msFilter:;"><path d="M8 7h3v10H8zm5 0h3v10h-3z"></path></svg>';
                    } else {
                    video.pause();
                    playPauseButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:white;transform: ;msFilter:;"><path d="M7 6v12l10-6z"></path></svg>';
                    }
                }
            //Parar
            function stopVideo() {
                    video.pause();
                    video.currentTime = 0;
                    playPauseButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 7h10v10H7z"/></svg>';
                }
            //Atrasar
            function rewind() {
                    video.currentTime -= 10;
                }
            //reducir velocidad
            function fastForward() {
                    video.playbackRate-= 0.5;
                }
            //Aumentar velocidad
            function speedUp() {
                    video.playbackRate += 0.5;
                }
            //Adelantar
            function skip() {
                    video.currentTime += 10;
                }
            //Replay
            function replay() {
                    video.currentTime = 0;
                    video.play();
                    playPauseButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 6v12l10-6z"/></svg>';
                }
            //Mutear
            function toggleMute() {
                    if (video.muted) {
                        video.muted = false;
                        volumeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #ffffff;transform: ;msFilter:;"><path d="M16 21c3.527-1.547 5.999-4.909 5.999-9S19.527 4.547 16 3v2c2.387 1.386 3.999 4.047 3.999 7S18.387 17.614 16 19v2z"></path><path d="M16 7v10c1.225-1.1 2-3.229 2-5s-.775-3.9-2-5zM4 17h2.697L14 21.868V2.132L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2z"></path></svg>';
                    } else {
                        video.muted = true;
                        volumeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #ffffff;transform: ;msFilter:;"><path d="m7.727 6.313-4.02-4.02-1.414 1.414 18 18 1.414-1.414-2.02-2.02A9.578 9.578 0 0 0 21.999 12c0-4.091-2.472-7.453-5.999-9v2c2.387 1.386 3.999 4.047 3.999 7a8.13 8.13 0 0 1-1.671 4.914l-1.286-1.286C17.644 14.536 18 13.19 18 12c0-1.771-.775-3.9-2-5v7.586l-2-2V2.132L7.727 6.313zM4 17h2.697L14 21.868v-3.747L3.102 7.223A1.995 1.995 0 0 0 2 9v6c0 1.103.897 2 2 2z"></path></svg>';
                        }
                }
            //Rango de volumen
            function setVolume() {
                    video.volume = volumeRange.value / 100;
                }
            //Botón para poner pantalla completa
            function toggleFullScreen() {
                    if (!document.fullscreenElement) {
                        video.requestFullscreen();
                    } else {
                        if (document.exitFullscreen) {
                            document.exitFullscreen();
                            }
                        }
                }
            //barra de progreso
            function updateProgressBar() {
                const percent = (video.currentTime / video.duration) * 100;
                barrita.value = percent;
    
                const minutes = Math.floor(video.currentTime / 60);
                const seconds = Math.floor(video.currentTime - minutes * 60);
                const durationMinutes = Math.floor(video.duration / 60);
                const durationSeconds = Math.floor(video.duration - durationMinutes * 60);
    
                tiempo.textContent = `${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`;
                
                // Calcular el tiempo restante
                const remainingTime = video.duration - video.currentTime;
                const remainingMinutes = Math.floor(remainingTime / 60);
                const remainingSeconds = Math.floor(remainingTime - remainingMinutes * 60);
    
                tiempoRestante.textContent = `-${remainingMinutes}:${(remainingSeconds < 10 ? '0' : '')}${remainingSeconds}`;
                }
    });
    


