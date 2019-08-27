const delay = require('mocker-api/utils/delay');

// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';

const proxy = {
  // Priority processing.
  _proxy: {
    proxy: {
      '/repos/(.*)': 'https://localhost/',
    },
    changeHost: true,
  },
  'POST /repos/equipments': (req, res) => {
    return res.json({
      code: 200,
      msg: 'sucssses'
    });
  },
  'GET /repos/equipments/:id': (req, res) => {
    return res.json({
      code: 200,
      msg: 'sucssses',
      data: {
        "id": "asset:001",
        "model": "LAMBDA 650 UV/Vis Spectrophotometer",
        "brand": "LAMBDA",
        "weight": "76.0 kg",
        "manufactureDate": "2010-05-12"
      },
    });
  },
  'GET /repos/equipments': (req, res) => {
    return res.json({
      code: 200,
      msg: 'sucssses',
      data: [
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
        {
          "id": "asset:009",
          "model": "TGA 4000 System, 100-240V/50-60Hz",
          "brand": "Thermal",
          "weight": "14 kg",
          "manufactureDate": "2011-10-22"
        },
        {
          "id": "asset:010",
          "model": "Operetta CLS High-Content Analysis System",
          "brand": "Operetta CLS",
          "weight": "3 kg",
          "manufactureDate": "2014-04-11"
        },
        {
          "id": "asset:011",
          "model": "AutoDELFIA® Instrument",
          "brand": "AutoDELFIA",
          "weight": "2 kg",
          "manufactureDate": "2014-04-11"
        }
      ],
    });
  },





















  'GET /api/:owner/:repo/raw/:ref/(.*)': (req, res) => {
    const { owner, repo, ref } = req.params;
    // http://localhost:8081/api/admin/webpack-mock-api/raw/master/add/ddd.md
    // owner => admin
    // repo => webpack-mock-api
    // ref => master
    // req.params[0] => add/ddd.md
    return res.json({
      id: 1,
      owner, repo, ref,
      path: req.params[0]
    });
  },
  'GET /api/user/list/:id/:type': (req, res) => {
    const { type } = req.params;
    if (type === 'webpack') {
      return res.status(403).json({
        status: 'error',
        code: 403
      });
    }
    return res.json([
      {
        id: 1,
        username: 'kenny',
        sex: 6
      }, {
        id: 2,
        username: 'kenny',
        sex: 6
      }
    ]);
  },
  'GET /repos/hello': (req, res) => {
    console.log('/repos/hello:=>>>', req.params)
    return res.json({
      text: 'this is from mock server'
    });
  },

  'GET /api/jobs/:id': (req, res) => {
    return res.json({
      text: 'url: /api/jobs/:id'
    });
  },

  'GET /api/jobs': (req, res) => {
    return res.json({
      text: 'url: /api/jobs'
    });
  },
  // 'POST /api/login/account': (req, res) => {
  //   const { password, username } = req.body;
  //   if (password === '888888' && username === 'admin') {
  //     return res.json({
  //       status: 'ok',
  //       code: 0,
  //       token: "sdfsdfsdfdsf",
  //       data: {
  //         id: 1,
  //         username: 'kenny',
  //         sex: 6
  //       }
  //     });
  //   } else {
  //     return res.json({
  //       status: 'error',
  //       code: 403
  //     });
  //   }
  // },
  'DELETE /api/user/:id': (req, res) => {
    console.log('--2-->', req.body)
    console.log('--3-->', req.params.id)
    res.send({ status: 'ok', message: '删除成功！' });
  }
}
module.exports = (noProxy ? {} : delay(proxy, 1000));
// module.exports = proxy;