

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Dream Calendar</h1>
      {/* <img src={coverImage} alt="techy triangles"></img> */}
      {props.children}
    </header>
  );
}

export default Header;
