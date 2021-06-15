import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onAddContact({ ...this.state });

    this.setState({ name: "", number: "" });
  };
  render() {

    const { name, number } = this.state;
    return (
      <form className={styles.taskEditor} onSubmit={this.handleSubmit}>
        <label className={styles.taskEditor_label}>
          Name
          <input
            className={styles.taskEditor_input}
            type="text"
            name="name"
            value={name}
            placeholder="input name"
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
						required
          />
        </label>
        <label className={styles.taskEditor_label}>
          Number
          <input
            className={styles.taskEditor_input}
            type="tel"
            value={number}
            name="number"
            placeholder="input phone number"
            onChange={this.handleChange}
            required
            
          />
        </label>
        <button className={styles.taskEditor_button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
  
};