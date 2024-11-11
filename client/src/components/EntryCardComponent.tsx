import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'
import { EntryTitle } from '../api/models/entryTitle'
import { useNavigate } from 'react-router-dom'

interface Props{
    title: EntryTitle
}

export  default function EntryCardComponent({title}:Props) {

    const navigate = useNavigate();

    return (
        <div
         className="border rounded-md py-3 px-10 overflow-auto"
        onClick={() => navigate(`/entries/titles/${title.id}`)}
        >
            <h1 className='font-bold text-xl'>{title.header}</h1>
            <p>{title.entries[0].message}</p>
            <div className="flex justify-between p-2">
                <div>
                    <span className='pr-3'>
                        <FontAwesomeIcon icon={faHeart} />
                        <span>{title.entries[0].likes}</span>
                    </span>
                    <span className='pl-3'>
                        <FontAwesomeIcon icon={faHeartBroken} />
                        <span>{title.entries[0].dislikes}</span>
                    </span>
                </div>
                <span>...</span>
            </div>
        </div>
    );
}
