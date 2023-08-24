import {
  PiCreditCardBold,
  PiCrownSimpleBold,
  PiHeart,
  PiShieldCheckBold,
  PiShoppingCart,
  PiTruckBold,
  PiUserCircle,
} from "react-icons/pi";
import styles from "./styles.module.scss";
import Image from "next/image";
import SearchBar from "./components/SearchBar";
import Navigations from "./components/Navigations";

const navigationsItems = [
  {
    name: "Todas as Categorias",
  },
  {
    name: "Supermecado",
  },
  {
    name: "Livros",
  },
  {
    name: "Moda",
  },
  {
    name: "Lançamentos",
  },
  {
    name: "Ofertas do Dia",
    isPink: true,
  },
  {
    name: "Assinatura",
    icon: PiCrownSimpleBold,
  },
];

export default function HeaderComponent() {
  return (
    <header className={styles.header}>
      <div className={styles.rowOne}>
        <div className={styles.item}>
          <PiShieldCheckBold className={styles.icon} />
          <span className={styles.text}>
            Compra <span className={styles.bold}>100% segura</span>
          </span>
        </div>
        <div className={styles.item}>
          <PiTruckBold className={styles.icon} />
          <span className={styles.text}>
            <span className={styles.bold}>Frete grátis</span> acima de R$ 200
          </span>
        </div>
        <div className={styles.item}>
          <PiCreditCardBold className={styles.icon} />
          <span className={styles.text}>
            <span className={styles.bold}>Parcele</span> suas compras
          </span>
        </div>
      </div>
      <div className={styles.rowTwo}>
        <Image
          src="/vtex_logo.svg"
          width={139}
          height={50.64}
          className={styles.logo}
          alt="Dois quadrados rosas sobrepostos onde a sobreposição fora um quadrado branco com nome VTEX em maiusculo do lado da figura."
        />
        <SearchBar className={styles.searchBar} />
        <nav className={styles.navigation}>
          <ol>
            <li>
              <button type="button">
                <Image
                  src="/packaging.svg"
                  width={24}
                  height={24}
                  alt="Ícone de uma caixa de papelão"
                />
              </button>
            </li>
            <li>
              <button type="button">
                <PiHeart className={styles.icon} />
              </button>
            </li>
            <li>
              <button type="button">
                <PiUserCircle className={styles.icon} />
              </button>
            </li>
            <li>
              <button type="button">
                <PiShoppingCart className={styles.icon} />
              </button>
            </li>
          </ol>
        </nav>
      </div>
      <Navigations className={styles.rowThree} items={navigationsItems} />
    </header>
  );
}
