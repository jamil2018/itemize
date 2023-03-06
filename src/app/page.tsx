import Logo from "./components/branding/Logo";
import FormGroup from "./components/form/FormGroup";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-800 text-white">
      <Logo size={5} />
      <div className="bg-gray-400 bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg w-1/5 p-4">
        <form action="">
          <FormGroup>
            <label htmlFor="name" className="text-sm">
              Email
            </label>
            <input
              className="bg-transparent outline outline-1 outline-gray-500 rounded-sm mt-2 p-2 text-gray-300"
              id="name"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="password" className="text-sm">
              Password
            </label>
            <input
              className="bg-transparent outline outline-1 outline-gray-500 rounded-sm mt-2 p-2 text-gray-300"
              id="password"
              type="password"
            />
          </FormGroup>
        </form>
      </div>
    </div>
  );
}
