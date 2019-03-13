import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
  constructor(props) {
    super(props);
    this.validateForm = validateForm.bind(this);
    this.validateField = validateField.bind(this);
    this.formRef = React.createRef();
    this.formFields = Object.entries(inputPairs).map(element => (
      <label htmlFor={element[0]} key={element[0]}>
        {element[1]}
        <input
          type="text"
          id={element[0]}
          onChange={e => this.handleInputChange(e, element[0])}
          onBlur={e => this.handleInputBlur(e, element[0])}
          onFocus={this.handleInputFocus}
        />
        <div className="tooltip" id={`${element[0]}-tooltip`}>
          {hints[element[0]]}
        </div>
      </label>
    ));
  }

  componentDidMount() {
    const element = document.getElementById('phoneNumber');
    const maskOptions = { mask: '+({38\\0})000000000' };
    // eslint-disable-next-line no-unused-vars
    const mask = new IMask(element, maskOptions);

    this.findAllInputs();
  }

  findAllInputs = () => {
    const form = this.formRef.current;
    const formElements = [...form.elements].filter(
      el => el.nodeName.toLowerCase() === 'input'
    );
    const formData = ls.getState('form');

    if (formData) {
      formElements.map(el => (el.value = formData[el.id]));
    }
    this.validateForm();
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
    e.preventDefault();
    console.log('yey!');
    const formElement = this.formRef.current;

    if (this.validateForm()) {
      console.log();
      // const data = new FormData(formElement);
      // console.log(data.getAll());
    }
    const data = {
      name: '',
      email: '',
      address: '',
      phoneNumber: ''
    };
    // ls.setState('form', )
  };

  onCancelAction = () => {
    ls.clearState();
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="container checkout-form">
        <form
          ref={this.formRef}
          autoComplete="off"
          // onSubmit={e => handleSubmit(e, this.validateForm)}
        >
          {this.formFields}
          {/* <button type="submit">Proceed</button> */}
          <fieldset>
            <StyledButton btnClass="accept" callback={this.onAcceptAction} />
            <StyledButton btnClass="cancel" />
            {/* <StyledButton backward /> */}
          </fieldset>
        </form>
      </div>
    );
  }
}

export default withRouter(CheckoutForm);
