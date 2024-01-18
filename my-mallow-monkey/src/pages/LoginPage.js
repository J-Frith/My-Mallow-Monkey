import Button from "../components/Button";

// Page for the user to authenticate themself
function LoginPage() {
  return (
    <div className="m-5 flex items-center justify-center h-full">
      <Button primary className="px-20">
        Login
      </Button>
    </div>
  );
}

export default LoginPage;
