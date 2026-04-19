import Header from "./Header";
import Footer from "./Footer";
import Counter from "../pages/Counter";

export default function Layout() {
    return (
        <div className="layout">
            <Header />
              <Counter />
            <Footer/>
        </div>
    )
}