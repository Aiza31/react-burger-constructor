import React, {useState} from 'react';
import './App.css';
import Ingredients from "../components/ingredients/Ingredients";
import MeatIMG from "../imgs/maet.jpeg";
import CheeseIMG from "../imgs/cheese.jpeg";
import SaladIMG from "../imgs/salad.jpg";
import BaconIMG from "../imgs/bacon.png";
import TopBun from "../components/TopBun";
import BottomBun from "../components/BottomBun";
import Ingredient from "../components/Ingredient";


const arr = [
    {name: 'Salad', price: 5, image: SaladIMG},
    {name: 'Cheese', price: 20, image: CheeseIMG},
    {name: 'Meat', price: 50, image: MeatIMG},
    {name: 'Bacon', price: 30, image: BaconIMG}]

function App() {
    const [menu, setMenu] = useState([
        {name: 'Salad', count: 0},
        {name: 'Cheese', count: 0},
        {name: 'Meat', count: 0},
        {name: 'Bacon', count: 0}
    ]);
    const plus = (e) => {
        let arr = [...menu];
        arr[e].count = menu[e].count + 1
        setMenu(arr);
    }
    const minus = (e) => {
        let arr = [...menu];
        arr[e].count = menu[e].count - 1
        setMenu(arr);
    }
    return (
        <div className="App">
            <div className={"leftMainDiv"}><p>Ingredients</p>
                <hr/>
                {arr.map((data, index) => {
                    return (<Ingredients key={index} button={() => {
                        minus(index);
                    }} imgButton={() => {
                        plus(index);
                    }} img={data.image} name={data.name} count={menu[index].count}/>)
                })}
            </div>
            <div className={"rightMainDiv"}><p>Your Burger</p>
                <hr/>
                {/*<Burger topBunClass={"BreadTop"} saladClass={"Salad"} meatClass={"Meat"} baconClass={"Bacon"} bottomBunClass={"BreadBottom"}/>*/}
                <div className="Burger">
                    <TopBun Class={"BreadTop"}/>
                    {menu.map((data,index) => {
                        return (<Ingredient key={index} Class={data.name}/>)
                    })}
                    <BottomBun Class={"BreadBottom"}/>
                </div>
                <p>Price: </p>
            </div>
        </div>
    );
}

export default App;
