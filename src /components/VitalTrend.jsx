import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid
} from "recharts";

const data = [
    { time: "0", hr: 76, spo2: 98 },
    { time: "1", hr: 75, spo2: 98 },
    { time: "2", hr: 74, spo2: 97 },
    { time: "3", hr: 72, spo2: 96 },
    { time: "4", hr: 70, spo2: 95 },
    { time: "5", hr: 68, spo2: 94 },
    { time: "6", hr: 66, spo2: 93 },
    { time: "7", hr: 64, spo2: 92 },
    { time: "8", hr: 62, spo2: 91 },
    { time: "9", hr: 60, spo2: 90 },
    { time: "10", hr: 58, spo2: 89 },
    { time: "11", hr: 56, spo2: 88 },
    { time: "12", hr: 54, spo2: 87 },
    { time: "13", hr: 52, spo2: 86 },
    { time: "14", hr: 50, spo2: 86 },
    { time: "15", hr: 48, spo2: 86 }
];

export default function VitalTrend() {

    return (

        <div className="h-[260px] w-full">

            <ResponsiveContainer width="100%" height="100%">

                <LineChart data={data}>

                    <CartesianGrid
                        stroke="#22324A"
                        strokeDasharray="3 3"
                    />

                    <XAxis
                        dataKey="time"
                        stroke="#ffffff"
                    />

                    <YAxis
                        stroke="#ffffff"
                    />

                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="hr"
                        stroke="#E53935"
                        strokeWidth={3}
                        dot={false}
                    />

                    <Line
                        type="monotone"
                        dataKey="spo2"
                        stroke="#3498DB"
                        strokeWidth={3}
                        dot={false}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    );

}