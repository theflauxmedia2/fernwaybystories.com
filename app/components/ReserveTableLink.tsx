import type { CSSProperties } from "react";
import { BUSINESS } from "@/lib/site";

type ReserveTableLinkProps = {
  className?: string;
  style?: CSSProperties;
  children: React.ReactNode;
  onClick?: () => void;
};

export default function ReserveTableLink({
  className,
  style,
  children,
  onClick,
}: ReserveTableLinkProps) {
  return (
    <a
      href={BUSINESS.reserveTableUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
