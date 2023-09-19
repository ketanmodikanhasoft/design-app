import Sidebar from "./components/sidebar";
import PageTitle from "./components/pageTitle";

export default function App() {
  return (
    <>
      <div className="md:ml-20 ml-0">
        <Sidebar />
        <PageTitle />
      </div>
    </>
  );
}
