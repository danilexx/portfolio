import React from "react";
import { useWindowSize } from "react-use";
import { Link } from "react-scroll";

const OffsetedLink = ({
  ...props
}: {
  to: string;
  children: React.ReactNode;
  spy?: boolean;
}) => {
  const { height } = useWindowSize();
  const offset = React.useMemo(() => (height / 100) * -10, [height]);
  return <Link hashSpy offset={offset} duration={500} smooth {...props} />;
};

export default OffsetedLink;
