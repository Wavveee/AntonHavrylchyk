
import './App.css';

const Header = () => {
  return (
    <header className='header'>

      <input type='text' className='text-input header__input'></input>

      <h1>Blog name</h1>

      <div className='social-container header__social-container'>
        <div className='social-icon'></div>
        <div className='social-icon'></div>
        <div className='social-icon'></div>
        <div className='social-icon'></div>
        <div className='social-icon'></div>
      </div>
    </header>
  )
}

const Banner = () => {
  return (
    <div className='banner'>
      <p>Full-width banner image</p>
    </div>
  )
}

const BlogElement = () => {
  return (
    <div className='blog__publication'>
    </div>
  )
}

const NewsElement = () => {
  return (
    <div className='news__article '>
    </div>
  )
}

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Banner/>

      <div className='main'>
        <section className='blog'>
          <h2>Blog</h2>

          <BlogElement/>
          <BlogElement/>
          <BlogElement/>
          <BlogElement/>
          <BlogElement/>
        </section>

        <section className='news'>
          <h2>News</h2>

          <NewsElement/>
          <NewsElement/>
          <NewsElement/>
        </section>
      </div>
    </div>
  );
}

export default App;
