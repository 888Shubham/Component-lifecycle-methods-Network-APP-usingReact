import { Component } from "react";

class Person extends Component {
  // Define appropriate lifecycle method to show alert here
  componentWillUnmount(){
    const {person} = this.props;
    alert(`A person with email ${person.email} was removed from your network!`);
  }

  render() {
    const { img, email } = this.props.person;
    const{index, handleRemove} = this.props;
    return (
      <div className="person">
        <b onClick={()=> handleRemove(index)}>X</b>
        <img alt={email} src={img} />
        <p>{email}</p>
      </div>
    );
  }
}

export default Person;
