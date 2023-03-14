export function prevNextPost(allSlugs, currentSlug) {
  const numberOfPosts = allSlugs.length;

  const index = allSlugs.findIndex(({ slug }) => {
    return slug === currentSlug; //slugとcurrentSlugが同じならtrue,それ以外はfalse
  });

  const prevPost =
    index + 1 === numberOfPosts ? { title: "", slug: "" } : allSlugs[index + 1];

  const nextPost = index === 0 ? { title: "", slug: "" } : allSlugs[index - 1];

  return [prevPost,nextPost]
}
