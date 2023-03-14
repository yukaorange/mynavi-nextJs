import styles from "@/scss/posts.module.scss";
import Link from "next/link";
import Image from 'next/legacy/image';

export default function Posts({ posts }) {
  return (
    <div className={styles.gridContainer}>
      {posts.map(({ title, slug, eyecatch }) => {
        return (
          <article className={styles.post} key={slug}>
            <Link href={`/blog/${slug}`}>
              <figure>
                <Image
                  src={eyecatch.url}
                  alt=""
                  layout="fill"
                  // layout="responsive"
                  objectFit='cover'
                  width={eyecatch.width}
                  height={eyecatch.height}
                  sizes="(min-width:1152px) 576px,50vw"
                  placeholder="blur"
                  blurDataURL={eyecatch.blurDataURL}
                />
              </figure>
              <h2>{title}</h2>
            </Link>
          </article>
        );
      })}
    </div>
  );
}
