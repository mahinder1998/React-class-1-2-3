import "./App.css";
import Products from "./components/Products";
import NewProduct from "./components/NewProduct";
import MultipleState from "./components/MultipleState";

import CounterApp from "./components/CounterApp";




function App() {
  // const itemTwoName = "SurrefExcel";

  // const response = [
  //   {
  //     itemName: "Ghadi",
  //     itemDate: "10",
  //     itemMonth: "Jan",
  //     itemYear: "1998"
  //   },
  //   {
  //     itemName: "Ghadi 2",
  //     itemDate: "14",
  //     itemMonth: "Feb",
  //     itemYear: "1888"
  //   },
  //   {
  //     itemName: "Ghadi 3",
  //     itemDate: "22",
  //     itemMonth: "March",
  //     itemYear: "2023"
  //   }
  // ]

  const products = [
    {
      id: 'p1',
      title: "Nirma",
      amount: 100,
      date: new Date(2021, 8, 10),
    },
    {
      id: 'p2',
      title: "Surf Excel",
      amount: 200,
      date: new Date(2021, 2, 2),
    },
    {
      id: 'p3',
      title: "Tide",
      amount: 130,
      date: new Date(2021, 12, 28),
    },
    {
      id: 'p4',
      title: "Arial",
      amount: 330,
      date: new Date(2022, 12, 28),
    }
  ]


  function printProductData(data){
    console.log("I am inside APP.js")
    console.log(data);
  }

  return (
    <div className="wrap flex flex-col items-center w-screen h-screen overflow-x-hidden">
      {/* <Products></Products>
      <Item name="Nirma"></Item>
      <ItemDate day="20" month="June" year="1998"></ItemDate>
      <Item name={itemTwoName}></Item>
      <ItemDate day="30" month="August" year="2002"></ItemDate>
      <Item name="555"></Item>
      <ItemDate day="12" month="Dec" year="1234"></ItemDate>

      <Item name={response[0].itemName}></Item>
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

      <Item name={response[1].itemName}></Item>
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

      <Item name={response[2].itemName}></Item>
      <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>
       
      
      <Item name={response[0].itemName}>
        Hello jee main hoon aapki first item
      </Item>

      <h2 className="bg-green-500 text-white text-center">Hello jee</h2>  */}
      {/* <Card></Card> */}

    <NewProduct pranay = {printProductData} />
      <Products item={products}></Products>
      <MultipleState></MultipleState>
      <CounterApp>  </CounterApp>

    </div>
  );
}

export default App;
