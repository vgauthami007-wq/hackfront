import Header from "../components/Header";
import PatientCard from "../components/PatientCard";
import ECGChart from "../components/ECGChart";
import VitalCard from "../components/VitalCard";
import Timeline from "../components/Timeline";
import VitalTrend from "../components/VitalTrend";
import {
  Heart,
  Droplets,
  Thermometer,
  Activity,
  Stethoscope,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#08111F] text-white">

      <Header />

      <div className="grid grid-cols-12 gap-5 p-5">

        {/* LEFT COLUMN */}

        <div className="col-span-3 space-y-5">

          <PatientCard />

          <div className="card">

            <h2 className="text-xl font-bold mb-4">
              STATUS
            </h2>

            <div className="bg-green-600 rounded-lg p-4 text-center">

              <h1 className="text-3xl font-bold">

                NORMAL

              </h1>

              <p className="mt-2">

                All vitals stable

              </p>

            </div>

          </div>

          <Timeline />

        </div>

        {/* RIGHT COLUMN */}

        <div className="col-span-9 space-y-5">

          {/* ECG */}

          <div className="card">

            <div className="flex justify-between">

              <h2 className="text-xl font-bold">

                ELECTROCARDIOGRAPH (ECG)

              </h2>

              <span className="text-green-400 font-bold">

                HR : 76 BPM

              </span>

            </div>

            <ECGChart />

          </div>

          {/* VITALS */}

          <div className="grid grid-cols-5 gap-4">

            <VitalCard
              icon={<Heart size={32} />}
              title="Heart Rate"
              value="76"
              unit="BPM"
              color="text-red-500"
            />

            <VitalCard
              icon={<Droplets size={32} />}
              title="SpO₂"
              value="98"
              unit="%"
              color="text-blue-400"
            />

            <VitalCard
              icon={<Activity size={32} />}
              title="Blood Pressure"
              value="120/80"
              unit="mmHg"
              color="text-yellow-400"
            />

            <VitalCard
              icon={<Thermometer size={32} />}
              title="Temperature"
              value="36.8"
              unit="°C"
              color="text-pink-400"
            />

            <VitalCard
              icon={<Stethoscope size={32} />}
              title="Respiration"
              value="16"
              unit="rpm"
              color="text-cyan-400"
            />

          </div>

          {/* QUICK ACTIONS */}

          <div className="grid grid-cols-2 gap-5">

            <div className="card">

              <h2 className="font-bold mb-4">

                QUICK ACTIONS

              </h2>

              <div className="grid grid-cols-2 gap-3">

                <button className="bg-blue-700 rounded p-3 hover:bg-blue-600">

                  Trigger Bradycardia

                </button>

                <button className="bg-orange-600 rounded p-3 hover:bg-orange-500">

                  Trigger Tachycardia

                </button>

                <button className="bg-purple-700 rounded p-3 hover:bg-purple-600">

                  Trigger Hypoxia

                </button>

                <button className="bg-yellow-600 rounded p-3 hover:bg-yellow-500">

                  Trigger Fever

                </button>

                <button className="bg-amber-900 rounded p-3 hover:bg-amber-700">

                  Trigger Hypotension

                </button>

                <button className="bg-red-700 rounded p-3 hover:bg-red-600">

                  CODE BLUE

                </button>

              </div>

            </div>

            <div className="card">

              <h2 className="font-bold mb-4">

                VITAL TREND (Last 5 min)

              </h2>

              <VitalTrend />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}