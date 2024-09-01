const ProductDate =(props)=>{
   const month = props.date.toLocaleString('en-us', {month: 'long'});
   const day = props.date.toLocaleString('en-us', {day: '2-digit'});
   const year = props.date.getFullYear();
   return(
      <div className="product- bg-gray-800 w-20 text-white text-center rounded-md">
         <div className="product-date__month text-sm">{month}</div>
         <div className="product-date__year text-sm">{year}</div>
         <div className="product-date__day text-lg font-bold">{day}</div>
      </div> 
   )
}


export default ProductDate;