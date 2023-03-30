import './globals.css';
import { Inter } from 'next/font/google'
import Layout from './layout1'
import 'bootstrap/dist/css/bootstrap.css';
import Read from './read/page';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='container_main'>
      <div className="form_container text-light text-center p-5 fs-3 fw-bold">
        <p className="mb-5">React CRUD Operations</p>
        <Layout children={<Read />}/>
      </div>
    </div>
  )
}
