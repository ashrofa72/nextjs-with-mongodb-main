import Link from 'next/link';


const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Ashraf Electronics</h1>
      </div>
      <div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/Signin"><a>Signin</a></Link>
      <Link href="/schoolinfos"><a>Schoolinfo</a></Link>
      <Link href="/goldprice"><a>Gold</a></Link>
      <Link href="/dashboard"><a>Dashboard</a></Link>
      <Link href="/placeholder"><a>PlaceHolder</a></Link>
      </div>
    </nav>
);
}
 
export default Navbar;
  