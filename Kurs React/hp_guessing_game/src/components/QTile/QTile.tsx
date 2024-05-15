import './styles.css'

interface IQTile {
    image: string;
    effect: string;
    ingredients: string;
}

export default function QTile({ image, effect, ingredients }: IQTile){
    return(
        <div className="qtile">
            <div className="image-container">
                <img src={image} alt={'nieznany'} />
            </div>
            <p><strong>Effect:</strong> {effect || "nieznany"}</p>
            <p><strong>Ingredients:</strong> {ingredients || "nieznany"}</p>
        </div>
    );
}