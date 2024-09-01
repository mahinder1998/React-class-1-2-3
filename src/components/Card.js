import "./Card.css"


function Card(props){
    return(
            <div className="max-w-[450px] w-full mx-auto  bg-yellow-500 py-2 px-2"> 
                {props.children}
            </div>
    )
}

export default Card;