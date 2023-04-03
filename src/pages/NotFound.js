import { Link } from "react-router-dom";


export default function NotFound() {
  return (
    <div>
      <h2>Page Missing!!</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, nostrum temporibus quas nihil cum placeat esse ut harum blanditiis animi!</p>
      <p>This way to the <Link to="/">Homepage</Link>. </p>
    </div>
  )
}
