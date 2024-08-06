import Link from "next/link";

type Article = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const ArticlesPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const articles: Article[] = await response.json();
  return (
    <section className="container mx-auto px-5 pt-5">
      <h3 className="text-2xl">Articles</h3>
      <ul>
        {articles.map((article: Article) => (
          <li className="pb-8" key={article.id}>
            <h2 className="font-bold">{article.title}</h2>
            <p>{article.body}</p>
            <Link
              className="underline float-end"
              href={`/articles/${article.id}`}
            >
              Read more
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ArticlesPage;
