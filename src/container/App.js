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
        {name: 'Bacon', count: 0},

    ]);
    const [components, setComponents] = useState([
        {name: 'Salad'},
        {name: 'Cheese'},
        {name: 'Meat'},
        {name: 'Bacon'},]);
    const plusComponent = (d)=>{
        let arr =[...components]
        arr.push({name:d});
        setComponents(arr);
    }
    const minusComponent = (d)=>{
        let arr =[...components]
        for (let i = arr.length - 1; i >= 0; --i) {
            if (arr[i].name === d) {
                arr.splice(i,1);
                break;
            }
        }
        setComponents(arr);
        console.log( d)
        console.log(arr.filter(function(el){
            return el.name !== d;
        }))
    }
    // const [salad, setSalad] = useState([]);
    // const [cheese, setCheese] = useState([]);
    // const [meat, setMeat] = useState([]);
    // const [bacon, setBacon] = useState([]);
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

    // const plusComponent = (e) => {
    //     let arr = []
    //     switch (e) {
    //         case 0:
    //             arr = [...salad];
    //             arr.push("Salad")
    //             setSalad(arr);
    //             break;
    //         case 1:
    //             arr = [...cheese];
    //             arr.push("Cheese")
    //             setCheese(arr);
    //             break;
    //         case 2:
    //             arr = [...meat];
    //             arr.push("Meat")
    //             setMeat(arr);
    //             break;
    //         case 3:
    //             arr = [...bacon];
    //             arr.push("Bacon")
    //             setBacon(arr);
    //             break;
    //         default:
    //             console.log("Sorry we don't have this ingredient")
    //     }
    // }
    // const minusComponent = (e) => {
    //     let arr = []
    //     switch (e) {
    //         case 0:
    //             arr = [...salad];
    //             arr.splice(0, 1)
    //             setSalad(arr);
    //             break;
    //         case 1:
    //             arr = [...cheese];
    //             arr.splice(0, 1)
    //             setCheese(arr);
    //             break;
    //         case 2:
    //             arr = [...meat];
    //             arr.splice(0, 1)
    //             setMeat(arr);
    //             break;
    //         case 3 :
    //             arr = [...bacon];
    //             arr.splice(0, 1)
    //             setBacon(arr);
    //             break;
    //         default:
    //             console.log("Sorry we don't have this ingredient")
    //     }
    // }
    return (
        <div className="App">
            <div className={"leftMainDiv"}><p>Ingredients</p>
                <hr/>
                {arr.sort( (a, b)=> {
                    return ('' + a.name).localeCompare(b.name);
                }).map((data, index) => {
                    return (<Ingredients key={index} button={() => {
                        minus(index);
                        // minusComponent(index);
                        minusComponent(data.name,index)
                    }} imgButton={() => {
                        plus(index);
                        // plusComponent(index);
                        plusComponent(data.name,index)
                    }} img={data.image} name={data.name} count={menu[index].count}/>)
                })}
            </div>
            <div className={"rightMainDiv"}><p>Your Burger</p>
                <hr/>
                <div className="Burger">
                    <TopBun Class={"BreadTop"}/>
                    {/*{*/}
                    {/*    salad.map((data, index) => {*/}
                    {/*        return <Ingredient key={index} Class={data}/>*/}
                    {/*    })*/}
                    {/*}*/}
                    {/*{*/}
                    {/*    cheese.map((data, index) => {*/}
                    {/*        return <Ingredient key={index} Class={data}/>*/}
                    {/*    })*/}
                    {/*}*/}
                    {/*{*/}
                    {/*    meat.map((data, index) => {*/}
                    {/*        return <Ingredient key={index} Class={data}/>*/}
                    {/*    })*/}
                    {/*}*/}
                    {/*{*/}
                    {/*    bacon.map((data, index) => {*/}
                    {/*        return <Ingredient key={index} Class={data}/>*/}
                    {/*    })*/}
                    {/*}*/}
                    {
                        components.sort( (a, b)=> {
                            return ('' + a.name).localeCompare(b.name);
                        }).map((data, index) => {
                            return <Ingredient key={index} Class={data.name}/>
                        })
                    }
                    <BottomBun Class={"BreadBottom"}/>
                </div>
                <p>Price: </p>
            </div>
        </div>
    );
}

export default App;
