/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import { useEffect, useState } from 'react';
import './App.css';
import logo from './logo-unilog.png';
import ZebraBrowserPrintWrapper from 'zebra-browser-print-wrapper';

function App() {

  const [ evSelect,setEvSelect ] = useState('');
  const [ impressoraDefault,setImpressoraDefault ] = useState(null)

  // Create a new instance of the object
  const browserPrint =  new ZebraBrowserPrintWrapper();

  useEffect(async()=>{
    const defaultPrinter =  await browserPrint.getDefaultPrinter();
    setImpressoraDefault(defaultPrinter)
    console.log('=>>',impressoraDefault)
  },[])


  const FuncaoImprimir = async () => {
    try{
      // console.log(evSelect);
      const defaultPrinter =  await browserPrint.getDefaultPrinter();
      // Set the printer
      browserPrint.setPrinter(defaultPrinter);

      // Check printer status
      const printerStatus = await browserPrint.checkPrinterStatus();

      // Check if the printer is ready
      if(printerStatus.isReadyToPrint) {

          // ZPL script to print a simple barcode          
          browserPrint.print(evSelect.trim());

      } else {
        console.log("Error/s", printerStatus.errors);
      }
    }
    catch(error) {
      throw new Error(error);
    }

  }

  return (
    <div className="App">
      <header className="ZPL - Unilog">
        <div id="conteiner">
          <div id="id_imgLogo">
            <img
              src={logo}
              style={{ width: "60%", marginTop: "30px", marginLeft: "30%" }}
            />
          </div>

          <div
            id="id_textArea"
            className="md-form amber-textarea active-amber-textarea"
          >
            Escolha sua impressora Zebra{" "}
            <select id="selected_device" value={impressoraDefault} onchange={""}></select>
            <i className="fas fa-pencil-alt prefix"></i>
            <textarea
              id="campo"
              className="md-textarea form-control"
              autoFocus
              onInput={(ev) => setEvSelect(ev.target.value)}
              value={evSelect}
              style={{ width: "45vw", height: "20vh" }}
            ></textarea>
            <div style={{ display: "flex" }}>
              <label style={{ marginLeft: "180px" }}>
                Escreva na caixa para Imprimir
              </label>
              <div style={{ marginLeft: "-180px" }}>
                <button
                  id="id_button"
                  onClick={() => {
                    FuncaoImprimir();
                  }}
                  style={{
                    marginTop: "50px",
                    right: "150px",
                    width: "150px",
                    height: "50px",
                  }}
                >
                  Imprimir
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
          
    </div>
  );
}

export default App;
