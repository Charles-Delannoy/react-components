import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail name="Sam" text="Hi there!"/>
      <CommentDetail name="Jane" text="Let dive into React"/>
      <CommentDetail name="Jon" text="Great"/>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
