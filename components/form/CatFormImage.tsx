const CatFormImage = ({ imageUrl }: { imageUrl: string }) => {
    return (
        <div>
            <img
                alt="Cat of the Week"
                className="mx-auto rounded-lg shadow-lg"
                height={400}
                src={imageUrl}
                style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                }}
                width={600}
            />
        </div>
    )
}

export default CatFormImage
