
export default function Movie({title, name, img, rating}: { title: string, name: string, img: string, rating: string }) {
    return (
        <div className={"flex flex-row justify-between gap-28 w-1/2 align-middle items-center border-2 border-purple-300 rounded-2xl px-10 py-5 m-auto my-10"}>
            <div className={"flex flex-row items-center"}>
            <img className={"w-24 rounded items-center"} src={img}/>
                <div>
                    <h1 className={"text-4xl p-4"}>{title}</h1>
                    <p className={"text-purple-500 p-4"}>{name}</p>
                </div>
            </div>
            <p className={"text-purple-500 text-4xl"}>{rating}%</p>
        </div>
    )
}