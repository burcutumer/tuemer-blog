import { createContext, PropsWithChildren, useContext, useState } from "react"
import { Author } from "../api/models/author";

interface TheContextValue {
    author: Author | null;
    setAuthor: (author:Author) => void;
    signOut: () => void;
}

export const TheContext = createContext<TheContextValue | undefined>(undefined);

export function useTheContext() {
    const context = useContext(TheContext);
    if (context === undefined) {
        throw Error('Opps-we dont seem to be inside the provider');
    }
    return context;
}

export default function TheContextProvider({ children }: PropsWithChildren<any>){

    const[author, setAuthor] = useState<Author | null>(null);

    const signOut = () => {
        localStorage.removeItem("jwt");
        setAuthor(null);
    }

    return (
        <TheContext.Provider value={{author, setAuthor,signOut}}>
            {children}
        </TheContext.Provider>
    )
}