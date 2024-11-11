import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

function CreateEntryComponent() {
    const { id } = useParams<{ id: string }>();
    const idTitle = id
    const [entryMessage, setEntryMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [tags, setTags] = useState<string[]>([]);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const jwt = localStorage.getItem("jwt");
            const response = await fetch(`http://localhost:5028/api/Entries/title/${idTitle}`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${jwt}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    titleId: idTitle,
                    message: entryMessage,
                    tags: tags.map(tag => ({header: tag}))
                })
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        } catch (error) {
            setErrorMessage("Creating Entry failed.");
            console.log(errorMessage);
        }
    }

     // Update the tags based on the current message
     const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const message = e.target.value;
        setEntryMessage(message);

        // Extract hashtags from the message
        const extractedTags = message.match(/#[^\s#]+/g) || [];
        setTags(extractedTags);
    };
    //id yi paramsdan alalım nav ile titlelistten buraya gonderilecegiz, entryFeedde new entry yeri olusturalım
    return (
        <div className="flex flex-col place-items-center mt-8 ">
            <form onSubmit={handleSubmit} className="w-3/4">
                <div className="flex place-items-center">
                    <label>New Entry:</label>
                    <textarea
                        value={entryMessage}
                        onChange={handleInputChange}
                        required
                        className="border rounded-md m-3 w-5/6 h-28 bg-slate-200"
                        style={{overflow:'auto'}}
                    />
                </div>
                {tags.length > 0 && (
                    <div className="flex flex-wrap m-3">
                        <label>Detected Tags:</label>
                        {tags.map((tag, index) => (
                            <span key={index} className="bg-gray-200 rounded-full px-2 py-1 mx-1 my-1 text-sm">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
                <div className="flex justify-end mr-10">
                    <button type="submit" className="border rounded-md mr-4 px-2 bg-blue-500  text-white">
                        <FontAwesomeIcon icon={faCheck} className="mr-2" size="lg" color="white"/>
                        Ok
                    </button>
                    <button
                    type="button"
                    className="border rounded-md px-2  bg-red-500 text-white"
                    onClick={() => navigate('/')}>
                        <FontAwesomeIcon icon={faXmark} className="mr-2" size="lg" color="white"/>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}
export default CreateEntryComponent;