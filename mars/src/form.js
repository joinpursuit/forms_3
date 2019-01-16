import React, { Component } from 'react'
import { countries } from './countries.json'
// import { setting } from "./setting.js"

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      dob: [],
      country: [],
      diet: [],
      why: "",
      waterCheck: false,
      underWater: ['y', 'n', 'idk'],
      marriage: ['y', 'n'],
      situation: ['det', 'def', 'ang', 'res'],
      claustrophobic: ['y', 'n', 'idk'],
      familyHistory: {cancer: false, heartDisease: false, diabetes: false},
      livingFamily: {sibilins: false, parents: false, grandparents: false},
      credentials: {hsDip: false, associates: false, bachelors: false, masters: false, phd: false, other: ""},
      choices: 'Omnivore'
    }
  }


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleYears = (event) => {
    return (<input id="date"
                label="What is your date of birth? "
                placeholder=""
                type="date" />)
  }

  handleCountries = (event) => {
    const { country } = this.state
  for(let i = 0; i < countries.length; i++) {
    country.push(<option key={countries[i].code} value={countries[i].name}>{countries[i].name}</option>)
  }
  return country
}

handleQuestionare1 = (event) => {
  const { underWater  } = this.state

  for(let i = 0; i < underWater.length; i++) {
    if(underWater === underWater[i]) {
      return underWater[i]
    }else if(underWater[i + 1]) {
      return underWater[i + 1]
    }else {
      return underWater[i + 2]
    }
  }
}

handleSituation = (event) => {
  const { situation } = this.state

  for(let i = 0; i < situation.length; i++) {
    // if(situation)
  }
}

handleFamily = (event) => {
  const { familyHistory } = this.state

    if(familyHistory[event.target.value] === false) {
      familyHistory[event.target.value] = true

      this.setState({
        familyHistory: familyHistory
      })
    } else {
      familyHistory[event.target.value] = false

      this.setState({
        familyHistory: familyHistory
      })
    }
}

handleLivingFamily = (event) => {
  const { livingFamily } = this.state

  if(livingFamily[event.target.value] === false) {
    livingFamily[event.target.value] = true

    this.setState({
      livingFamily: livingFamily
    })
  } else {
    livingFamily[event.target.value] = false

    this.setState({
      livingFamily: livingFamily
    })
  }
}

handleCredentials = (event) => {
  const { credentials } = this.state

  if(credentials[event.target.value] === false) {
    credentials[event.target.value] = true

    this.setState({
      credentials: credentials
    })
  } else {
    credentials[event.target.value] = false

    this.setState({
      credentials: credentials
    })
  }
}

  render() {

    const { name, underWater
    } = this.state

    return(
      <>
        <h1 className='title'> Mars Mission Registration Form</h1>

        <form className='edit_form' onChange={this.handleChange}>

        <div className='edit_name'>
          <label htmlFor='name'>Name</label>
          <input type='text' placeholder='Your Name' name='name' value={name} id='name' onChange={this.handleChange}/>
        </div>

          <div className='date_of_birth'>
            <label htmlFor='years'>Date of Birth</label>
              {this.handleYears()}
          </div>

          <div className='country_of_origin'>
            <label htmlFor='country'>Country</label>
            <select name='countrys' >
            <option>Select</option>
              {this.handleCountries()}
            </select>
          </div>

          <div className='edit_dietary'>
            <label htmlFor='dietary'>Dietary Preference</label>
            <select name='dietary'>
              <option>Select</option>
              <option value = 'Omnivore'> Omnivore </option>
              <option value = 'Vegetarian'> Vegetarian </option>
              <option value = 'Vegan'> Vegan </option>
            </select>
          </div>

          <div className='input_box'>
            <label htmlFor='why'>Why</label>
            <textarea className='text_area' defaultValue='Please describe why you want to become a Mars Explorer?' name='box'>
            </textarea>
          </div>

        <div className='preguntas'>
          <div className='question1'>
            <p>Can you breathe underwater longer than 1 minute?</p>
            Yes
            <input type='radio' name='underWater' value='yes' checked={underWater === 'yes'} onChange={this.handleChange}/>
            <br />

            No
            <input type='radio' name='underWater' value='no' checked={underWater === 'no'} onChange={this.handleChange} />
            <br />

            I dont know
            <input type='radio' name='underWater' value='I dont know' checked={underWater === 'I dont know'} onChange={this.handleChange} />
          </div>

          <div className='question2'>
            <p> What is your marital status?</p>
            Married
            <input type='radio' name='marriage' value='married' onChange={this.handleChange} />
            <br />

            Unmarried
            <input type='radio' name='marriage' value='unmarried' onChange={this.handleChange} />
          </div>

          <div className='question3'>
            <p>When you are in a stressful or difficult situation, how do you most frequently react?</p>

            Determination: I continue to confront the situation.
            <input type='radio' name='situation' value='Determination: I continue to confront the situation.' onChange={this.handleChange} />
            <br />

            Defeat: I stop confronting the situation.
            <input type='radio' name='situation' value='Defeat: I stop confronting the situation.' onChange={this.handleChange} />
            <br />

            Anger: I become upset at the situation
            <input type='radio' name='situation' value='Anger: I become upset at the situation' onChange={this.handleChange} />
            <br />

            Resourcefulness: I seek help to confront the situation.
            <input type='radio' name='situation' value='Resourcefulness: I seek help to confront the situation.'onChange={this.handleChange} />
          </div>

          <div className='question4'>
            <p>Are you Claustrophobic?</p>
            Yes
            <input type='radio' name='claustrophobic' value='yes' onChange={this.handleChange}/>
            <br />

            No
            <input type='radio' name='claustrophobic' value='no'  onChange={this.handleChange} />
            <br />

            I dont know
            <input type='radio' name='claustrophobic' value='I dont know'  onChange={this.handleChange} />
          </div>

          <div className='question5'>
            <p>Does your family have a history of (check all that apply): </p>
            Cancer
            <input type='checkbox' name='familyHistory' value='cancer' onChange={this.handleChange}/>
            <br />

            Heart Disease
            <input type='checkbox' name='familyHistory' value='heart disease' onChange={this.handleChange} />
            <br />

            Diabetes
            <input type='checkbox' name='familyHistory' value='diabetes' onChange={this.handleChange} />
          </div>

          <div className='question6'>
            <p>Do you have any living (check all that apply):</p>
            Sibilings?
            <input type='checkbox' name='livingFamily' value='sibilings?' onChange={this.handleChange}/>
            <br />

            Parents?
            <input type='checkbox' name='livingFamily' value='parents?' onChange={this.handleChange} />
            <br />

            Grandparents?
            <input type='checkbox' name='livingFamily' value='grandparents?' onChange={this.handleChange} />
          </div>

          <div className='question7'>
            <p>Check all educational credentials you have received:</p>
            High school diploma or GED equivalent
            <input type='checkbox' name='credentials' value='High school diploma or GED equivalent'  onChange={this.handleChange}/>
            <br />

            Associate's Degree
            <input type='checkbox' name='credentials' value="Associate's Degree" onChange={this.handleChange} />
            <br />

            Bachelor's Degree
            <input type='checkbox' name='credentials' value="Bachelor's Degree"  onChange={this.handleChange} />
            <br />

            Master's Degree
            <input type='checkbox' name='credentials' value="Master's Degree"  onChange={this.handleChange} />
            <br />

            PhD
            <input type='checkbox' name='credentials' value='PhD' onChange={this.handleChange} />
            <br />

            Other
            <input type='text' name='credentials' value='other' onChange={this.handleChange} />
          </div>

        <div className='click_button'>
        <button onClick={this.handleClick} value='button'> CLICK
        </button>

        </div>


        </div>


        <div className='submit_button'>
          <label htmlFor='submit'>Submit</label>
          <input type='submit' name='name' value='submit' onSubmit={this.handleSubmit}/>
        </div>

        </form>

      </>
    );
  }
}



export default Form
