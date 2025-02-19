const Navbar = () => {

    const links = [
        { id: 1, text: 'CHARACTERS', url: '#', current: true },
        { id: 2, text: 'COMICS', url: '#', current: false },
        { id: 3, text: 'MOVIES', url: '#', current: false },
        { id: 4, text: 'TV', url: '#', current: false },
        { id: 5, text: 'GAMES', url: '#', current: false },
        { id: 6, text: 'COLLECTIBLES', url: '#', current: false },
        { id: 7, text: 'VIDEOS', url: '#', current: false },
        { id: 8, text: 'FANS', url: '#', current: false },
        { id: 9, text: 'NEWS', url: '#', current: false },
        { id: 10, text: 'SHOP', url: '#', current: false }
    ];

    return (

        links.map((element) => {

            const { id, text, url } = element;

            return (
                <nav>
                    <ul className="breadcrumb d-flex gap-3">
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