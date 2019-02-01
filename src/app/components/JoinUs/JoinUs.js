import React, { Component } from 'react';

import Snackbar from '../Snackbar/Snackbar';
import appConfig from '../../../config/appConfig';
import './JoinUs.scss';

class JoinUs extends Component {
  snackbarRef = React.createRef();

  constructor() {
    super();
    this.state = { email: '' };
  }

  validate = () => {
    const { email } = this.state;
    const valid = !/^[a-zA-Z0-9]+(([a-zA-Z0-9]\.)*)+([a-zA-Z0-9]*)+@[a-zA-Z0-9]+(\.+[A-Za-z]+)+$/.test(
      email
    );

    return valid;
  };

  handleEmailChange = evt => {
    this.setState({ email: evt.target.value });
  };

  showSnackbarHandler = () => {
    const { message } = appConfig.joinUsSnackbar;

    this.snackbarRef.current.openSnackBar(message);
  };

  canBeSubmitted = () => {
    const { email } = this.state;
    const isDisabled = this.validate(email);

    return !isDisabled;
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: '' });
    const submit = !this.canBeSubmitted();

    return submit;
  };

  render() {
    const { email } = this.state;
    const isDisabled = this.validate(email);
    const error = '* Please enter valid e-mail: sample@samle.com!';

    return (
      <section className="joinus container">
        <div className="joinus__info col-6">
          <h2>news letter</h2>
          <p>join us now to get all news and special offers</p>
        </div>
        <form className="joinus__subscribe col-4" onSubmit={this.handleSubmit}>
          <div className="joinus__fieldset">
            <label htmlFor="email" className="mailfield">
              <i className="far fa-envelope" />
              <input
                id="email"
                type="email"
                placeholder="type your email here"
                value={email}
                required
                onChange={this.handleEmailChange}
              />
            </label>
            <button
              disabled={isDisabled}
              onClick={this.showSnackbarHandler}
              type="submit"
            >
              join us
            </button>
            <Snackbar ref={this.snackbarRef} />
          </div>
          <p className={!isDisabled || !email ? 'msg' : 'msg showerror'}>
            {error}
          </p>
        </form>
      </section>
    );
  }
}
export default JoinUs;
