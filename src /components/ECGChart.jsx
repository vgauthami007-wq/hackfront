import {
    LineChart,
    Line,
    ResponsiveContainer,
    XAxis,
    YAxis,
    CartesianGrid
} from "recharts";

const data = [];

for (let i = 0; i < 250; i++) {

    let y = 0;

    const x = i % 50;

    // P Wave
    if (x === 10)
        y = 0.5;

    // Q
    if (x === 18)
        y = -1;

    // R Peak
    if (x === 20)
        y = 8;

    // S
    if (x === 22)
        y = -2;

    // T Wave
    if (x === 34)
        y = 2;

    data.push({

        time: i,

        ecg: y

    });

}

export default function ECGChart() {

    return (

        <div className="h-[320px] w-full">

            <ResponsiveContainer>

                <LineChart data={data}>

                    <CartesianGrid
                        stroke="#1B324A"
                        strokeDasharray="3 3"
                    />

                    <XAxis
                        dataKey="time"
                        hide
                    />

                    <YAxis
                        hide
                        domain={[-3, 10]}
                    />

                    <Line

                        type="monotone"

                        dataKey="ecg"

                        stroke="#00FF88"

                        strokeWidth={3}

                        dot={false}

                        isAnimationActive={true}

                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    );

}