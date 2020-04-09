import React, { Component } from 'react';
import axios from 'axios';
import './coronavirus.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {}
    }
  }
  componentDidMount() {
    axios.get('https://corona-bd.herokuapp.com/district')
      .then(response => {
        //console.log(response.data.data);
        this.setState({ data: response.data.data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  countByCity(key) {
    if (!key) return -1;
    const city = this.state.data[key];
    if (!city) return -1;

    return city.count;
  }
  countTotal() {
    let total = 0;
    const myList = this.state.data;

    Object.keys(myList).forEach(function (key, index) {

      total = total + myList[key].count;
      console.log("Count ", total)

    });
    return total;
  }


  render() {




    return (
      <div>
        <div className="coronavirus">
          <div className="backgroundcomponent">
            <div className="backgroundcolor" />
          </div>
          <div className="footercomponent">
            <div className="contactcomponent">
              <div className="contactnumber">
                <div className="x88019443332228801937000011880193711001188019277117848801927711785">
                  <span className="x88019443332228801937000011880193711001188019277117848801927711785-0" />
                  <span className="x88019443332228801937000011880193711001188019277117848801927711785-0">+8801944333222<br />+8801937000011<br />+8801937110011<br />+8801927711784<br />+8801927711785</span></div>
                <div className="x88014011845518801401184554880140118455588014011845568801401184559">
                  <span className="x88014011845518801401184554880140118455588014011845568801401184559-0" />
                  <span className="x88014011845518801401184554880140118455588014011845568801401184559-0">+8801401184551<br />+8801401184554<br />+8801401184555<br />+8801401184556<br />+8801401184559</span></div>
                <div className="x88015500649018801550064902880155006490388015500649048801550064905">
                  <span className="x88015500649018801550064902880155006490388015500649048801550064905-0" />
                  <span className="x88015500649018801550064902880155006490388015500649048801550064905-0">+8801550064901<br />+8801550064902<br />+8801550064903<br />+8801550064904<br />+8801550064905</span></div>
              </div>
              <div className="contact">Contact</div>
            </div>
            <div className="linkcomponent">
              <div className="linkwho">
                <div className="worldHealthOrganization">World Health Organization</div>
                <div className="whologo" />
              </div>
              <div className="linkiedcr">
                <div className="iedcrlogo" />
                <div className="iedcr">IEDCR</div>
              </div>
              <div className="links">Links</div>
            </div>
            <svg preserveAspectRatio="none" viewBox="0 -0.5 768 1" className="divider">
              <path d="M 0 0 L 768 0" />
            </svg>
          </div>
          <div className="symptomspreventioncomponent">
            <div className="symptomscomponent">
              <div className="coughcomponent">
                <div className="coughicon" />
                <div className="cough">COUGH</div>
              </div>
              <div className="fevercomponent">
                <div className="fevericon" />
                <div className="fever">FEVER</div>
              </div>
              <div className="shortbreathcomponent">
                <div className="shortOfBreath">SHORT OF BREATH</div>
                <div className="shortbreathicon" />
              </div>
              <div className="symptoms">SYMPTOMS</div>
            </div>
            <div className="preventioncomponent">
              <div className="washhandcomponent">
                <div className="washhandicon" />
                <div className="frequentlywashYourHands">FREQUENTLY<br />WASH YOUR HANDS</div>
              </div>
              <div className="avoidtouchingfacecomponent">
                <div className="avoidtouchingfaceicon" />
                <div className="avoidTouchingFace">AVOID <br />TOUCHING FACE</div>
              </div>
              <div className="wearmaskcomponent">
                <div className="wearmaskicon" />
                <div className="wearMask">WEAR MASK</div>
              </div>
              <div className="prevention">PREVENTION</div>
            </div>
          </div>
          <div className="patientinformationcomponent">
            <div className="dhakapatientcomponent">
              <div className="glowrect09406bf5" />
              <svg preserveAspectRatio="none" viewBox="65.58599853515625 70.87100219726562 187.490966796875 220.88833618164062" className="dhakarect"><path d="M 237.3269958496094 303.0093688964844 L 159.197998046875 303.0093688964844 L 81.33599853515625 303.0093688964844 C 73.052001953125 303.0093688964844 66.33599853515625 298.5814819335938 66.33599853515625 293.1198120117188 L 66.33599853515625 93.51055145263672 C 66.33599853515625 88.04888153076172 73.052001953125 83.62100219726563 81.33599853515625 83.62100219726563 L 237.3269958496094 83.62100219726563 C 245.6109924316406 83.62100219726563 252.3269958496094 88.04888153076172 252.3269958496094 93.51055145263672 L 252.3269958496094 293.1198120117188 C 252.3269958496094 298.5814819335938 245.6109924316406 303.0093688964844 237.3269958496094 303.0093688964844 Z" /></svg>
              <div className="dhakanumber">{this.countByCity('Dhaka (District)')}</div>
              <div className="identifiedPatientsIndhaka">
                <span className="identifiedPatientsIndhaka-0">Identified Patients in<br /></span>
                <span className="identifiedPatientsIndhaka-23">(District) Dhaka</span></div>
              <div className="stayHome">Stay Home</div>
              <div className="circulardee5c9b5" />
            </div>
            <div className="dhakacitypatientcomponent">
              <div className="glowrect0936ac58" />
              <div className="identifiedPatientsIndhakaCity">
                <span className="identifiedPatientsIndhakaCity-0">Identified Patients in<br /></span>
                <span className="identifiedPatientsIndhakaCity-23">Dhaka City</span></div>
              <svg preserveAspectRatio="none" viewBox="281.2550048828125 70.87100219726562 187.490234375 221.25802612304688" className="dhakacityrect"><path d="M 452.9949951171875 303.3790283203125 L 375 303.3790283203125 L 297.0050048828125 303.3790283203125 C 288.7200012207031 303.3790283203125 282.0050048828125 298.9436950683594 282.0050048828125 293.4728088378906 L 282.0050048828125 93.52721405029297 C 282.0050048828125 88.05634307861328 288.7200012207031 83.62100219726563 297.0050048828125 83.62100219726563 L 452.9949951171875 83.62100219726563 C 461.2789916992188 83.62100219726563 467.9949951171875 88.05634307861328 467.9949951171875 93.52721405029297 L 467.9949951171875 293.4728088378906 C 467.9949951171875 298.9436950683594 461.2789916992188 303.3790283203125 452.9949951171875 303.3790283203125 Z" /></svg>
              <div className="x100000f3c831ff">{this.countByCity('Dhaka City')}</div>
              <div className="circularc503c4b1" />
            </div>
            <div data-layer="e2594347-08cd-4bf3-a321-7c11d5178a13" className="bangladeshpatientcomponent">
              <div data-layer="1df92704-336e-4842-ad5f-21c0b7156da5" className="glowrect" />
              <svg preserveAspectRatio="none" viewBox="496.8630065917969 70.87100219726562 187.489990234375 221.25802612304688" className="bangladeshrect"><path d="M 668.6029663085938 303.3790283203125 L 590.60791015625 303.3790283203125 L 512.6129150390625 303.3790283203125 C 504.3280029296875 303.3790283203125 497.6130065917969 298.9436950683594 497.6130065917969 293.4728088378906 L 497.6130065917969 93.52721405029297 C 497.6130065917969 88.05634307861328 504.3280029296875 83.62100219726563 512.6129150390625 83.62100219726563 L 668.6029663085938 83.62100219726563 C 676.887939453125 83.62100219726563 683.6029663085938 88.05634307861328 683.6029663085938 93.52721405029297 L 683.6029663085938 293.4728088378906 C 683.6029663085938 298.9436950683594 676.887939453125 303.3790283203125 668.6029663085938 303.3790283203125 Z" /></svg>
              <div className="contactIedcr16263">Contact IEDCR (16263)</div>
              <div className="identifiedPatientsInbangladesh">
                <span className="identifiedPatientsInbangladesh-0">Identified Patients in<br /></span>
                <span className="identifiedPatientsInbangladesh-23">Bangladesh</span></div>
              <div className="circular" />
              <div className="x100000">{this.countTotal()}</div>
            </div>
          </div>
          <div className="spreadinfographiccomponent">
            <div className="virusinfocomponent">
              <div className="virusiconwithbackground" />
              <div className="virusicon">
                <div className="whenTinyDropletsremainInTheAir">WHEN TINY DROPLETS<br />REMAIN IN THE AIR</div>
                <div className="virusMaySpread">VIRUS MAY SPREAD</div>
                <div className="throughAirborne">THROUGH AIRBORNE</div>
              </div>
            </div>
            <div className="spreadinfocomponent">
              <div className="spreadtext">
                <div className="virusSpreadFrom">VIRUS SPREAD FROM</div>
                <div className="troughDroplets">TROUGH DROPLETS</div>
                <div className="closePersonToPersonContact">CLOSE PERSON <br />TO PERSON CONTACT</div>
              </div>
              <div className="spreadiconwithbackground" />
            </div>
            <div className="calenderinfocomponent">
              <div className="calendericonwithbackground" />
              <div className="calendertext">
                <div className="symptomsMaydevelopWithin14daysOfExposure">SYMPTOMS MAY<br />DEVELOP WITHIN 14<br />DAYS OF EXPOSURE</div>
                <div className="toTheIllness">TO THE ILLNESS</div>
              </div>
            </div>
            <div className="labinfocomponent">
              <div className="labiconwithbackground" />
              <div className="labtext">
                <div className="designatedLabtestCanDiagnose">DESIGNATED LAB<br />TEST CAN DIAGNOSE</div>
                <div className="theVirus">THE VIRUS</div>
                <div className="only">ONLY</div>
              </div>
            </div>
            <div className="howDoesItSpread">HOW DOES IT SPREAD?</div>
          </div>
          <div className="headercomponent">
            <div className="covid19">COVID-19</div>
            <div className="bangladeshflagico" />
          </div>
        </div>
      </div>

    );
  }
}

export default App;
