
export default function Search() {
  return (
    <div className='container'>
      <nav className="nav">
        <div className="">
          <form className="" role="search">
            <input className="search--bar" type="search" placeholder="Search" aria-label="Search"/>
                      
            <button className="btn" type="submit">Search</button>
          </form>
        </div>
      </nav> 
    </div>
  );
}