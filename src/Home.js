import React, { useState ,useEffect} from 'react'
import Blogslist from './Blogslist';

function Home() {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])
    const[name,setName]=useState("mohan")
    const handleDelete = (id) => {
        const newblogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newblogs);
    }
    useEffect(() => {
        console.log('use Effect run');
        console.log(name);
    },[name]);
     
    return (
        <div className='home'>
            <Blogslist blogs={blogs} title="All Blogs" handleDelete={handleDelete} />  
            <button onClick={() => setName("Bharani")}>change name</button>
            <p>{name}</p>
        </div>
    );
}
export default Home;