import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import App from './App.jsx'
import Components from './Components.jsx';
import Ans from './Ans.jsx';
import ParentComponent from './Props-State.jsx';

createRoot(document.getElementById('root')).render(
<>
<App />
<Components />
<Ans />
<ParentComponent />
</>
)
