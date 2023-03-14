import { getAllCategories, getAllPostsByCategory } from "@/lib/api";
import Container from "@/components/container";
import PostHeader from "@/components/post-header";
import Posts from "@/components/posts";
import { getPlaiceholder } from "plaiceholder";
import { eyecatchLocal } from "@/lib/constants";
import Meta from '@/components/meta';

export default function Category({ name, posts }) {
  return (
    <Container>
      <Meta pageTitle={name} pageDesc={`${name}に関する記事`}/>
      <PostHeader title={name} subtitle="Blog Category" />
      <Posts posts={posts} />
    </Container>
  );
}

export async function getStaticPaths() {
  const allCats = await getAllCategories();
  return {
    paths: allCats.map(({ slug }) => {
      return `/blog/category/${slug}`;
    }),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const catSlug = context.params.slug;
  const allCats = await getAllCategories();
  const cat = allCats.find(({ slug }) => {
    return slug === catSlug;
  });
  const posts = await getAllPostsByCategory(cat.id);
  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url);
    post.eyecatch.blurDataURL = base64;
  }
  return {
    props: {
      name: cat.name,
      posts: posts,
    },
  };
}
