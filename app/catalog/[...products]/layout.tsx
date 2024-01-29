import { IProduct } from "@/src/interfaces/product.interface"

export async function generateStaticParams() {
    const products = await fetch('http://localhost:3000/products').then<IProduct[]>((response) =>
        response.json())
    return products.map((product) => ({
        slug: `${product.type}/${product.id}`,
    }))
}

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <>
        { children }
        </>
    );
}