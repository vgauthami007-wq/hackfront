import { motion } from "framer-motion";

export default function VitalCard({

    icon,
    title,
    value,
    unit,
    color = "text-cyan-400"

}) {

    return (

        <motion.div

            whileHover={{ scale: 1.03 }}

            animate={{ opacity: [0.8,1,0.8] }}

            transition={{ repeat: Infinity, duration: 2 }}

            className="bg-[#101A2D] border border-[#22324A] rounded-2xl p-5 shadow-xl"

        >

            <div className="flex items-center justify-between">

                <div>

                    <p className="text-gray-400 text-sm">

                        {title}

                    </p>

                    <h2 className={`text-4xl font-bold mt-3 ${color}`}>

                        {value}

                    </h2>

                    <p className="text-gray-500">

                        {unit}

                    </p>

                </div>

                <div className={`${color}`}>

                    {icon}

                </div>

            </div>

        </motion.div>

    );

}