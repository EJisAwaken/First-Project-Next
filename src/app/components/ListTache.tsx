import { useState } from "react";
import Button from "@/app/components/forms/Button";
import EditModal from "@/app/components/modals/EditModal";
import axios from "axios";

interface Tache {
    id: number;
    name: string;
}

interface ListTacheProps {
    taches: Tache[];
    newTache: (taches: Tache[]) => void;
}

export default function ListTache({ taches, newTache }: ListTacheProps) {
    const [showModalEdit, setShowModalEdit] = useState<boolean>(false);
    const [lastValue, setLastValue] = useState<string>("");
    const [lastId, setLastId] = useState<number>(0);

    const handleDelete = (id: number) => {
        const newTab = taches.filter(t => t.id !== id);
        axios.delete(`http://127.0.0.1:8000/api/dashboard/${id}/delete/`).then(function(response){
            console.log(response.data);
        })
        newTache(newTab);
    };

    const handleEdit = (newValueModif: Tache[]) => {
        newTache(newValueModif);
    };

    const denied = (denieded: boolean) => {
        setShowModalEdit(denieded);
    };

    return (
        <>
            {showModalEdit ?
                <div className={""}>
                    <EditModal lastvalue={lastValue} denidEtat={denied} lastId={lastId} tache={taches} newValueModif={handleEdit} />
                </div> : undefined
            }

            <div className={"w-10/12 h-80 text-center text-2xl m-auto"}>
                <table className={"w-full"}>
                    <thead>
                    <tr>
                        <th className={"border-b-2 border-black"}>Tâche</th>
                        <th className={"border-b-2 border-black"}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {taches.map((tache) => (
                        <tr key={tache.id}>
                            <td>{tache.content}</td>
                            <td className={"grid-cols-2"}>
                                <Button value={"Supprimer"} color={"red"} onClick={() => handleDelete(tache.id)} />
                                <Button value={"Modifier"} color={"green"} onClick={() => {
                                    setShowModalEdit(true);
                                    setLastValue(tache.content);
                                    setLastId(tache.id);
                                }} />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
