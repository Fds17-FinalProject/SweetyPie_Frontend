const svg = {
  heart:
    'm16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z',
  check: 'm4 16.5 8 8 16-16'
};

const Svg = props => {
  return (
    <svg
      viewBox={props.viewBox}
      role="img"
      fill={props.color}
      y="0px"
      x="0px"
      width={props.width}
      height={props.height}
      xmlns={props.xmlns}
      stroke={props.stroke}
    >
      <path d={svg[props.name]} />
    </svg>
  );
};
export default Svg;
