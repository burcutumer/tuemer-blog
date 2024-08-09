import { EntryListItem } from "../api/models/entryListItem";

function EntryListComponent() {
    const entryListItems: EntryListItem[] = [
        {
            id: 1,
            titleId: 1,
            title: "title list 1",
            entryCount: 15
        },
        {
            id: 2,
            titleId: 1,
            title: "title list 2",
            entryCount: 15
        },
        {
            id: 4,
            titleId: 1,
            title: "title list 4",
            entryCount: 15
        },
        {
            id: 5,
            titleId: 1,
            title: "title list 5",
            entryCount: 15
        },
        {
            id: 7,
            titleId: 1,
            title: "title list 7",
            entryCount: 15
        },
    ]

    return (
        <div className="w-[100%] bg-slate-500 border border-red-500 overflow-auto">
            <div className="text-xl text-gray-400 pb-4 px-5">
                <h2>gundem</h2>
            </div>
            <div className="flex flex-col px-5 pb-4">
                {entryListItems.map((e, index) =>
                    <div key={index} className="flex justify-between">
                        <div>{e.title}</div>
                        <div>{e.entryCount}</div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default EntryListComponent;
