import MainHeader from "./mainHeader";

export default function Layout(props) {
  const { children } = props;

  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
}
