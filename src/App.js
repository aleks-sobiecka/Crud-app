import { Routes, Route } from 'react-router-dom';
import Home from './commponents/pages/Home/Home';
import Post from './commponents/pages/Post/Post';
import AddPost from './commponents/pages/AddPost/AddPost';
import EditPost from './commponents/pages/EditPost/EditPost';
import About from './commponents/pages/About/About';
import NotFound from './commponents/pages/NotFound/NotFound';


const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/add" element={<AddPost />} />
        <Route path="/post/edit/:id" element={<EditPost />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
