import { Nav, NavItem } from "reactstrap";
import Link from "next/link";

export default function Header() {
  return (
    <div className="container bg-light p-3 rounded-4">
      <Nav className="row justify-content-between">
        <div className="col-6 px-4">
          <Link href={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              height="1rem"
              fill="fill"
              class="bi bi-house-door-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
            </svg>
          </Link>
        </div>
        <div className="col-2 row ">
          <NavItem className="col-4">
            <Link href="#">About</Link>
          </NavItem>
          <NavItem className="col-4 ">
            <Link href="#">Contact</Link>
          </NavItem>
        </div>
      </Nav>
    </div>
  );
}
