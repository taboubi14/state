import React from 'react';
import './App.css';
import { Button } from '@material-ui/core';



class App extends React.Component {
  state = {
    Person: {
      fullName: "Taboubi Mahdi",
      bio: "web developer",
      imgSrc: 'https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-9/200867464_3001429126795410_8243476757729190954_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=xiCARCFjn5EAX8Mcf0A&_nc_ht=scontent.ftun1-2.fna&oh=226c4672e426984e2954e66d61932d67&oe=617907D3',
      profession: "GOMY CODE"
    },
    show: true
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  render() {
    return (
      <div >
        {this.state.show && (
          <>
          <center><h1 style={{color:"red"}}>{this.state.Person.fullName}</h1>
            <h1 style={{color:"blue"}}>{this.state.Person.bio}</h1>
            <img src={this.state.Person.imgSrc} alt="Naruto" width="20%" height="20%" style={{borderRadius:"20px"}}></img>
            <h1 style={{color:"blue"}}>{this.state.Person.profession}</h1>
          
            <br></br></center>  
          </>
        )}
           
        <center><Button  variant="contained" color="primary" onClick={this.handleShowPerson}>click here</Button></center>
      </div>
    );
  }
}

export default App;