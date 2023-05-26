import { useState} from "react"
import { MarvelList } from "./MarvelList";
import "./Styles.css"


export const Home = () => { //Privado

    const [char, setChar] = useState(100);
    const [marvelData, setMarvelData] = useState(null);
    const uri = process.env.REACT_APP_URL;
    const k = process.env.REACT_APP_KEY;
    const h = process.env.REACT_APP_HASH;

    function getMarvel() {

        fetch(`${uri}&apikey=${k}&hash=${h}`)
        .then((response)=> response.json())
        .then((data) => {
            setMarvelData(data);
            console.log(data);
                  
            })
            .catch(() => {
                console.log("error")
            })
 }
    function handleChange(e){
        setChar(e.target.value);

    }

    return (
        <div>
            <section>
            <h1 className="mb-3">BIENVENIDO A LA PAGINA PRINCIPAL</h1>
            <input type='text'
            className="mb-3"
                   placeholder='personaje'
                   onChange={handleChange}/>
            <button type="submit"
                class="btn btn-primary mb-2"
                onClick={getMarvel}>
                Mostrar</button>
            </section>

            {marvelData && <MarvelList marveldata={marvelData}/>} 

        </div>
    )
}

