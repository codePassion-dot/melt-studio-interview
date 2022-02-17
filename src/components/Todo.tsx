import CheckCircle from "@heroicons/react/solid/CheckCircleIcon";
interface Props {
  text: string;
  isDone: boolean;
}
const Todo: React.FC<Props> = ({ text, isDone }: Props) => {
  return (
    <div className="relative flex w-full flex-row space-x-4">
      <h2 className="mr-10 w-fit">{text}</h2>
      {isDone ? (
        <CheckCircle className="text-green absolute right-0 h-6 w-6" />
      ) : (
        <CheckCircle className="absolute right-0 h-6 w-6" />
      )}
    </div>
  );
};

export default Todo;
