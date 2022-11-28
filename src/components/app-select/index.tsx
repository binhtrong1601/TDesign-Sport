import { Select, SelectProps } from 'antd';

const { Option } = Select;

const AppSelect = ({ ...props }: SelectProps) => {
  return (
    <Select {...props}>
      <Option>1</Option>
      <Option>2</Option>
      <Option>3</Option>
    </Select>
  );
};

export default AppSelect;
