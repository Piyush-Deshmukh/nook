import SITE from "@/config/site";

const Signature = () => {
  return (
    <div className="my-2">
      <span className="font-signature italic text-xl text-foreground/80">
        {SITE.name.toLowerCase()}
      </span>
    </div>
  );
};

export default Signature;
