import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';

import Navigation from '../components/Navigation';

function HomePage({ posts, search }) {
  if (!posts.length) {
    return <h1>Загрузка...</h1>;
  }

  return (
    <div>
      <Navigation search={search} />
      <CardColumns className='mt-4'>
        {posts.map((obj) => (
          <Card key={obj.id}>
            <Card.Img variant='top' src={obj.image} />
            <Card.Body>
              <Card.Title>
                <a href={`/post/${obj.id}`}>{obj.title}</a>
              </Card.Title>
              <Card.Text>{obj.text}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'>{obj.createdAt}</small>
            </Card.Footer>
          </Card>
        ))}
      </CardColumns>
    </div>
  );
}

export default HomePage;
