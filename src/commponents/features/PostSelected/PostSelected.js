import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPostById } from "../../../redux/postsRedux";
import { Navigate } from 'react-router-dom';
import { Card } from "react-bootstrap";
import { Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

const PostSelected = () =>{

    const { postId } = useParams();
    const postData = useSelector(state => getPostById(state, postId));

    if(!postData) return <Navigate to="/" />

    else return (
        <Card className="mx-auto" style={{ minWidth: '300px', maxWidth: '800px' }} border="light">
            <Card.Body>
                <Stack direction="horizontal" gap={2} className='mb-4'>
                    <Card.Title className='mb-0'>
                        <h2>{postData.title}</h2>
                    </Card.Title>
                    <NavLink to={"/post/edit/" + postData.id} className="ms-auto">
                        <Button variant="outline-info">Edit</Button>
                    </NavLink>
                    <Button variant="outline-danger">Delete</Button>
                </Stack>
                <Stack direction="horizontal" gap={1}>
                    <Card.Subtitle>Author: </Card.Subtitle>
                    <Card.Text>{postData.author}</Card.Text>
                </Stack>
                <Stack direction="horizontal" gap={1} className="mb-2">
                    <Card.Subtitle>Published: </Card.Subtitle>
                    <Card.Text>{postData.publishedDate}</Card.Text>
                </Stack>
                <Card.Text>{postData.content}</Card.Text>
            </Card.Body>
        </Card>

        )
}

export default PostSelected;