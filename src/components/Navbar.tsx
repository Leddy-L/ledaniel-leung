function Navbar() {
  const navItems = ["About", "Experience", "Projects"];

  return (
    <nav className="sticky inset-0 bg-slate-900">
        <div className="ms-auto">
          {navItems.map((nav_item) => (
            <a href={`#${nav_item}`}>{nav_item}</a>
          ))}
        </div>
    </nav>
  );
}

export default Navbar;
