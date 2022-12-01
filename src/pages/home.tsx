import { AppButton, AppSelect, AppCategory, AppPreviewColor } from '../components';

const HomePage = () => {
  return (
    <div className="App">
      <p>Home page</p>
      <AppButton />
      <AppSelect />
      <AppCategory value={2} />
      <AppCategory value={3} />
      <AppPreviewColor />
    </div>
  );
};

export default HomePage;
