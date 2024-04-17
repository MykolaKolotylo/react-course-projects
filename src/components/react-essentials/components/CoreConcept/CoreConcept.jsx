export default function CoreConcept({src, title, text}) {
    return (
        <li>
            <img src={src} alt={title}/>
            <h3>{title}</h3>
            <p>{text}</p>
        </li>
    );
}
