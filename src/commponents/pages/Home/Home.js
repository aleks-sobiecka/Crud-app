import AllPosts from "../../features/AllPosts/AllPosts";
import { Button } from "react-bootstrap";
import { Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Home = () =>{
    return (
        <section>
            <Stack direction="horizontal" gap={3} className='mb-3'>
                <h1>All Posts</h1>
                <NavLink to={"/post/add"} className="ms-auto">
                    <Button variant="outline-info">Add Post</Button>
                </NavLink>
            </Stack>
            <AllPosts />
        </section>
    )


}

export default Home;