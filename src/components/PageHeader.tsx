import Link from "next/link";

type PageHeaderProps = {
  title: string;
  subTitle?: string;
  isHero?: boolean;
  isHome?: boolean;
};

const PageHeader = ({
  title,
  subTitle,
  isHero,
  isHome,
}: PageHeaderProps): JSX.Element => {
  return (
    <div className={`${isHero ? "mb-20" : "mb-8"}`}>
      {isHero ? (
        <h1 className="text-[67px] font-black">{title}</h1>
      ) : isHome ? (
        <h2 className="text-[51px] font-bold">{title}</h2>
      ) : (
        <h1 className="text-[51px] font-bold">{title}</h1>
      )}
      {subTitle && <p className="text-[38px]">{subTitle}</p>}
      {isHero && (
        <div className="mt-8">
          <Link href="/about" className="underline">
            More about Silverdust -&gt;
          </Link>
        </div>
      )}
    </div>
  );
};

export default PageHeader;
