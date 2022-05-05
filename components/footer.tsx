import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <Link href={"/"}>
        <a>Matt - {new Date().getFullYear()}</a>
      </Link>
    </footer>
  );
}
