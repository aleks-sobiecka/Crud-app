import { getAllCategories } from "../../../redux/categoriesRedux";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const AllCategories = () =>{

    const categories = useSelector(getAllCategories);

    return (
        <section className="mx-auto" style={{ minWidth: '300px', maxWidth: '800px' }} >
            <h1>All Categories</h1>
            <ListGroup>
            {categories.map(category => 
                <ListGroup.Item>
                    <Nav.Link as={NavLink} to={"/categories/" + category }>{category}</Nav.Link>
                </ListGroup.Item>
                )}
            </ListGroup>
        </section>)
}

export default AllCategories;