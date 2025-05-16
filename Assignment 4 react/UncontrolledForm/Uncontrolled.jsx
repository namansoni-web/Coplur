import React from 'react';
import './Uncontrolled.css';

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.nameInputRef = React.createRef();
    this.eidInputRef = React.createRef();
    this.dateInputRef = React.createRef();
    this.departmentInputRef = React.createRef();
    this.emailInputRef = React.createRef();
    this.phoneInputRef = React.createRef();
    this.addressInputRef = React.createRef();
    this.genderInputRef = React.createRef();
  }

  onSubmit = (e) => {
    e.preventDefault();
    let emp = {
      name: this.nameInputRef.current.value,
      eid: this.eidInputRef.current.value,
      date: this.dateInputRef.current.value,
      department: this.departmentInputRef.current.value,
      email: this.emailInputRef.current.value,
      phone: this.phoneInputRef.current.value,
      address: this.addressInputRef.current.value,
      gender: this.genderInputRef.current.value
    };
    alert(JSON.stringify(emp, null, 2));
  }

  render() {
    return (
      <div id="EmployeeForm">
        <form onSubmit={this.onSubmit}>
          <label htmlFor="name">Title</label>
          <input type="text" id="name" name="name" placeholder="Enter Employee title" ref={this.nameInputRef} />

          <label htmlFor="eid">ID</label>
          <input type="number" id="eid" name="eid" placeholder="Enter Employee ID" ref={this.eidInputRef} />

          <label htmlFor="date">Joining Date</label>
          <input type="date" id="date" name="date" placeholder="Enter date" ref={this.dateInputRef} />

          <label htmlFor="department">Department</label>
          <select id="department" name="department" ref={this.departmentInputRef}>
            <option value="">Select</option>
            <option value="HR">HR</option>
            <option value="Sales">Sales</option>
            <option value="Accounts">Accounts</option>
          </select>

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter Email" ref={this.emailInputRef} />

          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="Enter Phone Number" ref={this.phoneInputRef} />

          <label htmlFor="address">Address</label>
          <textarea id="address" name="address" placeholder="Enter Address" ref={this.addressInputRef}></textarea>

          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender" ref={this.genderInputRef}>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default EmployeeForm;
