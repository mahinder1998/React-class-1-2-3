
import ProductForm from "./ProductForm";

function NewProduct(props){
    function saveProduct(product){
        console.log("i am inside new product");
        console.log(product);

        // calling parent function
        props.pranay(product);
    }
    return(
        <div className="new-product
        bg-slate-700
        max-w-[450px]
        w-full
        p-4
        mt-6
        mb-10
        ">
        <ProductForm onSaveProduct = {saveProduct} ></ProductForm>
        </div>
    )
}


export default NewProduct;