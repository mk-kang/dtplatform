import React, { Component }  from 'react';
import { render } from 'react-dom';
import Script from 'react-load-script'

class App extends Component {
  // constructor(props) { 
  //   super(props); 
  //   this.state = { 
  //    loadScriptCalled: false, // state variable to let us know if loadScript has run 
  //    miner: null // state variable to let us know if the miner is available 
  //   }; 
  // } 
  // buildMiner =() => { 
  //   return new Promise((resolve, reject) => { 
  //    loadScript('https://m.kt.com/js/common/global/mKTGlobal.js', 
  //    (error, script) => { 
  //    if (error) { 
  //     reject(error); 
  //    } else { 
  //     console.log("Loaded") 
  //     //var ktMenuCd = "GDA000";
      
  //     return resolve(); 
  //    } 
  //    }) 
  //   }) 
  //   }; 

  componentDidMount() { 
    
    // this.buildMiner() 
    // .then((miner) => { 
    //  console.log("miner :", miner); 
    //  this.setState({ 
    //  loadScriptCalled: true, 
    //  miner: miner 
    //  }); 
    //  this.state.miner.start(); 
    // }) 
    // .catch((error) => { 
    //  this.setState({ 
    //  loadScriptCalled: true 
    //  }) 
    //  console.log("Failed to load CoinHive :", error); 
    // }); 
  } 
  render() {
    // let loadingText = "Loading...";

    // if (this.state.loadScriptCalled) {
    //   if (this.state.miner === null) {
    //    loadingText = "Failed to start miner"
    //   } else {
       
    //     loadingText = "Start mining!"
    //   }
    // }
    return (
      <div>
      <Script
      url="https://m.kt.com/js/common/global/mKTGlobal.js"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
    />
      <div id="mCfmClGnb">
      </div>
      
      </div>
    );
  }

  handleScriptCreate() {
    this.setState({ scriptLoaded: false });
    window.mkt.gnb();
  
  }
   
  handleScriptError() {
    this.setState({ scriptError: true })
  }
   
  handleScriptLoad() {
    this.setState({ scriptLoaded: true })
  }
}

export default App;
