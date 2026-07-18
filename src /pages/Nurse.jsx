import Header from "../components/Header";
import ECGChart from "../components/ECGChart";
import PatientCard from "../components/PatientCard";

import {
    Bell,
    Heart,
    Droplets,
    Thermometer,
    Activity,
    ClipboardCheck,
    PhoneCall,
    Siren
} from "lucide-react";

export default function Nurse() {

    return (

        <div className="min-h-screen bg-[#08111F] text-white">

            <Header/>

            <div className="grid grid-cols-12 gap-5 p-5">

                {/* LEFT */}

                <div className="col-span-3">

                    <PatientCard/>

                </div>

                {/* RIGHT */}

                <div className="col-span-9 space-y-5">

                    {/* ALERT */}

                    <div className="bg-red-700 rounded-xl p-6 animate-pulse">

                        <div className="flex items-center gap-4">

                            <Bell size={45}/>

                            <div>

                                <h1 className="text-3xl font-bold">

                                    🚨 HIGH PRIORITY ALERT

                                </h1>

                                <p>

                                    Severe Bradycardia Detected

                                </p>

                            </div>

                        </div>

                    </div>

                    {/* ECG */}

                    <div className="card">

                        <h2 className="text-2xl font-bold mb-4">

                            Live ECG

                        </h2>

                        <ECGChart/>

                    </div>

                    {/* VITALS */}

                    <div className="grid grid-cols-5 gap-4">

                        <div className="card text-center">

                            <Heart className="mx-auto text-red-500"/>

                            <h2 className="text-4xl font-bold mt-3">

                                42

                            </h2>

                            <p>BPM</p>

                        </div>

                        <div className="card text-center">

                            <Droplets className="mx-auto text-blue-400"/>

                            <h2 className="text-4xl font-bold mt-3">

                                86

                            </h2>

                            <p>%</p>

                        </div>

                        <div className="card text-center">

                            <Thermometer className="mx-auto text-orange-400"/>

                            <h2 className="text-4xl font-bold mt-3">

                                37.5

                            </h2>

                            <p>°C</p>

                        </div>

                        <div className="card text-center">

                            <Activity className="mx-auto text-yellow-400"/>

                            <h2 className="text-4xl font-bold mt-3">

                                82/55

                            </h2>

                            <p>mmHg</p>

                        </div>

                        <div className="card text-center">

                            <Siren className="mx-auto text-red-500"/>

                            <h2 className="text-4xl font-bold mt-3">

                                CRITICAL

                            </h2>

                            <p>Status</p>

                        </div>

                    </div>

                    {/* CHECKLIST */}

                    <div className="grid grid-cols-2 gap-5">

                        <div className="card">

                            <h2 className="text-2xl font-bold mb-5 flex items-center gap-2">

                                <ClipboardCheck/>

                                Immediate Nurse Checklist

                            </h2>

                            <ul className="space-y-4 text-lg">

                                <li>✅ Bring Crash Cart</li>

                                <li>✅ Prepare Atropine 1mg</li>

                                <li>✅ Monitor ECG Continuously</li>

                                <li>✅ Administer Oxygen</li>

                                <li>✅ Inform ICU Doctor</li>

                                <li>✅ Prepare Defibrillator</li>

                            </ul>

                        </div>

                        {/* RIGHT PANEL */}

                        <div className="card">

                            <h2 className="text-2xl font-bold mb-4">

                                Emergency Information

                            </h2>

                            <div className="space-y-5">

                                <div>

                                    <p className="text-gray-400">

                                        Emergency Level

                                    </p>

                                    <h1 className="text-red-500 text-4xl font-bold">

                                        CRITICAL

                                    </h1>

                                </div>

                                <div>

                                    <p className="text-gray-400">

                                        Time Since Alert

                                    </p>

                                    <h2 className="text-3xl">

                                        00:00:14

                                    </h2>

                                </div>

                                <div>

                                    <p className="text-gray-400">

                                        Doctor Status

                                    </p>

                                    <h2 className="text-green-400 text-2xl">

                                        ✔ Doctor Notified

                                    </h2>

                                </div>

                                <button className="w-full bg-red-600 rounded-xl p-4 hover:bg-red-500">

                                    <PhoneCall className="inline mr-3"/>

                                    CALL ICU TEAM

                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}