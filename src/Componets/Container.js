import React, { Component } from 'react';
import Details from './Details';
import Question from './Question';
import { v4 as uuidv4 } from 'uuid';
import { initializeApp } from 'firebase/app'; // Import initializeApp directly
import { getDatabase, ref, set } from 'firebase/database'; // Import database functions

const firebaseConfig = {
  apiKey: "AIzaSyBF1fN13MREORsN29IoeQ0ndzcYv4k8P_U",
  authDomain: "my-first-project-on-fire-978cb.firebaseapp.com",
  databaseURL: "https://my-first-project-on-fire-978cb-default-rtdb.firebaseio.com",
  projectId: "my-first-project-on-fire-978cb",
  storageBucket: "my-first-project-on-fire-978cb.appspot.com",
  messagingSenderId: "1090371323601",
  appId: "1:1090371323601:web:fbe4d2353fbf4e567867f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

class Container extends Component{
  constructor(props) {
    super(props);

    this.state = {
      // for the specific person in the firebase the unique id is genrated by uuid
      id: uuidv4(),
      name: null,
      email: null,
      issubmitted: false,
      questions: {
        q1: null,
        q2: null,
        q3: null,
        other: null,
      },
    };
  }

  detailsubmithandler = (event) => {
    event.preventDefault();

    // basically it take the value from the input while the user is changing
    const name = event.target.name.value;
    const email = event.target.email.value;
    this.setState({ name, email });
  };

  questionsubmithandler = (event) => {
    event.preventDefault();
    const questions = {
      q1: event.target.q1.value,
      q2: event.target.q2.value,
      q3: event.target.q3.value,
      other: event.target.other.value,
    };

    this.setState({ questions, issubmitted: true });

    // Set data in Firebase
    set(ref(database, `Firebase/${this.state.id}`), {
      name: this.state.name,
      email: this.state.email,
      questions: questions,
    });
  };

  render() {
    return (
      <>
        <div className="container-fluid ">
          <div className="container-fluid card mt-2 rounded bg-dark p-3">
            <h1 className="text-center text-white" style={{fontWeight:"600"}}>withAli.j Channel</h1>
          </div>
        </div>
        {
        this.state.issubmitted ? (
          <div className="card text-center mt-1 rounded" style={{maxWidth:"400px",marginLeft:"550px"}}>
            <h1>Thank you</h1>
          </div>
        ) : this.state.name === null && this.state.email === null ? (
          <Details submit={this.detailsubmithandler} />
        ) : (
          <Question submit={this.questionsubmithandler} />
        )}
      </>
    );
  }
}

export default Container;

