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
    <section>
      <h1>Articles</h1>
      <ul>
        {articles.map((article: Article) => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ArticlesPage;
