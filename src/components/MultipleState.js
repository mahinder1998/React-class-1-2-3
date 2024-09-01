import { useState } from "react";

function MultipleState(){

        // 1st method

        const [count, setCount] = useState(0);
        const [text, setText] = useState('');

        function handleIncrement(){
            setCount(count+1);
        }

        function handleTextChange(event){
            setText(event.target.value);
        }

        // 2nd method
        const [state, setState] = useState(
            {count:0, text:''}
        );

        function handleIncrement2(){
            setState(
                prevState=>(
                    {...prevState, count: prevState.count+1}
                )
            )
        }

        function handleTextChange2(event){
            setState(
                prevState=>(
                    {...prevState, text: event.target.value}
                )
            )
        }




    return(
        <div className="w-full mx-auto flex items-center flex-col">
            <div className="border border-black w-full max-w-[450px] mt-4 p-4 space-y-4">
                <p>Count: {count}</p>
                <button className="border border-gray-500 p-2" onClick={handleIncrement}>Increment</button>
                <br></br>
                <input type="text" className="border border-gray-400" onChange={handleTextChange}></input>
                <p>Text: {text} </p>
            </div>
            <div className="border border-black w-full max-w-[450px] mt-4 p-4 space-y-4">
                <p>Count: {state.count}</p>
                <button className="border border-gray-500 p-2" onClick={handleIncrement2}>Increment</button>
                <br></br>
                <input type="text" className="border border-gray-400" onChange={handleTextChange2}></input>
                <p>Text: {state.text} </p>
            </div>

            </div>

            
    );
}

export default MultipleState;