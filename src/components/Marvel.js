import "./Styles.css"

export function Marvel({ marvel }) {
    return (
        <section>
            <div className="card" style="width: 18rem;" >


                <img src="../img/spider-man.jpg" alt="heroe" className="card-img-top" />
                <div className="card-body" >
                    <h5 className="card-title">{marvel.title}</h5>
                    <ul className="list-group">
                        <li className="list-group-item list-group-item-action">Eventos:{marvel.readyInName} nombre</li>
                        <li className="list-group-item list-group-item-action">Historias:{marvel.history}</li>

                    </ul>
                    <a href={marvel.sourseUrl} className="btn btn-primary">Ir a personaje</a>
                </div>
            </div>
        </section>

    )
}