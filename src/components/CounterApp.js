import { useState } from "react";

function CounterApp(){

    const [currentValue, UpdateValue] = useState(0);


    function DecrementHandeler(){
        UpdateValue(currentValue - 1);
    }

    function IncrementHandeler(){
        UpdateValue(currentValue + 1);
    }

    function ResetHandeler(){
        UpdateValue(0);
    }


    return(
        <div className="border border-black p-3 mt-4 max-w-[450px] mx-auto w-full">
            <h2 className="text-center mb-4">Counter App</h2>
            <div className="flex justify-center">
                <button type="button" className="bg-black text-white text-xl w-10 h-10 inline-block "
                    onClick={DecrementHandeler}
                > - </button>
                <div className="w-[100px] border border-black text-center flex items-center justify-center">{currentValue}</div>
                <button  type="button" className="bg-black text-white text-xl w-10 h-10 inline-block "
                    onClick={IncrementHandeler}
                > + </button>
            </div>
            <div className="text-center">
            <button  type="button" className="bg-black text-white text-xl w-max h-10 inline-block px-4 mt-4 mb-4 "
                onClick={ResetHandeler}
            > Reset </button>
            </div>
        </div>
    )
}

export default CounterApp;