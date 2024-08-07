import React, { useState } from 'react'
import QRCode from 'react-qr-code'

export default function QrCode() {
    const [qrCode, setQrCode] = useState("https://spectrarestaurant.com/menu/");
    const [search,setSearch] = useState('')

    function generateCode()
    {
       setQrCode(search)
       setSearch('')
    }


    return (
    <>
       <div className='absolute top-20 left-[50%] translate-x-[-50%] flex gap-4 items-center '>
       <input type="text" value={search} className='border-2 border-gray-700 ' onChange={(e)=>setSearch(e.target.value)} />
       <button  disabled={(search.trim()=="")?true:false} className='bg-cyan-400' onClick={generateCode}>change qr code</button>
       </div>
        <div style={{ height: "100vh",display:"flex",alignItems:'center', margin: "0 auto", maxWidth: 300, width: "100%" }}>      
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={qrCode}
          viewBox={`0 0 256 256`}
        />
      </div>
    </>
    )
}
