import { IProduct } from "@/src/interfaces/product.interface"

export async function generateStaticParams() {
    const products = await fetch('https://kmll64isusjhkp56.public.blob.vercel-storage.com/db-3qNUIysDnh0yEQ7WlPPzPMaOwHAShK.json').then<IProduct[]>((response) =>
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