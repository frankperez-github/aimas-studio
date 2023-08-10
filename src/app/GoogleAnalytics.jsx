'use client'
import Script from "next/script"
export default function GoogleAnalytics({GA_Tracking_ID})
{
    return(
        <>
            <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_Tracking_ID}`}></Script>
            <Script>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', "${GA_Tracking_ID}");
                
                `}
            </Script>
        </>
    )
}