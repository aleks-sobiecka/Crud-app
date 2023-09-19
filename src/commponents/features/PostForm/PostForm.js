import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PostForm = ({ action, actionText, ...props }) => {

    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');

    const handleSubmit = e => {
        e.preventDefault();
        action({ title, author, publishedDate, shortDescription, content });
      };
    
    
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
                <Form.Label>Published</Form.Label><br />
                <ReactDatePicker placeholder="Enter date" selected={publishedDate} onChange={(date) => setPublishedDate(date)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{ minWidth: '300px' }}>
                <Form.Label>Short description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Leave a comment here" value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{ minWidth: '300px' }}>
                <Form.Label>Main content</Form.Label>
                <ReactQuill theme="snow" value={content} onChange={setContent} />
            </Form.Group>
            <Button type="submit">{actionText}</Button>
        </Form>
    )
}

PostForm.propTypes = {
    actionText: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
} 

export default PostForm;