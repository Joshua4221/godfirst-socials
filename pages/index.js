import Head from "next/head";
import NavBar from "../universal-component/Nav";
import SignIn from "../Components/SignIn";

export default function Home({ onclick }) {
  return (
    <div>
      <NavBar onclick={onclick} />
      <div>
        <SignIn />
      </div>
    </div>
  );
}
