import React, {useState} from "react";
import Card from "./Card";
import ProductDate from "./ProductDate";

function ProductItem(props){
    //let title = props.title;
    const [title, setTitle] = useState(props.title);

    function clickHandle(){
        // title = "popcorn"
        setTitle("popcorn")
        console.log("Button Clicked");
    }
    return(
        <Card className="product-item">
            <div className="bg-sky-400 flex items-center justify-between px-4 py-2">
                <ProductDate date={props.date}></ProductDate>
                <div className="product-item__description">
                    <h2 className="text-xl font-bold">{title}</h2>
                </div>
                <button className="bg-white rounded-md px-2 py-1 text-sm"
                    onClick={clickHandle}
                >Add to cart</button>
            </div>
        </Card>
    )
}

export default ProductItem;