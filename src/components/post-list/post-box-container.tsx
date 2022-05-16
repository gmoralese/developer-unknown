import { useRouter } from "next/router";

type PostBoxContainerProps = {
  url: string;
  children: React.ReactNode;
};

export default function PostBoxContainer({
  children,
  url,
}: PostBoxContainerProps) {
  const router = useRouter();
  return (
    <div
      className="flex flex-col h-max p-2.5 mb-8"
      onClick={() => router.push(url)}
    >
      {children}
    </div>
  );
}
