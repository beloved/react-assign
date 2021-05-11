
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <section className="item1">
          <h1>Learn to code by watching others</h1>
          <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
            but understanding how developers think is invaluable.</p>
        </section>
        <section className="item2">
          <div>
            <button type="submit"><span>Try it free 7 days</span> then $20/mo. thereafter</button>
          </div>
          <form>
            <input type="text" name="firstname" placeholder="First Name"/><br/>
              <input type="text" name="lastname" placeholder="Last Name"/><br/>
                <input type="email" name="email" placeholder="Email Address"/><br/>
                  <input type="password" name="password" placeholder="Password"/><br/>
                    <button type="submit">CLAIM YOUR FREE TRIAL</button>
                    <p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
          </form>
        </section>
      </div>
    </div>
  );
}

export default App;
