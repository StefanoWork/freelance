"use client";
 
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function Prenotazione() {
    useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({});
		cal("ui", {"theme":"light", "styles":{"branding":{"brandColor":"#4770c9"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])

	return (
    <>
        <Navbar/>
        <Cal 
            calLink="stefano87work/call-discovery"
            style={{width:"100%",height:"100%",overflow:"scroll", marginTop:"120px"}}
            config={{layout: 'month_view'}}
	    />
        <Footer/>
    </>
    )
  };
  