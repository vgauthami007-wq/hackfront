import Header from "../components/Header";
import PatientCard from "../components/PatientCard";
import ECGChart from "../components/ECGChart";
import VitalTrend from "../components/VitalTrend";

import {
    Brain,
    ClipboardList,
    Pill,
    AlertTriangle,
    FileText,
    Download
} from "lucide-react";

export default function Doctor() {

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

                    {/* AI SUMMARY */}

                    <div className="bg-purple-700 rounded-xl p-6">

                        <div className="flex items-center gap-4">

                            <Brain size={42}/>

                            <div>

                                <h1 className="text-3xl font-bold">

                                    AI Clinical Summary

                                </h1>

                                <p>

                                    Generated using MCP AI Agent

                                </p>

                            </div>

                        </div>

                        <p className="mt-5 leading-8 text-lg">

                            The patient has developed severe bradycardia
                            with progressive hypotension and hypoxia.
                            Based on previous history of Coronary Artery
                            Disease and current Metoprolol medication,
                            drug-induced bradycardia is highly suspected.

                            Immediate intervention is recommended.
                        </p>

                    </div>

                    {/* ECG */}

                    <div className="card">

                        <h2 className="text-2xl font-bold mb-4">

                            ECG Analysis

                        </h2>

                        <ECGChart/>

                    </div>

                    {/* TREND */}

                    <div className="card">

                        <h2 className="text-2xl font-bold mb-4">

                            Vital Trends

                        </h2>

                        <VitalTrend/>

                    </div>

                    {/* PANELS */}

                    <div className="grid grid-cols-3 gap-5">

                        {/* Diagnosis */}

                        <div className="card">

                            <h2 className="font-bold text-xl mb-4 flex gap-2">

                                <ClipboardList/>

                                Diagnosis

                            </h2>

                            <ul className="space-y-3">

                                <li>• Bradycardia</li>

                                <li>• Hypoxia</li>

                                <li>• Hypotension</li>

                                <li>• Possible Drug Reaction</li>

                            </ul>

                        </div>

                        {/* Medication */}

                        <div className="card">

                            <h2 className="font-bold text-xl mb-4 flex gap-2">

                                <Pill/>

                                Recommended Treatment

                            </h2>

                            <ul className="space-y-3">

                                <li>✓ Atropine 1mg IV</li>

                                <li>✓ Oxygen Therapy</li>

                                <li>✓ Continuous ECG</li>

                                <li>✓ Prepare Temporary Pacing</li>

                            </ul>

                        </div>

                        {/* Risk */}

                        <div className="card">

                            <h2 className="font-bold text-xl mb-4 flex gap-2">

                                <AlertTriangle/>

                                Risk Assessment

                            </h2>

                            <h1 className="text-red-500 text-5xl font-bold">

                                96%

                            </h1>

                            <p className="mt-3">

                                Probability of Clinical Deterioration

                            </p>

                        </div>

                    </div>

                    {/* REPORT */}

                    <div className="card">

                        <div className="flex justify-between items-center">

                            <div>

                                <h2 className="text-2xl font-bold">

                                    Clinical Report

                                </h2>

                                <p className="text-gray-400">

                                    Auto-generated by MCP AI

                                </p>

                            </div>

                            <button className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-500">

                                <Download className="inline mr-2"/>

                                Export Report

                            </button>

                        </div>

                        <div className="mt-6 bg-[#16243A] rounded-xl p-5">

                            <FileText className="mb-3"/>

                            Patient experienced severe bradycardia
                            progressing to hypotension and hypoxia.

                            AI recommends immediate intervention,
                            oxygen support,
                            atropine administration,
                            cardiology consultation
                            and continuous ICU monitoring.

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}