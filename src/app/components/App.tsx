"use client"

import {useEffect, useState} from "react";
import Input from "@/app/components/forms/Input";
import Button from "@/app/components/forms/Button";
import ListTache from "@/app/components/ListTache";
import axios from "axios";

interface Tache {
    id: number;
    name: string;
}


export default function App() {
    const [tache, setTache] = useState<string>("");
    const [ListeT, setListT] = useState<Tache[]>([]); // Définir le type ici

    const tab = {content: tache}

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/dashboard").then(function(response){
            console.log(response.data);
            setListT(response.data);
        })
    },[tache])

    const addTache = () => {
        setListT([...ListeT, { id: ListeT.length + 1, name: tache }]);

        setTache("");
    };

    const deleteTache = (value: Tache[]) => {
        setListT(value);
    };

    return (
        <>
            <div className={"text-center my-4 text-4xl"}>
                <h1 className={"ubuntu-bold"}>LISTES DES TACHES</h1>
                <div className={"ubuntu-light my-5"}>
                    <Input value={tache} onChange={setTache} placeholder={"Ecris quelques choses ...."} />
                </div>
                <div>
                    <Button value={"Ajouter"} onClick={addTache} color={"blue"} />
                </div>
                <div>
                    <ListTache taches={ListeT} newTache={deleteTache} />
                </div>
            </div>
        </>
    );
}
