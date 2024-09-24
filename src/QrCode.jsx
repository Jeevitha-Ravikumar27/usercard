import { useState } from "react";

export const QrCode = () => {
  const [img, setImg]=  useState("");
  const [loading, setLoading] =useState(false);
  const [qrdata, setQrdata] = useState("https://youtube.com/");
  const [qrsize, setQrsize] = useState("150");

   async function generateQR() {
    setLoading(true);
    try{
        
        
        
        const url=`https://api.qrserver.com/v1/create-qr-code/?size=150×50&data=${encodeURIComponent(qrdata)}`;
        setImg(url);

    } catch(error) {
        console.log("Error Generating QR code ",error);

    }

        finally {
            setLoading(false);
        }
        
       
   }
  function downloadQR() {
    fetch(img).then((response)=>response.blob()).then((blob)=>{
        const link= document.createElement("a");
        link.href =URL.createObjectURL(blob);
        link.download="QRcode.png";
        document.body.appendChild(link);
        link.click();
        document.removeChild(link);   
 });
  }
  return (
    

    <div className="app-container">
        <h1>QR CODE GENERATOR</h1>
       {loading && <p>Please wait.....</p>} 
        {img && <img src={img} className="imgu"/>}
      <div>
          <label htmlFor="dataInput" className="input-label">
            Data For QR code:
        </label>
        <input type="text"  value={qrdata}  id ="dataInput" placeholder="Enter Data For QR code :"  onChange={(e)=>setQrdata(e.target.value)}/>
        <label htmlFor="sizeInput" className="input-label">
            Image-size (eg : 150 ):
        </label>
        <input type="text"  value={qrsize} id ="sizeInput"  placeholder="Enter Image size :"  onChange={(e)=>setQrsize(e.target.value)}/>
        <button className="genbtn"  disabled ={loading} onClick={generateQR} >Generate QR Code
        </button>
        <button className="dowbtn" onClick={downloadQR} >Download QR Code</button>
      </div>
      <p className="footer">Designed by <a href="#">Jeevitha Ravikumar</a></p>
    </div>
  );
};
