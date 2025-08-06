import { GlobalStyle } from "./globalstyles";

interface baseWrapperprops {
  children: React.ReactNode;
}
export const BaseWrapper = ({ children }: baseWrapperprops) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};
