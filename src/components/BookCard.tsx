interface UserPropsTypes {
    title: string;
    emoji: string;
}

export function BookCard({ title, emoji}: UserPropsTypes) {
    return (
        <div className={"py-8 px-12 border-2 m-auto rounded-xl shadow-xl flex flex-row items-center gap-28"}>
            <p className={"text-4xl font-bold my-4"}>{title}</p>
            <p className={"text-4xl"}>{emoji}</p>
        </div>
    );
}