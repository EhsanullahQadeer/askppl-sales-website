interface Option {
  value: string;
  label: string;
}
interface Props {
  blogTypesArr: Option[];
  blogTypeSelected: string;
  setBlogTypeSelected: (value: string) => void;
}

const BlogTypes = (props: Props) => {
  const { blogTypesArr, blogTypeSelected, setBlogTypeSelected } = props;

  const handleBlogTypeChange = (value: string) => {
    setBlogTypeSelected(value);
  };

  return (
    <div className="flex items-center justify-start gap-3.5">
      {blogTypesArr.map((blogType, idx) => {
        const { label, value } = blogType;
        return (
          <div
            key={value + idx}
            onClick={() => handleBlogTypeChange(value)}
            className={`rounded-xl py-3.5 px-4 cursor-pointer text-base text-white border ${
              blogTypeSelected === value
                ? "border-mistWhite bg-ethereal-glow-gradient"
                : "border-froastedWhite bg-transparent"
            }`}
          >
            {label}
          </div>
        );
      })}
    </div>
  );
};

export default BlogTypes;
