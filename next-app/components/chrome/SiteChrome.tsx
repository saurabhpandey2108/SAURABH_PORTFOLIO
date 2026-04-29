import BackgroundCanvas from "./BackgroundCanvas";
import CustomCursor from "./CustomCursor";
import Loader from "./Loader";

type Props = {
  railLeft: string;
  railRight: string;
};

export default function SiteChrome({ railLeft, railRight }: Props) {
  return (
    <>
      <Loader />
      <CustomCursor />
      <BackgroundCanvas />
      <div className="vignette" />
      <div className="grain" />
      <div className="rail rail--left">{railLeft}</div>
      <div className="rail rail--right">{railRight}</div>
    </>
  );
}
