const Loading = (): JSX.Element => {
  return (
    <div className="w-full h-screen absolute">
      <div className="lds-roller relative top-1/2 left-1/2">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
