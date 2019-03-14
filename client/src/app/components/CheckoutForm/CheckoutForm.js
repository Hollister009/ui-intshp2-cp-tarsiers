/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import IMask from 'imask';

import { validateForm, validateField } from './validateForm';
import StyledButton from '../../common/StyledButton';
import ls from '../../../utils/localStorage.service';

import './CheckoutForm.scss';

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
  formFields = Object.entries(inputPairs).map(el => (
    <label htmlFor={el[0]} key={el[0]}>
      {el[1]}
      <input
        type="text"
        id={el[0]}
        onChange={e => this.handleInputChange(e, el[0])}
        onBlur={e => this.handleInputBlur(e, el[0])}
        onFocus={this.handleInputFocus}
      />
      <div className="tooltip" id={`${el[0]}-tooltip`}>
        {hints[el[0]]}
      </div>
    </label>
  ));

  constructor(props) {
    super(props);
    this.validateForm = validateForm.bind(this);
    this.validateField = validateField.bind(this);
    this.formRef = React.createRef();
  }

  componentDidMount() {
    const element = document.getElementById('phoneNumber');
    const maskOptions = { mask: '+({38\\0})000000000' };
    const mask = new IMask(element, maskOptions);

    this.findAllInputs();
  }

  findAllInputs = () => {
    const formData = ls.getState('form');

    if (formData) {
      const form = this.formRef.current;

      [...form.elements].forEach(el => {
        if (el.nodeName.toLowerCase() === 'input') {
          el.value = formData[el.id];
          if (this.validateField(el, el.id)) {
            el.classList.add('success');
          }
        }
      });
    }
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
    this.setState({ [field]: { value: e.target.value } });

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

  onAcceptAction = e => {
    const { handleSubmit } = this.props;

    e.preventDefault();

    if (this.validateForm()) {
      const form = this.formRef.current;
      const data = {};

      [...form.elements].forEach(el => {
        if (el.nodeName.toLowerCase() === 'input') {
          data[el.getAttribute('id')] = el.value;
        }
      });

      ls.setState('form', data);
    }

    handleSubmit(this.validateForm);
  };

  onCancelAction = e => {
    e.preventDefault();
    const form = this.formRef.current;

    [...form.elements].forEach(el => {
      if (el.nodeName.toLowerCase() === 'input') {
        el.value = '';
      }
    });

    ls.setState('form');
    this.validateForm();
  };

  render() {
    return (
      <div className="container checkout-form">
        <form ref={this.formRef} autoComplete="off">
          {this.formFields}
          <fieldset>
            <StyledButton
              type="submit"
              btnClass="accept"
              callback={this.onAcceptAction}
            />
            <StyledButton
              type="submit"
              btnClass="cancel"
              callback={this.onCancelAction}
            />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default CheckoutForm;
