import Link from "next/link";
import Image from "next/image";
import { useAuth } from "../hooks/useAuth";

export default function Navbar() {
  const { login, user, logout, authReady } = useAuth();
  console.log(user);
  return (
    <div className="container">
      <nav>
        <Image src="/rupee.png" width={50} height={48} alt="logo" />
        <h1>Gaming Vibes</h1>
        <ul>
          {user && (
            <li>
              <span>Welcome, </span>
              {user.user_metadata.full_name}
            </li>
          )}
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/guide">Guides</Link>
          </li>
          {!user && (
            <button className="btn" onClick={login}>
              Login/Signup
            </button>
          )}
          {user && (
            <button className="btn" onClick={logout}>
              Logout
            </button>
          )}
        </ul>
      </nav>
      <div className="banner">
        <Image src="/banner.png" width={966} height={276} alt="banner" />
      </div>
    </div>
  );
}
