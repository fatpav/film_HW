const Film = ({title, children}) => {
    return (
        <li>
            <p>{title}</p>
            <p>{children}</p>
        </li>
    )
}

export default Film;