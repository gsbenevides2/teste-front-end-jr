import Image from "next/image";
import styles from "./page.module.scss";
import ButtonComponent from "@/components/Button";
import Categories from "./components/Categories";
import Title from "./components/Title";
import ProductCategories from "./components/ProductCategories";
import ProductItem from "@/components/ProductItem";

const categories = [
  {
    icon: "/smartphone.svg",
    name: "Tecnologia",
    selected: true,
  },
  {
    icon: "/supermercados.svg",
    name: "Supermercado",
  },
  {
    name: "Bebidas",
    icon: "/whiskey.svg",
  },
  {
    name: "Ferramentas",
    icon: "/ferramentas.svg",
  },
  {
    name: "Saúde",
    icon: "/saude.svg",
  },
  {
    name: "Esportes e Fitness",
    icon: "/corrida.svg",
  },
  {
    name: "Moda",
    icon: "/moda.svg",
  },
];

const productCategories = [
  {
    name: "Celular",
    selected: true,
  },
  {
    name: "Acessórios",
  },
  {
    name: "Tablets",
  },
  {
    name: "Notebooks",
  },
  {
    name: "TVs",
  },
  {
    name: "Ver todos",
  },
];

export default function Home() {
  return (
    <main>
      <div className={styles.banner}>
        <h1>Venha conhecer nossas promoções</h1>
        <h2>50% Off nos produtos</h2>
        <ButtonComponent className={styles.button}>Ver Produto</ButtonComponent>
      </div>
      <Categories className={styles.categories} items={categories} />
      <Title className={styles.title} text="Produtos relacionados" />
      <ProductCategories
        className={styles.productCategories}
        items={productCategories}
      />
      <ProductItem />
    </main>
  );
}
