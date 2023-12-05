import {BookCard} from "@/components/BookCard";

export function Card() {
    return (
        <div className={"flex flex-col gap-5"}>
            <BookCard title={"My book 1"} emoji={"📕"}/>
            <BookCard title={"My book 2"} emoji={"📗"}/>
            <BookCard title={"My book 3"} emoji={"📘"}/>
        </div>
    );
}