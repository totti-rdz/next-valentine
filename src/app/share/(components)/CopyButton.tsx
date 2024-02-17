import Button from "@/components/Button";
import { copyToClipboard } from "@/helper/copyToClipboard";

type Props = {
  link: string;
};

const CopyButton = ({ link }: Props) => {
  const label = "Copy";

  const handleClick = () => copyToClipboard(link);

  return <Button onClick={handleClick}>{label}</Button>;
};

export default CopyButton;
