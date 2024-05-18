
import './App.css';
import { useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating'

function App() {

  const [products, setProducts] = useState([]);
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0)
  const [show, setShow] = useState(false)

  const fetchData = async () => {
    const resp = await fetch("https://fakestoreapi.com/products");
    const respJSON = await resp.json()
    setProducts(respJSON)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFeedback(feedback)
    localStorage.setItem("feedback", feedback)
    localStorage.setItem("rating", rating)
    setFeedback('')
    handleReset()
    setShow(true)
  }

  const handleReset = () => {
    setRating(0)
  }

  const handleRating = (rate) => {
    setRating(rate)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <h1 className='header'>Products</h1>
      <div className="product_container">

        {products.map((product) => {
          return <div className='product'>
            <h3>{product.title}</h3>
            <img src={product.image} alt="product img not found" />
            <p className='description'>{product.description}</p>
          </div>
        })}
      </div>

      <h2 className='header'>Feedback Form</h2>
      <form onSubmit={handleSubmit} className='feedback_form'>
        <input type='text' placeholder='Enter your feedback' value={feedback} onChange={(e) => setFeedback(e.target.value)} />
        <Rating
          onClick={handleRating} initialValue={rating}
        />

        <button>submit</button>
      </form>
      {show && <p className='submitted'>Thanks for submitting the feedback!!</p>}
    </>
  );
}

export default App; 
