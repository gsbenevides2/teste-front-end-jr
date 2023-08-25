interface InputProps {
  placeholder?: string;
}
export default function Input(props: InputProps) {
  return (
    <input
      className="border border-gray-300 w-full p-3 rounded-lg focus:outline-none focus:border-blue-500"
      placeholder={props.placeholder}
    />
  );
}
