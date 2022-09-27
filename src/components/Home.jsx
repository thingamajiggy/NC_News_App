import {useState, useEffect} from 'react'
import axios from 'axios';

// const articlesApi = axios.create({
//     baseURL: "https://myfirstbackendproject.herokuapp.com/api"
// })

export const Home = () => {
    return (
        <div>
        </div>
    );
};

export default Home;

// import { Link } from 'react-router-dom';



// const Home = () => {
//     const [categories, setCategories] = useState([]);

//     useEffect(() => {
//         axios.get('https://herin-marketplace.herokuapp.com/api/categories').then((res) => {
//          setCategories(res.data.categories)
//         })
//     }, [])

//     return (
//         <div>
//             <h2>Find your items</h2>
//             <h2>Item category</h2>
//             <nav>
//                 <ol>
//                 {
//                 categories.map(({category_name}) => {
//                     return (
//                         <li key={category_name} >
//                         <Link to={`/categories/${category_name}`}>
//                             {category_name}
//                         </Link>
//                         </li>
//                     )
//                 })
//             }
//                 </ol>
//             </nav>

//         </div>
//     );
// };

