import AddPostForm from "../../features/AddPostForm/AddPostForm";
import { Container } from "react-bootstrap";

const AddPost = () =>{
    return (
        <section>
            <Container className='mx-auto' style={{ minWidth: '300px', maxWidth: '800px' }}>
                <h1>Add post</h1>
                <AddPostForm />
            </Container>
        </section>
    )
}

export default AddPost;