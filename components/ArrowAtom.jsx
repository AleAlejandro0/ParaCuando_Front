const ArrowAtom = () => {
  let ArrowImage = [
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAABg0lEQVRoQ+3ZwU3DMBQG4Jd2AY6IHOgq3IkEG3QERugGzMAEUXvgygh0Ce4sYIJTtVUERYrz8P/b8cvZTv29/6Wy5UoKe6rCvGLguSduCVvCM6uAtfTMAv3FsYQt4ZlVwFoaGWjdtGtxsv94fdyjfpeWsMc+iSyePfRT3NcdCk0BD7CnYGFoOPgCFoqGg68f2tXSLd698urCdxs9aTi4RzLRFDATTQOz0FQwA00Ho9FJgJHoZMAodFJgBDo5cGy0Cnxz325inXKqankr0q3/eP/kHZkKXDfbLhZ4xHsnoXMG9zUJRht4RCudhxTX0sX9aYV0Q8jY4/Hxzc9Z/feZWfUNhyDGjo2J7deQFDg2NikwApsMGIVNAozE0sFoLBXMwNLALCwFzMRSwMVdtfRVrpudvzXs/O3h+Qk+5o3duf0cR9tpDdAwLKWlhxU/oJ17Qd0N08FT21Izj9bSmkVr5hpYU70c5lrCOaSkWaMlrKleDnMt4RxS0qzREtZUL4e5xSX8DWdeJUxGsEfQAAAAAElFTkSuQmCC',
  ];

  return (
    <div className="ArrowAtom">
      <div className="ArrowAtom_cirle">
        <img src={ArrowImage} alt="Arrow image" />
      </div>
    </div>
  );
};

export default ArrowAtom;
