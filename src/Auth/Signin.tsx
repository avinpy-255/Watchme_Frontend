import "../assets/fonts/NatureBeauty.ttf"
import  Cd from '/cd.svg'



function Signin() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-#0A0908">
    <div className="w-full max-w-md bg-#0A0908 p-8 shadow-md rounded-lg">
    <div className="flex justify-center mb-4">
      <img src={Cd} alt="cd" className="h-20 w-20" />
    </div>
      <h1 className="text-3xl font-semibold text-center mb-2 text-slate-100" style={{fontFamily: "NatureBeauty"}}>
        Signin
      </h1>
      <p className="text-sm text-slate-500 text-center mb-6">Using</p>
  
      {/* Sign In Form */}
      <form className="space-y-4">
        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Google
        </button>
        <button
          type="submit"
          className="w-full p-3 bg-black  text-white rounded-md hover:bg-slate-600"
        >
          Github
        </button>
      </form>
  
      {/* Additional Links */}
      <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
        <a href="#" className="hover:underline">This project is made by </a>
        <a href="https://github.com/avinpy-255" className="text-blue-600 hover:underline ml-1">Avinash</a>
    </div>
  </div>
  </div>
  );
}
export default Signin;
