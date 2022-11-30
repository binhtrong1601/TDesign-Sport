import { Select, SelectProps } from 'antd';

const { Option } = Select;

interface AppSelectProps extends SelectProps {
  listOptions?: (string | number)[];
}

const AppSelect = ({ listOptions, ...props }: AppSelectProps) => {
  return (
    <Select {...props}>
      {listOptions?.map((option) => (
        <Option key={option}>{option}</Option>
      ))}
    </Select>
  );
};

export default AppSelect;
