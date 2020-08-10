import React from 'react';
import axios from 'axios';
import ChatBot from 'react-simple-chatbot';
import './Navbar.css';
import SendIcon from '@material-ui/icons/Send';

class Chatbot extends React.Component {
  state = {
    advice: '',
  }

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;

        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="app">

			<ChatBot
			  steps={[
			    {
				  id: '1',
				  component: (
        <div className= "chatbot"> 
          <h1> Hey There </h1>
          <h3> Ask us anything, Share youre feedback </h3>
         </div>
      ),
				  trigger: '2',
				},
        {
          id: '2',
          options: [
              { value: 1, label: 'Start a Conversation', trigger: '3' }],
          trigger: '3',
        },
				{
				  id: '3',
				  message: ({ previousValue, steps }) => this.state.advice,
				  trigger: ({ value, steps }) => '3',
          end: true
				},



			  ]}
			/>
		</div>

    );
  }
}

export default Chatbot;
