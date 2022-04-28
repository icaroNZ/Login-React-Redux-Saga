import './App.css';
import { useDispatch } from 'react-redux';
import { getWaxUserAction, logoutUserAction } from './actions/waxActions';

function App() {
  // const getWax = async () => {
  //   window.addEventListener('message', (event) => {
  //     console.log('Event', event);
  //     window.ReactNativeWebView.postMessage(JSON.stringify(event));
  //     document.ReactNativeWebView.postMessage(JSON.stringify(event));
  //   });
  //   console.log('Getting Wax');
  //   const wax = new waxjs.WaxJS({
  //     rpcEndpoint: 'https://wax.greymass.com',
  //   });
  //   const userAccount = await wax.login();
  //   console.log(userAccount);
  // };
  const dispatch = useDispatch();
  const getWax = () => {
    dispatch(getWaxUserAction());
  };
  const logout = () => {
    dispatch(logoutUserAction());
  };
  return (
    <div className='App'>
      <h1>WAX</h1>
      <button onClick={getWax}>GetWax</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default App;
