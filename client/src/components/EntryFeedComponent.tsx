import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'
import { Entry } from "../api/models/entry";
import { useNavigate, useParams } from "react-router-dom";
import { useTheContext } from "./TheContext";

function EntryFeedComponent() {
    const [entries, setEntries] = useState<Entry[] | null>();
    const [titleHeader, setTitleHeader] = useState();
    const { id } = useParams<{ id: string }>();
    const titleId = id
    const { author } = useTheContext();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5028/api/Entries/titles/${titleId}`)
            .then(response => response.json())
            .then(t => {
                setEntries(t.data);
                if (t.data.length > 0) {
                    setTitleHeader(t.data[0].title.header)
                }
            })
            .catch(e => console.log(e))
    }, [titleId])

    if (entries == null) return <div>Loading...</div>

    return (
        <>
            <div className="flex place-content-between p-5">
                <h1 className="font-bold text-xl">{titleHeader}</h1>
                {
                    author &&
                    <div className="flex justify-end">
                        <button onClick={() => navigate(`/entries/title/${titleId}`)}
                            className='bg-sky-600 text-white w-24 rounded-md'
                            aria-label="Create a new entry for this title"
                            title="Create a new entry">
                            + New Entry
                        </button>
                    </div>
                }
            </div>
            <div>


                {entries.map((e) => (
                    <div key={e.id} >
                        <div className="border rounded-md p-3 overflow-auto">
                            <p>{e.message}</p>
                            <div className="flex justify-between p-2">
                                <div>
                                    <span className='pr-3'>
                                        <FontAwesomeIcon icon={faHeart} />
                                        <span>{e.likes}</span>
                                    </span>
                                    <span className='pl-3'>
                                        <FontAwesomeIcon icon={faHeartBroken} />
                                        <span>{e.dislikes}</span>
                                    </span>
                                </div>
                                <div>
                                    <span>...</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-end">
                                <div className="flex">
                                    <div className="flex flex-col mr-4 text-right">
                                        <span className="text-sm">
                                            {e.author.fullName}
                                        </span>
                                        <span className="text-xs">{e.date.split('T')[0].replace('-', '.').replace('-', '.')}</span>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <img className="h-9 w-9 object-cover rounded-full" src={"src/assets/avatar.jpeg"}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                )}
            </div>
        </>
    )
}
export default EntryFeedComponent;
