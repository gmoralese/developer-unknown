import { MDXRemote } from "next-mdx-remote";
import Navbar from "../../src/components/navbar/navbar";
import { getFileBySlug, getFiles } from "../../src/services/mdx";

export default function Post({ source, frontMatter }: any): JSX.Element {
  const components = { Navbar };
  return (
    <div>
      <MDXRemote {...source} components={components}>
        <div>asdads</div>
      </MDXRemote>
    </div>
  );
}

export async function getStaticProps({ params }: any) {
  const { source, frontMatter } = await getFileBySlug(params.slug);

  return {
    props: { source, frontMatter },
  };
}

export async function getStaticPaths() {
  const posts = await getFiles();
  const paths = posts.map((post) => {
    return {
      params: {
        slug: post.replace(".mdx", ""),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
