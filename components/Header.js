import Link from "next/link";

const headerStyle = {
  content: {
    padding: 10
  },
  gap: {
    padding: "0 10px"
  }
};

export default () => {
  return (
    <header style={headerStyle.content}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <span style={headerStyle.gap}>|</span>
      <Link href="/about">
        <a>About</a>
      </Link>
      <span style={headerStyle.gap}>|</span>
      {/* 直接进行页面跳转 */}
      <a href="/about" title="about">
        a标签跳转到 about
      </a>
      <hr />
    </header>
  );
};
