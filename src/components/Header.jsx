import { useContext } from 'react';
import { ImageStatusContext } from '../store/context';

export default function Header() {
  const { title, type } = useContext(ImageStatusContext);
  return (
    <div className="header">
      <span>
        <img src={type} alt="gif loves" />
      </span>
      <h1>{title}</h1>
    </div>
  );
}
