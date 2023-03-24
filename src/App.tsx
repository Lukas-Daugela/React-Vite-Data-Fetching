import PageHeader from "./components/PageHeader/PageHeader";
import SectionMain from "./components/SectionMain/SectionMain";
import PageLayout from "./layouts/PageLayout";

function App() {
  return (
    <PageLayout>
      <PageHeader title="Country data" />
      <SectionMain />
    </PageLayout>
  );
}

export default App;
