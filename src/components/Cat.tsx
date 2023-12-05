"use client"
export const Cat = () => {
    return <div className="w-1/4 text-left border-2 border-gray-300 rounded p-4 m-4">
        <img className="rounded" src={"https://previews.123rf.com/images/digifuture/digifuture1503/digifuture150300017/37341513-hand-petting-a-cat-16-9-aspect-ratio.jpg"} alt={"meow meow nigga"}/>
        <h1 className="text-2xl py-4"> This is an header</h1>
        <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur delectus dolores illo ipsum
            perspiciatis quisquam quo quos repellat reprehenderit!</p>
        <button className="bg-black w-full py-3 text-white rounded" onClick={() => alert("Jses negr")}>Button</button>
    </div>
}