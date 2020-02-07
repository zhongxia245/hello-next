import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

const Page = () => {
  const router = useRouter();
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p>

      <div>
        <p>{count}</p>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </Layout>
  );
};

export default Page;
