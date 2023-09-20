import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPostsByCategory } from "../../../redux/postsRedux";
import { Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Stack } from "react-bootstrap";
import { dateToStr } from "../../../utils/dateToStr";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

const Category = () =>{

    const { categoryName } = useParams();
    const posts = useSelector(state => getPostsByCategory(state, categoryName));

    if(posts.length === 0 ) return (
        <article>
            <h1 className="mb-4">Category: {categoryName}</h1>
            <p>No posts in this category...</p>
        </article>
    )

    else return (
        <article>
            <h1 className="mb-4">Category: {categoryName}</h1>
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
                                <Stack direction="horizontal" gap={1}>
                                    <Card.Subtitle>Published: </Card.Subtitle>
                                    <Card.Text>{dateToStr(post.publishedDate)}</Card.Text>
                                </Stack>
                                <Stack direction="horizontal" gap={1} className="mb-2">
                                    <Card.Subtitle>Category: </Card.Subtitle>
                                    <Card.Text>{post.category}</Card.Text>
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

export default Category;