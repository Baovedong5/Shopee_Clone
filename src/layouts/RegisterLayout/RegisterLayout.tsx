interface IProps {
  children?: React.ReactNode;
}

const RegisterLayout = ({ children }: IProps) => {
  return (
    <div>
      Register Layout
      {children}
    </div>
  );
};

export default RegisterLayout;
