import React, { Component } from 'react';
import FlashCardData from '../../helpers/data/flashCard';

export default class FlashCardForm extends Component {
  state = {
    answer: '',
    question: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    FlashCardData.createFlashCard(this.state).then(() => {
      this.props.onCreate();
      this.setState({
        answer: '',
        question: '',
      });
    });
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <h1>Flash Card Form</h1>
        <input
          type='text'
          name='question'
          value={this.state.question}
          onChange={this.handleChange}
          placeholder='Question'
          className='form-control form-control-lg m-1'
          required
          />
        <input
          type='text'
          name='answer'
          value={this.state.answer}
          onChange={this.handleChange}
          placeholder='Answer'
          className='form-control form-control-lg m-1'
          required
          />
        <button>Submit</button>
      </form>
    );
  }
}
