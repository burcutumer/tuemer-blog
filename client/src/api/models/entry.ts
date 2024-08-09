import { Author } from "./author";

export interface Entry {
    id: number;
    titleId: number;
    message: string;
    likes: number;
    dislikes: number;
    date: string;
    author: Author;
}