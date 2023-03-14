import { getAllPosts } from "@/lib/api";
// import Layout from "@/components/layout";
import Hero from "@/components/hero";
// import Link from "next/link";
import Container from "@/components/container";
import Meta from "@/components/meta";
import Posts from "@/components/posts";
import Pagination from "@/components/pagination";
import { getPlaiceholder } from "plaiceholder";
import { eyecatchLocal } from "@/lib/constants";

export default function Home({ posts }) {
  return (
    <Container>
      <Meta />
      <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />
      <Posts posts={posts} />
      <Pagination nextUrl="/blog" nextText="More Posts" />
    </Container>
  );
}

export async function getStaticProps() {
  // const url =
  //   "https://images.microcms-assets.io/assets/b2ef308fda26420a98be2bf0a0fbc7f1/46f17c1e8ab84bb9baf1bef0edb8ac1d/about.jpg";
  // console.log(await getPlaiceholder(url));
  const posts = await getAllPosts(4);

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url);
    post.eyecatch.blurDataURL = base64;
  }
  return {
    props: {
      posts: posts,
    },
  };
}
