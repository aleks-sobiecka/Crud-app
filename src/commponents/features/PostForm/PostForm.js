//import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

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
            <Button type="submit">{actionText}</Button>
        </Form>
    )
}

/* PostForm.propTypes = {
    actionText: propTypes.string.isRequired;
} */

export default PostForm;