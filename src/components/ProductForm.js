import { useState } from "react";


function ProductForm(props){

    const [newTitle, setTitle] = useState('');
    const [newDate, setDate] = useState('');

    function titleChangeHandeler(event){
        //console.log(event.target.value)
        setTitle(event.target.value);
    }
    function dateChangeHandeler(event){
        //console.log(event.target.value)
        setDate(event.target.value);
       // console.log(date)
    }

    function submitHandeler(event){
        event.preventDefault();

        const productData = {
            title: newTitle,
            date: newDate 
        }

        //console.log(productData, "productdata");
        props.onSaveProduct(productData);

        setTitle('');
        setDate('');
    }

    return(
        <form 
            onSubmit={submitHandeler}
        className="flex flex-col space-y-4">
            <div>
                <label className="text-white mr-3 mb-2 inline-block">Title</label>
                <input type="text" value={newTitle} className="w-full h-10 outline-none px-3"
                onChange={titleChangeHandeler}
                ></input>
            </div>
            <div>
                <label className="text-white mr-3">Date</label>
                <input type="date" min="2023-01-01" value={newDate} max="2023-12-12" className="w-full h-10 outline-none px-3"
                onChange={dateChangeHandeler}
                ></input>
            </div>
            <div>
                <button type="submit"
                className="bg-slate-300 p-2 rounded-sm text-sm hover:bg-black 
                hover:text-white
                transition-all
                delay-200
                "
                >Add product</button>
            </div>
        </form>
    )
}


export default ProductForm;