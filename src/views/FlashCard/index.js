import React from 'react';
import QuestionCard from '../../components/Cards/QuestionCard';
import AnswerCard from '../../components/Cards/AnswerCard';
import FlashCardData from '../../helpers/data/flashCard';
import AppModal from '../../components/Modal/AppModal';
import FlashCardForm from '../../components/Forms/FlashCardForm';

export default class FlashCard extends React.Component {
  state = {
    flashCards: [],
    currentCard: {},
    answer: false,
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    if (!this.state.answer) {
      FlashCardData.getFlashCards().then((response) => {
        this.setState({
          flashCards: response,
          currentCard: response[0],
        });
      });
    } else {
      const { flashCards } = this.state;
      const nextQuestion = flashCards.indexOf(this.state.currentCard) + 1;
      this.setState({
        answer: false,
        currentCard: flashCards[nextQuestion] || flashCards[0],
      });
    }
  }

  getCards = () => {
    FlashCardData.getFlashCards().then((response) => {
      this.setState({
        flashCards: response,
      });
    });
  }

  showAnswerToQuestion = (e) => {
    e.preventDefault();
    this.setState({
      answer: true,
    });
  }

  render() {
    const { answer, currentCard } = this.state;
    const showQuestion = () => <QuestionCard key={currentCard.firebaeKey} card={currentCard} showAnswer={this.showAnswerToQuestion}/>;
    const showAnswer = () => <AnswerCard key={currentCard.firebaeKey} card={currentCard} showNextQuestion={this.loadData}/>;
    return (
        <>
        <div className="d-flex justify-content-center">
        <AppModal title={'Create Flash Card'} buttonLabel={'Create Flash Card'}>
          <FlashCardForm onCreate={this.getCards} />
        </AppModal>
          </div>
        <div className="flash-card d-flex flex-wrap justify-content-center">

        {answer === false ? showQuestion() : showAnswer()}
      </div>
        </>
    );
  }
}
