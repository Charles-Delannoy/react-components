import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  const img1 = "https://meetanentrepreneur.lu/wp-content/uploads/2019/08/profil-linkedin-300x300.jpg";
  const img2 = "https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2018.2F10.2F19.2Fb5dd5ca8-643f-44eb-bef3-8db97c9ce4c5.2Ejpeg/1200x1200/quality/80/crop-from/center/focus-point/3283%2C1652/5-cles-pour-reussir-sa-photo-de-profil-facebook.jpeg";
  const img3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHPW2-Xks5_PAbdaIgAyxKPG2uo8OxyNLIGA&usqp=CAU";
  return (
    <div className="ui container comments">
      <CommentDetail
        avatar={img1}
        name="Sam"
        text="Hi there!"
        date="Today at 6:00PM"
      />
      <CommentDetail
        avatar={img2}
        name="Jane"
        text="Let dive into React"
        date="Today at 6:23PM"
      />
      <CommentDetail
        avatar={img3}
        name="Jon"
        text="Great"
        date="Today at 7:03PM"
      />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
