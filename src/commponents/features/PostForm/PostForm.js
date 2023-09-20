import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoriesRedux';

const PostForm = ({ action, actionText, ...props }) => {

    const categories = useSelector(getAllCategories);

    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');
    const [category, setCategory] = useState(props.category || '');
    const [contentError, setContentError] = useState(false);
    const [dateError, setDateError] = useState(false);

    const handleSubmit = () => {
        setContentError(!content)
        setDateError(!publishedDate)
        if(content && publishedDate) {
            action({ title, author, publishedDate, category, shortDescription, content })
        }
      };
    
    
    return (
        <Form onSubmit={validate(handleSubmit)} className="">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{ width: '300px' }}>
                <Form.Label>Title</Form.Label>
                <Form.Control {...register("title", { required: true, minLength: 3 })} 
                    type="text" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} />
                {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min is 3)</small>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{ width: '300px' }}>
                <Form.Label>Author</Form.Label>
                <Form.Control {...register("title", { required: true, minLength: 3 })} 
                    type="text" placeholder="Enter author" value={author} onChange={e => setAuthor(e.target.value)} />
                {errors.title && <small className="d-block form-text text-danger mt-2">Author is too short (min is 3)</small>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{ width: '300px' }}>
                <Form.Label>Published</Form.Label><br />
                <ReactDatePicker placeholder="mm/dd/yyyy" selected={publishedDate} onChange={(date) => setPublishedDate(date)} />
                {contentError && <small className="d-block form-text text-danger mt-2">This field is required</small>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{ width: '300px' }}>
                <Form.Label>Category</Form.Label>
                <Form.Select {...register("item", { required: true })} 
                aria-label="Default select example" value={category} onChange={e => setCategory(e.target.value) }>
                    <option value=''>Select category...</option>
                    {categories.map( category =>
                        <option key={category}>{category}</option>
                    )}
                </Form.Select>
                {errors.item && <small className="d-block form-text text-danger mt-2">Select category</small>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{ minWidth: '300px' }}>
                <Form.Label>Short description</Form.Label>
                <Form.Control {...register("title", { required: true, minLength: 20 })} 
                as="textarea" rows={3} placeholder="Leave a comment here" value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
                {errors.title && <small className="d-block form-text text-danger mt-2">Description is too short (min is 20)</small>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{ minWidth: '300px' }}>
                <Form.Label>Main content</Form.Label>
                <ReactQuill theme="snow" value={content} onChange={setContent} />
                {contentError && <small className="d-block form-text text-danger mt-2">This field is required</small>}
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