import './App.css';

function App() {
  return (
    <div className='border'>
      <h1 className='head'>Sign In</h1>
      <div className='email'>
        Enter your Email ID
        <form>
          <input type='email' placeholder='xyz@gmail.com'></input>
        </form>
      </div>
      <div className='pass'>
        Enter your password
        <form>
          <input type='password'></input>
        </form>
      </div>
    </div>
  );
}

export default App;
