import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail name="Sam" text="Hi there!" date="Today at 6:00PM"/>
      <CommentDetail name="Jane" text="Let dive into React" date="Today at 6:23PM"/>
      <CommentDetail name="Jon" text="Great" date="Today at 7:03PM"/>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
