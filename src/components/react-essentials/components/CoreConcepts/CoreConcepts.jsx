import { CORE_CONCEPTS } from '../utils/core-concepts-data';
import CoreConcept from "../CoreConcept/CoreConcept";

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {CORE_CONCEPTS.map((el, id) => {
                    return <CoreConcept key={id} src={el.image} title={el.title} text={el.description} />
                })}
            </ul>
        </section>
    );
}
