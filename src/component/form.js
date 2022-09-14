import React from "react";
import './form.css'
import axios from "axios";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0,
            ansArray: [],
            progress: 0,
            address: '',
            city: '',
            state: '',
            zipcode: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        };
    }
    questionOne(value) {
        var input = value;
        this.state.ansArray.push(input)
        this.setState({ step: this.state.step + 1, progress: this.state.progress + 15 })
        console.log(this.state.step)
        console.log(this.state.ansArray)
    }
    questionFour() {
        if (this.state.address == '') {
            alert("Address is Mandatory!")
        }
        else if (this.state.city == '') {
            alert("City is Mandatory!")
        }
        else if (this.state.state == '') {
            alert("State is Mandatory!")
        }
        else if (this.state.zipcode == '') {
            alert("Zipcode is Mandatory!")
        } else {
            // var tempAddress=[this.state.address,this.state.city,this.state.state,this.state.zipcode]
            this.state.ansArray.push(this.state.address);
            this.state.ansArray.push(this.state.city)
            this.state.ansArray.push(this.state.state)
            this.state.ansArray.push(this.state.zipcode)
            // this.state.ansArray.push(tempAddress)
            this.setState({ step: this.state.step += 1 })
            console.log("Step" + this.state.step + "Array=" + this.state.ansArray)
        }
    }
    getFreeQuote() {
        if (this.state.firstName == '') alert("First name id mandatory!")
        else if (this.state.lastName == '') alert("Last name id mandatory!")
        else if (this.state.email == '') alert("Email id mandatory!")
        else if (this.state.phone == '') alert("Phone Number is mandatory!")
        else {
            this.state.ansArray.push(this.state.firstName);
            this.state.ansArray.push(this.state.lastName)
            this.state.ansArray.push(this.state.email)
            this.state.ansArray.push(this.state.phone)
            this.setState({ progress: 100 }, () => {
                console.log(this.state.ansArray)
                this.createJson();
            })

        }

    }
    createJson() {
        var formData={}
        var users=[]
        formData.users=users;
        var it=0;
        var userData={
            "electricityBill":this.state.ansArray[it++],
            "shadeInHouse":this.state.ansArray[it++],
            "isHomeowner":this.state.ansArray[it++],
            "basicAddress":this.state.ansArray[it++],
            "city":this.state.ansArray[it++],
            "state":this.state.ansArray[it++],
            "zipcode":this.state.ansArray[it++],
            "utilityProvider":this.state.ansArray[it++],
            "firstName":this.state.ansArray[it++],
            "lastName":this.state.ansArray[it++],
            "email":this.state.ansArray[it++],
            "phone":this.state.ansArray[it++]

        }
        formData.users.push(userData)
        // JSON.stringify(formData)
        let data={json:JSON.stringify(formData.users)}
        let url='https://sheetdb.io/api/v1/m0l9op2pxkznp/import/json'
        const customConfig = {
            headers: {
            'Content-Type': 'application/json'
            }
        };
        axios.post(url,data,customConfig).then(res=>{
            console.log('success',res)
             window.open('https://docs.google.com/spreadsheets/d/1Vkd5JogUNvLsNcKs3Zex3j--oRTNRlPWFETa1DilWns/edit#gid=0', '_blank');
        }).catch(e=>{
            console.log('error',e)
        })
        // console.log(JSON.stringify(formData).users);
        // alert(JSON.stringify(formData))

      
    }
    render() {
        var l = this.state.progress;
        var currProgress = 0;
        var w = l;
        var status;
        if (l <= 88) {
            currProgress = l + '%';
            status = 'Test Progress';
        }
        else {

            currProgress = '100%';
            // currProgress=l+'%';
            w = '100';
            status = 'TEST COMPLETED';
        }

        return (


            <div className="container">
                <div className="progressBarDiv">

                    <h6 className="percent-heading" ><span style={{ color: '#FB923C', marginLeft: '4%', fontWeight: '600', fontSize: '16px' }}>{`${currProgress}`} </span>
                        <span className="addressPara" style={{ marginLeft: '38%' }}>It will finish shortly</span></h6>
                    <div className="progress">

                        <div className="progress-bar" style={{
                            width:
                                `${this.state.progress}%`
                        }}></div>
                    </div>
                </div>
                {this.state.step == 0 &&
                    <>
                        <div className="questionTag">
                            <p>What is your average monthly electricity bill?</p>
                        </div>
                        <div className="optionContainer">
                            <div className="option" onClick={() => this.questionOne("Less than $100")}>Less than $100</div>
                            <div className="option" onClick={() => this.questionOne("$100 - $150")}>$100 - $150</div>
                            <div className="option" onClick={() => this.questionOne("$150 - $250")}>$150 - $250</div>
                            <div className="option" onClick={() => this.questionOne("$250+")}>$250+</div>
                        </div>
                    </>
                }
                {this.state.step == 1 &&
                    <>

                        <div className="questionTag">
                            <p>How much shade does your home have?</p>
                        </div>
                        <div className="optionContainerQuesTwo">
                            <div className="quesTwoOption" onClick={() => this.questionOne("No Shade")}>No Shade</div>
                            <div className="quesTwoOption" onClick={() => this.questionOne("Little Shade")}>Little Shade</div>
                            <div className="quesTwoOption" onClick={() => this.questionOne("Partial Shade")}>Partial Shade</div>
                            <div className="quesTwoOption" onClick={() => this.questionOne("Severe Shade")}>Severe Shade</div>

                        </div>
                    </>
                }
                {this.state.step == 2 &&
                    <>
                        <div className="questionTag">
                            <p>Are you a homeowner?</p>
                        </div>
                        <div className="optionContainer">
                            <div className="option" onClick={() => this.questionOne("Yes")}>Yes</div>
                            <div className="option" onClick={() => this.questionOne("No")}>No</div>


                        </div>
                    </>
                }
                {this.state.step == 3 &&
                    <>
                        <div className="questionTag">
                            <p>What is your address?</p>
                        </div>
                        <div className="optionContainer">

                            <input
                                type="text"
                                className="input"
                                placeholder="Address *"
                                value={this.state.address}
                                onChange={(event) =>
                                    this.setState({ address: event.target.value })
                                }
                            />
                            {/* <div style={{ display: 'flex', justifyContent: 'space-between' }}> */}
                            <div style={{ display: 'flex', width: '568px' }}>
                                <div className="optionQuote" style={{ width: '52%', padding: '10px' }}>
                                    <input
                                        type="text"
                                        className="input"
                                        placeholder="City *"
                                        value={this.state.city}
                                        onChange={(event) =>
                                            this.setState({ city: event.target.value })
                                        }
                                    />
                                </div>
                                <div className="optionQuote" style={{ width: '52%', padding: '10px' }}>
                                    <input
                                        type="text"
                                        className="input"
                                        placeholder="State *"
                                        value={this.state.state}
                                        onChange={(event) =>
                                            this.setState({ state: event.target.value })
                                        }
                                    />
                                </div>
                            </div>

                            <input
                                type="text"
                                className="input"
                                placeholder="Zipcode *"
                                value={this.state.zipcode}
                                onChange={(event) =>
                                    this.setState({ zipcode: event.target.value })
                                }
                            />
                            <button className="proceed" onClick={() => this.questionFour()}>Proceed</button>
                            <p className="addressPara">We'll use satellite imagery based on your address to
                                develop an accurate solar estimate for your home. All information is kept completely confidential</p>
                        </div>
                    </>
                }
                {
                    this.state.step == 4 &&
                    <>
                        <div className="questionTag">
                            <p>Who is your Utility Provider?</p>
                        </div>
                        <div style={{ display: 'flex', width: '563px' }}>
                            <div className="optionContainer" style={{ width: '50%' }}>
                                <div className="optionUtility" onClick={() => this.questionOne("Domination Energy")}>Domination Energy</div>
                                <div className="optionUtility" onClick={() => this.questionOne("Rappahannock Electric Co-op")}>Rappahannock Electric Co-op</div>
                                <div className="optionUtility" onClick={() => this.questionOne("Shenandoah Valley Electric Co-op")}>Shenandoah Valley Electric Co-op</div>
                                <div className="optionUtility" onClick={() => this.questionOne("Shenandoah Valley")}>Shenandoah Valley</div>
                            </div>
                            <div className="optionContainer" style={{ width: '50%' }}>
                                <div className="optionUtility" onClick={() => this.questionOne(" Appalachian Power")}> Appalachian Power</div>
                                <div className="optionUtility" onClick={() => this.questionOne("Northern Virginia Electric Co-op")}>Northern Virginia Electric Co-op</div>
                                <div className="optionUtility" onClick={() => this.questionOne("Southside Electric Co-op")}>Southside Electric Co-op</div>
                                <div className="optionUtility" onClick={() => this.questionOne("Other")}>Other</div>
                            </div>
                        </div>
                    </>
                }
                {
                    this.state.step == 5 &&
                    <>
                        <div className="questionTag">
                            <p>See Your Free Quotes Now!</p>
                        </div>
                        <div className="optionContainer">
                            <div style={{ display: 'flex', width: '568px' }}>
                                <div className="optionQuote" style={{ width: '52%', padding: '10px' }}>
                                    <input
                                        type="text"
                                        className="input"
                                        placeholder="First Name *"
                                        value={this.state.firstName}
                                        onChange={(event) =>
                                            this.setState({ firstName: event.target.value })
                                        }
                                    />
                                </div>
                                <div className="optionQuote" style={{ width: '52%', padding: '10px' }}>
                                    <input
                                        type="text"
                                        className="input"
                                        placeholder="Last Name *"
                                        value={this.state.lastName}
                                        onChange={(event) =>
                                            this.setState({ lastName: event.target.value })
                                        }
                                    />
                                </div>
                            </div>
                            <input
                                type="text"
                                className="input"
                                placeholder="Email *"
                                value={this.state.email}
                                onChange={(event) =>
                                    this.setState({ email: event.target.value })
                                }
                            />
                            <input
                                type="text"
                                className="input"
                                placeholder="Phone Number *"
                                value={this.state.phone}
                                onChange={(event) =>
                                    this.setState({ phone: event.target.value })
                                }
                            />
                            <p className="addressPara"> By clicking Get My Free Quote, I agree to the Terms of Service and Privacy Policy.</p>
                        </div>
                        <button className="getQuote" onClick={() => this.getFreeQuote()}>Get My Free Quote</button>
                    </>
                }
            </div>
        );
    }
}

export default Form;