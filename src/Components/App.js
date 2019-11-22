import React ,{Component, Fragment} from 'react';
import {BrowserRouter,Link,Route, Switch} from 'react-router-dom';
import Writers from './writers';
import Layout from './Layout';
import {NotFound} from './Errors';
import BasicMUI from './Layout/Master/basicMaterialUI';
import MTCountry from './Layout/Master/MaterialTable';
import MTFactory from './Layout/Master/MaterialTableFactory';
import Contamination from './Layout/Report/Chart';
import Chart from './Layout/Report/ContaminationGraph';
import LineChart1 from './Layout/Report/LineChart';
import Home from'./Layout/home';
import RTChart from './Layout/Chart/RTchart';


export default class extends Component{
intervalID;

state = {
  writers:[],
  reportdata:{
    pt3703a : 0,
    pt3703b : 0,
    pt3801 : 0,
    pt3802 : 0,
    pt4706: 0,
    te2601 : 0,
    te4702 : 0,
    te4706b : 0,
    te7120 : 0,
    te8901a : 0,
    tcv8902 : 0,
    pcv9601 : 0,
    lcv9901 : 0
  },
  chartdata:{
    dt:[1,2,3],
    val1:[],
    val2:[],
    val3:[],
    val4:[],
    val5:[],
    val6:[],
    val7:[],
    val8:[],
    val9:[],
    val10:[],
    val11:[],
    val12:[],
    val13:[]
  }
}


async componentDidMount(){
 /* const writers = await(await fetch('http://localhost:3004/writers?_embed=texts')).json()
  this.setState({writers})*/
  this.getData();
  //console.log(test);
}

componentWillUnmount(){
  clearTimeout(this.intervalID)
}

getData = () => {
  fetch('http://desktop-4lumjjg:3000/viewone')
  .then(response => response.json())
  .then(data => {
    const test = data[5];
    //const result = data.filter(data => data)
    this.setState({ reportdata : test });
    const myArray = {
      dt:[],
      val1:[],
      val2:[],
      val3:[],
      val4:[],
      val5:[],
      val6:[],
      val7:[],
      val8:[],
      val9:[],
      val10:[],
      val11:[],
      val12:[],
      val13:[]
    };

    data.map(function(cdata,i){
      myArray.dt.push(cdata.dt);
      myArray.val1.push(cdata.pt3703a);
      myArray.val2.push(cdata.pt3703b);
      myArray.val3.push(cdata.pt3801);
      myArray.val4.push(cdata.pt3802);
      myArray.val5.push(cdata.pt4706);
      myArray.val6.push(cdata.te2601);
      myArray.val7.push(cdata.te4702);
      myArray.val8.push(cdata.te4706b);
      myArray.val9.push(cdata.te7120);
      myArray.val10.push(cdata.te8901a);
      myArray.val11.push(cdata.tcv8902);
      myArray.val12.push(cdata.pcv9601);
      myArray.val13.push(cdata.lcv9901);
    })

    this.setState({ chartdata : myArray});
    // call getData() again in 5 seconds
    this.intervalID = setTimeout(this.getData.bind(this), 10000);
  });         
}



  render(){
    const {reportdata, chartdata} = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Layout>
          <Route exact path="/" render={() => <Home reportdata={reportdata} test1={chartdata}/>}></Route>
          <Route path="/Home/MTCountry" render={() => <MTCountry/>}></Route>
          <Route path="/Home/MTFactory" render={() => <MTFactory/>}></Route>
          <Route path="/Report/Chart" render={() => <Contamination/>}/>
          <Route path="/Report/Chart2" render={() => <Chart/>}/>
          <Route path="/Report/Chart3" render={
            () => <LineChart1
            />}/>
          <Route path = "/Report" render={() => <RTChart></RTChart>}/>
          </Layout>
          <Route render ={() => <NotFound/>}/>
        </Switch>
      </BrowserRouter>         
    );
  }
}

/*          
writers={writers} this is located beside layout

<Route path="/Home/writers" render={
            props => <Writers {...props} writers={writers} ></Writers>}
            ></Route>
                              data={reportdata.datasets[0].data}
                  title={reportdata.datasets[0].label}
                  color={reportdata.datasets[0].Color}
            
            
            */