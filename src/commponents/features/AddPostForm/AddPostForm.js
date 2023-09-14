import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addPost } from '../../../redux/postsRedux';
import { Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';

const AddPostForm = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishedDate, setPublishedDate] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addPost({ title, author, publishedDate, shortDescription, content }));
        setTitle('');
        setAuthor('');
        setPublishedDate('');
        setShortDescription('');
        setContent('');
        navigate('/')
    }

    return (
        <Form onSubmit={handleSubmit} className="">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{ width: '300px' }}>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{ width: '300px' }}>
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" placeholder="Enter author" value={author} onChange={e => setAuthor(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{ width: '300px' }}>
                <Form.Label>Published</Form.Label>
                <Form.Control type="text" placeholder="Enter date" value={publishedDate} onChange={e => setPublishedDate(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{ minWidth: '300px' }}>
                <Form.Label>Short description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Leave a comment here" value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{ minWidth: '300px' }}>
                <Form.Label>Main content</Form.Label>
                <Form.Control as="textarea" rows={10} placeholder="Leave a comment here" value={content} onChange={e => setContent(e.target.value)} />
            </Form.Group>
            <Button type="submit">Add Post</Button>
        </Form>
        
    )
}

export default AddPostForm;