import { ArticleCard } from "../../../components";

export const Articles = () => {
  return (
    <section className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-5">
      <ArticleCard />
      <ArticleCard />
    </section>
  );
};
