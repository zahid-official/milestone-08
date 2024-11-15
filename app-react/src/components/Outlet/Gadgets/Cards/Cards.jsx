import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const Cards = () => {
    const {category} = useParams();
    const data = useLoaderData();
    const[gadget, setGadget] = useState([]);
    useEffect(()=>{
        if(category){
            const filtered = [...data].filter(item  => item.category === category);
        setGadget(filtered);
        }
        else{
            setGadget(data.slice(0,9));
        }
        
    },[category, data])


    return (
        <>
            <div className="grid gap-10 xl:grid-cols-3 lg:grid-cols-2">
            {gadget.map(item => <Card key={item.id} product={item}></Card>)}
            </div>
        </>
    );
};

export default Cards;