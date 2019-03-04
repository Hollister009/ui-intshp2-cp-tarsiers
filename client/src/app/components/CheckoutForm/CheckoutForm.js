import React, { Component } from 'react';
import './CheckoutForm.scss';
import IMask from 'imask';

const patterns = {
  name: /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,}){6,}$/,
  email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  address: /^.{6,}/,
  phoneNumber: /\+\(380\){1}[0-9]{9}$/
};

const inputPairs = {
  name: 'Full Name',
  email: 'Email',
  address: 'Address',
  phoneNumber: 'Phone Number'
};

const hints = {
  name: 'Full Name should be at least 6 characters long',
  email: 'Please enter valid email',
  address: 'Address should be at least 6 characters long',
  phoneNumber: 'Phone number should match this pattern "+(380)*********"'
};

class CheckoutForm extends Component {
  formFields = Object.entries(inputPairs).map(element => (
    <label htmlFor={element[0]} key={element[0]}>
      {element[1]}
      <input
        type="text"
        id={element[0]}
        onChange={e => this.handleInputChange(e, element[0])}
        onBlur={e => this.handleInputBlur(e, element[0])}
        onFocus={e => this.handleInputFocus(e)}
      />
      <div className="tooltip" id={`${element[0]}-tooltip`}>
        {hints[element[0]]}
      </div>
    </label>
  ));

  componentDidMount = () => {
    const element = document.getElementById('phoneNumber');
    const maskOptions = {
      mask: '+({38\\0})000000000'
    };
    // eslint-disable-next-line no-unused-vars
    const mask = new IMask(element, maskOptions);
  };

  handleInputBlur = (e, field) => {
    this.hideTooltip(e);
    if (!this.validateField(e.target, field)) {
      this.addErrorClass(e);
    }
  };

  handleInputFocus = e => {
    if (!e.currentTarget.classList.contains('success')) {
      this.showTooltip(e);
    }
    this.removeErrorClass(e);
  };

  hideTooltip = e => {
    e.currentTarget.nextSibling.classList.remove('show');
  };

  showTooltip = e => {
    e.currentTarget.nextSibling.classList.add('show');
  };

  addClassSuccess = e => {
    e.currentTarget.classList.add('success');
  };

  handleInputChange = (e, field) => {
    this.setState({
      [field]: {
        value: e.target.value
      }
    });

    if (this.validateField(e.currentTarget, field)) {
      e.currentTarget.classList.add('success');
      this.hideTooltip(e);
    } else {
      e.currentTarget.classList.remove('success');
      this.showTooltip(e);
    }
  };

  removeErrorClass = e => {
    e.currentTarget.classList.remove('error');
  };

  addErrorClass = e => {
    e.currentTarget.classList.add('error');
  };

  validateForm = e => {
    const inputNodes = document
      .querySelector('.checkout-form')
      .querySelectorAll('input');

    const result = [...inputNodes].reduce((acc, element) => {
      if (!this.validateField(element, element.id)) {
        element.classList.add('error');
      }
      return acc || element.classList.contains('error');
    }, false);

    if (result) e.preventDefault();
  };

  validateField = (node, field) => patterns[field].test(node.value);

  render() {
    return (
      <div className="container checkout-form">
        <form onSubmit={e => this.validateForm(e)} autoComplete="off">
          {this.formFields}
          <button type="submit">Proceed</button>
        </form>
      </div>
    );
  }
}

export default CheckoutForm;
