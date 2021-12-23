/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import { useState } from 'react';
import "./BrowserPrint-3.0.216.min";
import "./BrowserPrint-Zebra-1.0.216.min";
import './App.css';
import logo from './logo-unilog.png';
import { funcaoJS } from './BrowserPrint-Zebra-1.0.216.min';

function App() {

  const[evSelect,setEvSelect] = useState('');

  const FuncaoImprimir = () => {
    console.log(evSelect);
    // ImprimirText(evSelect);
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
            <select id="selected_device" onchange={""}></select>
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
