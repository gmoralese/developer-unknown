import Head from "next/head";
import Container from "../src/components/container";
import PostList from "../src/components/post-list/post-list";
import { getAllFilesMetadata } from "../src/services/mdx";

export default function Home({ posts }: any): JSX.Element {
  return (
    <>
      <div>
        <Head>
          <title>Gustavo Morales | Fullstack Developer | Chile</title>
          <meta
            name="description"
            content="Gustavo Morales | Fullstack Developer | Chile"
          />
          <link rel="icon" href="/du-icons/favicon.png" />
        </Head>
        <main className="flex justify-center px-30 w-full h-screen">
          <Container>
            <PostList posts={posts} />
          </Container>
        </main>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();

  return {
    props: { posts },
  };
}
