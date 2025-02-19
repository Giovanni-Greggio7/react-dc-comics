const Navbar = (props) => {

    const { links } = props

    return (

        links.map((element) => {

            const { id, text, url } = element;

            return (
                <nav>
                    <ul className="breadcrumb">
                        <li key={id}>
                            <a href={url}>{text}</a>
                        </li>
                    </ul>
                </nav>
            )
        })
    )
}   

        

export default Navbar