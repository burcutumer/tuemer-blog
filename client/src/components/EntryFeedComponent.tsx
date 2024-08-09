import { EntryTitle } from "../api/models/entryTitle";
import EntryComponent from "./EntryComponent";

function EntryFeedComponent() {
    const entries: EntryTitle[] = [
        {
            id: 1,
            title: "title1",
            entry: {
                id: 1,
                titleId: 1,
                message: "message1",
                likes: 0,
                dislikes: 0,
                date: "12 temmuz 2024",
                author: {
                    id: 22,
                    fullName: "burcu tmer",
                    avatarUrl: "src/assets/avatar.jpeg"
                },
            }
        },

    ];
    return (
        <>
            {entries.map((e) => <EntryComponent key={e.id} entryTitle={e} />)}
        </>
    )
}
export default EntryFeedComponent;
