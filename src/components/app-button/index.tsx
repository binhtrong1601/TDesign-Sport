import { Button, ButtonProps } from 'antd';

const AppButton = ({ ...props }: ButtonProps) => {
  return (
    <div>
      <Button {...props}>Click</Button>
    </div>
  );
};

export default AppButton;
