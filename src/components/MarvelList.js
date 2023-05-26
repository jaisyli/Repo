import { Marvel } from "./Marvel";


export function MarvelList({marvelData}){
    const comic = marvelData.data.results;
    return(
        <main role="main" class="container my-auto">
            <section>
                <h1>Universo Marvel</h1>
                <ul>
                    <li>Nombre: {comic.name.toFixed(0)}</li>
                    <li>Comics:{comic.comics.toFixed(0) }</li>
                    <li>Serie:{comic.serie.toFixed(0)}</li>
                    <li>Historia:{comic.story.toFixed(0)}</li>
                </ul>
                
            </section>
            <seccion>
                {marvelData.data.results.map((marvel)=>{
                    return<Marvel key={marvel.id} marvel={Marvel}/>
                })}
            </seccion>
            
        </main>

    )

}