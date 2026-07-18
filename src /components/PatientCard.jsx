import {
    User,
    Bed,
    Calendar,
    HeartPulse,
    Pill,
    ShieldAlert,
    Activity
} from "lucide-react";

export default function PatientCard() {

    return (

        <div className="card">

            {/* Header */}

            <div className="flex items-center gap-4">

                <div className="w-20 h-20 rounded-full bg-cyan-500 flex items-center justify-center">

                    <User size={42}/>

                </div>

                <div>

                    <h2 className="text-2xl font-bold">

                        John Doe

                    </h2>

                    <p className="text-gray-400">

                        ICU-101

                    </p>

                </div>

            </div>

            <hr className="my-5 border-[#22324A]" />

            {/* Patient Details */}

            <div className="space-y-4">

                <div className="flex justify-between">

                    <span className="text-gray-400">

                        Age

                    </span>

                    <span>

                        62 Years

                    </span>

                </div>

                <div className="flex justify-between">

                    <span className="text-gray-400">

                        Gender

                    </span>

                    <span>

                        Male

                    </span>

                </div>

                <div className="flex justify-between">

                    <span className="text-gray-400">

                        Blood Group

                    </span>

                    <span>

                        O+

                    </span>

                </div>

                <div className="flex justify-between">

                    <span className="text-gray-400">

                        Bed

                    </span>

                    <span>

                        ICU Bed 4

                    </span>

                </div>

                <div className="flex justify-between">

                    <span className="text-gray-400">

                        Admission

                    </span>

                    <span>

                        13 Jun 2025

                    </span>

                </div>

            </div>

            <hr className="my-5 border-[#22324A]" />

            {/* Status */}

            <div className="bg-green-600 rounded-xl p-4">

                <div className="flex items-center gap-3">

                    <Activity />

                    <div>

                        <p className="text-sm">

                            Patient Status

                        </p>

                        <h3 className="text-xl font-bold">

                            NORMAL

                        </h3>

                    </div>

                </div>

            </div>

            <hr className="my-5 border-[#22324A]" />

            {/* Medical History */}

            <div>

                <h3 className="font-bold flex items-center gap-2 mb-3">

                    <HeartPulse size={20}/>

                    Medical History

                </h3>

                <ul className="space-y-2 text-gray-300">

                    <li>• Hypertension</li>

                    <li>• Type 2 Diabetes</li>

                    <li>• Coronary Artery Disease</li>

                </ul>

            </div>

            <hr className="my-5 border-[#22324A]" />

            {/* Medication */}

            <div>

                <h3 className="font-bold flex items-center gap-2 mb-3">

                    <Pill size={20}/>

                    Current Medication

                </h3>

                <ul className="space-y-2 text-gray-300">

                    <li>• Metoprolol</li>

                    <li>• Aspirin</li>

                    <li>• Insulin</li>

                </ul>

            </div>

            <hr className="my-5 border-[#22324A]" />

            {/* Allergy */}

            <div>

                <h3 className="font-bold flex items-center gap-2 mb-3">

                    <ShieldAlert size={20}/>

                    Allergies

                </h3>

                <div className="bg-red-700 rounded-lg p-3">

                    Penicillin

                </div>

            </div>

        </div>

    );

}