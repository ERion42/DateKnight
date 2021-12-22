import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Go from './images/Go-out.jpg';
import Stay from './images/stay-in.jpg';
import Events from './images/event.jpg';
import Event from '../components/eventDate';
import './Profile.css';
import history from '../utils/history';



const Profile = () => {
return (
    <div>
       
    <div className='container'>
    
     {/* <textarea>

     </textarea>

     <div className='Image-Row'>
     <img className='image-spacing' src={Go} alt='img'></img>
     <img className='image-spacing'  src={Stay} alt='img'></img>
     <img className='image-spacing'  src={Event} alt='img'></img>
     </div>

     <div className='Button-Row'>
         <button>Event Finder</button>
         <button>Go-Out</button>
         <button>Stay In </button>
     </div> */}
     <Card style={{ width: '18rem', display: 'flex' }} className='inline'>
  <Card.Img variant="top" src={Go} />
  <Card.Body style={{flex: 1}}>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" onClick={() => history.push('/event')}>EVENT</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem', display: 'flex' }} className='inline'>
  <Card.Img variant="top" src={Stay} />
  <Card.Body style={{flex: 1}}>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem', display: 'flex' }} className='inline'>
  <Card.Img variant="top" src={Events} />
  <Card.Body style={{flex: 1}}>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>


  
     </div>
    </div>
);



}

export default Profile;