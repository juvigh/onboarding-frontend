import './button.css';

interface ButtonProps {
  title: string;
}

export const Button = ({ title }: ButtonProps) => {
  return (
    <div className="button-container">
      <button>{title}</button>
    </div>
  );
};
