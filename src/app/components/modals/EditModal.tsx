import { useState } from "react";
import Input from "@/app/components/forms/Input";
import Button from "@/app/components/forms/Button";
import axios from "axios";

interface Tache {
    id: number;
    name: string;
}

interface EditModalProps {
    lastvalue: string;
    lastId: number;
    denidEtat: (show: boolean) => void;
    newValueModif: (updatedTaches: ({ name: string; id: number; content: string } | Tache)[]) => void;
    tache: Tache[];
}

export default function EditModal({ lastvalue, lastId, denidEtat, newValueModif, tache }: EditModalProps) {
    const [valueModalEdit, setValueModalEdit] = useState<string>(lastvalue);

    const saveModif = () => {
        const updatedTodo = tache.map((item) => {
            if (item.id === lastId) {
                axios.put(`http://127.0.0.1:8000/api/dashboard/${6}/update/`, {content: valueModalEdit}).then(function(response){
                    console.log(response.data);
                })
                return { ...item, content: valueModalEdit };  // Mettre à jour la tâche

            }
            return item;
        });

        newValueModif(updatedTodo);
        denidEtat(false);
    };

    const deniedModif = () => {
        denidEtat(false);
    };

    return (
        <>
            <div className={"w-1/2 h-[200px] border border-black rounded-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"}>
                <h1>
                    Modification :
                </h1>
                <Input value={valueModalEdit} placeholder={".............................."} onChange={setValueModalEdit} />
                <div className={"flex justify-center gap-4"}>
                    <Button value={"Confirmer"} color={"green"} onClick={saveModif} />
                    <Button value={"Annuler"} color={"red"} onClick={deniedModif} />
                </div>
            </div>
        </>
    );
}
