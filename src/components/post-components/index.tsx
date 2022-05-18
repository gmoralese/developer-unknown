/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
export const components = {
  h1: (props: any) => (
    <h1 className="text-4xl font-bold mb-8">{props.children}</h1>
  ),
  p: (props: any) => <p className="text-lg">{props.children}</p>,
  // eslint-disable-next-line @next/next/no-img-element
  image: (props: any) => <img src={props.src}></img>,
  codeContainer: (props: any) => (
    <div className="flex justify-center mb-8" my-8>
      {props.children}
    </div>
  ),
  code: (props: any) => (
    <code className="language-javascript">{props.children}</code>
  ),
  br: () => <br />,
  a: (props: any) => <a>{props.children}</a>,
};
