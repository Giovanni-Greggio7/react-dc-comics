const ListaFumetti = (props) => {

    const { comics } = props

    return (

        <section className="listino">
            <div className="titolo-listino">
                <button>LISTINO FUMETTI</button>
            </div>
            <div className="lista-serie">
                {
                    comics.map((element) => {

                        const { id, thumb, series } = element;

                        return (
                            <div className="fumetto" key={id}>
                                <figure>
                                    <img src={thumb} alt="" />
                                </figure>
                                <p>{series}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default ListaFumetti