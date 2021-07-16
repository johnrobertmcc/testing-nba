import GlobalHeader from "../components/ParentHeader/GlobalHeader";
import Footer from "../components/ParentFooter/Footer";

export default function ParentLayout({ children }) {
  return (
    <>
      <GlobalHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
}
