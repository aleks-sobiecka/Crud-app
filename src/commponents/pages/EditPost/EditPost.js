import { Container } from "react-bootstrap";
import EditPostForm from "../../features/EditPostForm/EditPostForm";

const EditPost = () =>{
    return (
        <section>
            <Container className='mx-auto' style={{ minWidth: '300px', maxWidth: '800px' }}>
                <h1>Edit post</h1>
                <EditPostForm />
            </Container>
        </section>
    )

}

export default EditPost;