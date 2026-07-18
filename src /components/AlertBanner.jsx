import { motion } from "framer-motion";
import {
    AlertTriangle,
    BellRing,
    ShieldAlert
} from "lucide-react";


export default function AlertBanner({

    condition = "Bradycardia",

    priority = "HIGH",

    message = "Heart rate dropped below safe threshold",

    color = "red"

}) {


    const colors = {

        red:"bg-red-700 border-red-400",

        orange:"bg-orange-600 border-orange-300",

        blue:"bg-blue-700 border-blue-300",

        purple:"bg-purple-700 border-purple-300",

    };


    return (

        <motion.div

            animate={{
                scale:[1,1.02,1]
            }}

            transition={{
                repeat:Infinity,
                duration:1.5
            }}

            className={`
                ${colors[color]}
                border-2
                rounded-2xl
                p-6
                shadow-xl
            `}

        >

            <div className="flex items-center gap-5">


                <div>

                    <ShieldAlert 
                        size={55}
                        className="text-white"
                    />

                </div>


                <div className="flex-1">


                    <div className="flex justify-between">


                        <h1 className="text-3xl font-bold">

                            🚨 EMERGENCY ALERT

                        </h1>


                        <BellRing
                            size={35}
                        />


                    </div>


                    <h2 className="text-2xl mt-2">

                        {condition}

                    </h2>


                    <p className="mt-2">

                        {message}

                    </p>


                    <div className="mt-4 flex gap-4">


                        <span className="bg-black/30 px-4 py-2 rounded-lg">

                            Priority : {priority}

                        </span>


                        <span className="bg-black/30 px-4 py-2 rounded-lg">

                            MCP Triggered

                        </span>


                    </div>


                </div>


            </div>


        </motion.div>

    )

}