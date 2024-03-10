import { NavLink } from "react-router-dom";
function SideNav() {
  return (
    <>
      <div className="flex bg-[rgb(255,162,0)] w-[10%] h-screen overflow-auto pl-1.5 pr-[3px] py-[5px]">
        <ul>
          <li className="text-3xl list-none no-underline px-[15px] py-[18px]">
            <NavLink to="/about/1">Side 1</NavLink>
          </li>
          <li className="text-3xl list-none no-underline px-[15px] py-[18px]">
            <NavLink to="/about/2">Side 2</NavLink>
          </li>
          <li className="text-3xl list-none no-underline px-[15px] py-[18px]">
            <NavLink to="/about/3">Side 3</NavLink>
          </li>
          <li className="text-3xl list-none no-underline px-[15px] py-[18px]">
            <NavLink to="/about/4">Side 4</NavLink>
          </li>
          <li className="text-3xl list-none no-underline px-[15px] py-[18px]">
            <NavLink to="/about/5">Side 5</NavLink>
          </li>
          <li className="text-3xl list-none no-underline px-[15px] py-[18px]">
            <NavLink to="/about/6">Side 6</NavLink>
          </li>
          <li className="text-3xl list-none no-underline px-[15px] py-[18px]">
            <NavLink to="/about/side7">Side 7</NavLink>
          </li>
          <li className="text-3xl list-none no-underline px-[15px] py-[18px]">
            <NavLink to="/about/side8">Side 8</NavLink>
          </li>
          <li className="text-3xl list-none no-underline px-[15px] py-[18px]">
            <NavLink to="/about/side9">Side9</NavLink>
          </li>
          <li className="text-3xl list-none no-underline px-[15px] py-[18px]">
            <NavLink to="/about/side10">Side 10</NavLink>
          </li>
          <li className="text-3xl list-none no-underline px-[15px] py-[18px]">
            <NavLink to="/about/side11">Side 11</NavLink>
          </li>
          <li className="text-3xl list-none no-underline px-[15px] py-[18px]">
            <NavLink to="/about/side12">Side 12</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideNav;
