import React, { useEffect,useState } from 'react';
import MainScreen from '../components/MainScreen';
import { Link } from 'react-router-dom';
import { Button, Card,Badge } from 'react-bootstrap';
// import notes from '../notes';
import axios from "axios"

const MyNotes = () => {
  const [notes, setNotes] = useState([])

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      console.log(`Deleting note with id: ${id}`);
    }
  };
  
  const fetchNotes = async () => {
    const { data } = await axios.get("/api/notes")
    setNotes(data.default)
    console.log(data)
  }
  console.log(notes)
  useEffect(() => {
    fetchNotes();
   },[])
  return (
    <MainScreen title="Welcome Back Aditya..">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>

      {notes.map((note) => (
        <Card key={note.id} style={{ margin: 10 }}>
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
            <Button href={`/notes/${ note.id}`}>Edit</Button>
              <Button
                variant="danger"
                className="mx-2"
                onClick={() => deleteHandler( note.id)}
              >
                Delete
              </Button>
              </div>
          </Card.Header>
          <Card.Body>
                    <h4>
                      <Badge className='bg-success'>
                        Category - {note.category}
                      </Badge>
                    </h4>
                    <blockquote className="blockquote mb-0">
                      {note.content}
                     
                    </blockquote>
                  </Card.Body>
        </Card>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
