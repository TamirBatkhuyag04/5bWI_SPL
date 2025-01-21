
const Card = ({ name, image, description }: { name: string, image: string, description: string }) => {
    return (
        <div className="p-6 bg-white text-black rounded-xl text-4xl">
            <div className="h-80 bg-green-500">
                <img src={image} alt={"a random image"} className="w-full h-full"></img>
            </div>
            <div className="">
                <h1>{name}</h1>
                <h1>{description}</h1>
            </div>
        </div>
    )
}

export default Card;