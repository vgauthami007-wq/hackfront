import {
  Hospital,
  Bell,
  Clock,
  Wifi,
  ShieldCheck
} from "lucide-react";

export default function Header() {

    const now = new Date().toLocaleTimeString();

    return (

        <header className="bg-[#101A2D] border-b border-[#22324A] h-20 px-8 flex items-center justify-between">

            {/* Left */}

            <div className="flex items-center gap-4">

                <Hospital size={36} className="text-cyan-400"/>

                <div>

                    <h1 className="text-2xl font-bold">

                        ICU PATIENT GUARDIAN

                    </h1>

                    <p className="text-gray-400">

                        AI Powered Smart ICU Monitoring System

                    </p>

                </div>

            </div>

            {/* Center */}

            <div className="flex gap-6">

                <div className="bg-[#16243A] px-5 py-3 rounded-xl flex items-center gap-3">

                    <ShieldCheck className="text-green-400"/>

                    <div>

                        <p className="text-sm text-gray-400">

                            MCP Status

                        </p>

                        <p className="text-green-400 font-bold">

                            Connected

                        </p>

                    </div>

                </div>

                <div className="bg-[#16243A] px-5 py-3 rounded-xl flex items-center gap-3">

                    <Wifi className="text-blue-400"/>

                    <div>

                        <p className="text-sm text-gray-400">

                            Telemetry

                        </p>

                        <p className="text-blue-400 font-bold">

                            LIVE

                        </p>

                    </div>

                </div>

            </div>

            {/* Right */}

            <div className="flex items-center gap-5">

                <div className="flex items-center gap-2">

                    <Clock className="text-yellow-400"/>

                    <span>

                        {now}

                    </span>

                </div>

                <Bell className="text-red-500"/>

            </div>

        </header>

    );

}