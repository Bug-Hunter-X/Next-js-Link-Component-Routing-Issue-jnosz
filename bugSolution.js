```javascript
import Link from 'next/link';

function MyComponent() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about" passHref>
        <a>About</a>
      </Link>      
    </div>
  );
}

export default MyComponent;
```