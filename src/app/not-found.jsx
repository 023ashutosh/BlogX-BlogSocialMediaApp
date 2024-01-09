const { default: Link } = require("next/link");

const NotFound = () => {
  return (
    <div>
      <div>Try again later.</div>
      <Link href="/">
        Return to : <b>Homepage</b>
      </Link>
    </div>
  );
};

export default NotFound;
