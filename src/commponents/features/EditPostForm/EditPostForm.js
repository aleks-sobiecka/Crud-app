import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPostById } from "../../../redux/postsRedux";
import { useDispatch } from 'react-redux';
import { editPost } from "../../../redux/postsRedux";
import { useNavigate } from "react-router-dom";
import PostForm from '../PostForm/PostForm';
import { Navigate } from "react-router-dom";

const EditPostForm = () => {

    const { postId } = useParams();
    const postData = useSelector(state => getPostById(state, postId));

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = post => {
        dispatch(editPost({...post, postId }));
        navigate('/')
    }

    if (!postData) return <Navigate to="/" />
    return (
        <PostForm action={handleSubmit} 
            actionText="Edit post" 
            title={postData.title} 
            author={postData.author}
            publishedDate={postData.publishedDate} 
            shortDescription={postData.shortDescription} 
            content={postData.content}/>
      )
};

export default EditPostForm;