import ProductList from "@/src/components/blocks/productList/productList";
import Promo from "@/src/components/blocks/promo/promo";
import Button from "@/src/components/ui/button/button";


export default function Home() {
  return (
    <><Promo />
      <ProductList />
      <Button isTransparant style={{ margin: '50px auto 90px', maxWidth: '150px' }} type="link" href="/catalog">Смотреть все</Button>
    </>
  );
}
