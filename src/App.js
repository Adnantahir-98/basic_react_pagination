import {useState, useEffect} from 'react'
import axios from 'axios'
import Posts from './components/Posts'
import Pagination from './components/Pagination'
import{Container, Row, Col} from 'react-bootstrap'


function App() {

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data)
      setLoading(false)
    }
    fetchPosts()
  }, [])

  // Get Current Posts Slice
  const indexOfLastPost = currentPage * postsPerPage
  const indexofFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexofFirstPost, indexOfLastPost)

  // Change Pages onClick
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div>
      <Container>
        <Row>
          <Col md={6} className='m-auto'>
            <h2 className='mt-3 text-center text-info'>React Js Simple Pagination</h2>
            <p className='mb-4 text-center text-primary'>
              Pagination using JsonPlaceholder API and Axios
            </p>

            <Posts loading={loading} posts={currentPosts} />
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
