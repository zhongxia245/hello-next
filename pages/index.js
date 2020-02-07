import Link from "next/link";
import Axios from "axios";
import Layout from "../components/Layout";

const PostLink = props => (
  <li>
    {/* 动态路由必须这样使用，否则会变成页面刷新跳转，而不是单页面的跳转方式 */}
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

function Index({ data = [] }) {
  console.log(data);
  return (
    <Layout>
      <ul>
        {data.map((item, index) => (
          <PostLink key={index} id={item.id} title={item.title} />
        ))}
      </ul>
    </Layout>
  );
}

// 如果写了这个函数，必须要有返回对象，否则就报错
Index.getInitialProps = async function() {
  console.log("getInitialProps");
  let data = await Axios.get("https://cnodejs.org/api/v1/topics").then(resp => {
    return resp.data.data;
  });

  return { data: data };
};

export default Index;
