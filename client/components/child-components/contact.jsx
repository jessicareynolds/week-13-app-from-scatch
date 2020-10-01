import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div className="container-contact">
        <h3>bad munday studio</h3>

        <a href={"mailto:jessica@badmunday.com" + this.props.email}>
          Say Hello
        </a>

        <p>instagram: @bad_munday</p>
      </div>
    );
  }
}

export default Contact;
