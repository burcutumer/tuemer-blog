import { Author } from "./author";
import { EntryTitle } from "./entryTitle";

export interface Entry {
    id: number;
    title: EntryTitle;
    message: string;
    likes: number;
    dislikes: number;
    date: string;
    author: Author;
}