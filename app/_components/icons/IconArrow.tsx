type iconArrowProps = {
  expanded: boolean;
  className?: string;
  pathClassName?: string;
};

export default function IconArrow({
  expanded,
  className,
  pathClassName,
}: iconArrowProps) {
  const path_d = expanded ? "m1 5 4-4 4 4" : "m1 1 4 4 4-4";

  return (
    <svg
      className={className}
      width="10"
      height="6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={pathClassName}
        strokeWidth="1.5"
        fill="none"
        d={path_d}
      />
    </svg>
  );
}
