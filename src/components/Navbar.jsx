let styles = {
    background: "bg-red-500", 
    text: "text-yellow-600",
    all: [{
        test1: "1",
        test2: "2"
    }]
};

const Navbar = () => {
  return (
    <nav className={styles.background && styles.text}>
        <ul>
            <li>
                <a href="#">rendome</a>
            </li>
        </ul>
    </nav>
  );
};

export default Navbar;

