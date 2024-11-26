
const Card = ({ name, image, description }: { name: string, image: string, description: string }) => {
    return (
        <div className="p-2 m-10 bg-white text-black rounded-xl">
            <div className="h-80 bg-green-500">
                <img src={image} alt={"a random image"} className="w-full h-full "></img>
            </div>
            <div className="">
                <h1 className="py-8">{name}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card;