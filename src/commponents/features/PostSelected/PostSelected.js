import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPostById } from "../../../redux/postsRedux";
import { Navigate } from 'react-router-dom';
import { Card } from "react-bootstrap";
import { Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { removePost } from "../../../redux/postsRedux";
import { dateToStr } from "../../../utils/dateToStr";

const PostSelected = () =>{

    const { postId } = useParams();
    const postData = useSelector(state => getPostById(state, postId));

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();

    const handleRemove = e => {
        e.preventDefault();
        dispatch(removePost(postData.id));
    }

    if(!postData) return <Navigate to="/" />

    else return (
        <article>
            <Card className="mx-auto" style={{ minWidth: '300px', maxWidth: '800px' }} border="light">
                <Card.Body>
                    <Stack direction="horizontal" gap={2} className='mb-4'>
                        <Card.Title className='mb-0'>
                            <h2>{postData.title}</h2>
                        </Card.Title>
                        <NavLink to={"/post/edit/" + postId} className="ms-auto">
                            <Button variant="outline-info">Edit</Button>
                        </NavLink>
                        <Button variant="outline-danger" onClick={handleShow}>Delete</Button>
                    </Stack>
                    <Stack direction="horizontal" gap={1}>
                        <Card.Subtitle>Author: </Card.Subtitle>
                        <Card.Text>{postData.author}</Card.Text>
                    </Stack>
                    <Stack direction="horizontal" gap={1}>
                        <Card.Subtitle>Published: </Card.Subtitle>
                        <Card.Text>{dateToStr(postData.publishedDate)}</Card.Text>
                    </Stack>
                    <Stack direction="horizontal" gap={1} className="mb-2">
                        <Card.Subtitle>Category: </Card.Subtitle>
                        <Card.Text>{postData.category}</Card.Text>
                    </Stack>
                    <Card.Text dangerouslySetInnerHTML={{ __html: postData.content }} />
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    This operation will completely remove this post from app.
                    <p> Are you sure, you want to do that?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="danger" onClick={handleRemove}>Remove</Button>
                </Modal.Footer>
            </Modal>
        </article>
        )
}

export default PostSelected;