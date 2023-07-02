import { useState, useEffect } from "react";
import "./p_style.css"

export const Peliculas = ()=>{
    
    //FLECHAS DE NAVEGACIÓN
    const Left_arrow = ()=>{
        return <div className="left_arrow" onClick={()=>{
            slider_position<0?setSlider_position(slider_position+slider_move)
            :setSlider_position(1-((slider_move * cantidad_peliculas) - Math.floor(document.getElementById("slider").offsetWidth, slider_move)))
        }}></div>
    }
    const Right_arrow = ()=>{
        return <div className="right_arrow" onClick={()=>{
            slider_position<=0
            ?slider_position>1-((slider_move * cantidad_peliculas) - Math.floor(document.getElementById("slider").offsetWidth, slider_move))?setSlider_position(slider_position-slider_move):setSlider_position(0)
            :setSlider_position(slider_position)
        }}></div>
    }

    //VENTANA DE INFORMACIÓN DETALLADA
    
    const Details_window = ({details_data})=>{
        return <div className="details_window" id="details_window">
            <div className="details_window_left">
                <div className="details_window_poster" style={{backgroundImage: "url('" + details_data.poster_path + "')"}}></div>
            </div>
            <div className="details_window_right">
                
                <h2>{details_data.title}</h2>
                <h3>Título original: {details_data.original_title}</h3>
                <p>{details_data.overview}</p>

                <div className="details_window_more_info">
                    <h4>Más información:</h4>
                    <p>Fecha de lanzamiento: {details_data.release_date}</p>
                    <p>Puntuación: {details_data.vote_average} | Votos: {details_data.vote_count}</p>
                    <p>Solo para adultos: {details_data.adult==true?"Sí":"No"}</p>
                </div>

                <button onClick={()=>{
                    close_details_window()
                }}><img src="img/arrow_left.svg"/>Volver</button>
            </div>
        </div>
    }

    const [details_data, setDetails_data] = useState({
        title : "",
        original_title : "",
        overview : "",
        adult : "",
        vote_average : "",
        vote_count : "",
        poster_path : "",
        release_date : ""
    })

    useEffect(()=>{
        const details_window = document.getElementById("details_window");
        details_window.style.display = "flex";
        setTimeout(()=>{
            details_window.style.opacity = 1;
        }, 1)
    }, [details_data])
    
    function close_details_window(){
        const details_window = document.getElementById("details_window");
        details_window.style.opacity = 0;
        setTimeout(()=>{
            details_window.style.display = "none";
        }, 300)
    }

    function open_details_window(id){
        
        datos.map((pelicula)=>{
            if(pelicula.id == id){
                setDetails_data({
                    title : pelicula.title,
                    original_title : pelicula.original_title,
                    overview : pelicula.overview,
                    adult : pelicula.adult,
                    vote_average : pelicula.vote_average,
                    vote_count : pelicula.vote_count,
                    poster_path : "https://image.tmdb.org/t/p/w500" + pelicula.poster_path,
                    release_date : pelicula.release_date,
                })
            }
        })
    }

    //PETICIÓN A LA API Y ASIGNACIÓN DE "DATOS"

    const [datos, setDatos] = useState("Empty");

    const url = "https://api.themoviedb.org/3/movie/popular?api_key=76ad7c398d5d7aaab99e27d0826cea94&language=es-MX&page=1"
    const url2 = "https://api.themoviedb.org/3/movie/popular?api_key=76ad7c398d5d7aaab99e27d0826cea94&language=es-MX&page=2"

    useEffect(()=>{
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setDatos(data.results)
                console.log(data)
            })
            .catch(error => console.log(error));
    }, [])

    //AÑADIR OTRA PÁGINA DE PELICULAS
    
    var data2_added = false
    useEffect(()=>{
        if(datos != "Empty" && datos.length == 20){
            fetch(url2)
                .then(response => response.json())
                .then(data => {
                    data2_added = true;
                    setDatos(datos.concat(data.results))

                    console.log(datos)
                })
                .catch(error => console.log(error));
            }
    }, [datos])

    var slider_charged = false;

    //ESTABLECER LA POSICIÓN DEL SLIDER CUANDO SE CAMBIA LA VARIABLE "SLIDER_POSITION"

    const[slider_position, setSlider_position] = useState(null);
    
    useEffect(()=>{
        if(slider_charged == true){
            document.getElementById("slider_content").style.transform = "translate(" + slider_position +"px, 0)";
        }
        
    }, [slider_position])

    const slider_move = 300;
    const cantidad_peliculas = 40 + 1;

    //COMPONENTE JSX

    return <>
        <h1>Peliculas más populares del momento</h1>
        
        <div className="container">       
            <Details_window details_data={details_data}/>
            <Left_arrow/>
            
            <div className="slider" id="slider">
                <div className="slider_content" id="slider_content">

                <div className="film_container_presentation"
                    onClick={()=>{
                        setSlider_position(slider_position - slider_move)
                    }}
                ><div className="film_container_presentation_aligner">
                    <h2>Descubre las peliculas más populares del momento</h2>
                    <img src="img/arrow_right.svg"></img>
                </div></div>

                {/*CARGA DE LOS DATOS CUANDO "DATOS" YA NO ESTÁ VACÍO*/}

                {datos!=="Empty"
                    ?datos.map((pelicula)=>{
                        return<>
                            <div key={pelicula.id} className="film_container" id={"pelicula_" + pelicula.id} onClick={()=>{
                                open_details_window(pelicula.id);
                            }}>

                                <div className="poster" style={{backgroundImage : "url('https://image.tmdb.org/t/p/w500" + pelicula.poster_path + "')"}}></div>

                                <h2>{pelicula.title}</h2>

                                <div className="rate_container">
                                    <h3>Puntuación: {pelicula.vote_average}</h3>
                                    <img src="img/star.png"></img>
                                </div>

                            </div>

                            {/* ASIGNACIÓN DE LA VARIABLE "SLIDER_CHARGED" PARA EJECUTAR EL MOVIMIENTO DEL SLIDER */
                            slider_charged = true}
                        </>
                    })

            :<h1>Cargando</h1>}
                
                </div>
            </div>
                
            
            <Right_arrow/>
            
        </div>
        
        <footer>Designed and developed by Marthy B.</footer>

    </> 
}