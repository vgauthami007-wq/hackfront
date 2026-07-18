import {
    Brain,
    Activity,
    AlertTriangle,
    Sparkles,
    ShieldCheck
} from "lucide-react";


export default function AIAnalysis({

    condition="Severe Bradycardia",

    cause="Possible medication induced heart rate suppression due to Metoprolol",

    confidence=94,

    event="mcp.bradycardia",

    recommendations=[

        "Administer Atropine 1mg",

        "Continuous ECG Monitoring",

        "Review cardiac medication",

        "Prepare temporary pacing"

    ]

}) {


    return (

        <div className="card">


            {/* Header */}

            <div className="flex items-center gap-4 mb-6">


                <Brain

                    size={45}

                    className="text-purple-400"

                />


                <div>


                    <h1 className="text-3xl font-bold">

                        AI Clinical Analysis

                    </h1>


                    <p className="text-gray-400">

                        MCP AI Medical Reasoning Engine

                    </p>


                </div>


            </div>



            {/* Emergency */}

            <div className="bg-red-700 rounded-xl p-5 mb-5">


                <div className="flex items-center gap-3">


                    <AlertTriangle/>

                    <h2 className="text-2xl font-bold">

                        {condition}

                    </h2>


                </div>


            </div>



            {/* Cause */}


            <div className="bg-[#16243A] rounded-xl p-5 mb-5">


                <div className="flex gap-3 items-center mb-3">


                    <Activity
                        className="text-blue-400"
                    />


                    <h2 className="text-xl font-bold">

                        Possible Cause

                    </h2>


                </div>


                <p className="text-gray-300">

                    {cause}

                </p>


            </div>



            {/* Confidence */}


            <div className="bg-[#16243A] rounded-xl p-5 mb-5">


                <div className="flex items-center gap-3">


                    <ShieldCheck

                        className="text-green-400"

                    />


                    <h2 className="text-xl font-bold">

                        AI Confidence

                    </h2>


                </div>


                <div className="mt-4">


                    <div className="w-full bg-gray-700 rounded-full h-4">


                        <div

                            className="bg-green-500 h-4 rounded-full"

                            style={{
                                width:`${confidence}%`
                            }}

                        />

                    </div>


                    <p className="mt-2 text-2xl font-bold">

                        {confidence}%

                    </p>


                </div>


            </div>




            {/* MCP Event */}


            <div className="bg-purple-900 rounded-xl p-5 mb-5">


                <div className="flex gap-3">


                    <Sparkles/>


                    <div>


                        <p className="text-gray-300">

                            MCP Event Triggered

                        </p>


                        <h2 className="font-bold text-xl">

                            {event}

                        </h2>


                    </div>


                </div>


            </div>



            {/* Recommendation */}


            <div>


                <h2 className="text-xl font-bold mb-4">

                    AI Recommendations

                </h2>


                <div className="space-y-3">


                {

                    recommendations.map(

                        (item,index)=>(


                            <div

                            key={index}

                            className="bg-[#16243A] p-4 rounded-xl"

                            >

                                ✅ {item}

                            </div>


                        )

                    )

                }


                </div>


            </div>


        </div>


    );

}