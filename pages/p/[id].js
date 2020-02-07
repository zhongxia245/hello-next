import { useRouter } from "next/router";
import Axios from "axios";
import Layout from "../../components/Layout";

const Demo = () => {
  return <h1>DDDDDDDD</h1>;
};

export default function Post({ data = {} }) {
  const router = useRouter();

  return (
    <Layout>
      <Demo />
      <h1>{router.query.id}</h1>
      {/* https://flaviocopes.com/react-fix-dangerouslysetinnerhtml-did-not-match/ */}
      {/* 这里如果用 p 标签，则不可以，会报错，用 div 即可 */}
      <div dangerouslySetInnerHTML={{ __html: data.content }}></div>

      {/* 使用 global，在该路由下，样式对所有节点有效 */}
      {/* 不加 global，则只对该组件有效，对子组件无效 */}
      <style jsx global>{`
        h1 {
          color: red;
        }
        img {
          width: 100%;
        }
      `}</style>
    </Layout>
  );
}

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  let data = await Axios.get(`https://cnodejs.org/api/v1/topic/${id}`).then(
    resp => resp.data.data
  );
  return { data: data };
};
