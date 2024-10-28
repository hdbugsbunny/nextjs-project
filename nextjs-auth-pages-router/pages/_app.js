import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import { Provider } from "next-auth/client";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <Provider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
