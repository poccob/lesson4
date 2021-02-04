import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function Navigation({ search }) {
  const pathName = window.location.pathname;

  return (
    <Navbar bg='dark' variant='dark' className='mt-4 mb-3'>
      <Navbar.Brand href='/'>Бложик</Navbar.Brand>
      <Nav className='mr-auto' activeKey={pathName}>
        <Nav.Link href='/'>Главная</Nav.Link>
        <Nav.Link href='/about'>Обо мне</Nav.Link>
      </Nav>
      <Form inline onSubmit={search}>
        <FormControl type='text' placeholder='Поиск статьи...' className='mr-3' />
        <Button type='submit' variant='outline-success'>
          Найти
        </Button>
      </Form>
    </Navbar>
  );
}

export default Navigation;
