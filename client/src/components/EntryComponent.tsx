import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'
import { Entry } from '../api/models/entry';

interface Props {
    entry: Entry,
}

function EntryComponent({entry}: Props) {

    return (
        <>
            <div className="border rounded-md p-3 overflow-auto">
                <h1 className="mb-3">entry title header</h1>
                <p>{entry.message}</p>
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
                                {entry.author.id}
                            </span>
                            <span className="text-xs">{entry.date.split('T')[0].replace('-','.').replace('-','.')}</span>
                        </div>
                        <div className="flex flex-col items-end">
                            <img className="h-9 w-9 object-cover rounded-full" src={"src/assets/avatar.jpeg"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EntryComponent;
