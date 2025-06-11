import Link from "next/link"

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link href="/ssr"> Server Side Rendering</Link>
          </li>
          <li>
            <Link href="/ssg"> Static Side Generation</Link>
          </li>
          <li>
            <Link href="/about"> About Page</Link>
          </li>
          <li>
            <Link href="/contact"> Contact Page</Link>
          </li>
          <li>
            <Link href="/services"> Service Page</Link>
          </li>
          <li>
            <Link href="/blogs"> Blog Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Home