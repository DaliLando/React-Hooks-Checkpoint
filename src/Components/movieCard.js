import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MovieCard({item}) {
  return (
    <Card style={{ width: '18rem', margin:"10px"}}>
      <Card.Img variant="top" src={item.imgURL} height={300} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        <Button variant="primary">{`${item.rating} ★`}</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;