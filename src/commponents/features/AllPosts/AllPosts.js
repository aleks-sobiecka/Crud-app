import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsRedux";
import { Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { dateToStr } from "../../../utils/dateToStr";

const AllPosts = () => {

    const posts = useSelector(getAllPosts);

    return (
        <article>
            <Row lg={3}>
                {posts.map(post => 
                    <Col key={post.id}>
                        <Card className="mr-2 mb-3" style={{ minWidth: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Stack direction="horizontal" gap={1}>
                                    <Card.Subtitle>Author: </Card.Subtitle>
                                    <Card.Text>{post.author}</Card.Text>
                                </Stack>
                                <Stack direction="horizontal" gap={1} className="mb-2">
                                    <Card.Subtitle>Published: </Card.Subtitle>
                                    <Card.Text>{dateToStr(post.publishedDate)}</Card.Text>
                                </Stack>
                                <Card.Text>{post.shortDescription}</Card.Text>
                                <NavLink to={"/post/" + post.id}>
                                    <Button variant="primary">Read more</Button>
                                </NavLink>
                            </Card.Body>
                        </Card>
                    </Col>)}
            </Row>
        </article>
    )
}

export default AllPosts;

