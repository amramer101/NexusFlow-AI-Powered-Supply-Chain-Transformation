import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/">
      <img src="./NexusFlow.png" className="w-32" />
    </Link>
  );
}

export default Logo;
