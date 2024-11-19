import { useEffect, useState } from "react";
import { EntryTitle } from "../api/models/entryTitle";
import { useNavigate } from "react-router-dom";

function EntryListComponent() {

    const [titles, setTitles] = useState<EntryTitle[] | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/api/Title')
            .then(response => response.json())
            .then(t => {
                setTitles(t.data);
                console.log(titles);
            })
            .catch(e => console.error(e))
    }, [])

    if (titles == null) return <div>Loading...</div>

    return (
        <div className="w-[100%] overflow-auto">
            <div className="text-xl text-gray-400 pb-4 px-5">
                <h2>gundem</h2>
            </div>
            <div className="flex flex-col px-5 pb-4">
                {titles.map(t =>
                    <div key={t.id} onClick={() => navigate(`/entries/titles/${t.id}`)} className="flex justify-between cursor-pointer">
                        <div>{t.header}</div>
                        <div>{t.entries.length}</div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default EntryListComponent;
