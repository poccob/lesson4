import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function FullPostPage() {
  const [post, setPost] = React.useState();
  const [comments, setComments] = React.useState();
  const postId = window.location.pathname.split('/').pop();

  React.useEffect(() => {
    async function fetchPost() {
      const { data } = await axios.get(
        'https://5c3755177820ff0014d92711.mockapi.io/posts/' + postId,
      );
      setPost(data);
    }

    async function fetchComments() {
      const { data } = await axios.get(
        'https://5c3755177820ff0014d92711.mockapi.io/posts/' + postId + '/comments',
      );
      setComments(data);
    }

    fetchPost();
    fetchComments();
  }, [postId]);

  if (!post || !comments) {
    return <h1>Загрузка...</h1>;
  }

  return (
    <div className='mt-5'>
      <a href='/'>
        <Button variant='success'>Назад</Button>
      </a>
      <Card className='mt-4'>
        <Card.Img variant='top' src={post.image} />
        <Card.Body>
          <Card.Title>
            <p>{post.title}</p>
          </Card.Title>
          <Card.Text>{post.text}</Card.Text>
          <Card.Text>
            <b>Autor:</b> {post.name}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'>{post.createdAt}</small>
        </Card.Footer>
      </Card>
      <h3 className='mb-3 mt-4'>Комментарии:</h3>
      {comments.map((comment) => (
        <Card key={comment.id} className='mb-4'>
          <Card.Body>
            <Card.Subtitle className='mb-2'>{comment.name}</Card.Subtitle>
            {comment.text}
          </Card.Body>
        </Card>
      ))}
      <br />
    </div>
  );
}

export default FullPostPage;
