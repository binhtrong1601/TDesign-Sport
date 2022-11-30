import { AppButton, AppSelect } from '../components';

const HomePage = () => {
  return (
    <div className="App">
      <p>Home page</p>
      <AppButton />
      <AppSelect listOptions={[1, 2, 3, 4]} />
    </div>
  );
};

export default HomePage;
