import { MDXProvider } from "@mdx-js/react";
import { MDXRemote } from "next-mdx-remote";
import { components } from "src/components/post-components";
import Container from "../../src/components/container";
import { getFileBySlug, getFiles } from "../../src/services/mdx";

export default function Post({ source, frontMatter }: any): JSX.Element {
  return (
    <div className="h-screen">
      <Container>
        <div className="h-full w-full justify-center">
          <MDXProvider components={components}>
            <MDXRemote {...source} />
          </MDXProvider>
        </div>
      </Container>
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
