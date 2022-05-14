type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <>
      <div className="flex md:w-10/12 lg:w-9/12">{children}</div>
    </>
  );
}
