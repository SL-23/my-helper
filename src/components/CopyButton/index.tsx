import { CopyAll } from "@suid/icons-material";

interface CopyButtonProps {
  elementId: string;
}

const CopyButton = ({ elementId }: CopyButtonProps) => {
  const handleCopy = () => {
    // Get the input field
    const textInput = document.getElementById(elementId);
    if (!textInput) return;

    navigator.clipboard
      .writeText(textInput.innerText)
      .then(() => {
        alert("Text copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };
  return (
    <CopyAll
      onClick={() => {
        handleCopy();
      }}
    />
  );
};

export default CopyButton;
