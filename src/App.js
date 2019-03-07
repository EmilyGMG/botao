import React, { Component } from 'react';
import './App.css';
class MyButton extends Component{
  render(){
    return (
      <button onClick={() => {this.props.handleClick(this.props.label);}}>
    {this.props.label }</button>
    )
  };
}
class MyLabel extends Component{
  render(){
    console.log(this.props)
    return <p>Clicke no : {this.props.text}</p>
  }
}

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      labelText: '',
    };
  }

  setLabelText = (labelText) =>{
    this.setState({labelText});
  }
  render() {
    console.log(this.state)
    return(
      <div className="App">
      <MyLabel text={this.state.labelText}/>
      <MyButton handleClick={this.setLabelText} label="Botão 1" />
      <MyButton handleClick={this.setLabelText} label="Botão 2"/>
      <MyButton handleClick={this.setLabelText} label="Botão 3"/>
      <MyButton handleClick={this.setLabelText} label="Botão 4"/>
      <MyButton handleClick={this.setLabelText} label="Botão 5"/>
      <MyButton handleClick={this.setLabelText} label="Botão 6"/>
      </div>
    );
  }
}


export default App;
