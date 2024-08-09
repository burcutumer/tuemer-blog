import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'
import { EntryTitle } from '../api/models/entryTitle';


interface Props {
    entryTitle: EntryTitle
}

function EntryComponent({ entryTitle }: Props) {
    return (
        <>
            <div className="border rounded-md p-3 overflow-auto">
                <h1 className="mb-3">{entryTitle.title}</h1>
                <p>{entryTitle.entry.message}</p>
                <div className="flex justify-between p-2">
                    <div>
                        <span className='pr-3'>
                            <FontAwesomeIcon icon={faHeart} />
                        </span>
                        <span className='pl-3'>
                            <FontAwesomeIcon icon={faHeartBroken} />
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
                                {entryTitle.entry.author.fullName}
                            </span>
                            <span className="text-xs">{entryTitle.entry.date}</span>
                        </div>
                        <div className="flex flex-col items-end">
                            <img className="h-9 w-9 object-cover rounded-full" src={entryTitle.entry.author.avatarUrl} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EntryComponent;
