import Link from "next/link";

interface Option {
  value: string;
  label: string;
}
interface Props {
  blogTypesArr: Option[];
  type?: string;
}

const BlogTypes = (props: Props) => {
  const { blogTypesArr, type = "all" } = props;

  return (
    <div className="flex items-center justify-start gap-3.5">
      {blogTypesArr.map((blogType, idx) => {
        const { label, value } = blogType;
        const href =
          value === "all"
            ? "/blogs"
            : { pathname: "/blogs", query: { type: value } };

        return (
          <Link key={value + idx} href={href} scroll={false}>
            <div
              className={`rounded-xl py-3.5 px-4 cursor-pointer text-base text-white border   ${
                type === value
                  ? "border-mistWhite bg-ethereal-glow-gradient"
                  : "border-froastedWhite bg-transparent"
              }`}
            >
              {label}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default BlogTypes;
