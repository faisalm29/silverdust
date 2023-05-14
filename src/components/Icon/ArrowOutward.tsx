type ArrowOutwardProps = {
  width: number;
  height: number;
};

const ArrowOutward = ({ width, height }: ArrowOutwardProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={width}
      viewBox="0 96 960 960"
      width={height}
    >
      <path d="m248 810-42-42 412-412H240v-60h480v480h-60V398L248 810Z" />
    </svg>
  );
};

export default ArrowOutward;
