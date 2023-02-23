import PageHeader from "./components/PageHeader/PageHeader";
import SectionMain from "./components/SectionMain/SectionMain";
import PageLayout from "./layouts/PageLayout";

function App() {
  return (
    <PageLayout>
      <PageHeader title="Reiz Tech Assignment" />
      <SectionMain />
    </PageLayout>
  );
}

export default App;
