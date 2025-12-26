import { caveat } from "@/app/layout";
import SITE from "@/config/site";

const Signature = () => {
  return (
    <div className="my-2">
      <span
        className={`${caveat.className} text-2xl tracking-wide text-foreground/60 select-none -rotate-1`}
      >
        {SITE.name.toLowerCase()}
      </span>
    </div>
  );
};

export default Signature;
