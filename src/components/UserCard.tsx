interface UserPropsTypes {
    name: string;
    age: string;
    books: string;
    lvl: string;
}

export function UserCard({ name, age, books, lvl }: UserPropsTypes) {
    return (
        <div className={"p-10 border-2 w-1/4 h-fit rounded-xl shadow-xl"}>
            <h1 className={"text-4xl font-bold my-4"}>{name}</h1>
            <div className={"flex flex-col gap-5"}>
            <p className={"text-xl"}>Age : {age}</p>
            <p className={"text-xl"}>My books : {books}</p>
            <p className={"text-xl"}>Level : {lvl}</p>
            </div>
            <div className={"w-full flex justify-end"}>
            <img className={"rounded-full w-24 h-24"} src={"https://i.ibb.co/L0mn9Ky/IMG-4190.gif"}/>
            </div>
        </div>
    );
}