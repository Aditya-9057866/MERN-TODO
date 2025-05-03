import React from 'react';
import MainScreen from '../components/MainScreen';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import notes from '../notes';

const MyNotes = () => {
  return (
    <MainScreen title="Welcome Back Aditya..">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>

      {notes.map((note) => (
        <Card key={note._id} style={{ margin: 10 }}>
          <Card.Header style={{ display: 'flex' }}>
            <span
              style={{
                color: 'black',
                textDecoration: 'none',
                flex: 1,
                cursor: 'pointer',
                alignSelf: 'center',
                fontSize: 18,
              }}
            >
              {note.title}
            </span>
            <div>
              <Button variant="primary">Edit</Button>
              <Button variant="danger" className="mx-2">
                Delete
              </Button>
            </div>
          </Card.Header>
        </Card>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
