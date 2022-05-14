import Head from "next/head";
import Link from "next/link";
import Container from "../src/components/container";
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
            {posts.map((post: any, index: number) => {
              return (
                <Link key={index} href={`/post/${post.slug}`} passHref>
                  <div className="cursor-pointer">
                    <h2>{post.title}</h2>
                    <p>{post.date}</p>
                  </div>
                </Link>
              );
            })}
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
