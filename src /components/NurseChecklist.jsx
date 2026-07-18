import { useState } from "react";

import {
    ClipboardCheck,
    CheckCircle,
    CircleAlert
} from "lucide-react";


export default function NurseChecklist({

    condition="Bradycardia",

    actions=[

        "Bring Crash Cart",
        "Prepare Atropine",
        "Monitor ECG",
        "Call Doctor"

    ]

}) {


    const [completed,setCompleted] = useState([]);


    function toggleAction(index){

        if(completed.includes(index)){

            setCompleted(

                completed.filter(
                    item=>item!==index
                )

            );

        }

        else{

            setCompleted(
                [
                    ...completed,
                    index
                ]
            );

        }

    }



    return (

        <div className="card">


            <div className="flex items-center gap-3 mb-5">


                <ClipboardCheck
                    size={32}
                    className="text-green-400"
                />


                <div>

                    <h2 className="text-2xl font-bold">

                        Nurse Action Checklist

                    </h2>


                    <p className="text-gray-400">

                        {condition} Protocol

                    </p>


                </div>


            </div>



            <div className="space-y-4">


                {
                    actions.map(
                        (action,index)=>(


                        <button

                            key={index}

                            onClick={()=>
                                toggleAction(index)
                            }

                            className={`
                            w-full
                            flex
                            items-center
                            gap-4
                            p-4
                            rounded-xl
                            text-left
                            transition

                            ${
                                completed.includes(index)

                                ?
                                "bg-green-700"

                                :
                                "bg-[#16243A]"
                            }

                            `}


                        >


                            {
                                completed.includes(index)

                                ?

                                <CheckCircle
                                    size={28}
                                />

                                :

                                <CircleAlert
                                    size={28}
                                    className="text-yellow-400"
                                />

                            }


                            <span className="text-lg">

                                {action}

                            </span>


                        </button>


                    ))
                }


            </div>



            <div className="mt-6">


                <p className="text-gray-400">

                    Completed Actions

                </p>


                <h2 className="text-3xl font-bold">

                    {completed.length}/{actions.length}

                </h2>


            </div>


        </div>

    );

}