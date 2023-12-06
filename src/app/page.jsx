import Image from "next/image";
import "./style.css";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <main>
      <div className="row">
        <div className="col-2">
          <Nav />
        </div>
        <div className="col-10"></div>
      </div>
    </main>
  );
}
