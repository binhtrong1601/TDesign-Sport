import { Button, ButtonProps } from 'antd';

import { ArrowRightIcon } from '../icons';

const AppButton = ({ ...props }: ButtonProps) => {
  return (
    <div>
      <Button
        type="dashed"
        value="large"
        {...props}
        icon={<ArrowRightIcon width={10} height={10} />}
      >
        Click
      </Button>
    </div>
  );
};

export default AppButton;
