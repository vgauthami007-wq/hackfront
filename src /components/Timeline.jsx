import {
    Clock3,
    Activity,
    Bell,
    ShieldAlert,
    Brain,
    HeartPulse
} from "lucide-react";

const events = [

    {
        time: "14:01:12",
        icon: <Activity className="text-green-400"/>,
        title: "Monitoring Started",
        color: "border-green-500"
    },

    {
        time: "14:02:45",
        icon: <HeartPulse className="text-green-400"/>,
        title: "Patient Stable",
        color: "border-green-500"
    },

    {
        time: "14:03:08",
        icon: <ShieldAlert className="text-blue-400"/>,
        title: "Bradycardia Detected",
        color: "border-blue-500"
    },

    {
        time: "14:03:09",
        icon: <Bell className="text-red-500"/>,
        title: "Nurse Alert Sent",
        color: "border-red-500"
    },

    {
        time: "14:03:10",
        icon: <Bell className="text-red-500"/>,
        title: "Doctor Alert Sent",
        color: "border-red-500"
    },

    {
        time: "14:03:11",
        icon: <Brain className="text-purple-400"/>,
        title: "MCP AI Analysis Completed",
        color: "border-purple-500"
    }

];

export default function Timeline() {

    return (

        <div className="bg-[#101A2D] rounded-2xl border border-[#22324A] p-5">

            <h2 className="text-xl font-bold mb-5">

                Timeline

            </h2>

            <div className="space-y-4">

                {events.map((event,index)=>(

                    <div

                        key={index}

                        className={`border-l-4 ${event.color} pl-4 py-2`}

                    >

                        <div className="flex items-center gap-3">

                            {event.icon}

                            <div>

                                <h3 className="font-semibold">

                                    {event.title}

                                </h3>

                                <div className="flex items-center gap-2 text-gray-400 text-sm">

                                    <Clock3 size={14}/>

                                    {event.time}

                                </div>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}