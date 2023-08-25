import styles from "./page.module.scss";
import ButtonComponent from "@/components/Button";
import Categories from "./components/Categories";
import Title from "./components/Title";
import ProductCategories from "./components/ProductCategories";
import CardComponent from "./components/Card";
import BrandItem from "./components/BrandItem";
import ProductCarrousel from "./components/ProductCarrousel";
import { PiCaretRightBold } from "react-icons/pi";
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

async function getData() {
  try {
    const response = await fetch(
      "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
    );
    const data = await response.json();
    return {
      carrouselProducts: data.products,
    };
  } catch (error) {
    console.log(error);
    return {
      carrouselProducts: [],
    };
  }
}

export default async function Home() {
  const { carrouselProducts } = await getData();

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
      <ProductCarrousel products={carrouselProducts} />
      <div className={styles.partners}>
        <CardComponent type="partners" />
        <CardComponent type="partners" />
      </div>
      <Title
        className={styles.title}
        text="Produtos relacionados"
        subtitle="Ver mais"
      />
      <div className={styles.products}>
        <CardComponent type="products" />
        <CardComponent type="products" />
      </div>
      <Title className={styles.title} text="Navegue por marcas" hideHr />
      <div className={styles.brands}>
        {new Array(5).fill(0).map((_, index) => (
          <BrandItem key={index} />
        ))}
        <div className={styles.next}>
          <PiCaretRightBold />
        </div>
      </div>
    </main>
  );
}
