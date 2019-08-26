import React from 'react';
// import { Jumbotron, Button } from 'react-bootstrap';
import './index.less';
/* eslint-disable */
const data = [
  {
    "id": "asset:001",
    "model": "LAMBDA 650 UV/Vis Spectrophotometer",
    "brand": "LAMBDA",
    "weight": "76.0 kg",
    "manufactureDate": "2010-05-12"
  },
  {
    "id": "asset:002",
    "model": "JANUS® G3 NGS Express Workstation",
    "brand": "JANUS",
    "weight": "125.8 kg",
    "manufactureDate": "2012-11-10"
  },
  {
    "id": "asset:003",
    "model": "LAMBDA XLS+ with Printer",
    "brand": "LAMBDA",
    "weight": "2.0 kg",
    "manufactureDate": "2008-01-01"
  },
  {
    "id": "asset:004",
    "model": "Wizard 2-Detector Gamma Counter, 550 samples",
    "brand": "Wizard",
    "weight": "55.0 kg",
    "manufactureDate": "2015-03-10"
  },
  {
    "id": "asset:005",
    "model": "Quantum GX2 microCT Imaging System",
    "brand": "Quantum",
    "weight": "50 kg",
    "manufactureDate": "2012-12-12"
  },
  {
    "id": "asset:006",
    "model": "Biodiesel Glycerin Analysis System 230V",
    "brand": "Clarus",
    "weight": "25.8 kg",
    "manufactureDate": "2008-08-28"
  },
  {
    "id": "asset:007",
    "model": "High-throughput, High Content RNAi Screening",
    "brand": "explorer",
    "weight": "35 kg",
    "manufactureDate": "2017-11-02"
  },
  {
    "id": "asset:008",
    "model": "PinAAcle 900F Atomic Absorption Spectrometer",
    "brand": "LAMBDA",
    "weight": "15.5 kg",
    "manufactureDate": "2018-09-15"
  },
];
/* eslint-enable */
function ListPage() {
  return (

    // <Jumbotron>
    <div>

      <h1>Hello, there!</h1>
      <p>
        This is a simple equipment list page.
      </p>
      <p>
        <a href="/equipment/create"><Button variant="primary">Create a</Button></a>
      </p>
    </div>
    // </Jumbotron>
  );
}

export default ListPage;
