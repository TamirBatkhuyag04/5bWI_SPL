
const Card = ({ name, image, description }: { name: string, image: string, description: string }) => {
    return (
        <div className="m-10">
            <div className="h-80 p-20">
                <img src={image} alt={"a random image"} className="w-full h-full "></img>
            </div>
            <div className="">
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card;