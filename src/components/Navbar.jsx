const Navbar = (props) => {

    const { links } = props

    return (

        links.map((element) => {

            const { id, text, url, current } = element;

            return (
                <nav>
                    <ul className="breadcrumb">
                        <li key={id} className={ current ? 'active' : '' }>
                            <a href={url}>{text}</a>
                        </li>
                    </ul>
                </nav>
            )
        })
    )
}   

        

export default Navbar