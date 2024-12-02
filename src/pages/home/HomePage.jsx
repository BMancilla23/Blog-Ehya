import { MainLayout } from "../../components";
import { Articles, Hero } from "./container";

export const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Articles />
    </MainLayout>
  );
};
