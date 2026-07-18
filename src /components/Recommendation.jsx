import {
    Stethoscope,
    Syringe,
    MonitorHeart,
    ShieldAlert,
    CheckCircle
} from "lucide-react";


export default function Recommendation({

    condition="Bradycardia"

}) {


    const protocols = {

        Bradycardia:{

            priority:"HIGH",

            actions:[

                "Administer Atropine 1mg IV",

                "Continuous ECG monitoring",

                "Check electrolyte imbalance",

                "Review beta blocker medication",

                "Prepare temporary pacing if required"

            ]

        },


        Hypoxia:{

            priority:"HIGH",

            actions:[

                "Start oxygen therapy",

                "Check airway",

                "Monitor SpO2 continuously",

                "Prepare ventilator support"

            ]

        },


        CardiacArrest:{

            priority:"CRITICAL",

            actions:[

                "Activate CODE BLUE",

                "Start CPR protocol",

                "Prepare defibrillator",

                "Call ICU emergency team",

                "Follow ACLS guidelines"

            ]

        },


        Hypotension:{

            priority:"HIGH",

            actions:[

                "Start IV fluids",

                "Monitor blood pressure",

                "Assess circulation",

                "Consider vasopressors"

            ]

        }

    };


    const data =
        protocols[condition]
        ||
        protocols.Bradycardia;



    return (

        <div className="card">


            <div className="flex items-center gap-3 mb-6">


                <Stethoscope

                    size={40}

                    className="text-cyan-400"

                />


                <div>


                    <h1 className="text-2xl font-bold">

                        Clinical Recommendation

                    </h1>


                    <p className="text-gray-400">

                        AI Generated Treatment Protocol

                    </p>


                </div>


            </div>



            {/* Priority */}


            <div className="bg-red-700 rounded-xl p-5 mb-5">


                <div className="flex gap-3 items-center">


                    <ShieldAlert/>


                    <div>


                        <p>

                            Emergency Level

                        </p>


                        <h2 className="text-3xl font-bold">

                            {data.priority}

                        </h2>


                    </div>


                </div>


            </div>



            <h2 className="text-xl font-bold mb-4">

                Recommended Actions

            </h2>



            <div className="space-y-4">


                {

                    data.actions.map(

                        (item,index)=>(


                            <div

                            key={index}

                            className="bg-[#16243A] p-4 rounded-xl flex gap-3 items-center"

                            >


                                <CheckCircle

                                className="text-green-400"

                                />


                                <span>

                                    {item}

                                </span>


                            </div>


                        )

                    )

                }


            </div>



            {/* Monitoring */}


            <div className="mt-6 bg-[#16243A] p-5 rounded-xl">


                <div className="flex gap-3">


                    <MonitorHeart

                        className="text-red-400"

                    />


                    <div>


                        <h3 className="font-bold">

                            Continuous Monitoring

                        </h3>


                        <p className="text-gray-400">

                            ECG, SpO₂, Blood Pressure and
                            neurological status should be
                            monitored continuously.

                        </p>


                    </div>


                </div>


            </div>



        </div>

    );

}