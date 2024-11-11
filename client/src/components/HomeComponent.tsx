import { useEffect, useState } from "react";
import { EntryTitle } from "../api/models/entryTitle";
import EntryCardComponent from "./EntryCardComponent";

 function HomeComponent() {

    const [titles, setTitles] = useState<EntryTitle[] | null>(null);

    useEffect(() => {
        fetch('http://localhost:5028/api/Title')
            .then(response => response.json())
            .then(t => {
                setTitles(t.data);
                console.log(t);
            })
            .catch(e => console.error(e))
    }, [])

    return (
        <>
        {titles?.map(t =>
            <EntryCardComponent key={t.id} title={t} />
        )}
        </>
    )
}
export default HomeComponent;
