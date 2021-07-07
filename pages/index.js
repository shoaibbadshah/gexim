import { getSession } from "next-auth/client";
import Head from "next/head";
import Feeds from "../components/Feeds";
import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import { db } from "../firebase";

export default function Home({ session, posts }) {
  if (!session) return <Login />;
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Gexim</title>
      </Head>

      {/* header */}
      <Header />
      <main className="flex">
        <Sidebar />
        <Feeds posts={posts} />
        <Widgets />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const post = await db.collection("posts").orderBy("timestamp", "desc").get();
  const docs = post.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));
  return {
    props: {
      session,
      posts: docs,
    },
  };
}
