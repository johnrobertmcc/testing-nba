import "tailwindcss/tailwind.css";
import ParentLayout from "../layouts/ParentLayout";
export default function App({ Component, pageProps }) {
  return (
    <ParentLayout>
      <Component {...pageProps} />
    </ParentLayout>
  );
}
