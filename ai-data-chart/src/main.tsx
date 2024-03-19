import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux';
import store from "./redux/store"

const AppIndex = () => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(

    <AppIndex/>
 
)
