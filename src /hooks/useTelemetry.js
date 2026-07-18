import { useEffect, useState } from "react";


export default function useTelemetry(){


    const [telemetry,setTelemetry] = useState(null);


    const [loading,setLoading] = useState(true);



    useEffect(()=>{


        let interval;



        async function fetchTelemetry(){


            try{


                const response = await fetch(
                    "http://localhost:8000/telemetry"
                );


                const data = await response.json();


                setTelemetry(data);


                setLoading(false);


            }

            catch(error){


                console.error(
                    "Telemetry Error:",
                    error
                );


            }


        }



        // initial load

        fetchTelemetry();



        // update every second

        interval=setInterval(()=>{


            fetchTelemetry();


        },1000);




        return ()=>{


            clearInterval(interval);


        }



    },[]);



    return {

        telemetry,

        loading

    };


}