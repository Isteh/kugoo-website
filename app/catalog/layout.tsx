import Breadcrumbs from "@/src/components/blocks/breadcrumbs/breadcrumbs";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <>
            <Breadcrumbs style={{ margin: '20px 165px 40px' }} />
            {children}
        </>
    );
}