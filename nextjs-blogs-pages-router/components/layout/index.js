import MainNavigation from "./mainNavigation";

export default function Layout(props) {
  const { children } = props;
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
}
