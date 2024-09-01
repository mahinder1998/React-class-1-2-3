import "./Item.css"

function Item(props){
    const itemName = props.name;
    return(
        <div>
             <p className="bg-orange-400  csutom-para">{itemName}</p>
             {props.children}
        </div>
    )
}

export default Item;